import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Search, Filter } from 'lucide-react';

const Actualites: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'tous', label: 'Toutes les actualités' },
    { id: 'formation', label: 'Formation' },
    { id: 'evenement', label: 'Événements' },
    { id: 'recherche', label: 'Recherche' },
    { id: 'etudiant', label: 'Vie étudiante' }
  ];

  const news = [
    {
      id: 1,
      title: 'Nouveau programme Master en Intelligence Artificielle',
      excerpt: 'Découvrez notre nouveau programme de Master spécialisé en IA, en partenariat avec des entreprises leaders du secteur.',
      content: 'Le département d\'informatique lance un nouveau Master en Intelligence Artificielle pour répondre aux besoins croissants du marché du travail...',
      date: '2024-10-15',
      author: 'Dr. Amadou Diallo',
      category: 'formation',
      image: '/api/placeholder/600/300',
      tags: ['Master', 'IA', 'Innovation']
    },
    {
      id: 2,
      title: 'Journée Portes Ouvertes - 25 novembre 2024',
      excerpt: 'Venez découvrir nos formations et rencontrer nos enseignants lors de notre journée portes ouvertes.',
      content: 'Le samedi 25 novembre 2024, le département organise sa journée portes ouvertes. Au programme : visites des locaux, présentations des formations...',
      date: '2024-10-10',
      author: 'Service Communication',
      category: 'evenement',
      image: '/api/placeholder/600/300',
      tags: ['Portes ouvertes', 'Visite', 'Inscription']
    },
    {
      id: 3,
      title: 'Projet de recherche en cybersécurité primé',
      excerpt: 'Un projet de recherche de nos étudiants remporte le premier prix au concours national de cybersécurité.',
      content: 'L\'équipe composée d\'étudiants en Master a remporté le premier prix du concours national de cybersécurité organisé par l\'ANS...',
      date: '2024-10-05',
      author: 'M. Moussa Ndiaye',
      category: 'recherche',
      image: '/api/placeholder/600/300',
      tags: ['Cybersécurité', 'Concours', 'Prix']
    },
    {
      id: 4,
      title: 'Club informatique : lancement des activités 2024-2025',
      excerpt: 'Le club informatique organise sa première réunion de rentrée avec de nombreux projets passionnants.',
      content: 'Le club informatique du département lance sa saison 2024-2025 avec des projets variés : hackathons, formations, événements communautaires...',
      date: '2024-09-28',
      author: 'Bureau des Étudiants',
      category: 'etudiant',
      image: '/api/placeholder/600/300',
      tags: ['Club', 'Activités', 'Communauté']
    },
    {
      id: 5,
      title: 'Partenariat avec TechSenegal',
      excerpt: 'Nouveau partenariat avec l\'entreprise TechSenegal pour des stages et projets collaboratifs.',
      content: 'Le département signe un partenariat stratégique avec TechSenegal, leader dans le développement de solutions numériques...',
      date: '2024-09-20',
      author: 'Dr. Fatou Sow',
      category: 'formation',
      image: '/api/placeholder/600/300',
      tags: ['Partenariat', 'Entreprise', 'Stage']
    },
    {
      id: 6,
      title: 'Conférence internationale sur le Big Data',
      excerpt: 'Le département accueille une conférence internationale sur les enjeux du Big Data.',
      content: 'Du 15 au 17 décembre 2024, le département organise une conférence internationale rassemblant experts et chercheurs du domaine...',
      date: '2024-09-15',
      author: 'Comité Scientifique',
      category: 'evenement',
      image: '/api/placeholder/600/300',
      tags: ['Conférence', 'Big Data', 'International']
    }
  ];

  const events = [
    {
      title: 'Journée Portes Ouvertes',
      date: '25 novembre 2024',
      time: '09:00 - 17:00',
      location: 'Campus UASZ',
      description: 'Découvrez nos formations et infrastructures'
    },
    {
      title: 'Hackathon UASZ 2024',
      date: '10-11 décembre 2024',
      time: 'Toute la journée',
      location: 'Salle informatique',
      description: 'Concours de programmation 24h'
    },
    {
      title: 'Conférence Big Data',
      date: '15-17 décembre 2024',
      time: '09:00 - 18:00',
      location: 'Amphithéâtre principal',
      description: 'Conférence internationale sur le Big Data'
    },
    {
      title: 'Semaine de l\'Innovation',
      date: '20-24 janvier 2025',
      time: 'Toute la semaine',
      location: 'Campus UASZ',
      description: 'Exposition de projets étudiants'
    }
  ];

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'tous' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Actualités & Événements
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Restez informé de la vie du département d'informatique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="container-max py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Rechercher dans les actualités..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-secondary-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString('fr-FR')}
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>

                  <h2 className="text-xl font-bold text-secondary-900 mb-3 hover:text-primary-600 transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-secondary-700 mb-4">{item.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary-100 text-primary-800"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Lire la suite →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-600 text-lg">
                Aucune actualité trouvée pour cette recherche.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Événements à Venir
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Calendrier des prochains événements du département
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-50 rounded-lg p-6 border border-secondary-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-secondary-600 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                      <span className="mx-2">•</span>
                      {event.time}
                    </div>
                    <p className="text-secondary-700 text-sm mb-2">{event.location}</p>
                  </div>
                </div>
                <p className="text-secondary-700">{event.description}</p>
                <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Plus d'infos →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">
            Restez informé
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir toutes les actualités
            et informations importantes du département.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded-lg text-secondary-900 focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-secondary-100 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualites;
