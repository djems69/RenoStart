import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, email, telephone, message } = body

    // Validation des champs
    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont requis' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }

    // Simulation de l'envoi du message
    console.log('Nouveau message de contact reçu:')
    console.log('Nom:', nom)
    console.log('Email:', email)
    console.log('Téléphone:', telephone || 'Non renseigné')
    console.log('Message:', message)
    console.log('Date:', new Date().toISOString())

    // Ici, vous pourriez intégrer un service d'envoi d'email réel
    // comme SendGrid, Mailgun, ou un service SMTP

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors du traitement du formulaire:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}



