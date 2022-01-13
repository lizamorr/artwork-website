import React from 'react';
import { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import Footer from '../Footer';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Check from './check.svg';

const Contact: React.FC = () => {
  const [mailerState, setMailerState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleStateChange = (e: any): void => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitEmail = async (e: any): Promise<void> => {
    setIsSendingEmail(true);
    e.preventDefault();
    try {
      init(process.env.USER_ID ? process.env.USER_ID : '');
      await emailjs.sendForm(
        'service_art',
        'template_art',
        e.target,
        process.env.USER_ID
      );
      setIsSendingEmail(false);
      setIsEmailSent(true);
      resetForm();
    } catch {
      alert(
        'Whoops, please try again. If the problem persists, email me at lizammorrison@gmail.com instead.'
      );
      setIsSendingEmail(false);
    }
    setTimeout(() => setIsEmailSent(false), 1000);
  };

  const resetForm = (): void => {
    setMailerState({
      email: '',
      name: '',
      message: '',
    });
  };

  return (
    <>
      <div className="contact">
        {isSendingEmail && <LoadingSpinner />}
        {isEmailSent && <img src={Check} className="check" />}
        <div
          className={
            isSendingEmail || isEmailSent
              ? 'low-opacity contact-form'
              : 'contact-form'
          }
        >
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
              <div className="send-btn__container">
                <button
                  disabled={
                    !mailerState.email ||
                    !mailerState.name ||
                    !mailerState.message
                  }
                  className={
                    mailerState.email && mailerState.name && mailerState.message
                      ? 'send-btn'
                      : 'send-btn--none'
                  }
                >
                  <span>Send</span>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
