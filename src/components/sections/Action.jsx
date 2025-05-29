import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function CallToAction() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <section id="call-to-action" className="call-to-action section" style={{backgroundColor: '#f85d23'}}>
            <div className="container py-5" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">
                    
                    {/* Content */}
                    <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
                        <div className="text-white">
                            <h2 className="display-5 fw-bold mb-3">Ready to Build Your Next Project?</h2>
                            <p className="lead mb-4">
                                We're a new company with fresh ideas and modern skills. Let's create something 
                                amazing together - from simple websites to complex web applications.
                            </p>
                            
                            <div className="row g-3 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                                        <span>Honest pricing, no hidden costs</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                                        <span>Direct communication with founders</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                                        <span>Modern technology stack</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                                        <span>Flexible payment options</span>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-wrap gap-3">
                                <a href="#contact" className="btn btn-light btn-lg px-4">
                                    <i className="bi bi-chat-dots me-2"></i>
                                    Start Your Project
                                </a>
                                <a href="#portfolio" className="btn btn-outline-light btn-lg px-4">
                                    <i className="bi bi-eye me-2"></i>
                                    See Our Work
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stats with Counters */}
                    <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
                        <div className="text-center text-white">
                            <div className="mb-4">
                                <i className="bi bi-rocket-takeoff" style={{fontSize: '4rem'}}></i>
                            </div>
                            
                            <div className="row g-3" ref={ref}>
                                <div className="col-6">
                                    <div className="bg-white bg-opacity-10 rounded p-3">
                                        <h3 className="fw-bold mb-1">
                                            {inView && <CountUp start={2020} end={2024} duration={2} />}
                                        </h3>
                                        <small>Founded</small>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="bg-white bg-opacity-10 rounded p-3">
                                        <h3 className="fw-bold mb-1">
                                            {inView && <CountUp start={0} end={5} duration={2.5} />}
                                            <span>+</span>
                                        </h3>
                                        <small>Happy Clients</small>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="bg-white bg-opacity-10 rounded p-3">
                                        <h3 className="fw-bold mb-1">
                                            {inView && <CountUp start={0} end={8} duration={2.5} />}
                                            <span>+</span>
                                        </h3>
                                        <small>Projects Done</small>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="bg-white bg-opacity-10 rounded p-3">
                                        <h3 className="fw-bold mb-1">
                                            {inView && <CountUp start={0} end={10} duration={3} />}
                                            <span>+</span>
                                        </h3>
                                        <small>Technologies</small>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="small mb-0 opacity-75">
                                    <i className="bi bi-shield-check me-1"></i>
                                    Trusted by startups and small businesses
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="row mt-5 pt-4 border-top border-white border-opacity-25">
                    <div className="col-12 text-center text-white" data-aos="fade-up" data-aos-delay="400">
                        <h5 className="mb-3">Why Choose NworahSoft?</h5>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <i className="bi bi-lightning-charge-fill fs-1 mb-2 d-block"></i>
                                <h6>Fast Delivery</h6>
                                <small className="opacity-75">Quick turnaround times</small>
                            </div>
                            <div className="col-md-3">
                                <i className="bi bi-currency-dollar fs-1 mb-2 d-block"></i>
                                <h6>Fair Pricing</h6>
                                <small className="opacity-75">Startup-friendly rates</small>
                            </div>
                            <div className="col-md-3">
                                <i className="bi bi-chat-heart-fill fs-1 mb-2 d-block"></i>
                                <h6>Personal Touch</h6>
                                <small className="opacity-75">Direct founder involvement</small>
                            </div>
                            <div className="col-md-3">
                                <i className="bi bi-arrow-up-circle-fill fs-1 mb-2 d-block"></i>
                                <h6>Growth Focus</h6>
                                <small className="opacity-75">Built for scalability</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CallToAction;