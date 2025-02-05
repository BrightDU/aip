import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import strings from "../../translations"; // Assuming translations include modal text

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorCode, setErrorCode] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      setSuccess(true);
    } else {
      setErrorCode(strings.errorMessage); // Use dynamic text for error message
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ marginTop: '50px' }}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose} style={{ marginTop: '20px' }}>
          ×
        </button>
        <div className="contact-box text-center">
          {!success && (
            <form id="contact-form">
              <div className="contact-top">
                <h3 className="contact-title">{strings.getStartedTitle}</h3>
                <p className="contact-subtitle">{strings.getStartedSubtitle}</p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  onChange={handleInputChange}
                  placeholder={strings.namePlaceholder} // Dynamic placeholder text
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  onChange={handleInputChange}
                  placeholder={strings.emailPlaceholder} // Dynamic placeholder text
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="phone"
                  onChange={handleInputChange}
                  placeholder={strings.phonePlaceholder} // Dynamic placeholder text
                  required
                />
              </div>
              <div className="text-center">
                <ReCAPTCHA
                  sitekey="6LcDd_wcAAAAAHf2AWegpgm7j3p4BSySKahdn0QT"
                  onChange={() => setSubmitEnabled(true)}
                />
              </div>
              <button
                className="send-btn"
                type="button"
                onClick={handleSubmit}
                disabled={!submitEnabled}
              >
                {strings.submitButton} {/* Dynamic button text */}
              </button>
            </form>
          )}
          {success && <p>{strings.successMessage}</p>} {/* Dynamic success message */}
          {errorCode && <p style={{ color: "red" }}>{errorCode}</p>} {/* Dynamic error message */}
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7); /* Adjust opacity here */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: rgba(255, 255, 255, 0.9); /* Slight transparency for content */
          border-radius: 16px;
          width: 1300px; /* Increased width */
          max-width: 95%; /* Ensures it stays responsive on smaller screens */
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Adding shadow */
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #000; /* Contrasting color for visibility */
        }
        .contact-title {
          font-family: "Roboto", sans-serif;
          font-size: 18px;
          font-weight: bold;
          color: #1d2130;
          text-align: center;
          margin-bottom: 8px;
        }
        .contact-subtitle {
          font-family: "Roboto", sans-serif;
          font-size: 14px;
          font-weight: lighter;
          color: #1d2130;
          text-align: center;
          margin-bottom: 16px;
        }
        .form-input {
          width: 100%;
          max-width: 400px;
          height: 50px;
          border: 1px solid #0d1716;
          border-radius: 8px;
          font-family: "Roboto", sans-serif;
          font-size: 15px;
          padding: 0 16px;
          color: #000000;
          margin-bottom: 16px;
        }
        .form-input::placeholder {
          color: #aaa; /* Subtle placeholder color */
        }
        .send-btn {
          width: 100%;
          max-width: 400px;
          height: 50px;
          background-color: #008d7f;
          border: none;
          border-radius: 8px;
          font-family: "Roboto", sans-serif;
          font-size: 18px;
          font-weight: bold;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .send-btn:hover {
          background-color: #007a6d; /* Slightly darker on hover */
        }
        .send-btn:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Modal;



