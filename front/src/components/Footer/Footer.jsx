import { useState } from 'react';
import { useLanguage } from '../../context/languageContext';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaViber } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const { translations } = useLanguage();
  const footerContent = translations.footer;
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__contact">
          <h2>{footerContent.contact}</h2>
          <form action="https://formspree.io/f/{form_id}" method="POST">
            <input type="text" placeholder={footerContent.name} required aria-label="votre nom" />
            <input type="email" placeholder={footerContent.email} required aria-label="votre email"/>
            <textarea placeholder={footerContent.message} required aria-label="votre texte"></textarea>
            <button type="submit" aria-label="Envoyer votre message">{footerContent.send}</button>
          </form>
        </div>
        <div className="footer__info">
          <h2>{footerContent.info}</h2>
          <div className="info__card">
            <p><strong>Entreprise:</strong> en cours..</p>
            <p><strong>{footerContent.phone}</strong> +33 6 09 33 58 37</p>            
            <p><strong>{footerContent.emailInfo}</strong> naxosconnection@gmail.com</p>
            <div className="info__socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visitez notre page Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visitez notre page Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="Contactez-nous sur WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://www.viber.com/fr/" target="_blank" rel="noopener noreferrer" aria-label="Contactez-nous sur Viber">
                <FaViber />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__legal">
        <h2>
          <button className="footer__legal-link" onClick={toggleModal}>
            {footerContent.legal}
          </button>
          <img src="./favicon.png" alt="Legal icon" className="footer__legal-icon" />
        </h2>
        <p>{footerContent.rights}</p>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={toggleModal}>
              &times;
            </button>            
            <div className="modal__legal-content">
              <h2>{footerContent.legalSections.editor.title}</h2>
              <p>{footerContent.legalSections.editor.content}</p>
              <h2>{footerContent.legalSections.hosting.title}</h2>
              <p>{footerContent.legalSections.hosting.content}</p>
              <h2>{footerContent.legalSections.ip.title}</h2>
              <p>{footerContent.legalSections.ip.content}</p>
              <h2>{footerContent.legalSections.data.title}</h2>
              <p>{footerContent.legalSections.data.content}</p>
              <h2>{footerContent.legalSections.responsibility.title}</h2>
              <p>{footerContent.legalSections.responsibility.content}</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
