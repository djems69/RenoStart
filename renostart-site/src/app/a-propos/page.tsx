import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos - RenoStart Conseil | Spécialiste BTP',
  description: 'RenoStart Conseil est une société de conseil spécialisée dans l\'accompagnement des entreprises du BTP. Découvrez notre mission et nos valeurs.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              À propos de RenoStart Conseil
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
              Votre partenaire de confiance pour le développement des entreprises du BTP
            </p>
          </div>
        </div>
      </section>

      {/* Présentation de l'entreprise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Notre entreprise
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                RenoStart Conseil est une société de conseil spécialisée dans l'accompagnement 
                des entreprises du BTP. Notre mission est de soutenir les professionnels dans 
                leur développement en leur apportant des solutions concrètes pour optimiser 
                leur organisation, valoriser leurs compétences et répondre aux exigences réglementaires.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Nous préparons également l'obtention de la certification Qualiopi, gage de qualité 
                et de fiabilité une fois acquise.
              </p>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900">Expertise BTP</h3>
                  <p className="text-sm text-neutral-600 mt-2">Spécialisation sectorielle</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900">Certification Qualiopi</h3>
                  <p className="text-sm text-neutral-600 mt-2">En cours de préparation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission et valeurs */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Notre mission et nos valeurs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Nous nous engageons à accompagner les entreprises du BTP vers l'excellence 
              opérationnelle et la conformité réglementaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Notre Mission</h3>
              <p className="text-neutral-600 leading-relaxed">
                Soutenir les professionnels du BTP dans leur développement en apportant 
                des solutions concrètes pour optimiser leur organisation, valoriser 
                leurs compétences et répondre aux exigences réglementaires.
              </p>
            </div>

            {/* Valeurs */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Nos Valeurs</h3>
              <ul className="text-neutral-600 leading-relaxed text-left space-y-2">
                <li>• Excellence et professionnalisme</li>
                <li>• Adaptation aux réalités du terrain</li>
                <li>• Accompagnement personnalisé</li>
                <li>• Conformité et sécurité</li>
                <li>• Innovation et performance</li>
              </ul>
            </div>

            {/* Engagement */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Engagement</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous nous engageons à fournir des formations de qualité, adaptées aux 
                spécificités du secteur BTP, et à accompagner nos clients vers 
                l'obtention de certifications reconnues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Qualiopi */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Certification Qualiopi en cours
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Nous préparons actuellement l'obtention de la certification Qualiopi, 
              un gage de qualité et de fiabilité qui témoignera de notre engagement 
              à fournir des formations de haut niveau. Cette certification sera un 
              atout supplémentaire pour nos clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

