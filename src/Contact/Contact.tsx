import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [mailerState, setMailerState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleStateChange = (e: any): void => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitEmail = async (e: any): Promise<void> => {
    e.preventDefault();
    return axios
      .post('http://localhost:3001/send', {
        method: 'POST',
        data: mailerState,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        referrer: 'no-referrer',
        mode: 'no-cors',
      })
      .then((response) => {
        if (response?.data?.status === 'success') {
          resetForm();
        } else if (response?.data?.status === 'fail') {
          alert('Message failed to send. Please try again.');
        }
      })
      .catch(() =>
        alert(
          'Please try again. If the problem persists, please email me at lizammorrison@gmail.com instead.'
        )
      );
  };

  const resetForm = (): void => {
    setMailerState({
      email: '',
      name: '',
      message: '',
    });
  };

  return (
    <div className="contact-form">
      <form method="POST" onSubmit={submitEmail}>
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
          <button
            disabled={
              !mailerState.email || !mailerState.name || !mailerState.message
            }
            className={
              mailerState.email && mailerState.name && mailerState.message
                ? 'send-btn'
                : 'send-btn--none'
            }
          >
            <span>Send</span>
          </button>
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
