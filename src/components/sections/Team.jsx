function Team() {

    return (

        <section id="team" className="team section">

            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row">
                    <div className="col-lg-4 team-intro" data-aos="fade-right" data-aos-delay="200">
                        <div className="team-intro-content">
                            <h2>Meet Our Experts</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum dui sed justo finibus, in gravida felis iaculis. Suspendisse potenti.</p>
                            <div className="team-navigation">
                                <button className="team-nav-prev"><i className="bi bi-arrow-left"></i></button>
                                <button className="team-nav-next"><i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 team-carousel-wrap">
                        <div className="team-carousel swiper init-swiper">

                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="member-card">
                                        <div className="member-image">
                                            <img src="assets/img/person/person-m-3.webp" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="member-info">
                                            <h3>Marcus Wilson</h3>
                                            <span>Chief Technology Officer</span>
                                            <div className="member-social">
                                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                            <div className="member-bio">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="member-card">
                                        <div className="member-image">
                                            <img src="assets/img/person/person-f-5.webp" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="member-info">
                                            <h3>Sophia Reynolds</h3>
                                            <span>Product Designer</span>
                                            <div className="member-social">
                                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                            <div className="member-bio">
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="member-card">
                                        <div className="member-image">
                                            <img src="assets/img/person/person-m-8.webp" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="member-info">
                                            <h3>Daniel Chen</h3>
                                            <span>Marketing Specialist</span>
                                            <div className="member-social">
                                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                            <div className="member-bio">
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="member-card">
                                        <div className="member-image">
                                            <img src="assets/img/person/person-f-9.webp" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="member-info">
                                            <h3>Olivia Thompson</h3>
                                            <span>Lead Developer</span>
                                            <div className="member-social">
                                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                            <div className="member-bio">
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="member-card">
                                        <div className="member-image">
                                            <img src="assets/img/person/person-m-12.webp" className="img-fluid" alt="" loading="lazy" />
                                        </div>
                                        <div className="member-info">
                                            <h3>Jason Parker</h3>
                                            <span>UI/UX Designer</span>
                                            <div className="member-social">
                                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                            <div className="member-bio">
                                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Team;