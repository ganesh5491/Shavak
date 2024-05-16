import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img1 from '../assets/banner/contactus.png';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c7j0sj7', 'template_f6a89yj', form.current, {
        publicKey: 'EeguqoXTRD_ixns4S',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error sending email. Please try again.');
        },
      );
  };

  const styles = `
    .contact-container {
      max-width: 470px;
      margin: 0 auto;
      padding: 20px;
    }

    .banner-img {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }

  
    .section-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    // button {
    //   width: 20%;
    //   padding: 10px;
    //   background-color: #007bff;
    //   color: #fff;
    //   border: none;
    //   border-radius: 5px;
    //   cursor: pointer;
    // }

    button:hover {
      background-color: #0056b3;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <img src={img1} className="img-fluid mb-5" alt="Responsive image" style={{ width: '100%', height: '50%' }} />    
          <div className="contact-container d-flex align-items-center justify-content-center shadow-lg bg-light">
      <section className="grid place-items-center justify-content-between fx-100 p-1">
        <div className="mx-auto mt-2">
          <h1 className="text-3xl text-center font-bold mb-5">Contact Us</h1>
          <p className="mb-2 text-1xl">If you have questions? </p>
          <p className="mb-4 text-1xl">We're here to help. Reach out to us using the form below.</p>
            <div className="w-100">
              <form ref={form} onSubmit={sendEmail} className="contact-form p-3 ">
                <div className="form-group">
                  <label htmlFor="name" className='mb-2'>Name:</label>
                  <input type="text" name="from_name" id="name" required aria-label="Name" aria-required="true" />
                </div>
                <div className="form-group">
                  <label htmlFor="email"className='mb-2'>Email:</label>
                  <input type="email" name="from_email" id="email" required aria-label="Email" aria-required="true" />
                </div>
                <div className="form-group">
                  <label htmlFor="message"className='mb-2'>Message:</label>
                  <textarea name="message" id="message" required aria-label="Message" aria-required="true" />
                </div>
                <button type="submit" className=' text-primary align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'>
                 Send
                </button>
              </form>
            </div>
          </div>
      </section>
        </div>
        <div className='mb-5'></div>
    </>
  );
};

export default ContactUs;