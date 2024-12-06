import { useLanguage } from '../../context/languageContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Location.scss';
import ane from "../../assets/images/location.jpg";

const Location = () => {
  const { translations } = useLanguage();
  const data = translations.location;

  // Coordonnées de l'emplacement
  const location = [37.1005, 25.3760]; // Remplace par les coordonnées de Nexos

  return (
    <section className="location-section" id="location">
      <h2 className="section-title">{data.title}</h2>
      <div className='texte'>
      <p className="section-intro">{data.intro}</p>
      <p className="section-p">{data.p}</p>
      </div>

      <div className='carte'>
      <img src={ane} alt="Location" />
      <div className="leaflet-map">
        <MapContainer
          center={location}
          zoom={13}
          style={{ height: "400px", width: "400px", borderRadius: "5px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={location}>
            <Popup>
              Naxos : Votre emplacement ici !
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Location;
