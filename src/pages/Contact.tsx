import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        'Université Assane Seck de Ziguinchor',
        'Département d\'Informatique LI3',
        'BP 523, Ziguinchor, Sénégal'
      ]
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: [
        '+221 33 123 45 67',
        '+221 77 123 45 67 (Chef de département)'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'li3@uas.edu.sn',
        'chef.dept.info@uas.edu.sn'
      ]
    },
    {
      icon: Clock,
      title: 'Horaires d\'ouverture',
      details: [
        'Lundi - Vendredi: 08h00 - 18h00',
        'Samedi: 09h00 - 12h00',
        'Dimanche: Fermé'
      ]
    }
  ];

  const team = [
    {
      name: 'Dr. Amadou Diallo',
      role: 'Chef de Département',
      email: 'amadou.diallo@uas.edu.sn',
      phone: '+221 77 123 45 67',
      office: 'Bureau 201'
    },
    {
      name: 'Mme Fatou Sow',
      role: 'Responsable des Études',
      email: 'fatou.sow@uas.edu.sn',
      phone: '+221 77 234 56 78',
      office: 'Bureau 202'
    },
    {
      name: 'M. Moussa Ndiaye',
      role: 'Responsable Stages & Emploi',
      email: 'moussa.ndiaye@uas.edu.sn',
      phone: '+221 77 345 67 89',
      office: 'Bureau 203'
    },
    {
      name: 'Mme Aïssatou Ba',
      role: 'Responsable Communication',
      email: 'aissatou.ba@uas.edu.sn',
      phone: '+221 77 456 78 90',
      office: 'Bureau 204'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'general',
      message: ''
    });
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
              Contactez-nous
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {info.title}
                </h3>
                <div className="text-secondary-700 space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-secondary-700 mb-2">
                    Catégorie
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="general">Général</option>
                    <option value="admission">Admission</option>
                    <option value="formation">Formation</option>
                    <option value="stage">Stage</option>
                    <option value="technique">Support technique</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </motion.div>

            {/* Team Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Contactez notre équipe
              </h2>

              <div className="space-y-6">
                {team.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>

                    <div className="space-y-2 text-sm text-secondary-700">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-secondary-500" />
                        <a href={`mailto:${member.email}`} className="hover:text-primary-600">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-secondary-500" />
                        {member.phone}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-secondary-500" />
                        {member.office}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              Nous trouver
            </h2>
            <p className="text-secondary-600">
              Localisation du département sur le campus de l'Université Assane Seck
            </p>
          </div>

          <div className="bg-secondary-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-secondary-400 mx-auto mb-4" />
              <p className="text-secondary-600">
                Carte interactive du campus<br />
                (Intégration Google Maps à venir)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-secondary-900 text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">
            Suivez-nous sur les réseaux sociaux
          </h2>
          <p className="mb-8 text-secondary-300">
            Restez connecté avec l'actualité du département
          </p>

          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-full transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-full transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-full transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="bg-secondary-800 hover:bg-primary-600 p-3 rounded-full transition-colors duration-200">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
