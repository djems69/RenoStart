import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RS</span>
              </div>
              <span className="ml-3 text-xl font-bold">
                RenoStart Conseil
              </span>
            </div>
            <p className="text-neutral-300 mb-4 max-w-md">
              Accompagnement des entreprises du BTP dans leur développement, 
              leur organisation et la montée en compétences de leurs équipes.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/renostartconseil?utm_source=qr&igsh=bm50ZW10cHNlNHU3" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM17.5 6a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/share/15sbv5xczw/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.41V9.41c0-2.38 1.42-3.69 3.6-3.69 1.04 0 2.12.18 2.12.18v2.33h-1.19c-1.17 0-1.53.73-1.53 1.48v1.78h2.61l-.42 2.91h-2.19V22c4.78-.8 8.44-4.94 8.44-9.93z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-neutral-300">
              <p>RenoStart Conseil</p>
              <p>Spécialiste BTP</p>
              <p className="mt-4">
                <a href="mailto:gestion@renostart-conseil.fr" className="hover:text-white transition-colors duration-200">
                  gestion@renostart-conseil.fr
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mentions légales */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} RenoStart Conseil. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                Mentions légales
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
