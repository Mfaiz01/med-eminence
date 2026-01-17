import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PatientJourney = () => {
    const { t } = useTranslation("journey");

    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    // Animation variants (keep existing)
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const stepPopIn = {
        hidden: { scale: 0, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                duration: 0.5,
                type: "spring",
                stiffness: 200
            }
        }
    };

    const iconHoverAnimation = {
        initial: { scale: 1, rotate: 0 },
        hover: { 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
        }
    };

    const cardHoverAnimation = {
        initial: { y: 0 },
        hover: { 
            y: -5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            transition: { duration: 0.3 }
        }
    };

    const faqAnimation = {
        hidden: { opacity: 0, height: 0 },
        visible: { 
            opacity: 1, 
            height: "auto",
            transition: { duration: 0.4 }
        }
    };

    const benefitCardAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const checkmarkAnimation = {
        initial: { scale: 1 },
        hover: { 
            scale: [1, 1.2, 1],
            transition: { 
                duration: 0.5,
                repeat: 1,
                repeatType: "reverse"
            }
        }
    };

    // Get data with safe array handling (keep existing)
    const steps = t('steps', { returnObjects: true }) || [];
    const benefits = t('benefits.items', { returnObjects: true }) || [];
    const faqItems = t('faq.items', { returnObjects: true }) || [];

    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid patient-journey-header py-5 mb-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <motion.div 
                            className="col-lg-8 text-center mobile:col-12"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <motion.h1 
                                className="display-4 text-white mb-4 mobile:text-3xl mobile:mb-3"
                                variants={fadeInUp}
                            >
                                {t('header.title')}
                            </motion.h1>
                            <motion.p 
                                className="lead text-white mb-4 mobile:text-base mobile:leading-relaxed" 
                                style={{ fontSize: 'x-large' }}
                                variants={fadeInUp}
                                transition={{ delay: 0.2 }}
                            >
                                {t('header.subtitle')}
                            </motion.p>
                            <motion.div 
                                className="d-inline-flex text-white mobile:text-sm mobile:flex-wrap mobile:justify-center"
                                variants={fadeInUp}
                                transition={{ delay: 0.4 }}
                            >
                                <p className="m-0 mobile:mb-1"><a className="text-white" href="/">{t('breadcrumb.home')}</a></p>
                                <p className="m-0 px-2 mobile:px-1">/</p>
                                <p className="m-0">{t('breadcrumb.current')}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Patient Journey Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <motion.div 
                        className="text-center mx-auto mb-5 mobile:mb-4" 
                        style={{ maxWidth: '800px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('intro.tag')}</h5>
                        <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('intro.title')}</h1>
                        <motion.p 
                            className="fs-5 mobile:text-base mobile:leading-relaxed mobile:text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {t('intro.desc')}
                        </motion.p>
                    </motion.div>

                    {/* <!-- Journey Steps - Clean Layout --> */}
                    <div className="journey-container mobile:px-2">
                        {Array.isArray(steps) && steps.map((step, index) => {
                            const isLeft = index % 2 === 0;
                            
                            return (
                                <motion.div 
                                    key={index}
                                    className={`journey-step-card ${isLeft ? 'step-left' : 'step-right'} mobile:step-center`} 
                                    style={{ marginLeft: isLeft ? '0' : 'auto' }}
                                    variants={isLeft ? fadeInLeft : fadeInRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: Math.floor(index / 2) * 0.2 }}
                                >
                                    <motion.div 
                                        className="step-number mobile:text-2xl"
                                        variants={stepPopIn}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {index + 1}
                                    </motion.div>
                                    <motion.div 
                                        className="step-icon"
                                        variants={iconHoverAnimation}
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        <i className={`fas fa-${getStepIcon(index)} mobile:text-xl`}></i>
                                    </motion.div>
                                    <h3 className="step-title mobile:text-xl mobile:mb-2">{step.title}</h3>
                                    <p className="step-content mobile:text-sm">{step.desc}</p>

                                    <div className="step-support mobile:text-sm">
                                        <p><strong>{t('steps.supportTitle', { defaultValue: 'Our Support:' })}</strong></p>
                                        {Array.isArray(step.support) && step.support.map((item, supportIndex) => (
                                            <motion.p 
                                                key={supportIndex}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 + (supportIndex * 0.1) }}
                                            >
                                                <motion.i 
                                                    className="fas fa-check-circle text-primary me-2 mobile:text-sm"
                                                    variants={checkmarkAnimation}
                                                    initial="initial"
                                                    whileHover="hover"
                                                ></motion.i> <span className="mobile:text-sm">{item}</span>
                                            </motion.p>
                                        ))}
                                    </div>

                                    <div className="step-duration mobile:text-sm">
                                        <i className="fas fa-clock me-2"></i>{step.duration}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div 
                        className="text-center mt-5 pt-4 mobile:mt-4 mobile:pt-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="fs-5 mb-4 mobile:text-base mobile:mb-3">{t('steps.personalizedNote', { defaultValue: 'Each patient\'s journey is personalized based on medical needs, destination choice, and individual circumstances.' })}</p>
                        <motion.a 
                            href="/medical-enquiry" 
                            className="btn btn-primary rounded-pill py-3 px-5 mobile:py-2 mobile:px-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('cta.button')}
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            {/* <!-- Patient Journey End --> */}


            {/* <!-- Journey Benefits Start --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container">
                    <motion.div 
                        className="text-center mx-auto mb-5 mobile:mb-4" 
                        style={{ maxWidth: '800px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('benefits.sectionTitle', { defaultValue: 'Journey Benefits' })}</h5>
                        <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('benefits.title')}</h1>
                        <motion.p 
                            className="fs-5 mobile:text-base mobile:leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {t('benefits.subtitle', { defaultValue: 'Experience the advantages of a well-structured medical journey designed for your comfort and success.' })}
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="row g-4 mobile:g-3"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {Array.isArray(benefits) && benefits.map((benefit, index) => (
                            <motion.div 
                                key={index}
                                className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                                variants={benefitCardAnimation}
                            >
                                <motion.div 
                                    className="benefit-card mobile:p-3"
                                    variants={cardHoverAnimation}
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.div 
                                        className="benefit-icon mobile:mb-2"
                                        variants={iconHoverAnimation}
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        <i className={`fas fa-${getBenefitIcon(index)} mobile:text-xl`}></i>
                                    </motion.div>
                                    <h4 className="mb-3 mobile:text-lg mobile:mb-2">{benefit.title}</h4>
                                    <p className="mobile:text-sm" style={{textAlign: 'center'}}>{benefit.desc}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* <!-- Journey Benefits End --> */}


            {/* <!-- CTA Section Start --> */}
            <div className="container-fluid bg-primary my-5 py-5">
                <div className="container py-5">
                    <div className="row gx-5 align-items-center mobile:gx-0">
                        <motion.div 
                            className="col-lg-8 mb-5 mb-lg-0 mobile:col-12 mobile:mb-4"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-4 mobile:mb-3">
                                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">{t('cta.sectionTitle', { defaultValue: 'Ready to Begin?' })}</h5>
                                <h1 className="display-6 text-white mobile:text-3xl mobile:mt-2">{t('cta.title')}</h1>
                            </div>
                            <motion.p 
                                className="text-white fs-5 mb-4 mobile:text-base mobile:leading-relaxed mobile:mb-3 mobile:text-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                {t('cta.description', { defaultValue: 'Our structured patient journey ensures you receive timely, high-quality medical care with comprehensive support at every step.' })}
                            </motion.p>
                            <div className="d-flex flex-wrap gap-3 mobile:justify-center">
                                <motion.a 
                                    className="btn btn-dark rounded-pill py-3 px-5 mobile:py-2 mobile:px-4 mobile:w-full mobile:max-w-xs"
                                    href="/medical-enquiry"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('cta.submitEnquiry', { defaultValue: 'Submit Medical Enquiry' })}
                                </motion.a>
                                <motion.a 
                                    className="btn btn-outline-dark rounded-pill py-3 px-5 mobile:py-2 mobile:px-4 mobile:w-full mobile:max-w-xs"
                                    href="/medical-enquiry"
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: "rgba(0,0,0,0.1)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('cta.speakToCoordinator', { defaultValue: 'Speak to Journey Coordinator' })}
                                </motion.a>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="col-lg-4 mobile:col-12 mobile:mt-4"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div 
                                className="card border-0 shadow mobile:shadow-sm"
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <div className="card-body p-5 mobile:p-4">
                                    <h3 className="card-title mb-4 mobile:text-2xl mobile:mb-3">{t('timeline.title', { defaultValue: 'Journey Timeline' })}</h3>
                                    <div className="timeline-summary">
                                        <motion.p 
                                            className="mb-3 mobile:mb-2 mobile:text-sm"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {t('timeline.initialResponse', { defaultValue: 'Initial Response: Within 24 hours' })}
                                        </motion.p>
                                        <motion.p 
                                            className="mb-3 mobile:mb-2 mobile:text-sm"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {t('timeline.treatmentPlanning', { defaultValue: 'Treatment Planning: 3-5 business days' })}
                                        </motion.p>
                                        <motion.p 
                                            className="mb-3 mobile:mb-2 mobile:text-sm"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {t('timeline.travelArrangements', { defaultValue: 'Travel Arrangements: 1-3 weeks' })}
                                        </motion.p>
                                        <motion.p 
                                            className="mb-3 mobile:mb-2 mobile:text-sm"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {t('timeline.hospitalAdmission', { defaultValue: 'Hospital Admission: As per treatment schedule' })}
                                        </motion.p>
                                        <motion.p 
                                            className="mb-0 mobile:text-sm"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {t('timeline.followUpSupport', { defaultValue: 'Follow-up Support: Ongoing as needed' })}
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* <!-- CTA Section End --> */}


            {/* <!-- FAQ Section Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <motion.div 
                        className="text-center mx-auto mb-5 mobile:mb-4" 
                        style={{ maxWidth: "800px" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                            {t('faq.sectionTitle', { defaultValue: 'Common Questions' })}
                        </h5>
                        <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('faq.title')}</h1>
                    </motion.div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto mobile:col-12">
                            {Array.isArray(faqItems) && faqItems.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="faq-item mobile:mb-3"
                                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <motion.div
                                        className="faq-question mobile:text-base mobile:p-3"
                                        onClick={() => toggleFAQ(index)}
                                        whileHover={{ backgroundColor: "rgba(13, 110, 253, 0.05)" }}
                                    >
                                        {item.q}
                                        <motion.i 
                                            className="fas fa-chevron-down"
                                            animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        ></motion.i>
                                    </motion.div>
                                    <motion.div 
                                        className={`faq-answer mobile:text-sm mobile:p-3 ${openFAQ === index ? "show" : ""}`}
                                        variants={faqAnimation}
                                        initial="hidden"
                                        animate={openFAQ === index ? "visible" : "hidden"}
                                    >
                                        {item.a}
                                    </motion.div>
                                </motion.div>
                            ))}

                            <motion.div 
                                className="text-center mt-5 mobile:mt-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <p className="fs-5 mobile:text-base mobile:mb-3">{t('faq.moreQuestions', { defaultValue: 'Have more questions about the patient journey?' })}</p>
                                <motion.a 
                                    href="/medical-enquiry" 
                                    className="btn btn-primary rounded-pill py-3 px-5 mobile:py-2 mobile:px-4"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('faq.contactButton', { defaultValue: 'Contact Our Journey Coordinators' })}
                                </motion.a>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FAQ Section End --> */}
        </>
    )
}

// Helper functions for icons (keep existing)
const getStepIcon = (index) => {
    const icons = ['file-medical', 'user-md', 'calculator', 'passport', 'hospital', 'history'];
    return icons[index] || 'check-circle';
}

const getBenefitIcon = (index) => {
    const icons = ['clock', 'user-shield', 'hand-holding-usd', 'shield-alt', 'language', 'headset'];
    return icons[index] || 'check-circle';
}

export default PatientJourney;