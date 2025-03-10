import { useState } from "react";
import { useLanguage } from "../../context/languageContext";
import "./Footer.scss";
import facebookIcon from "../../assets/icons/facebook.webp";
import instagramIcon from "../../assets/icons/instagram.webp";
import whatsappIcon from "../../assets/icons/whatsapp.webp";
import viberIcon from "../../assets/icons/viber.webp";

const Footer = () => {
  const { translations } = useLanguage();
  const footerContent = translations.footer;
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFormValid, setFormValid] = useState(false);

  // Expressions régulières pour validation
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const regexPhone = /^(?:\+33|00|\+\d{1,3}|\d{1,4})[1-9](\d{8,13}|\d{6,12})$/;


  // États pour chaque champ
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    location: false,
    message: false,
  });

  const toggleModal = () => setModalOpen(!isModalOpen);

  const validateField = (field, value) => {
    let error = false;
    switch (field) {
      case "name":
        error = value.trim() === "";
        break;
      case "email":
        error = !regexEmail.test(value);
        break;
      case "phone":
        error = !regexPhone.test(value);
        break;
      case "location":
        error = value.trim() === "";
        break;
      case "message":
        error = value.trim() === "";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Validation du champ lors de la saisie
    const error = validateField(name, value);
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

    // Vérification de la validité du formulaire
    const isValid =
      Object.keys(formErrors).every((key) => !formErrors[key]) &&
      Object.values(formData).every((field) => field.trim() !== "");
    setFormValid(isValid);
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__contact">
          <h2>{footerContent.contact}</h2>

          <form action="https://formspree.io/f/xeoovyra" method="POST">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder={footerContent.name}
              required
              onChange={handleChange}
              aria-label="votre nom"
            />
            {formErrors.name && (
              <div className="error-message">Nom est requis.</div>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder={footerContent.email}
              required
              onChange={handleChange}
              aria-label="votre email"
            />
            {formErrors.email && (
              <div className="error-message">Email invalide.</div>
            )}

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder={footerContent.tel}
              required
              onChange={handleChange}
              aria-label="votre téléphone"
            />
            {formErrors.phone && (
              <div className="error-message">
                Le téléphone doit contenir 10 chiffres.
              </div>
            )}

            <input
              type="text"
              name="location"
              value={formData.location}
              placeholder={footerContent.loc}
              required
              onChange={handleChange}
              aria-label="votre hébergement"
            />
            {formErrors.location && (
              <div className="error-message">Emplacement est requis.</div>
            )}

            <textarea
              name="message"
              value={formData.message}
              placeholder={footerContent.message}
              required
              onChange={handleChange}
              aria-label="votre texte"
            />
            {formErrors.message && (
              <div className="error-message">Le message est requis.</div>
            )}

            <button
              type="submit"
              disabled={!isFormValid}
              aria-label="Envoyer votre message"
            >
              {footerContent.send}
            </button>
          </form>

          {/* Message d'indication */}
          {!isFormValid && (
            <div className="modal__message">
              {footerContent.formIncompleteMessage ||
                "Veuillez remplir tous les champs correctement avant de soumettre le formulaire."}
            </div>
          )}
        </div>

        <div className="footer__info">
          <h2><img
            src="images/breton.png"
            alt="drapeau bretagne"
            className="breton"
          />
          {footerContent.info}</h2>
          <div className="info__card">
            <p>
              <strong>Entreprise:</strong> Naxos Connection - Naxos 84 300, Cyclades - Grèce
            </p>
            <p>
              <strong>{footerContent.phone}</strong> +33 6 09 33 58 37/ 0030 697 065 29 65

            </p>
            <p>
              <strong>{footerContent.emailInfo}</strong>{" "}
              info@naxos-connection.eu 
            </p>

            <div className="info__socials">
              <a
                href="https://www.facebook.com/profile.php?id=61570304072791"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitez notre page Facebook"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/p/DDwlRBoIxqi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitez notre page Instagram"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://api.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
              <a
                href="https://www.viber.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactez-nous sur Viber"
              >
                <img src={viberIcon} alt="Viber" />
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
          <img
            src="./favicon.webp"
            alt="Legal icon"
            className="footer__legal-icon"
          />
        </h2>
        <p>{footerContent.rights}</p>
      </div>

      {isModalOpen && (
        <div className="modal open">
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

            {/* Message d'indication */}
            <div className="modal__message">
              {footerContent.legalModalMessage ||
                "Le bouton sera activé après la validation de certaines étapes. Merci de votre patience."}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
