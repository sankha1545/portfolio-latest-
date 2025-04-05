import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';
const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  // Manage the modal visibility
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled (the required attribute handles this too)
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      return;
    }

    // Prepare the email parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Replace with your actual EmailJS credentials
    emailjs.send('service_kjemeab', 'template_e1s6x5r', templateParams, 'fA_Qr4dTkF9FzO8Gv')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Show the modal popup with success message
        setShowModal(true);
        // Reset the form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, rgb(176, 170, 170), rgb(14, 14, 31))',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      padding: '40px 20px',
     contain:"content"
    }}>
    <h1 style={{
          textAlign: 'left',
          
          fontSize: '5rem',
          fontFamily: "thunder",
          color: "#eae8d6",
        }}>
          Let’s Connect   & Collaborate
        </h1>
        <img
          src="/tickets/baryellow.svg"
          className="baryellow"
       
          
        />
        <br/>
        
        <p className="message" style={{maxWidth:"500px",fontSize:"25px",}} >Thank you for reviewing my portfolio! I'm passionate about innovation and open to new opportunities. If you're a recruiter or organization seeking a skilled professional, feel free to reach out for recruitment inquiries, projects, or collaborations. I look forward to connecting!</p>
   
      <section style={{ maxWidth: '500px', margin: '0 auto', borderRadius: "40px",  }}>
        
        <div style={{
          backgroundColor: 'transparent',
          color: '#fff',
          padding: '30px',
          borderRadius: '28px',
          border: '0.2rem solid rgb(255, 255, 255)',
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontFamily:"thunder", fontSize:"25px" }}><span style={{color:"rgb(255, 5, 5)"}}> * </span>Name :</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '50px',
                  border: 'none',
                }} 
                required 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontFamily:"thunder", fontSize:"25px" }}><span style={{color:"rgb(255, 5, 5)"}}> * </span>Email :</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '50px',
                  border: 'none'
                }} 
                required 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontFamily:"thunder", fontSize:"25px" }}><span style={{color:"rgb(255, 5, 5)"}}> * </span>Phone :</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '50px',
                  border: 'none'
                }} 
                required 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontFamily:"thunder", fontSize:"25px" }}><span style={{color:"rgb(255, 5, 5)"}}> * </span>Message :  </label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '10px',
                  border: 'none'
                }} 
                required 
              />
            </div>
            <button 
              type="submit"
              className='submit-btn'
              style={{
                backgroundColor: '',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'block',
                margin: '0 auto',
                fontFamily: "thunder",
                fontSize: "2em",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Modal Popup for Success Message */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: '#fff',
            color: '#333',
            padding: '20px 30px',
            borderRadius: '8px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '90%',
          }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
              Your message is successfully sent. Thank You! 😇✌️
            </p>
            <button 
              onClick={() => setShowModal(false)}
              style={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: "thunder",
                fontSize: "1rem",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
