import React, { useState } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
   
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const [isSubmitting, setIsSubmitting] = useState(false);


    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

  
        setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);

        
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            
            return;
        }

        setIsSubmitting(true); 

        const dataToSubmit = {
            ...formData,
            access_key: "7bf8d802-2eb1-4e5c-8762-5cb6a45af8d2",
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(dataToSubmit),
            });
            const result = await res.json();

            if (result.success) {
                alert("Message sent successfully");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false); 
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="section">
                <div className="contact-details">
                    <h2>Let's Talk</h2>
                    <p>
                        I am currently able to take on new projects
                        <br />
                        or any software development task.
                        <br /> So feel free to reach out if you have any inquiry.
                        Thank you.
                    </p>
                    <div className="contact-detail">
                        <img src={mail_icon} alt="Email Icon" />
                        <p>obulken10@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="Phone Icon" />
                        <p>+254-741-255-424</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="Location Icon" />
                        <p>Nairobi, Kenya</p>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={onSubmit}>
                        <div className="div-form">
                            <label htmlFor="name">Name :</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>

                        <div className="div-form">
                            <label htmlFor="email">Email :</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="div-form">
                            <label htmlFor="message">Message :</label>
                            <textarea
                                name="message"
                                rows={8}
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Enter your message..."
                            ></textarea>
                            {errors.message && <p className="error">{errors.message}</p>}
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
