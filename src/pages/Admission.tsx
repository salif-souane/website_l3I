import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, CreditCard, CheckCircle, Clock, Users } from 'lucide-react';

const Admission: React.FC = () => {
  const admissionSteps = [
    {
      step: 1,
      title: 'Pré-inscription en ligne',
      description: 'Remplissez le formulaire de pré-inscription sur notre plateforme',
      icon: FileText,
      details: [
        'Création d\'un compte étudiant',
        'Saisie des informations personnelles',
        'Téléchargement des documents requis',
        'Paiement des frais de dossier'
      ]
    },
    {
      step: 2,
      title: 'Examen d\'admission',
      description: 'Passez les épreuves d\'admission (écrit et oral)',
      icon: CheckCircle,
      details: [
        'Test écrit en mathématiques et logique',
        'Entretien de motivation',
        'Évaluation des compétences en informatique',
        'Présentation du dossier scolaire'
      ]
    },
    {
      step: 3,
      title: 'Validation et inscription',
      description: 'Confirmation de l\'admission et finalisation de l\'inscription',
      icon: Users,
      details: [
        'Réception de la lettre d\'admission',
        'Paiement des frais d\'inscription',
        'Signature de la convention d\'études',
        'Remise du certificat d\'inscription'
      ]
    }
  ];

  const requirements = {
    licence: {
      title: 'Licence en Informatique',
      prerequisites: [
        'Baccalauréat S (Sciences) ou équivalent',
        'Bon niveau en mathématiques',
        'Intérêt pour l\'informatique et les technologies',
        'Motivation et projet professionnel clair'
      ],
      documents: [
        'Copie certifiée du baccalauréat',
        'Relevés de notes des 3 dernières années',
        'Certificat de nationalité',
        'Extrait d\'acte de naissance',
        'Photos d\'identité',
        'Certificat médical'
      ]
    },
    master: {
      title: 'Master en Informatique',
      prerequisites: [
        'Licence en Informatique ou domaine connexe',
        'Bonne moyenne générale (12/20 minimum)',
        'Expérience pratique appréciée',
        'Projet de recherche ou professionnel défini'
      ],
      documents: [
        'Copie de la licence',
        'Relevés de notes complets',
        'CV détaillé',
        'Lettre de motivation',
        'Lettres de recommandation',
        'Certificat de nationalité'
      ]
    }
  };

  const calendar = [
    { period: 'Pré-inscriptions', start: '1er décembre', end: '31 janvier' },
    { period: 'Examens d\'admission', start: '15 février', end: '28 février' },
    { period: 'Résultats d\'admission', start: '15 mars', end: '31 mars' },
    { period: 'Inscriptions définitives', start: '1er avril', end: '30 avril' },
    { period: 'Rentrée universitaire', start: '1er octobre', end: '' }
  ];

  const fees = {
    licence: {
      inscription: '50 000 FCFA',
      scolarite: '350 000 FCFA/an',
      total: '400 000 FCFA'
    },
    master: {
      inscription: '75 000 FCFA',
      scolarite: '500 000 FCFA/an',
      total: '575 000 FCFA'
    }
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
              Admission
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Rejoignez notre communauté d'étudiants en informatique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Processus d'admission */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Procédure d'Inscription
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Découvrez les étapes pour intégrer notre département
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 relative"
              >
                <div className="absolute -top-4 left-6 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="mt-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-700 mb-4">{step.description}</p>
                  <ul className="text-secondary-600 text-sm space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions d'admission */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Conditions d'Admission
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Prérequis et documents requis pour chaque niveau
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(requirements).map(([key, req]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-secondary-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {req.title}
                </h3>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">Prérequis :</h4>
                  <ul className="text-secondary-700 space-y-1">
                    {req.prerequisites.map((prereq, idx) => (
                      <li key={idx}>• {prereq}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Documents requis :</h4>
                  <ul className="text-secondary-700 space-y-1">
                    {req.documents.map((doc, idx) => (
                      <li key={idx}>• {doc}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendrier universitaire */}
      <section className="bg-secondary-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Calendrier Universitaire
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Dates importantes pour l'année universitaire 2024-2025
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary-600 text-white p-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Calendrier d'admission
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {calendar.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-secondary-200 last:border-b-0">
                    <span className="font-medium text-secondary-900">{item.period}</span>
                    <div className="flex items-center text-secondary-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{item.start} {item.end && `- ${item.end}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frais de scolarité */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Frais de Scolarité
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Informations sur les coûts de formation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(fees).map(([key, fee]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-secondary-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-6 capitalize">
                  {key === 'licence' ? 'Licence' : 'Master'}
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Frais d'inscription :</span>
                    <span className="font-semibold text-secondary-900">{fee.inscription}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Frais de scolarité :</span>
                    <span className="font-semibold text-secondary-900">{fee.scolarite}</span>
                  </div>
                  <div className="border-t border-secondary-300 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-secondary-900">Total :</span>
                      <span className="font-bold text-primary-600 text-lg">{fee.total}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-2xl mx-auto">
              <CreditCard className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Bourses et aides financières
              </h3>
              <p className="text-secondary-700 mb-4">
                Des bourses d'études sont disponibles pour les étudiants méritants.
                Contactez le service social pour plus d'informations.
              </p>
              <button className="btn-primary">
                En savoir plus sur les bourses
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
