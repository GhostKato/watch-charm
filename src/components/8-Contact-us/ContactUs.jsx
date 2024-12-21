import s from './ContactUs.module.css';
import ContactUsImage from './ContactUsImage/ContactUsImage';
import Form from './Form/Form';

const ContactUs = () => {
  return (
    <section className='section' id='contact-us'>
      <div className='container'> 
        <h2 className={s.title}>Contact Us</h2>
        <div className={s.content}>
          <Form />
          <ContactUsImage/>
        </div>
      </div>
  </section>
  )
}
export default ContactUs