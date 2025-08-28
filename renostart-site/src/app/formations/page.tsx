import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Formations - RenoStart Conseil | Domaines de formation BTP',
  description: 'Découvrez nos domaines de formation : Vente & relation client, Éco-gestes & développement durable, QSE, Management, et bien plus encore.',
}

const formations = [
  {
    id: 1,
    title: 'Vente & relation client',
    description: 'Techniques de vente, communication et relation commerciale',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'blue'
  },
  {
    id: 2,
    title: 'Éco-gestes & développement durable',
    description: 'Sensibilisation, réduction de l’empreinte carbone, gestion responsable des ressources',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'green'
  },
  {
    id: 3,
    title: 'Gestion des déchets & recyclage',
    description: 'Tri, réglementation, mise en place de filières adaptées',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    color: 'yellow'
  },
  {
    id: 4,
    title: 'Management & organisation',
    description: 'Gestion d’équipe, leadership, optimisation des process',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'purple'
  },
  {
    id: 5,
    title: 'Qualité, Sécurité, Environnement (QSE)',
    description: 'Sensibilisation, bonnes pratiques, préparation aux certifications',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: 'red'
  },
  {
    id: 6,
    title: 'Santé & sécurité au travail',
    description: 'Prévention des risques, gestes et postures, premiers secours',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'orange'
  },
  {
    id: 7,
    title: 'Habilitations spécifiques',
    description: 'Habilitations électriques, CACES, interventions en sécurité',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    color: 'indigo'
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'bg-primary-100 text-primary-600',
    green: 'bg-secondary-100 text-secondary-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    orange: 'bg-orange-100 text-orange-600',
    indigo: 'bg-indigo-100 text-indigo-600'
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function FormationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nos domaines de formation
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">
              Des formations pratiques et adaptées aux réalités du terrain pour les professionnels du BTP
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              Nos formations sont conçues pour être courtes, pratiques et efficaces. 
              Elles combinent théorie et mises en situation, et s’adressent à de petits groupes (4 à 12 
              participants) afin de favoriser l’interactivité et un accompagnement personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Grille des formations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <div 
                key={formation.id}
                className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${getColorClasses(formation.color)} rounded-lg flex items-center justify-center mb-6`}>
                  {formation.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {formation.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {formation.description}
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages des formations */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Toutes nos formations incluent :
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              ✔ Une évaluation finale<br />
              ✔ Une accessibilité aux personnes en situation de handicap (avec adaptations possibles)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.459a1 1 0 00-.364 1.118l1.286 3.973c.3.922-.755 1.688-1.54 1.118l-3.383-2.458a1 1 0 00-1.175 0l-3.383 2.458c-.784.57-1.838-.196-1.539-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.997 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Qualité</h3>
              <p className="text-neutral-600">
              Une qualité pédagogique reconnue 
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6h16.5A2.25 2.25 0 0122.5 8.25v7.5A2.25 2.25 0 0120.25 18H3.75A2.25 2.25 0 011.5 15.75v-7.5A2.25 2.25 0 013.75 6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 9h19.5M6 15h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Financement</h3>
              <p className="text-neutral-600">
              La possibilité de financement des formations par les OPCO
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Transparence</h3>
              <p className="text-neutral-600">
              Une transparence totale sur nos méthodes et nos résultats 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à développer vos compétences ?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins de formation et obtenir un devis personnalisé.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-100 transition-colors duration-200"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  )
}


