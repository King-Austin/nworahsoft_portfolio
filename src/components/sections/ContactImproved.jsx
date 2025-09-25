import React, { useState, useCallback, useRef, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact = memo(() => {
  const formRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitMessage: '',
    submitError: '',
    touched: {}
  });

  // Validation rules
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Name must be at least 2 characters and contain only letters'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    subject: {
      required: true,
      minLength: 5,
      message: 'Subject must be at least 5 characters'
    },
    message: {
      required: true,
      minLength: 10,
      message: 'Message must be at least 10 characters'
    }
  };

  // Validate single field
  const validateField = useCallback((name, value) => {
    const rule = validationRules[name];
    if (!rule) return '';

    if (rule.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (rule.minLength && value.length < rule.minLength) {
      return rule.message;
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.message;
    }

    return '';
  }, []);

  // Handle input changes with validation
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Mark field as touched
    setFormState(prev => ({
      ...prev,
      touched: { ...prev.touched, [name]: true }
    }));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {};
    Object.keys(validationRules).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({
        ...prev,
        submitError: 'Please fix the errors below',
        touched: Object.keys(validationRules).reduce((acc, field) => ({ ...acc, [field]: true }), {})
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitMessage: '',
      submitError: ''
    }));

    try {
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: 'NworahSoft Team',
        reply_to: formData.email.trim()
      };

      const result = await emailjs.send(
        'service_qzjudzb',
        'template_zin7gnq',
        templateParams,
        'jYweeP8jxFb4b_mRQ'
      );

      console.log('Email sent successfully:', result.text);

      setFormState(prev => ({
        ...prev,
        submitMessage: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
        isSubmitting: false
      }));

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormState(prev => ({ ...prev, touched: {} }));

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitMessage: '' }));
      }, 5000);

    } catch (error) {
      console.error('EmailJS error:', error);
      setFormState(prev => ({
        ...prev,
        submitError: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
        isSubmitting: false
      }));

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitError: '' }));
      }, 5000);
    }
  }, [formData, validateField]);

  // Get field error
  const getFieldError = useCallback((fieldName) => {
    if (!formState.touched[fieldName]) return '';
    return validateField(fieldName, formData[fieldName]);
  }, [formState.touched, formData, validateField]);

  return (
    <section
      id="contact"
      className="contact section bg-light py-5"
      ref={ref}
      aria-labelledby="contact-title"
    >
      <div className="container" data-aos="fade-up">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="100">
            <h2 id="contact-title" className="display-5 fw-bold text-dark mb-3">
              Let's Start Your Project
            </h2>
            <p className="lead text-muted">
              Ready to build something amazing? We'd love to hear about your project and discuss
              how we can help bring your ideas to life.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Map and Contact Info */}
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
            <div className="card border-0 shadow h-100">
              <div className="card-body p-0">
                {/* Google Map */}
                <div
                  className="map-container"
                  style={{height: '250px', overflow: 'hidden', borderRadius: '0.375rem 0.375rem 0 0'}}
                  role="img"
                  aria-label="NworahSoft Technologies location map"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3201.9008562536396!2d7.0798985738793245!3d6.233967493754231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1748561727452!5m2!1sen!2sng"
                    width="100%"
                    height="250"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NworahSoft Technologies Location"
                  ></iframe>
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
                      <i className="bi bi-geo-alt-fill me-3 text-primary" style={{color: '#f85d23 !important'}} aria-hidden="true"></i>
                      <div>
                        <strong>Address</strong><br />
                        <span>Awka, Nigeria</span>
                      </div>
                    </div>

                    <div className="contact-item mb-3">
                      <i className="bi bi-envelope-fill me-3 text-primary" style={{color: '#f85d23 !important'}} aria-hidden="true"></i>
                      <div>
                        <strong>Email</strong><br />
                        <a href="mailto:@nworahsoft.com" className="text-decoration-none">
                          nworahebuka.a@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="contact-item mb-3">
                      <i className="bi bi-telephone-fill me-3 text-primary" style={{color: '#f85d23 !important'}} aria-hidden="true"></i>
                      <div>
                        <strong>Phone</strong><br />
                        <a href="tel:+2349134846838" className="text-decoration-none">
                          +2349134846838
                        </a>
                      </div>
                    </div>

                    <div className="contact-item">
                      <i className="bi bi-clock-fill me-3 text-primary" style={{color: '#f85d23 !important'}} aria-hidden="true"></i>
                      <div>
                        <strong>Business Hours</strong><br />
                        <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <h4 className="card-title mb-4">Send us a Message</h4>

                {/* Status Messages */}
                {formState.submitMessage && (
                  <div className="alert alert-success" role="alert" aria-live="polite">
                    <i className="bi bi-check-circle me-2" aria-hidden="true"></i>
                    {formState.submitMessage}
                  </div>
                )}

                {formState.submitError && (
                  <div className="alert alert-danger" role="alert" aria-live="polite">
                    <i className="bi bi-exclamation-triangle me-2" aria-hidden="true"></i>
                    {formState.submitError}
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${getFieldError('name') ? 'is-invalid' : formState.touched.name && !getFieldError('name') ? 'is-valid' : ''}`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        aria-describedby={getFieldError('name') ? "name-error" : undefined}
                        aria-invalid={!!getFieldError('name')}
                      />
                      {getFieldError('name') && (
                        <div id="name-error" className="invalid-feedback">
                          {getFieldError('name')}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${getFieldError('email') ? 'is-invalid' : formState.touched.email && !getFieldError('email') ? 'is-valid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        aria-describedby={getFieldError('email') ? "email-error" : undefined}
                        aria-invalid={!!getFieldError('email')}
                      />
                      {getFieldError('email') && (
                        <div id="email-error" className="invalid-feedback">
                          {getFieldError('email')}
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">
                        Subject <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${getFieldError('subject') ? 'is-invalid' : formState.touched.subject && !getFieldError('subject') ? 'is-valid' : ''}`}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        aria-describedby={getFieldError('subject') ? "subject-error" : undefined}
                        aria-invalid={!!getFieldError('subject')}
                      />
                      {getFieldError('subject') && (
                        <div id="subject-error" className="invalid-feedback">
                          {getFieldError('subject')}
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className={`form-control ${getFieldError('message') ? 'is-invalid' : formState.touched.message && !getFieldError('message') ? 'is-valid' : ''}`}
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        aria-describedby={getFieldError('message') ? "message-error" : undefined}
                        aria-invalid={!!getFieldError('message')}
                      ></textarea>
                      {getFieldError('message') && (
                        <div id="message-error" className="invalid-feedback">
                          {getFieldError('message')}
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={formState.isSubmitting}
                        aria-describedby="submit-help"
                      >
                        {formState.isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2" aria-hidden="true"></i>
                            Send Message
                          </>
                        )}
                      </button>
                      <div id="submit-help" className="form-text">
                        We'll get back to you within 24 hours.
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for Contact Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "NworahSoft Technologies",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-XXX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": "English",
              "contactOption": "TollFree"
            }
          }
        })}
      </script>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
