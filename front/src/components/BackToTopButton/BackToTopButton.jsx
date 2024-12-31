
const BackToTopButton = () => {
  return (
    <a
      href="#Home" // Lien vers l'ancre en haut de la page
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#744FDD', // Couleur personnalisable
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        fontSize: '28px',
        cursor: 'pointer',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        textDecoration: 'none', // Supprimer la décoration du lien
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45px',
        height: '45px',
      }}
      aria-label="Retour en haut"
    >
      ↑
    </a>
  );
};

export default BackToTopButton;
