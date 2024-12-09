import { useState } from 'react';
import { useLanguage } from '../../context/languageContext';
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
          <form>
            <input type="text" placeholder={footerContent.name} required />
            <input type="email" placeholder={footerContent.email} required />
            <textarea placeholder={footerContent.message} required></textarea>
            <button type="submit">{footerContent.send}</button>
          </form>
        </div>
        <div className="footer__info">
          <h2>{footerContent.info}</h2>
          <div className="info__card">
            <p><strong>{footerContent.phone}</strong> +33 6 00 00 00 00</p>
            <p><strong>{footerContent.emailInfo}</strong> contact@example.com</p>
            <div className="info__socials">
              <a href="https://facebook.com">Facebook</a>
              <a href="https://twitter.com">Twitter</a>
              <a href="https://instagram.com">Instagram</a>
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
            <h2>{footerContent.legal}</h2>
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
