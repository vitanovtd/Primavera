import './Form.scss';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const formInputs = [
    { id: 'name', type: 'text', label: 'Your name', placeholder: 'David Anderson' },
    {
        id: 'tel',
        type: 'tel',
        label: 'Phone number',
        placeholder: '+01 234 567 8900',
    },
    {
        id: 'email',
        type: 'email',
        label: 'Email address',
        placeholder: 'you@example.com',
    },
    {
        id: 'message',
        type: 'textarea',
        label: 'Your message',
        placeholder: 'How can we help you? Or you us?',
    },
]



const contactDetails = [
    {
        value: '1000 Sofia City Center',
    },
    { value: '+1 1233 1233 4444' },
    { value: 'support@example.com' },
]




const Form = () => {
    return (
        <div className="contactSection">
            <div className='left'>
                <form className="form">
                    <h2 className="formTitle">Send us a message</h2>

                    {formInputs.map(input => (
                        <label key={input.label} id={input.id} className="formLabel">
                            {input.label}

                            {input.type === 'textarea' ? (
                                <textarea className="formText" placeholder={input.placeholder} />
                            ) : (
                                <input
                                    className="formInput"
                                    type={input.type}
                                    placeholder={input.placeholder}
                                />
                            )}
                        </label>
                    ))}

                    <SendIcon className="formSubmit" />

                    {/* <button className="formSubmit" type="submit">
          Send message
        </button> */}
                </form>
            </div>
            <div className='right'>
                <div className='info'>
                    Contact Information
                    <LocationOnIcon />
                    <p>1000 Sofia City Center</p>
                    <PhoneIcon />

                </div>
            </div>
        </div>
    );
}



export default Form;



