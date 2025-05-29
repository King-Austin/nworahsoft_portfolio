import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Team() {
    const swiperRef = useRef(null);

    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Meet the talented professionals behind NworahSoft Technologies who bring innovation and expertise to every project</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-4 team-intro" data-aos="fade-right" data-aos-delay="200">
                        <div className="team-intro-content">
                            <h2>Meet Our Experts</h2>
                            <p>Our diverse team of skilled professionals combines years of experience with cutting-edge technology expertise. We are passionate about delivering exceptional solutions that drive business growth and success.</p>
                            <div className="team-navigation">
                                <button 
                                    className="team-nav-prev"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                                <button 
                                    className="team-nav-next"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 team-carousel-wrap">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Autoplay]}
                            className="team-carousel"
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="member-card">
                                    <div className="member-image">
                                        <img src="assets/img/person/person-m-3.webp" className="img-fluid" alt="Marcus Wilson" loading="lazy" />
                                    </div>
                                    <div className="member-info">
                                        <h3>Marcus Wilson</h3>
                                        <span>Chief Technology Officer</span>
                                        <div className="member-social">
                                            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                                            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                        <div className="member-bio">
                                            <p>Leading our technology strategy with 10+ years of experience in software architecture and digital transformation initiatives.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="member-card">
                                    <div className="member-image">
                                        <img src="assets/img/person/person-f-5.webp" className="img-fluid" alt="Sophia Reynolds" loading="lazy" />
                                    </div>
                                    <div className="member-info">
                                        <h3>Sophia Reynolds</h3>
                                        <span>Product Designer</span>
                                        <div className="member-social">
                                            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                                            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                        <div className="member-bio">
                                            <p>Creating intuitive user experiences and compelling visual designs that drive engagement and business results.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="member-card">
                                    <div className="member-image">
                                        <img src="assets/img/person/person-m-8.webp" className="img-fluid" alt="Daniel Chen" loading="lazy" />
                                    </div>
                                    <div className="member-info">
                                        <h3>Daniel Chen</h3>
                                        <span>Marketing Specialist</span>
                                        <div className="member-social">
                                            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                                            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                        <div className="member-bio">
                                            <p>Developing strategic marketing campaigns and building strong brand presence across digital platforms for maximum impact.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="member-card">
                                    <div className="member-image">
                                        <img src="assets/img/person/person-f-9.webp" className="img-fluid" alt="Olivia Thompson" loading="lazy" />
                                    </div>
                                    <div className="member-info">
                                        <h3>Olivia Thompson</h3>
                                        <span>Lead Developer</span>
                                        <div className="member-social">
                                            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                                            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                        <div className="member-bio">
                                            <p>Architecting robust software solutions and leading development teams to deliver high-quality, scalable applications.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="member-card">
                                    <div className="member-image">
                                        <img src="assets/img/person/person-m-12.webp" className="img-fluid" alt="Jason Parker" loading="lazy" />
                                    </div>
                                    <div className="member-info">
                                        <h3>Jason Parker</h3>
                                        <span>UI/UX Designer</span>
                                        <div className="member-social">
                                            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                                            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                        <div className="member-bio">
                                            <p>Crafting user-centered designs and seamless interfaces that enhance user satisfaction and drive business growth.</p>
                                        </div>
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