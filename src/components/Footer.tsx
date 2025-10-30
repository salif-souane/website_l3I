import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Department Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Département Informatique LI3</h3>
            <p className="text-secondary-300 mb-4">
              Université Assane Seck de Ziguinchor<br />
              Formation d'excellence en informatique pour les défis du numérique africain
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="/presentation" className="text-secondary-300 hover:text-white transition-colors">Présentation</a></li>
              <li><a href="/formations" className="text-secondary-300 hover:text-white transition-colors">Formations</a></li>
              <li><a href="/admission" className="text-secondary-300 hover:text-white transition-colors">Admission</a></li>
              <li><a href="/etudiants" className="text-secondary-300 hover:text-white transition-colors">Espace Étudiants</a></li>
              <li><a href="/actualites" className="text-secondary-300 hover:text-white transition-colors">Actualités</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary-400 mr-2 mt-0.5" />
                <span className="text-secondary-300 text-sm">
                  BP 523, Ziguinchor<br />
                  Sénégal
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary-400 mr-2" />
                <span className="text-secondary-300 text-sm">+221 33 123 45 67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary-400 mr-2" />
                <span className="text-secondary-300 text-sm">li3@uas.edu.sn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            © {currentYear} Université Assane Seck de Ziguinchor. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Accessibilité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
