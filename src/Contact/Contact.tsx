import React from 'react';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [mailerState, setMailerState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleStateChange = (e: any) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitEmail = async (e: any) => {
    e.preventDefault();
    console.log({ mailerState });
    await fetch('/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === 'success') {
          alert('Message Sent');
        } else if (resData.status === 'fail') {
          alert('Message failed to send');
        }
      })
      .then(() => {
        setMailerState({
          email: '',
          name: '',
          message: '',
        });
      });
  };

  return (
    <div className="contact-form">
      <form onSubmit={submitEmail}>
        <fieldset>
          <input
            placeholder="Name"
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}
          />
          <input
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <textarea
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          <button>Send</button>
        </fieldset>
      </form>
      <div className="instagram-container">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/lizamorrisonart/"
        >
          <img
            alt="Instagram"
            src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
            className="instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
