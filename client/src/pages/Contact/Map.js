import GoogleMapReact from 'google-map-react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Map.scss';


const LocationPin = ({ text }) => (
    <div className='pin'>
        <LocationOnIcon className='pinIcon' />
        <p className='pinText'>{text}</p>
    </div>
)





const Map = ({ location, zoomLevel }) =>
(
    <div className="map">
        <h2 className="mapText">Come Visit Our Restaurant</h2>
        <div className="googleMap">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                mapContainerClassName="map-container"
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />

            </GoogleMapReact>
        </div>
    </div >
)



export default Map;