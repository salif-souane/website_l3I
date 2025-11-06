import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Étudiants' },
    { icon: BookOpen, value: '15+', label: 'Enseignants' },
    { icon: Award, value: '10+', label: 'Années d\'existence' },
    { icon: Calendar, value: '2024', label: 'Année universitaire' },
  ];

  const news = [
    {
      title: 'Nouveau programme Master en Intelligence Artificielle',
      date: '15 Octobre 2024',
      excerpt: 'Découvrez notre nouveau programme de Master spécialisé en IA...',
      image: '/photos/actualite.jpg'
    },
    {
      title: 'Journée Portes Ouvertes - 25 Novembre',
      date: '10 Octobre 2024',
      excerpt: 'Venez découvrir nos formations et rencontrer nos équipes...',
      image: '/photos/actualite.jpg'
    },
    {
      title: 'Projet de recherche en cybersécurité',
      date: '5 Octobre 2024',
      excerpt: 'Nos étudiants participent à un projet innovant...',
      image: '/photos/actualite.jpg'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
             Laboratoire d'Informatique et d'Ingénierie pour l'Innovation LI3

              <span className="block text-primary-300">LI3 - UASZ</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Formons les informaticiens de demain à l'Université Assane Seck de Ziguinchor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/formations" className="btn-primary text-lg px-8 py-3">
                Nos Formations
              </Link>
              <Link to="/admission" className="btn-secondary text-lg px-8 py-3">
                S'inscrire
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.value}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                À propos du département
              </h2>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Laboratoire d'Informatique et d'Ingénierie pour l'Innovation LI3
                de l'Université Assane Seck de Ziguinchor est dédié à l'excellence académique et à la formation de professionnels
                est dédié à l'excellence académique et à la formation de professionnels
                compétents dans le domaine des technologies de l'information.
              </p>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Nos programmes sont conçus pour répondre aux besoins du marché du travail
                et préparer nos étudiants aux défis technologiques de demain.
              </p>
              <Link to="/presentation" className="btn-primary inline-flex items-center">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">
                Nos valeurs
              </h3>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  Excellence académique
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  Innovation technologique
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  Formation pratique
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  Recherche appliquée
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Actualités et Événements
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Restez informé des dernières nouvelles et événements du département
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <div className="text-sm text-secondary-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary-700 mb-4">{item.excerpt}</p>
                <Link to="/actualites" className="text-primary-600 hover:text-primary-700 font-medium">
                  Lire la suite →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/actualites" className="btn-secondary">
              Voir toutes les actualités
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
