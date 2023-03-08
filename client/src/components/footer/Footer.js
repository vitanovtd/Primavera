import "./Footer.scss";


import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <div className="item">
                            <h4>Restaurant Primavera</h4>
                            <p className="primaveraInfo">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Suspendisse potenti. Morbi et vehicula neque. Aliquam condimentum convallis nibh. Nunc sed diam
                                vel mauris vulputate tristique. Mauris odio risus, consequat at malesuada non, gravida vitae libero.
                                Etiam tempus ultricies purus in tempus.</p>
                        </div>
                    </div>

                    <div className="center">
                        <div className="item">
                            <h4>Contacts</h4>
                            <div className="icon">
                                <PlaceIcon />
                                <span>Sofia Center</span>
                            </div>
                            <div className="icon">
                                <PhoneIcon />
                                <span>+359 888 888 888</span>
                            </div>
                            <div className="icon">
                                <EmailIcon />
                                <span>primavera@fake.com</span>
                            </div>

                        </div>
                    </div>



                    <div className="right">
                        <div className="item">
                            <h4>Working Time</h4>
                            <span>Everyday from 11:00 until 24:00</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bottomFooter">
                <p className="rightsFooter">© Primavera. All Rights Reserved | Designed by Tisho</p>
            </div>
        </div>
    );
}


export default Footer;