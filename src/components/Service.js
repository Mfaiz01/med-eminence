import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation("services");

  // Animation variants
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
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardHoverAnimation = {
    initial: { y: 0 },
    hover: { 
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
      transition: { duration: 0.3 }
    }
  }

  const iconBounceAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
      transition: { 
        duration: 0.5,
        times: [0, 0.5, 1]
      }
    }
  }

  const stepPulseAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { 
        duration: 0.3,
        repeat: 1,
        repeatType: "reverse"
      }
    }
  }

  return (
    <>
     {/* <!-- Page Header Start --> */}
    <div className="container-fluid services-header py-5 mb-5">
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
                      style={{fontSize: 'x-large'}}
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
                        <p className="m-0 mobile:mb-1"><a className="text-white" href="/">{t('header.breadcrumbHome')}</a></p>
                        <p className="m-0 px-2 mobile:px-1">/</p>
                        <p className="m-0">{t('header.breadcrumbCurrent')}</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Services Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <motion.div 
              className="text-center mx-auto mb-5 mobile:mb-4" 
              style={{maxWidth: '800px'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('intro.tag')}</h5>
                <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('intro.title')}</h1>
                <motion.p 
                  className="fs-5 mobile:text-base mobile:leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t('intro.desc')}
                </motion.p>
            </motion.div>
            
            <motion.div 
              className="row g-5 mobile:g-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                {/* <!-- Service 1: Medical Case Review Coordination --> */}
                <motion.div 
                  className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                  variants={fadeInUp}
                >
                    <motion.div
                      className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                      variants={cardHoverAnimation}
                      initial="initial"
                      whileHover="hover"
                    >
                        <motion.div 
                          className="service-icon mb-4 mobile:mb-3"
                          variants={iconBounceAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <i className="fa fa-2x fa-file-medical text-white mobile:text-xl"></i>
                        </motion.div>
                        <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t('services.caseReview.title')}</h4>
                        <p className="m-0 px-3 mobile:px-2 mobile:text-base" style={{textAlign: 'left'}}>{t('services.caseReview.desc')}</p>
                    </motion.div>
                </motion.div>
                
                {/* <!-- Service 2: Hospital & Specialist Identification --> */}
                <motion.div 
                  className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                  variants={fadeInUp}
                >
                    <motion.div
                      className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                      variants={cardHoverAnimation}
                      initial="initial"
                      whileHover="hover"
                    >
                        <motion.div 
                          className="service-icon mb-4 mobile:mb-3"
                          variants={iconBounceAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <i className="fa fa-2x fa-hospital text-white mobile:text-xl"></i>
                        </motion.div>
                        <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t('services.hospitalMatching.title')}</h4>
                        <p className="m-0 px-3 mobile:px-2 mobile:text-base" style={{textAlign: 'left'}}>{t('services.hospitalMatching.desc')}</p>
                    </motion.div>
                </motion.div>
                
                {/* <!-- Service 3: Travel Planning Support --> */}
                <motion.div 
                  className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                  variants={fadeInUp}
                >
                    <motion.div
                      className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                      variants={cardHoverAnimation}
                      initial="initial"
                      whileHover="hover"
                    >
                        <motion.div 
                          className="service-icon mb-4 mobile:mb-3"
                          variants={iconBounceAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <i className="fa fa-2x fa-plane text-white mobile:text-xl"></i>
                        </motion.div>
                        <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t('services.costEstimation.title')}</h4>
                        <p className="m-0 px-3 mobile:px-2 mobile:text-base" style={{textAlign: 'left'}}>{t('services.costEstimation.desc')}</p>
                    </motion.div>
                </motion.div>
                
                {/* <!-- Service 4: Accommodation Coordination --> */}
                <motion.div 
                  className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                  variants={fadeInUp}
                >
                    <motion.div
                      className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                      variants={cardHoverAnimation}
                      initial="initial"
                      whileHover="hover"
                    >
                        <motion.div 
                          className="service-icon mb-4 mobile:mb-3"
                          variants={iconBounceAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <i className="fa fa-2x fa-hotel text-white mobile:text-xl"></i>
                        </motion.div>
                        <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t('services.visa.title')}</h4>
                        <p className="m-0 px-3 mobile:px-2 mobile:text-base" style={{textAlign: 'left'}}>{t('services.visa.desc')}</p>
                    </motion.div>
                </motion.div>
                
                {/* <!-- Service 5: Local Assistance During Stay --> */}
                <motion.div 
                  className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                  variants={fadeInUp}
                >
                    <motion.div
                      className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                      variants={cardHoverAnimation}
                      initial="initial"
                      whileHover="hover"
                    >
                        <motion.div 
                          className="service-icon mb-4 mobile:mb-3"
                          variants={iconBounceAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <i className="fa fa-2x fa-map-marker-alt text-white mobile:text-xl"></i>
                        </motion.div>
                        <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t('services.travel.title')}</h4>
                        <p className="m-0 px-3 mobile:px-2 mobile:text-base" style={{textAlign: 'left'}}>{t('services.travel.desc')}</p>
                    </motion.div>
                </motion.div>
                
                {/* <!-- Service 6: Post-Treatment Follow-Up Coordination --> */}
                <motion.div 
                  className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                  variants={fadeInUp}
                >
                    <motion.div
                      className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                      variants={cardHoverAnimation}
                      initial="initial"
                      whileHover="hover"
                    >
                        <motion.div 
                          className="service-icon mb-4 mobile:mb-3"
                          variants={iconBounceAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <i className="fa fa-2x fa-phone-alt text-white mobile:text-xl"></i>
                        </motion.div>
                        <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t('services.care.title')}</h4>
                        <p className="m-0 px-3 mobile:px-2 mobile:text-base" style={{textAlign: 'left'}}>{t('services.care.desc')}</p>
                    </motion.div>
                </motion.div>
                
                {/* <!-- Service 7: Language Support --> */}
                <motion.div 
                  className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                  variants={fadeInUp}
                >
                    <motion.div
                      className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                      variants={cardHoverAnimation}
                      initial="initial"
                      whileHover="hover"
                    >
                        <motion.div 
                          className="service-icon mb-4 mobile:mb-3"
                          variants={iconBounceAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <i className="fa fa-2x fa-language text-white mobile:text-xl"></i>
                        </motion.div>
                        <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t('services.language.title')}</h4>
                        <p className="m-0 px-3 mobile:px-2 mobile:text-base" style={{textAlign: 'left'}}>{t('services.language.desc')}</p>
                    </motion.div>
                </motion.div>
                
                {/* <!-- Service 8: Service Fees Information --> */}
                <motion.div 
                  className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                  variants={fadeInUp}
                >
                    <motion.div
                      className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                      variants={cardHoverAnimation}
                      initial="initial"
                      whileHover="hover"
                    >
                        <motion.div 
                          className="service-icon mb-4 mobile:mb-3"
                          variants={iconBounceAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <i className="fa fa-2x fa-file-invoice-dollar text-white mobile:text-xl"></i>
                        </motion.div>
                        <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t('services.followUp.title')}</h4>
                        <p className="m-0 px-3 mobile:px-2 mobile:text-base" style={{textAlign: 'left'}}>{t('services.followUp.desc')}</p>
                    </motion.div>
                </motion.div>
                
                {/* <!-- Service 9: Medical Costs Clarification --> */}
                <motion.div 
                  className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                  variants={fadeInUp}
                >
                    <motion.div
                      className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                      variants={cardHoverAnimation}
                      initial="initial"
                      whileHover="hover"
                    >
                        <motion.div 
                          className="service-icon mb-4 mobile:mb-3"
                          variants={iconBounceAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <i className="fa fa-2x fa-hand-holding-medical text-white mobile:text-xl"></i>
                        </motion.div>
                        <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t('services.local.title')}</h4>
                        <p className="m-0 px-3 mobile:px-2 mobile:text-base" style={{textAlign: 'left'}}>{t('services.local.desc')}</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </div>
    {/* <!-- Services End --> */}


    {/* <!-- How We Work Start --> */}
    <div className="container-fluid bg-light py-5">
        <div className="container">
            <motion.div 
              className="text-center mx-auto mb-5 mobile:mb-4" 
              style={{maxWidth: '800px'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('process.tag')}</h5>
                <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('process.title')}</h1>
                <motion.p 
                  className="fs-5 mobile:text-base mobile:leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t('process.desc')}
                </motion.p>
            </motion.div>
            
            <motion.div 
              className="row g-4 mobile:g-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div 
                  className="col-lg-3 col-md-6 mobile:col-12 mobile:mb-2"
                  variants={fadeInUp}
                >
                    <motion.div 
                      className="bg-white p-4 rounded text-center h-100 mobile:p-3"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                        transition: { duration: 0.3 }
                      }}
                    >
                        <motion.div 
                          className="step-number bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mobile:mb-3" 
                          style={{width: '60px', height: '60px'}}
                          variants={stepPulseAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <span className="text-white fs-4 fw-bold mobile:text-lg">1</span>
                        </motion.div>
                        <h5 className="mb-3 mobile:text-lg mobile:mb-2">{t('process.steps.one.title')}</h5>
                        <p className="mobile:text-sm" style={{textAlign: 'left'}}>{t('process.steps.one.desc')}</p>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                  className="col-lg-3 col-md-6 mobile:col-12 mobile:mb-2"
                  variants={fadeInUp}
                >
                    <motion.div 
                      className="bg-white p-4 rounded text-center h-100 mobile:p-3"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                        transition: { duration: 0.3 }
                      }}
                    >
                        <motion.div 
                          className="step-number bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mobile:mb-3" 
                          style={{width: '60px', height: '60px'}}
                          variants={stepPulseAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <span className="text-white fs-4 fw-bold mobile:text-lg">2</span>
                        </motion.div>
                        <h5 className="mb-3 mobile:text-lg mobile:mb-2">{t('process.steps.two.title')}</h5>
                        <p className="mobile:text-sm" style={{textAlign: 'left'}}>{t('process.steps.two.desc')}</p>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                  className="col-lg-3 col-md-6 mobile:col-12 mobile:mb-2"
                  variants={fadeInUp}
                >
                    <motion.div 
                      className="bg-white p-4 rounded text-center h-100 mobile:p-3"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                        transition: { duration: 0.3 }
                      }}
                    >
                        <motion.div 
                          className="step-number bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mobile:mb-3" 
                          style={{width: '60px', height: '60px'}}
                          variants={stepPulseAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <span className="text-white fs-4 fw-bold mobile:text-lg">3</span>
                        </motion.div>
                        <h5 className="mb-3 mobile:text-lg mobile:mb-2">{t('process.steps.three.title')}</h5>
                        <p className="mobile:text-sm" style={{textAlign: 'left'}}>{t('process.steps.three.desc')}</p>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                  className="col-lg-3 col-md-6 mobile:col-12 mobile:mb-2"
                  variants={fadeInUp}
                >
                    <motion.div 
                      className="bg-white p-4 rounded text-center h-100 mobile:p-3"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                        transition: { duration: 0.3 }
                      }}
                    >
                        <motion.div 
                          className="step-number bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mobile:mb-3" 
                          style={{width: '60px', height: '60px'}}
                          variants={stepPulseAnimation}
                          initial="initial"
                          whileHover="hover"
                        >
                            <span className="text-white fs-4 fw-bold mobile:text-lg">4</span>
                        </motion.div>
                        <h5 className="mb-3 mobile:text-lg mobile:mb-2">{t('process.steps.four.title')}</h5>
                        <p className="mobile:text-sm" style={{textAlign: 'left'}}>{t('process.steps.four.desc')}</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </div>
    {/* <!-- How We Work End --> */}


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
                        <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">{t('cta.tag')}</h5>
                        <h1 className="display-6 text-white mobile:text-3xl mobile:mt-2">{t('cta.title')}</h1>
                    </div>
                    <motion.p 
                      className="text-white fs-5 mb-4 mobile:text-base mobile:leading-relaxed mobile:mb-3 mobile:text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {t('cta.desc')}
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
                        {t('cta.primary')}
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
                        {t('cta.secondary')}
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
                      className="bg-white text-center rounded p-5 shadow mobile:p-4"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        <h3 className="mb-4 mobile:text-2xl mobile:mb-3">{t('whyServices.title')}</h3>
                        <div className="text-start mobile:text-center">
                            {t('whyServices.points', { returnObjects: true }).map((point, index) => (
                              <motion.p 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * (index + 1) }}
                                className="mobile:text-sm mobile:mb-1"
                              >
                                <i className="fa fa-check text-primary me-2"></i>{point}
                              </motion.p>
                            ))}
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
              style={{maxWidth: '800px'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('faq.tag')}</h5>
                <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('faq.title')}</h1>
            </motion.div>
            
            <div className="row">
                <motion.div 
                  className="col-lg-8 mx-auto mobile:col-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                    <div className="accordion" id="servicesFAQ">
                        {/* Render FAQ items from JSON */}
                        {t('faq.items', { returnObjects: true }).map((item, index) => (
                          <motion.div 
                            key={index}
                            className="accordion-item mb-3 border rounded mobile:mb-2"
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                          >
                              <h2 className="accordion-header" id={`heading${index}`}>
                                  <button className="accordion-button collapsed fs-5 mobile:text-base" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}>
                                      {item.q}
                                  </button>
                              </h2>
                              <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#servicesFAQ">
                                  <div className="accordion-body mobile:text-sm">
                                      {item.a}
                                  </div>
                              </div>
                          </motion.div>
                        ))}
                    </div>
                    
                    <motion.div 
                      className="text-center mt-5 mobile:mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                        <p className="fs-5 mobile:text-base mobile:mb-3">{t('faq.contact')}</p>
                        <motion.a 
                          href="/medical-enquiry" 
                          className="btn btn-primary rounded-pill py-3 px-5 mobile:py-2 mobile:px-4"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {t('faq.contact')}
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service;