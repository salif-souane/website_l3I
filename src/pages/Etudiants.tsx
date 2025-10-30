import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, BookOpen, Users, Download, Search, Filter } from 'lucide-react';

const Etudiants: React.FC = () => {
  const [activeTab, setActiveTab] = useState('timetable');

  const timetable = [
    {
      day: 'Lundi',
      schedule: [
        { time: '08:00 - 10:00', subject: 'Algorithmique', room: 'Salle 101', teacher: 'Dr. Diallo' },
        { time: '10:15 - 12:15', subject: 'Bases de Données', room: 'Salle 102', teacher: 'Mme Sow' },
        { time: '14:00 - 16:00', subject: 'Développement Web', room: 'Labo Info', teacher: 'M. Ndiaye' }
      ]
    },
    {
      day: 'Mardi',
      schedule: [
        { time: '08:00 - 10:00', subject: 'Mathématiques', room: 'Salle 103', teacher: 'Dr. Diallo' },
        { time: '10:15 - 12:15', subject: 'Réseaux', room: 'Salle 104', teacher: 'Mme Ba' },
        { time: '14:00 - 16:00', subject: 'Projet Info', room: 'Labo Info', teacher: 'Dr. Diallo' }
      ]
    },
    {
      day: 'Mercredi',
      schedule: [
        { time: '08:00 - 10:00', subject: 'IA & Machine Learning', room: 'Salle 101', teacher: 'Dr. Diallo' },
        { time: '10:15 - 12:15', subject: 'Cybersécurité', room: 'Salle 102', teacher: 'M. Ndiaye' }
      ]
    },
    {
      day: 'Jeudi',
      schedule: [
        { time: '08:00 - 10:00', subject: 'Systèmes d\'Exploitation', room: 'Salle 103', teacher: 'Mme Sow' },
        { time: '10:15 - 12:15', subject: 'Développement Mobile', room: 'Labo Info', teacher: 'Mme Ba' },
        { time: '14:00 - 16:00', subject: 'Anglais Technique', room: 'Salle 104', teacher: 'M. Ndiaye' }
      ]
    },
    {
      day: 'Vendredi',
      schedule: [
        { time: '08:00 - 10:00', subject: 'Gestion de Projet', room: 'Salle 101', teacher: 'Dr. Diallo' },
        { time: '10:15 - 12:15', subject: 'Stage/Alternance', room: 'Salle 102', teacher: 'Équipe pédagogique' }
      ]
    }
  ];

  const grades = [
    { semester: 'Semestre 1', subjects: [
      { name: 'Algorithmique', grade: '15/20', credits: 6 },
      { name: 'Mathématiques', grade: '14/20', credits: 6 },
      { name: 'Architecture Ordinateurs', grade: '16/20', credits: 4 },
      { name: 'Systèmes d\'Exploitation', grade: '13/20', credits: 4 }
    ]},
    { semester: 'Semestre 2', subjects: [
      { name: 'Programmation Orientée Objet', grade: '17/20', credits: 6 },
      { name: 'Réseaux Informatiques', grade: '15/20', credits: 5 },
      { name: 'Développement Web', grade: '16/20', credits: 5 },
      { name: 'Analyse & Conception', grade: '14/20', credits: 4 }
    ]}
  ];

  const resources = [
    {
      category: 'Logiciels',
      items: [
        { name: 'Visual Studio Code', description: 'Éditeur de code recommandé', download: '#' },
        { name: 'Eclipse IDE', description: 'Environnement de développement Java', download: '#' },
        { name: 'MySQL Workbench', description: 'Outil de gestion de bases de données', download: '#' },
        { name: 'Postman', description: 'Outil de test d\'APIs', download: '#' }
      ]
    },
    {
      category: 'Documentation',
      items: [
        { name: 'Guide du stagiaire', description: 'Procédures et conseils pour les stages', download: '#' },
        { name: 'Règlement intérieur', description: 'Règles de fonctionnement du département', download: '#' },
        { name: 'Guide méthodologique', description: 'Méthodologie de recherche et rédaction', download: '#' }
      ]
    },
    {
      category: 'Tutoriels',
      items: [
        { name: 'Initiation à Python', description: 'Cours vidéo pour débutants', download: '#' },
        { name: 'Bases de données relationnelles', description: 'Guide complet MySQL', download: '#' },
        { name: 'Développement web moderne', description: 'HTML, CSS, JavaScript, React', download: '#' }
      ]
    }
  ];

  const internshipGuide = {
    objectives: [
      'Acquérir une expérience professionnelle pratique',
      'Appliquer les connaissances théoriques en entreprise',
      'Développer des compétences comportementales',
      'Établir un réseau professionnel'
    ],
    requirements: [
      'Convention de stage signée par les 3 parties',
      'Encadrement par un tuteur entreprise et universitaire',
      'Rapport de stage détaillé (20-30 pages)',
      'Soutenance orale devant un jury'
    ],
    duration: '3 à 6 mois minimum selon le niveau d\'études',
    periods: [
      'Licence 2 : Stage d\'initiation (2 mois)',
      'Licence 3 : Stage de perfectionnement (4-6 mois)',
      'Master 1 : Stage technique (4 mois)',
      'Master 2 : Stage de fin d\'études (6 mois)'
    ]
  };

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
              Espace Étudiants
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Toutes les ressources et informations nécessaires à votre réussite
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-2 p-4">
            {[
              { id: 'timetable', label: 'Emploi du temps', icon: Calendar },
              { id: 'grades', label: 'Notes & Résultats', icon: FileText },
              { id: 'internship', label: 'Stages & Mémoires', icon: Users },
              { id: 'resources', label: 'Ressources', icon: BookOpen }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-100'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Emploi du temps */}
      {activeTab === 'timetable' && (
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Emploi du Temps
              </h2>
              <p className="text-secondary-600">
                Semaine du 14 au 20 octobre 2024 - Licence 3 Informatique
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {timetable.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-secondary-50'}`}
                >
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                    {day.day}
                  </h3>
                  <div className="space-y-3">
                    {day.schedule.map((course, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-primary-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-semibold text-secondary-900">{course.subject}</div>
                          <div className="text-secondary-600 text-sm">{course.teacher}</div>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0">
                          <div className="text-primary-600 font-medium mr-4">{course.time}</div>
                          <div className="text-secondary-700">{course.room}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="btn-secondary mr-4">
                Télécharger PDF
              </button>
              <button className="btn-primary">
                Synchroniser avec calendrier
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Notes et résultats */}
      {activeTab === 'grades' && (
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Notes et Résultats
              </h2>
              <p className="text-secondary-600">
                Consultez vos résultats académiques
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {grades.map((semester, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                    {semester.semester}
                  </h3>

                  <div className="space-y-4">
                    {semester.subjects.map((subject, idx) => (
                      <div key={idx} className="flex justify-between items-center py-3 border-b border-secondary-200 last:border-b-0">
                        <div className="flex-1">
                          <div className="font-medium text-secondary-900">{subject.name}</div>
                          <div className="text-secondary-600 text-sm">{subject.credits} ECTS</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold text-lg ${
                            parseFloat(subject.grade) >= 15 ? 'text-green-600' :
                            parseFloat(subject.grade) >= 12 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {subject.grade}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-secondary-200">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-secondary-900">Moyenne générale :</span>
                      <span className="font-bold text-primary-600 text-lg">
                        {(semester.subjects.reduce((acc, subj) => acc + parseFloat(subj.grade), 0) / semester.subjects.length).toFixed(2)}/20
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="btn-primary">
                Télécharger le relevé de notes
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Stages et mémoires */}
      {activeTab === 'internship' && (
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Stages et Mémoires
              </h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">
                Guide complet pour vos stages et projets de fin d'études
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  Objectifs du Stage
                </h3>
                <ul className="text-secondary-700 space-y-2">
                  {internshipGuide.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      {objective}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  Exigences
                </h3>
                <ul className="text-secondary-700 space-y-2">
                  {internshipGuide.requirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                Durée et Périodes de Stage
              </h3>

              <div className="mb-6">
                <p className="text-secondary-700 mb-4">
                  <strong>Durée minimale :</strong> {internshipGuide.duration}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {internshipGuide.periods.map((period, idx) => (
                  <div key={idx} className="bg-secondary-50 p-4 rounded-lg">
                    <p className="text-secondary-900 font-medium">{period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="btn-primary mr-4">
                Télécharger le guide du stagiaire
              </button>
              <button className="btn-secondary">
                Contacter le responsable des stages
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Ressources pédagogiques */}
      {activeTab === 'resources' && (
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Ressources Pédagogiques
              </h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">
                Tous les outils et documents nécessaires à votre apprentissage
              </p>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
                    <input
                      type="text"
                      placeholder="Rechercher une ressource..."
                      className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option>Toutes les catégories</option>
                    <option>Logiciels</option>
                    <option>Documentation</option>
                    <option>Tutoriels</option>
                  </select>
                  <button className="btn-secondary flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrer
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-primary-600 text-white p-4">
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="border border-secondary-200 rounded-lg p-3">
                          <h4 className="font-medium text-secondary-900 mb-1">{item.name}</h4>
                          <p className="text-secondary-600 text-sm mb-3">{item.description}</p>
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            Télécharger
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 max-w-2xl mx-auto">
                <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Bibliothèque Numérique
                </h3>
                <p className="text-secondary-700 mb-6">
                  Accédez à notre collection de livres électroniques, articles scientifiques
                  et ressources de recherche via la plateforme Moodle.
                </p>
                <button className="btn-primary">
                  Accéder à Moodle
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Etudiants;
