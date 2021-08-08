import React from 'react'
import './Contact.scss';
import emailjs from 'emailjs-com';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
function Contact() {
    const [message,setMessage]=React.useState(false);
    const Submit=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_do9ztuw', 'template_hdmz4e8', e.target, 'user_zUKGnrOCAVisG42yeTytC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    };
    return (
        <div className="contact">
            <div className="carrers">
                <h1>Carrers</h1>
            </div>

            <div className="Carrers-email">
            <div className="sub1">
            <form onSubmit={Submit}>
            <p>Name</p>
            <input type="text" placeholder="Email" className="Email"/>
           
            <p>Message</p>
            <textarea className="Message"/>
            <button type="submit">Send</button>
            {message && <span>Thanks,I'll reply ASAP</span>}
            </form>
            </div>
            <div className="sub2">
                <h1>Find Us</h1>
                <div className="Address">
                <RoomRoundedIcon />
                    <h3>Trisha Arcade, 3rd Floor,
 Above Axis Bank, Beside Cafe Bahar Restaurant, Hyderguda, Basheerbagh Hyderabad – 500029</h3>
                </div>
                <div className="Address">
                <PhoneInTalkRoundedIcon/>
                    <h3>Phone: 040 – 32903331</h3>
                </div>
                <div className="Address">
                <MailOutlineRoundedIcon/>
                <h3>
                info@fortuneglobalorganisation.in
                </h3></div>
                <div className="Address">
                <MailOutlineRoundedIcon/>
                    <h3>hr@fortuneglobalorganisation.in</h3>
                </div>
            </div>
            
               
            </div>
        </div>
    )
}

export default Contact
