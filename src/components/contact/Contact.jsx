import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const info = [
  {
    id: 1,
    icon: <MdOutlineEmail className="contact__option-icon" />,
    title: "Email",
    info: "seokho9473@gmail.com",
    href: "mailto:seokho9473@gmail.com"
  },
  {
    id: 2,
    icon: <RiMessengerLine className="contact__option-icon" />,
    title: "Messenger",
    info: "Instagram",
    href: "https://m.me/c__ppg/"
  },
  {
    id: 3,
    icon: <BsWhatsapp className="contact__option-icon" />,
    title: "WhatsApp",
    info: +123456789,
    href: "https://api.whatsapp.com/send?phone=+01024639473"
  },
]


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vu4qrg7', 'template_m3clme7', form.current, 'bRosRnN-u33JjwmQK')
    alert("메일을 보냈습니다.")
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>  
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {
            info.map(({id,icon ,title, info, href}) => {
              return (
                <article key={id} className="contact__option">
                  {icon}
                  <h4>{title}</h4>
                  <h5>{info}</h5>  
                  <a href={href} target="_blank">Send a message</a>
                </article>
              );
            })
          }
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact