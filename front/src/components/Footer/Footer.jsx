import { useLanguage } from '../../context/languageContext';
import './Footer.scss';

const Footer = () => {
  const { translations } = useLanguage();
  const footerContent = translations.footer;

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
        <h2><img src="./favicon.png" alt="Legal icon" className="footer__legal-icon" />
        <a href="/mentions-legales">{footerContent.legal}</a></h2>
        <p>{footerContent.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
