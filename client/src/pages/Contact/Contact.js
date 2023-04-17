import './Contact.scss';
import Map from './Map';
import Form from '../../components/Form/Form';


const location = {
    address: 'Sofia city center 1000',
    lat: 42.69751,
    lng: 23.32415,
}

const Contact = () => {

    return (
        <div className="about">

            <div className="introContainer">
                <h2 className="introTitle">Our Mission</h2>

                <p className="introText">
                    We should all strive for the best of yourself. Come and enjoy our delicious food.
                </p>

            </div>
            <Form />

            <Map location={location} zoomLevel={15} />
        </div>
    )
}

export default Contact;