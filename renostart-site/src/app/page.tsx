import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RenoStart Conseil - Accompagnement BTP | Accueil',
  description: 'RenoStart Conseil accompagne les entreprises du BTP dans leur développement, leur organisation et la montée en compétences de leurs équipes.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              RenoStart Conseil accompagne les entreprises du BTP
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-4xl mx-auto">
              Solutions concrètes pour optimiser, valoriser et développer votre entreprise
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-100 transition-colors duration-200 shadow-lg"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>

      {/* Description principale */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6">
              RenoStart Conseil est une société de conseil spécialisée dans l'accompagnement des 
              entreprises du bâtiment et des travaux publics (BTP).
            </p>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
              Notre mission : aider les professionnels du secteur à se développer grâce à des solutions 
              concrètes pour :
            </p>
            <div className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
              <ul className="list-none space-y-2 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Optimiser leur organisation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Valoriser leurs compétences</span>
          </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Répondre aux exigences réglementaires</span>
          </li>
              </ul>
            </div>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              Avec une approche à la fois stratégique et opérationnelle, nous vous accompagnons pour 
              bâtir un avenir plus solide et durable pour votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Section Mission - Mise en valeur */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Notre mission
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Aider les professionnels du secteur à se développer grâce à des solutions concrètes pour :
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Optimiser leur organisation */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Optimiser leur organisation
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Structurer et améliorer l'efficacité opérationnelle de votre entreprise BTP
              </p>
            </div>

            {/* Valoriser leurs compétences */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-200 transition-colors duration-300">
                <svg className="w-10 h-10 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Valoriser leurs compétences
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Identifier, développer et valoriser les compétences de vos équipes
              </p>
            </div>

            {/* Répondre aux exigences réglementaires */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-300 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Répondre aux exigences réglementaires
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Respecter et anticiper les exigences réglementaires du secteur BTP
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Blocs de mise en avant */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise BTP */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Optimiser l'organisation</h3>
              <p className="text-neutral-600 leading-relaxed">
                Nous vous aidons à structurer et optimiser votre organisation 
                pour améliorer l'efficacité opérationnelle et la performance 
                de votre entreprise BTP.
              </p>
            </div>

            {/* Formations certifiantes */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Valoriser les compétences</h3>
              <p className="text-neutral-600 leading-relaxed">
                Nous vous accompagnons pour identifier, développer et valoriser 
                les compétences de vos équipes, renforçant ainsi la position 
                concurrentielle de votre entreprise.
              </p>
            </div>

            {/* Accompagnement personnalisé */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Répondre aux exigences réglementaires</h3>
              <p className="text-neutral-600 leading-relaxed">
                Nous vous guidons pour respecter et anticiper les exigences réglementaires 
                du secteur BTP, garantissant la conformité et la pérennité 
                de votre activité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à développer votre entreprise ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Découvrez comment nos formations et notre accompagnement peuvent 
            transformer votre organisation et booster vos performances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/formations"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Découvrir nos formations
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
