import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Users, Award, BookOpen, Lightbulb } from 'lucide-react';

const Presentation: React.FC = () => {
  const team = [
    {
      name: 'Dr. Amadou Diallo',
      role: 'Chef de Département',
      specialite: 'Intelligence Artificielle',
      image: '/photos/profil1.jpg'
    },
    {
      name: 'Prof. Fatou Sow',
      role: 'Enseignante-chercheuse',
      specialite: 'Bases de données',
      image: '/photos/profil1.jpg'
    },
    {
      name: 'Dr. Moussa Ndiaye',
      role: 'Enseignant-chercheur',
      specialite: 'Cybersécurité',
      image: '/photos/profil1.jpg'
    },
    {
      name: 'Mme. Aïssatou Ba',
      role: 'Enseignante',
      specialite: 'Développement web',
      image: '/photos/profil1.jpg'
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans l\'enseignement et la recherche.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous encourageons l\'innovation et la créativité technologique.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous favorisons la collaboration entre étudiants et enseignants.'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Nous garantissons une formation de qualité adaptée au marché.'
    },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Présentation du Département
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Découvrez notre histoire, nos missions et notre équipe dédiée à l'excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mot du Chef */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <User className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-secondary-900">
                Mot du Chef de Département
              </h2>
            </div>

            <div className="bg-secondary-50 p-8 rounded-lg">
              <blockquote className="text-lg text-secondary-700 leading-relaxed italic">
                "Le département d'Informatique LI3 s'engage à former des professionnels
                compétents et innovants capables de répondre aux défis technologiques
                de notre temps. Notre approche pédagogique combine théorie et pratique,
                recherche et industrie, pour préparer nos étudiants à devenir les
                acteurs du numérique de demain."
              </blockquote>
              <div className="mt-6 text-right">
                <div className="font-semibold text-secondary-900">Dr. Amadou Diallo</div>
                <div className="text-secondary-600">Chef de Département LI3</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Historique et Mission */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Historique
              </h2>
              <div className="space-y-4 text-secondary-700">
                <p>
                  Créé en 2014, le département d'Informatique LI3 fait partie des
                  premiers départements informatiques de l'Université Assane Seck
                  de Ziguinchor.
                </p>
                <p>
                  Depuis sa création, le département a formé plus de 500 étudiants
                  et a développé des partenariats solides avec des entreprises
                  technologiques locales et internationales.
                </p>
                <p>
                  Notre évolution constante nous a permis d'adapter nos programmes
                  aux dernières tendances technologiques et aux besoins du marché
                  du travail sénégalais.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Notre Mission
                  </h3>
                  <p className="text-secondary-700">
                    Former des informaticiens compétents, éthiques et innovants
                    capables de contribuer au développement technologique du Sénégal
                    et de l'Afrique.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Notre Vision
                  </h3>
                  <p className="text-secondary-700">
                    Devenir un pôle d'excellence en formation et recherche en
                    informatique en Afrique de l'Ouest.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Nos Objectifs
                  </h3>
                  <ul className="text-secondary-700 space-y-1">
                    <li>• Excellence académique</li>
                    <li>• Recherche appliquée</li>
                    <li>• Partenariats industriels</li>
                    <li>• Innovation pédagogique</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Une équipe d'enseignants-chercheurs passionnés et expérimentés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-secondary-600 text-sm">{member.specialite}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Partenaires Académiques et Industriels
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Nous collaborons avec diverses institutions pour enrichir notre formation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-secondary-50 p-6 rounded-lg">
              <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Universités Partenaires
              </h3>
              <p className="text-secondary-700">
                Échanges étudiants et enseignants avec des universités européennes et africaines
              </p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Entreprises Technologiques
              </h3>
              <p className="text-secondary-700">
                Stages, projets et recrutement de nos étudiants
              </p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Organismes de Recherche
              </h3>
              <p className="text-secondary-700">
                Collaboration sur des projets de recherche appliquée
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
