import './Contact.scss';
import Map from './Map';


const location = {
    address: 'Sofia city center 1000',
    lat: 42.69751,
    lng: 23.32415,
}

const Contact = () => {

    return (
        <div className="about">

            <div className="introContainer">
                <h2 className="introTitte">Our Mission</h2>

                <p className="introText">
                    Every single person who understands the impact of the web should be an
                    advocate and strive for a better, more inclusive web for all.
                </p>
            </div>


            <Map location={location} zoomLevel={15} />
        </div>
    )
}

export default Contact;