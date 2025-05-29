import React from 'react';

function Testimonials() {
    return (
        <section id="testimonials" className="testimonials section">
            <div className="container section-title" data-aos="fade-up">
                <h2>What Our Early Clients Say</h2>
                <p>Real feedback from our first projects - building trust one solution at a time</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-4 justify-content-center">
                    
                    {/* Testimonial 1 */}
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="testimonial-item">
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p>"NworahSoft delivered our business website exactly as promised. Fresh perspective, modern design, and excellent communication throughout the project. Great value for money!"</p>
                            <div className="testimonial-footer">
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        <span>CO</span>
                                    </div>
                                    <div>
                                        <h5>Chinedu O.</h5>
                                        <span>Small Business Owner</span>
                                    </div>
                                </div>
                                <div className="quote-icon">
                                    <i className="bi bi-quote"></i>
                                </div>
                            </div>
                        </div>
                    </div> 

                    {/* Testimonial 2 */}
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="testimonial-item">
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p>"Working with NworahSoft was refreshing. They listened to our needs, offered honest advice, and delivered a quality solution. Looking forward to future projects together."</p>
                            <div className="testimonial-footer">
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        <span>AO</span>
                                    </div>
                                    <div>
                                        <h5>Adaeze O.</h5>
                                        <span>Startup Founder</span>
                                    </div>
                                </div>
                                <div className="quote-icon">
                                    <i className="bi bi-quote"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Call to Action for More Reviews */}
                <div className="row mt-5">
                    <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="300">
                        <div className="reviews-cta">
                            <h4>Building Our Reputation, One Project at a Time</h4>
                            <p>We're a new company committed to excellence. Every project is an opportunity to prove our dedication to quality and client satisfaction.</p>
                            <div className="trust-indicators">
                                <div className="trust-item">
                                    <i className="bi bi-shield-check" style={{ color: '#f85d23' }}></i>
                                    <span>100% Project Completion</span>
                                </div>
                                <div className="trust-item">
                                    <i className="bi bi-clock" style={{ color: '#f85d23' }}></i>
                                    <span>On-Time Delivery</span>
                                </div>
                                <div className="trust-item">
                                    <i className="bi bi-chat-heart" style={{ color: '#f85d23' }}></i>
                                    <span>Personalized Service</span>
                                </div>
                            </div>
                            <a href="#contact" className="btn btn-primary mt-3">
                                <i className="bi bi-person-plus me-2"></i>
                                Be Our Next Success Story
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .testimonials {
                    padding: 80px 0;
                    background: #f8f9fa;
                }

                .section-title h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                }

                .section-title p {
                    font-size: 1.1rem;
                    color: #6c757d;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .testimonial-item {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 15px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    height: 100%;
                    position: relative;
                }

                .testimonial-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #f85d23, #ff8c42);
                    border-radius: 15px 15px 0 0;
                }

                .testimonial-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(248, 93, 35, 0.15);
                }

                .stars {
                    margin-bottom: 1.5rem;
                }

                .stars i {
                    color: #ffc107;
                    margin-right: 0.25rem;
                    font-size: 1.1rem;
                }

                .testimonial-item p {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: #555;
                    margin-bottom: 2rem;
                    font-style: italic;
                }

                .testimonial-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .testimonial-author {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .author-avatar {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #f85d23, #ff8c42);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 700;
                    font-size: 1.2rem;
                }

                .testimonial-author h5 {
                    margin: 0;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #2c3e50;
                }

                .testimonial-author span {
                    color: #6c757d;
                    font-size: 0.95rem;
                }

                .quote-icon {
                    color: rgba(248, 93, 35, 0.3);
                    font-size: 3rem;
                }

                .reviews-cta {
                    background: white;
                    padding: 3rem 2rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    margin: 0 auto;
                }

                .reviews-cta h4 {
                    color: #2c3e50;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }

                .reviews-cta p {
                    color: #6c757d;
                    font-size: 1.1rem;
                    margin-bottom: 2rem;
                }

                .trust-indicators {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                }

                .trust-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #6c757d;
                    font-weight: 500;
                }

                .trust-item i {
                    font-size: 1.2rem;
                }

                .btn-primary {
                    background: #f85d23;
                    border-color: #f85d23;
                    padding: 0.75rem 2rem;
                    font-weight: 600;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }

                .btn-primary:hover {
                    background: #e54a1a;
                    border-color: #e54a1a;
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .testimonial-item {
                        padding: 2rem 1.5rem;
                    }
                    
                    .trust-indicators {
                        flex-direction: column;
                        gap: 1rem;
                        align-items: center;
                    }
                    
                    .reviews-cta {
                        padding: 2rem 1rem;
                    }
                }
            `}</style>
        </section>
    )
}

export default Testimonials;