import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        setSubmitError('');
        
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: 'NworahSoft Team',
            };

            const result = await emailjs.send(
                'service_qzjudzb',
                'template_zin7gnq',
                templateParams,
                'jYweeP8jxFb4b_mRQ'
            );

            console.log('Email sent successfully:', result.text);
            setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            setTimeout(() => setSubmitMessage(''), 5000);

        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitError('Sorry, there was an error sending your message. Please try again or contact us directly.');
            
            setTimeout(() => setSubmitError(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact section bg-light py-5">
            <div className="container" data-aos="fade-up">
                
                {/* Section Header */}
                <div className="row mb-5">
                    <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="display-5 fw-bold text-dark mb-3">Let's Start Your Project</h2>
                        <p className="lead text-muted">Ready to build something amazing? We'd love to hear about your project and discuss how we can help bring your ideas to life.</p>
                    </div>
                </div>

                <div className="row g-4">
                    
                    {/* Map and Contact Info */}
                    <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                        <div className="card border-0 shadow h-100">
                            <div className="card-body p-0">
                                {/* Google Map */}
                                <div className="map-container" style={{height: '250px', overflow: 'hidden'}}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3201.9008562536396!2d7.0798985738793245!3d6.233967493754231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1748561727452!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                                {/* Contact Information */}
                                <div className="p-4">
                                    <h4 className="text-dark mb-4">Get in Touch</h4>
                                    <p className="text-muted mb-4">
                                        We're a Nigerian startup committed to helping local businesses grow through technology. 
                                        Contact us for honest pricing and personalized service.
                                    </p>

                                    <div className="contact-info">
                                        <div className="contact-item mb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="contact-icon me-3">
                                                    <i className="bi bi-geo-alt-fill" style={{color: '#f85d23'}}></i>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 text-dark">Location</h6>
                                                    <p className="small text-muted mb-0">Nigeria</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="contact-item mb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="contact-icon me-3">
                                                    <i className="bi bi-envelope-fill" style={{color: '#f85d23'}}></i>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 text-dark">Email</h6>
                                                    <p className="small text-muted mb-0">nworahebuka.a@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="contact-item mb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="contact-icon me-3">
                                                    <i className="bi bi-telephone-fill" style={{color: '#f85d23'}}></i>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 text-dark">Phone</h6>
                                                    <p className="small text-muted mb-0">+234 (0) 913 484 6838</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="contact-item mb-4">
                                            <div className="d-flex align-items-center">
                                                <div className="contact-icon me-3">
                                                    <i className="bi bi-clock-fill" style={{color: '#f85d23'}}></i>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 text-dark">Response Time</h6>
                                                    <p className="small text-muted mb-0">Within 24 hours</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Why Choose Us */}
                                    <div className="why-contact-us">
                                        <h6 className="text-dark mb-3">Why Contact NworahSoft?</h6>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="text-center p-2 rounded" style={{backgroundColor: 'rgba(248, 93, 35, 0.1)'}}>
                                                    <i className="bi bi-chat-heart d-block mb-1" style={{color: '#f85d23'}}></i>
                                                    <small className="text-muted">Personal Service</small>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-center p-2 rounded" style={{backgroundColor: 'rgba(248, 93, 35, 0.1)'}}>
                                                    <i className="bi bi-currency-dollar d-block mb-1" style={{color: '#f85d23'}}></i>
                                                    <small className="text-muted">Fair Pricing</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
                        <div className="card border-0 shadow h-100">
                            <div className="card-body p-4">
                                <h4 className="text-dark mb-3">Tell Us About Your Project</h4>
                                <p className="text-muted mb-4">
                                    Whether it's a simple website, e-commerce platform, or custom web application, 
                                    we're here to help. Fill out the form below and let's start the conversation.
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label text-dark">Your Name *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="e.g. John Doe"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label text-dark">Email Address *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="col-12">
                                            <label htmlFor="subject" className="form-label text-dark">Project Type *</label>
                                            <select
                                                className="form-select"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select your project type</option>
                                                <option value="Business Website">Business Website</option>
                                                <option value="E-commerce Store">E-commerce Store</option>
                                                <option value="Web Application">Web Application</option>
                                                <option value="Portfolio Website">Portfolio Website</option>
                                                <option value="Blog/News Site">Blog/News Site</option>
                                                <option value="Other">Other (Please specify in message)</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label text-dark">Project Details *</label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                rows="6"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about your project goals, timeline, budget range, and any specific features you need..."
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* Form Status Messages */}
                                    {isSubmitting && (
                                        <div className="alert alert-info mt-3">
                                            <i className="bi bi-hourglass-split me-2"></i>
                                            Sending your message...
                                        </div>
                                    )}
                                    
                                    {submitMessage && (
                                        <div className="alert alert-success mt-3">
                                            <i className="bi bi-check-circle me-2"></i>
                                            {submitMessage}
                                        </div>
                                    )}

                                    {submitError && (
                                        <div className="alert alert-danger mt-3">
                                            <i className="bi bi-exclamation-triangle me-2"></i>
                                            {submitError}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-lg px-4"
                                            style={{backgroundColor: '#f85d23', borderColor: '#f85d23', color: 'white'}}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-send me-2"></i>
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                        
                                        <div className="text-muted">
                                            <small>
                                                <i className="bi bi-shield-check me-1"></i>
                                                Your information is secure
                                            </small>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="row mt-5">
                    <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="400">
                        <div className="card border-0 shadow-sm" style={{backgroundColor: 'rgba(248, 93, 35, 0.05)'}}>
                            <div className="card-body p-4">
                                <h5 className="text-dark mb-2">Prefer to Talk Directly?</h5>
                                <p className="text-muted mb-3">
                                    Schedule a free 30-minute consultation call to discuss your project in detail.
                                </p>
                                <a href="tel:+2349134846838" className="btn btn-outline-primary me-3" style={{borderColor: '#f85d23', color: '#f85d23'}}>
                                    <i className="bi bi-telephone me-2"></i>
                                    Call Now
                                </a>
                                <a href="https://wa.me/2349134846838" className="btn btn-success" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp me-2"></i>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;