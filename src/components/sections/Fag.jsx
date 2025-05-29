function FAQ() {

    return (

        <section id="faq" className="faq section">


            <div className="container section-title" data-aos="fade-up">
                <h2>Frequently Asked Questions</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row justify-content-center">
                    <div className="col-lg-10">

                        <div className="faq-tabs mb-5">
                            <ul className="nav nav-pills justify-content-center" id="faqTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="general-tab" data-bs-toggle="pill" data-bs-target="#faq-general" type="button" role="tab" aria-controls="general" aria-selected="true">
                                        <i className="bi bi-question-circle me-2"></i>General
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pricing-tab" data-bs-toggle="pill" data-bs-target="#faq-pricing" type="button" role="tab" aria-controls="pricing" aria-selected="false">
                                        <i className="bi bi-credit-card me-2"></i>Pricing
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="support-tab" data-bs-toggle="pill" data-bs-target="#faq-support" type="button" role="tab" aria-controls="support" aria-selected="false">
                                        <i className="bi bi-headset me-2"></i>Support
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content" id="faqTabContent">

                            <div className="tab-pane fade show active" id="faq-general" role="tabpanel" aria-labelledby="general-tab">
                                <div className="faq-list">

                                    <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                                        <h3>
                                            <span className="num">1</span>
                                            <span className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span>
                                            <i className="bi bi-plus-lg faq-toggle"></i>
                                        </h3>
                                        <div className="faq-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                                        </div>
                                    </div>

                                    <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
                                        <h3>
                                            <span className="num">2</span>
                                            <span className="question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span>
                                            <i className="bi bi-plus-lg faq-toggle"></i>
                                        </h3>
                                        <div className="faq-content">
                                            <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.</p>
                                            <p>Mauris ultrices eros in cursus turpis massa tincidunt dui. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et netus et malesuada.</p>
                                        </div>
                                    </div>

                                    <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
                                        <h3>
                                            <span className="num">3</span>
                                            <span className="question">Dolor sit amet consectetur adipiscing elit pellentesque?</span>
                                            <i className="bi bi-plus-lg faq-toggle"></i>
                                        </h3>
                                        <div className="faq-content">
                                            <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.</p>
                                            <p>Mauris ultrices eros in cursus turpis massa tincidunt dui. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et netus et malesuada.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="tab-pane fade" id="faq-pricing" role="tabpanel" aria-labelledby="pricing-tab">
                                <div className="faq-list">

                                    <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                                        <h3>
                                            <span className="num">1</span>
                                            <span className="question">Ac odio tempor orci dapibus ultrices in iaculis?</span>
                                            <i className="bi bi-plus-lg faq-toggle"></i>
                                        </h3>
                                        <div className="faq-content">
                                            <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</p>
                                        </div>
                                    </div>

                                    <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
                                        <h3>
                                            <span className="num">2</span>
                                            <span className="question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</span>
                                            <i className="bi bi-plus-lg faq-toggle"></i>
                                        </h3>
                                        <div className="faq-content">
                                            <p>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.</p>
                                            <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan.</p>
                                        </div>
                                    </div>

                                    <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
                                        <h3>
                                            <span className="num">3</span>
                                            <span className="question">Varius vel pharetra vel turpis nunc eget lorem dolor?</span>
                                            <i className="bi bi-plus-lg faq-toggle"></i>
                                        </h3>
                                        <div className="faq-content">
                                            <p>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="tab-pane fade" id="faq-support" role="tabpanel" aria-labelledby="support-tab">
                                <div className="faq-list">

                                    <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                                        <h3>
                                            <span className="num">1</span>
                                            <span className="question">Tortor vitae purus faucibus ornare suspendisse sed nisi lacus?</span>
                                            <i className="bi bi-plus-lg faq-toggle"></i>
                                        </h3>
                                        <div className="faq-content">
                                            <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                                            <p>Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est.</p>
                                        </div>
                                    </div>

                                    <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
                                        <h3>
                                            <span className="num">2</span>
                                            <span className="question">Tortor dignissim convallis aenean et tortor at risus viverra?</span>
                                            <i className="bi bi-plus-lg faq-toggle"></i>
                                        </h3>
                                        <div className="faq-content">
                                            <p>In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit.</p>
                                        </div>
                                    </div>

                                    <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
                                        <h3>
                                            <span className="num">3</span>
                                            <span className="question">Venenatis urna cursus eget nunc scelerisque viverra mauris in?</span>
                                            <i className="bi bi-plus-lg faq-toggle"></i>
                                        </h3>
                                        <div className="faq-content">
                                            <p>Mauris ultrices eros in cursus turpis massa tincidunt dui. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et netus et malesuada.</p>
                                            <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="faq-cta text-center mt-5" data-aos="fade-up" data-aos-delay="300">
                            <p>Still have questions? We're here to help!</p>
                            <a href="#" className="btn btn-primary">Contact Support</a>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default FAQ;