import { useState } from 'react';
import { Collapse } from 'react-collapse';

function FAQ() {
    const [activeTab, setActiveTab] = useState('general');
    const [openItem, setOpenItem] = useState(null); // Changed from openItems to openItem

    const toggleItem = (tabKey, itemIndex) => {
        const key = `${tabKey}-${itemIndex}`;
        // If clicking the same item, close it. Otherwise, open the new one.
        setOpenItem(openItem === key ? null : key);
    };

    const faqData = {
        general: [
            {
                question: 'What makes NworahSoft Technologies different from other software companies?',
                answer: 'We combine cutting-edge technology with personalized service. Our team takes time to understand your unique business needs and delivers custom solutions that drive real results. We focus on building long-term partnerships rather than just completing projects.'
            },
            {
                question: 'Do you work with small businesses and startups?',
                answer: 'Absolutely! We specialize in helping small businesses and startups establish their digital presence. We offer scalable solutions that grow with your business, from simple websites to complex enterprise applications. Our flexible pricing and phased development approach make professional technology solutions accessible to businesses of all sizes.'
            },
            {
                question: 'How long does it typically take to complete a project?',
                answer: 'Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications may take 2-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.'
            }
        ],
        services: [
            {
                question: 'What web development services do you offer?',
                answer: 'We offer comprehensive web development services including responsive websites, e-commerce platforms, web applications, content management systems, and API development. We work with modern technologies like React, Node.js, and various content management systems.'
            },
            {
                question: 'Do you provide mobile app development?',
                answer: 'Yes, we develop both native and cross-platform mobile applications for iOS and Android. We also specialize in progressive web apps (PWAs) that provide app-like experiences through web browsers.'
            },
            {
                question: 'Can you help with digital marketing and SEO?',
                answer: 'While our primary focus is software development, we implement SEO-friendly code and can provide basic digital marketing guidance. For comprehensive marketing campaigns, we can recommend trusted partners in our network.'
            }
        ],
        pricing: [
            {
                question: 'How do you structure your pricing?',
                answer: 'We offer flexible pricing options including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements. We provide detailed quotes after understanding your needs.'
            },
            {
                question: 'Do you require full payment upfront?',
                answer: 'No, we typically work with milestone-based payments. Common structure is 30% upfront, 40% at mid-project, and 30% on completion. For larger projects, we can arrange additional payment milestones to ease cash flow. This approach ensures both parties are protected and progress is maintained throughout the project.'
            },
            {
                question: 'Are there any hidden costs or additional fees?',
                answer: 'We believe in transparent pricing. All costs are outlined in our initial proposal, including any third-party services, hosting, or licensing fees. Additional costs only occur if you request changes outside the original scope.'
            }
        ],
        support: [
            {
                question: 'What kind of support do you provide after project completion?',
                answer: 'We provide comprehensive post-launch support including bug fixes, security updates, performance monitoring, and technical assistance. Support packages range from basic maintenance to full ongoing development partnerships. All projects include a 30-day warranty period for bug fixes and minor adjustments at no additional cost.'
            },
            {
                question: 'How quickly do you respond to support requests?',
                answer: 'Our standard response time is within 24 hours for non-urgent issues and within 4 hours for critical problems. For clients with premium support packages, we offer faster response times and priority handling.'
            },
            {
                question: 'Can you help train our team to use the new system?',
                answer: 'Absolutely! We provide comprehensive training sessions, documentation, and video tutorials. Training can be conducted in-person, via video calls, or through recorded sessions depending on your preferences and needs. We ensure your team is comfortable and confident using the new system before we consider the project complete.'
            }
        ]
    };

    const tabs = [
        { key: 'general', label: 'General', shortLabel: 'Info', icon: 'bi-question-circle' },
        { key: 'services', label: 'Services', shortLabel: 'Work', icon: 'bi-gear' },
        { key: 'pricing', label: 'Pricing', shortLabel: 'Cost', icon: 'bi-credit-card' },
        { key: 'support', label: 'Support', shortLabel: 'Help', icon: 'bi-headset' }
    ];

    return (
        <section id="faq" className="faq section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Frequently Asked Questions</h2>
                <p>Get answers to the most common questions about our services, pricing, and support</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        
                        {/* Tab Navigation */}
                        <div className="faq-tabs mb-5">
                            <ul className="nav nav-pills d-flex justify-content-center" style={{flexWrap: 'nowrap', overflowX: 'auto', gap: '0.5rem'}}>
                                {tabs.map((tab) => (
                                    <li key={tab.key} className="nav-item flex-shrink-0">
                                        <button 
                                            className={`nav-link px-2 px-md-3 ${activeTab === tab.key ? 'active' : ''}`}
                                            onClick={() => {
                                                setActiveTab(tab.key);
                                                setOpenItem(null); // Close any open FAQ when switching tabs
                                            }}
                                        >
                                            <i className={`bi ${tab.icon} me-1 me-md-2`}></i>
                                            <span className="d-none d-sm-inline">{tab.label}</span>
                                            <span className="d-sm-none">{tab.shortLabel}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* FAQ Content */}
                        <div className="faq-content">
                            <div className="faq-list">
                                {faqData[activeTab]?.map((faq, index) => {
                                    const itemKey = `${activeTab}-${index}`;
                                    const isOpen = openItem === itemKey; // Only one item can be open
                                    
                                    return (
                                        <div 
                                            key={itemKey}
                                            className="faq-item" 
                                            data-aos="fade-up" 
                                            data-aos-delay={200 + (index * 100)}
                                        >
                                            <h3 
                                                className="faq-question" 
                                                onClick={() => toggleItem(activeTab, index)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <span className="num">{index + 1}</span>
                                                <span className="question">{faq.question}</span>
                                                <i className={`bi ${isOpen ? 'bi-dash-lg' : 'bi-plus-lg'} faq-toggle`}></i>
                                            </h3>
                                            
                                            <Collapse isOpened={isOpen}>
                                                <div className="faq-content-inner" style={{ padding: '1rem 0' }}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </Collapse>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="faq-cta text-center mt-5" data-aos="fade-up" data-aos-delay="300">
                            <p>Still have questions? We're here to help!</p>
                            <a href="#contact" className="btn btn-primary">Contact Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;