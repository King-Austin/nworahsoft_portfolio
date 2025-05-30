import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Team() {
    const swiperRef = useRef(null);

    return (
        <section id="team" className="team section bg-light py-5">
            <div className="container" data-aos="fade-up">
                
                {/* Section Header */}
                <div className="row mb-5">
                    <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="display-5 fw-bold text-dark mb-3">Meet Our Team</h2>
                        <p className="lead text-muted">The passionate developers and founders building NworahSoft Technologies</p>
                    </div>
                </div>

                <div className="row">
                    {/* Team Intro */}
                    <div className="col-lg-4 mb-4" data-aos="fade-right" data-aos-delay="200">
                        <div className="card h-100 border-0 shadow">
                            <div className="card-body p-4">
                                <h4 className="text-dark mb-3">Our Small but Mighty Team</h4>
                                <p className="text-muted mb-4">
                                    We're a startup with big dreams and modern skills. Every team member 
                                    is passionate about creating quality software solutions for Nigerian businesses.
                                </p>
                                
                                <div className="d-flex gap-2 mb-4">
                                    <button 
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => swiperRef.current?.swiper?.slidePrev()}
                                        style={{borderColor: '#f85d23', color: '#f85d23'}}
                                    >
                                        <i className="bi bi-arrow-left"></i>
                                    </button>
                                    <button 
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => swiperRef.current?.swiper?.slideNext()}
                                        style={{borderColor: '#f85d23', color: '#f85d23'}}
                                    >
                                        <i className="bi bi-arrow-right"></i>
                                    </button>
                                </div>

                                <div className="team-stats">
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <div className="text-center p-2 rounded" style={{backgroundColor: 'rgba(248, 93, 35, 0.1)'}}>
                                                <h6 className="mb-1" style={{color: '#f85d23'}}>2024</h6>
                                                <small className="text-muted">Founded</small>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-center p-2 rounded" style={{backgroundColor: 'rgba(248, 93, 35, 0.1)'}}>
                                                <h6 className="mb-1" style={{color: '#f85d23'}}>3+</h6>
                                                <small className="text-muted">Core Members</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Carousel */}
                    <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={20}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            {/* Founder/Lead Developer */}
                            <SwiperSlide>
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-body text-center p-4">
                                        <div className="mb-3">
                                            <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center" 
                                                 style={{
                                                     width: '100px', 
                                                     height: '100px', 
                                                     backgroundColor: '#f85d23',
                                                     color: 'white',
                                                     fontSize: '2rem',
                                                     fontWeight: 'bold'
                                                 }}>
                                                NEA
                                            </div>
                                        </div>
                                        <h5 className="text-dark mb-1">Nworah Ebuka .A</h5> 
                                        <p className="text-muted mb-3">Founder & Lead Developer</p>
                                        <p className="small text-muted mb-3">
                                            Full-stack developer passionate about building modern web applications 
                                            with React, Node.js, and Django. Founded NworahSoft to help Nigerian 
                                            businesses grow through technology.
                                        </p>
                                        <div className="d-flex justify-content-center gap-2">
                                            <a href="#" className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                            <a href="#" className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-github"></i>
                                            </a>
                                            <a href="#" className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-twitter-x"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Co-Founder/Designer */}
                            <SwiperSlide>
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-body text-center p-4">
                                        <div className="mb-3">
                                            <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center" 
                                                 style={{
                                                     width: '100px', 
                                                     height: '100px', 
                                                     backgroundColor: '#6c757d',
                                                     color: 'white',
                                                     fontSize: '2rem',
                                                     fontWeight: 'bold'
                                                 }}>
                                                JO
                                            </div>
                                        </div>
                                        <h5 className="text-dark mb-1">Jennifer Okoro</h5>
                                        <p className="text-muted mb-3">Co-Founder & UI/UX Designer</p>
                                        <p className="small text-muted mb-3">
                                            Creative designer focused on user experience and modern interfaces. 
                                            Ensures every project looks professional and provides excellent 
                                            user experience across all devices.
                                        </p>
                                        <div className="d-flex justify-content-center gap-2">
                                            <a href="#" className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                            <a href="#" className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-behance"></i>
                                            </a>
                                            <a href="#" className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-dribbble"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Backend Developer */}
                            <SwiperSlide>
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-body text-center p-4">
                                        <div className="mb-3">
                                            <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center" 
                                                 style={{
                                                     width: '100px', 
                                                     height: '100px', 
                                                     backgroundColor: '#28a745',
                                                     color: 'white',
                                                     fontSize: '2rem',
                                                     fontWeight: 'bold'
                                                 }}>
                                                CA
                                            </div>
                                        </div>
                                        <h5 className="text-dark mb-1">Chimaobi Anthony</h5>
                                        <p className="text-muted mb-3">Backend Developer</p>
                                        <p className="small text-muted mb-3">
                                            Specialist in server-side development, API design, and database 
                                            management. Expert in PHP, Laravel, and building scalable 
                                            backend systems for web applications. Top in the line
                                        </p>
                                        <div className="d-flex justify-content-center gap-2">
                                            <a href="#" className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                            <a href="#" className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-github"></i>
                                            </a>
                                            <a href="#" className="btn btn-sm btn-outline-secondary">
                                                <i className="bi bi-stack-overflow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Future Team Member */}
                            <SwiperSlide>
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-body text-center p-4">
                                        <div className="mb-3">
                                            <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center" 
                                                 style={{
                                                     width: '100px', 
                                                     height: '100px', 
                                                     backgroundColor: '#e9ecef',
                                                     color: '#6c757d',
                                                     fontSize: '2rem'
                                                 }}>
                                                <i className="bi bi-plus-lg"></i>
                                            </div>
                                        </div>
                                        <h5 className="text-dark mb-1">Join Our Team</h5>
                                        <p className="text-muted mb-3">We're Growing!</p>
                                        <p className="small text-muted mb-3">
                                            We're looking for talented developers, designers, and digital 
                                            marketers to join our growing team. Be part of building the 
                                            future of Nigerian tech.
                                        </p>
                                        <a href="#contact" className="btn btn-sm" style={{backgroundColor: '#f85d23', color: 'white'}}>
                                            <i className="bi bi-envelope me-1"></i>
                                            Get In Touch
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;