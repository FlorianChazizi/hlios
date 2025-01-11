'use client';

import '../styles/contactus.css';

const ContactUs = () => {
  return (
    <section className="contact-us-section" id='contactus'>
      <div className="contact-header">
        <h2>Επικοινωνία</h2>
        <p>Είμαστε εδώ για να σας εξυπηρετήσουμε. Επικοινωνήστε μαζί μας!</p>
      </div>
      <div className="contact-info">
        <div className="contact-card">
          <h3>Τηλέφωνο</h3>
          <p>
            <a href="tel:+302410811450">+30 2410811450</a>
          </p>
        </div>
        <div className="contact-card">
          <h3>Email</h3>
          <p>
            <a href="mailto:info@heliosnuts.gr">info@heliosnuts.gr</a>
          </p>
        </div>
        <div className="contact-card">
          <h3>Διεύθυνση</h3>
          <p>28ης Οκτωβρίου 41, Τρίκαλα, 421 00</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
