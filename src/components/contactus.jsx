import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import img1 from '../assets/banner/contactus.png';

const ContactUs = () => {
  const [formState, setFormState] = useState({});

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const sendMail = () => {
    const config = {
      SecureToken: "3e11fb97-e04e-4ba6-983f-b59899a833c2",
      To: 'ganeshkale030303@gmail.com',
      From: "ganeshkale030303@gmail.com",
      Subject: "New Message from " + formState.name,
      Body: `${formState.name} connected to your mail. Email: ${formState.email}. Message: ${formState.message}`,
    };

    if (window.Email) {
      window.Email.send(config).then(() => alert("email sent successfully"));
    }
  };

  return (
    <>
      <img src={img1} className="img-fluid mb-4" alt="Responsive image" style={{ width: '100%', height: '50%' }} />
      <div className="bg-white-100 justify-right mb-3 vh-100">
        <div className="">
          <div className="grid place-items-center justify-content-between fx-100 shadow p-2 bg-body rounded">
            <div className="mx-auto mt-4">
              <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
              <p className="mb-2">If you have questions? </p>
              <p className="mb-4">We're here to help. Reach out to us using the form below.</p>
              <form onSubmit={(e) => { sendMail(); e.target.reset(); e.preventDefault(); }}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <TextField
                      name="name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      value={formState.name || ''}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <TextField
                      name="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      value={formState.email || ''}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <TextField
                      name="message"
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      value={formState.message || ''}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Send
                    </Button>
                  </div>
                  <div className="md:w-3/3"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
