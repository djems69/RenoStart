<?php
// Configuration
$to_email = "gestion@renostart-conseil.fr"; // Email de destination
$subject_prefix = "Nouveau message de contact - RenoStart";

// Fonction pour nettoyer les données
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Fonction pour valider l'email
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Fonction pour envoyer l'email
function send_email($to, $subject, $message, $headers) {
    return mail($to, $subject, $message, $headers);
}

// Initialisation des variables
$errors = array();
$success = false;

// Traitement du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupération et nettoyage des données
    $nom = isset($_POST['nom']) ? clean_input($_POST['nom']) : '';
    $email = isset($_POST['email']) ? clean_input($_POST['email']) : '';
    $telephone = isset($_POST['telephone']) ? clean_input($_POST['telephone']) : '';
    $message = isset($_POST['message']) ? clean_input($_POST['message']) : '';
    
    // Validation des champs obligatoires
    if (empty($nom)) {
        $errors[] = "Le nom est obligatoire";
    }
    
    if (empty($email)) {
        $errors[] = "L'email est obligatoire";
    } elseif (!is_valid_email($email)) {
        $errors[] = "Format d'email invalide";
    }
    
    if (empty($message)) {
        $errors[] = "Le message est obligatoire";
    }
    
    // Protection anti-spam (vérification de la longueur du message)
    if (strlen($message) < 10) {
        $errors[] = "Le message doit contenir au moins 10 caractères";
    }
    
    if (strlen($message) > 2000) {
        $errors[] = "Le message ne peut pas dépasser 2000 caractères";
    }
    
    // Si aucune erreur, envoi de l'email
    if (empty($errors)) {
        
        // Préparation de l'email
        $subject = $subject_prefix;
        
        $email_content = "Nouveau message de contact reçu via le site RenoStart\n\n";
        $email_content .= "Nom: " . $nom . "\n";
        $email_content .= "Email: " . $email . "\n";
        $email_content .= "Téléphone: " . ($telephone ? $telephone : "Non renseigné") . "\n";
        $email_content .= "Date: " . date('d/m/Y H:i:s') . "\n\n";
        $email_content .= "Message:\n" . $message . "\n\n";
        $email_content .= "---\nCe message a été envoyé depuis le formulaire de contact du site RenoStart.";
        
        // Headers de l'email
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        // Envoi de l'email
        if (send_email($to_email, $subject, $email_content, $headers)) {
            $success = true;
        } else {
            $errors[] = "Erreur lors de l'envoi de l'email";
        }
    }
}

// Redirection avec les paramètres
$redirect_url = "/contact?";
if ($success) {
    $redirect_url .= "status=success&message=" . urlencode("Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.");
} else {
    $redirect_url .= "status=error&message=" . urlencode(implode(", ", $errors));
    // Préserver les données du formulaire
    $redirect_url .= "&nom=" . urlencode($nom ?? '');
    $redirect_url .= "&email=" . urlencode($email ?? '');
    $redirect_url .= "&telephone=" . urlencode($telephone ?? '');
    $redirect_url .= "&message=" . urlencode($message ?? '');
}

// Redirection
header("Location: " . $redirect_url);
exit();
?>

