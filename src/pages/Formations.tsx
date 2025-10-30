import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const Formations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('licence');
  const [expandedSemester, setExpandedSemester] = useState<string | null>(null);

  const licenceProgram = {
    L1: {
      title: 'Licence 1 - Fondamentaux',
      description: 'Acquisition des bases théoriques et pratiques de l\'informatique',
      ues: [
        { code: 'UE1', name: 'Algorithmique et Programmation', credits: 6 },
        { code: 'UE2', name: 'Mathématiques pour l\'Informatique', credits: 6 },
        { code: 'UE3', name: 'Architecture des Ordinateurs', credits: 4 },
        { code: 'UE4', name: 'Systèmes d\'Exploitation', credits: 4 },
        { code: 'UE5', name: 'Bases de Données', credits: 4 },
        { code: 'UE6', name: 'Anglais Technique', credits: 2 },
      ]
    },
    L2: {
      title: 'Licence 2 - Approfondissement',
      description: 'Développement des compétences techniques et spécialisation progressive',
      ues: [
        { code: 'UE7', name: 'Programmation Orientée Objet', credits: 6 },
        { code: 'UE8', name: 'Réseaux Informatiques', credits: 5 },
        { code: 'UE9', name: 'Développement Web', credits: 5 },
        { code: 'UE10', name: 'Analyse et Conception', credits: 4 },
        { code: 'UE11', name: 'Statistiques et Probabilités', credits: 4 },
        { code: 'UE12', name: 'Projet Informatique', credits: 4 },
      ]
    },
    L3: {
      title: 'Licence 3 - Professionnalisation',
      description: 'Préparation à l\'insertion professionnelle et spécialisation',
      ues: [
        { code: 'UE13', name: 'Intelligence Artificielle', credits: 5 },
        { code: 'UE14', name: 'Cybersécurité', credits: 5 },
        { code: 'UE15', name: 'Développement Mobile', credits: 4 },
        { code: 'UE16', name: 'Gestion de Projet', credits: 4 },
        { code: 'UE17', name: 'Stage en Entreprise', credits: 6 },
        { code: 'UE18', name: 'Mémoire de Fin d\'Études', credits: 6 },
      ]
    }
  };

  const parcours = [
    {
      title: 'Développement Logiciel',
      icon: Code,
      description: 'Spécialisation dans la conception et le développement d\'applications',
      debouches: ['Développeur Full-Stack', 'Architecte Logiciel', 'Ingénieur DevOps']
    },
    {
      title: 'Data Science & IA',
      icon: Database,
      description: 'Analyse de données et intelligence artificielle',
      debouches: ['Data Scientist', 'Ingénieur IA', 'Analyste de Données']
    },
    {
      title: 'Cybersécurité',
      icon: Globe,
      description: 'Protection des systèmes et des données',
      debouches: ['Expert Sécurité', 'Consultant Cyber', 'Auditeur SI']
    }
  ];

  const masters = [
    {
      title: 'Master en Informatique',
      specializations: ['Développement Avancé', 'Systèmes Distribués', 'Informatique Décisionnelle'],
      duration: '2 ans',
      description: 'Formation approfondie en informatique avec spécialisations'
    },
    {
      title: 'Master CAME',
      specializations: ['Conception Assistée par Ordinateur', 'Modélisation', 'Simulation'],
      duration: '2 ans',
      description: 'Master spécialisé en modélisation et simulation numérique'
    }
  ];

  const toggleSemester = (semester: string) => {
    setExpandedSemester(expandedSemester === semester ? null : semester);
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
              Nos Formations
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Découvrez nos programmes académiques du L1 au Master
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="container-max">
          <div className="flex justify-center">
            <div className="flex space-x-1 p-1 bg-secondary-100 rounded-lg">
              {[
                { id: 'licence', label: 'Licence' },
                { id: 'master', label: 'Master' },
                { id: 'doctorat', label: 'Doctorat' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-secondary-600 hover:text-primary-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Licence Content */}
      {activeTab === 'licence' && (
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Licence en Informatique
              </h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">
                Formation complète de 3 ans menant à l'obtention du grade de Licence
              </p>
            </div>

            {/* Programme détaillé */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {Object.entries(licenceProgram).map(([level, data]) => (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-primary-600 text-white p-6">
                    <h3 className="text-xl font-bold">{data.title}</h3>
                    <p className="text-primary-100 mt-2">{data.description}</p>
                  </div>
                  <div className="p-6">
                    <button
                      onClick={() => toggleSemester(level)}
                      className="w-full flex items-center justify-between text-left font-semibold text-secondary-900 mb-4"
                    >
                      Unités d'Enseignement
                      {expandedSemester === level ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    {expandedSemester === level && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        {data.ues.map((ue, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-secondary-200 last:border-b-0">
                            <div>
                              <span className="font-medium text-secondary-900">{ue.code}</span>
                              <span className="text-secondary-700 ml-2">{ue.name}</span>
                            </div>
                            <span className="text-primary-600 font-semibold">{ue.credits} ECTS</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Parcours et Métiers */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Parcours et Métiers
                </h3>
                <p className="text-secondary-600">
                  Découvrez les spécialisations possibles et les débouchés professionnels
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {parcours.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-secondary-700 mb-4">{item.description}</p>
                    <div className="text-left">
                      <h5 className="font-semibold text-secondary-900 mb-2">Débouchés :</h5>
                      <ul className="text-secondary-600 text-sm space-y-1">
                        {item.debouches.map((debouche, idx) => (
                          <li key={idx}>• {debouche}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Master Content */}
      {activeTab === 'master' && (
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Masters en Informatique
              </h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">
                Formation de haut niveau pour les étudiants souhaitant se spécialiser
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {masters.map((master, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-8"
                >
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    {master.title}
                  </h3>
                  <p className="text-secondary-700 mb-6">{master.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-2">Spécialisations :</h4>
                    <ul className="text-secondary-700 space-y-1">
                      {master.specializations.map((spec, idx) => (
                        <li key={idx}>• {spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold">
                      Durée : {master.duration}
                    </span>
                    <button className="btn-primary">
                      En savoir plus
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Doctorat Content */}
      {activeTab === 'doctorat' && (
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Doctorat en Informatique
              </h2>
              <p className="text-secondary-600 max-w-2xl mx-auto">
                Programme de recherche doctorale pour les étudiants souhaitant poursuivre en recherche
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                    Objectifs du Doctorat
                  </h3>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Formation à la recherche scientifique</li>
                    <li>• Développement de compétences en recherche appliquée</li>
                    <li>• Publication dans des revues internationales</li>
                    <li>• Encadrement de jeunes chercheurs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                    Conditions d'Admission
                  </h3>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Master en Informatique ou équivalent</li>
                    <li>• Projet de recherche validé</li>
                    <li>• Directeur de thèse disponible</li>
                    <li>• Financement assuré</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="btn-primary">
                  Contacter le responsable doctoral
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Formations;
