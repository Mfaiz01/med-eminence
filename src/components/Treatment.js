import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";

const Treatment = () => {
  const { t } = useTranslation("treatments");

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
        delayChildren: 0.1
      }
    }
  }

  const cardHoverAnimation = {
    initial: { y: 0 },
    hover: { 
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 }
    }
  }

  const imageHoverAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.5 }
    }
  }

  const iconPulseAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: [1, 1.1, 1],
      transition: { 
        duration: 0.5,
        repeat: 1,
        repeatType: "reverse"
      }
    }
  }

  const overlayAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  }

  const checkmarkAnimation = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  const stepIconAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  }

  // Treatment specialties from approved document - UPDATED with FREE FontAwesome icons
  const treatmentSpecialties = [
    { key: 'cardiology', icon: 'fa-heartbeat', color: 'primary' },
    { key: 'orthopedics', icon: 'fa-bone', color: 'primary' },
    { key: 'oncology', icon: 'fa-stethoscope', color: 'primary' },
    { key: 'neurology', icon: 'fa-brain', color: 'primary' },
    { key: 'nephrology', icon: 'fa-tint', color: 'primary' }, // Changed from fa-kidneys to fa-tint
    { key: 'fertility', icon: 'fa-baby', color: 'primary' },
    { key: 'dental', icon: 'fa-tooth', color: 'primary' },
    { key: 'ayurveda', icon: 'fa-leaf', color: 'primary' },
    { key: 'gastroenterology', icon: 'fa-lungs', color: 'primary' } // Changed from fa-stomach to fa-lungs
  ];

  // Updated images mapping
  const treatmentImages = {
    cardiology: "img/cardiology1.jpg",
    orthopedics: "img/ortho.jpeg",
    oncology: "img/oncology.jpg",
    neurology: "img/neuro.jpg",
    nephrology: "img/urology.png",
    fertility: "img/IVF.webp",
    dental: "img/dental-care.png",
    ayurveda: "img/ayurvedic.png",
    gastroenterology: "img/gastroenterology.png"
  };

  return (
    <>
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid treatments-header py-5 mb-5">
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


    {/* <!-- Updated Treatments Section --> */}
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
              className="row g-4 mobile:g-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                {treatmentSpecialties.map((treatment, index) => (
                  <motion.div 
                    key={treatment.key}
                    className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                    variants={fadeInUp}
                  >
                      <motion.div
                        className="card treatment-item shadow-sm h-100"
                        variants={cardHoverAnimation}
                        initial="initial"
                        whileHover="hover"
                      >
                          <div className="position-relative overflow-hidden mobile:height-auto" style={{ height: '200px' }}>
                              <motion.img 
                                className="treatment-image w-100 h-100" 
                                src={treatmentImages[treatment.key] || "img/default-treatment.jpg"} 
                                alt={t(`cards.${treatment.key}.title`)}
                                variants={imageHoverAnimation}
                                initial="initial"
                                whileHover="hover"
                                style={{ objectFit: 'cover' }}
                              />
                              <motion.div 
                                className="treatment-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center mobile:opacity-100"
                                variants={overlayAnimation}
                                initial="hidden"
                                whileHover="visible"
                              >
                                  <motion.a 
                                    href={`/medical-enquiry?treatment=${treatment.key}`} 
                                    className="btn btn-light rounded-pill py-2 px-4 mobile:py-1 mobile:px-3 mobile:text-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    Enquire Now
                                  </motion.a>
                              </motion.div>
                          </div>
                          <div className="card-body p-4 mobile:p-3">
                              <div className="d-flex align-items-center mb-3 mobile:mb-2">
                                  <motion.div 
                                    className={`icon-wrapper bg-${treatment.color} rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2`}
                                    style={{width: '50px', height: '50px'}}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                  >
                                      <i className={`fa ${treatment.icon} text-white fa-lg mobile:fa-md`}></i>
                                  </motion.div>
                                  <h4 className="card-title mb-0 mobile:text-lg">{t(`cards.${treatment.key}.title`)}</h4>
                              </div>
                              <p className="card-text mb-3 mobile:text-sm mobile:mb-2">{t(`cards.${treatment.key}.desc`)}</p>
                              <div className="treatment-features mb-4 mobile:mb-3">
                                  {t(`cards.${treatment.key}.points`, { returnObjects: true }).map((point, index) => (
                                    <motion.div 
                                      key={index}
                                      className="d-flex align-items-start mb-2 mobile:mb-1"
                                      variants={checkmarkAnimation}
                                      
                                    >
                                        <motion.i 
                                          className="fa fa-check text-primary me-2 mt-1 mobile:text-sm"
                                          variants={iconPulseAnimation}
                                          initial="initial"
                                          whileHover="hover"
                                        ></motion.i>
                                        <span className="mobile:text-sm">{point}</span>
                                    </motion.div>
                                  ))}
                              </div>
                              <motion.a 
                                href={`/medical-enquiry?treatment=${treatment.key}`} 
                                className="btn btn-outline-primary w-100 mobile:py-2 mobile:text-sm"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                              >
                                Get Coordination Details
                              </motion.a>
                          </div>
                      </motion.div>
                  </motion.div>
                ))}
            </motion.div>
            
            {/* <!-- Additional Information Section --> */}
            <div className="row mt-5 mobile:mt-3">
                <motion.div 
                  className="col-lg-6 mobile:col-12 mobile:mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <motion.div 
                      className="card bg-light border-0 shadow-sm h-100"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        <div className="card-body p-5 mobile:p-4">
                            <div className="d-flex align-items-center mb-4 mobile:mb-3">
                                <motion.div 
                                  className="icon-wrapper bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2"
                                  style={{width: '60px', height: '60px'}}
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <i className="fas fa-handshake text-white fa-lg mobile:fa-md"></i>
                                </motion.div>
                                <h3 className="card-title mb-0 mobile:text-2xl">{t('additional.general.title')}</h3>
                            </div>
                            <p className="card-text mb-4 mobile:text-base mobile:mb-3 mobile:leading-relaxed">{t('additional.general.desc')}</p>
                            <div className="row">
                                <div className="col-md-6 mobile:col-12" style={{textAlign: 'start'}}>
                                    {t('additional.general.points', { returnObjects: true }).slice(0, 3).map((point, index) => (
                                      <motion.div 
                                        key={index}
                                        className="d-flex align-items-start mb-2 mobile:mb-1"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * (index + 1) }}
                                      >
                                          <motion.i 
                                            className="fa fa-check text-primary me-2 mt-1 mobile:text-sm"
                                            whileHover={{ scale: 1.2 }}
                                          ></motion.i>
                                          <span className="mobile:text-sm">{point}</span>
                                      </motion.div>
                                    ))}
                                </div>
                                <div className="col-md-6 mobile:col-12 mobile:mt-2" style={{textAlign: 'start'}}>
                                    {t('additional.general.points', { returnObjects: true }).slice(3, 6).map((point, index) => (
                                      <motion.div 
                                        key={index + 3}
                                        className="d-flex align-items-start mb-2 mobile:mb-1"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * (index + 4) }}
                                      >
                                          <motion.i 
                                            className="fa fa-check text-primary me-2 mt-1 mobile:text-sm"
                                            whileHover={{ scale: 1.2 }}
                                          ></motion.i>
                                          <span className="mobile:text-sm">{point}</span>
                                      </motion.div>
                                    ))}
                                </div>
                            </div>
                            <motion.a 
                              href="/medical-enquiry" 
                              className="btn btn-primary mt-4 mobile:mt-3 mobile:py-2 mobile:w-full"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Enquire About Coordination Services
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                  className="col-lg-6 mobile:col-12"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <motion.div 
                      className="card bg-primary text-white border-0 shadow-sm h-100"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        <div className="card-body p-5 mobile:p-4">
                            <div className="d-flex align-items-center mb-4 mobile:mb-3">
                                <motion.div 
                                  className="icon-wrapper bg-white rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2"
                                  style={{width: '60px', height: '60px'}}
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <i className="fas fa-network-wired text-primary fa-lg mobile:fa-md"></i>
                                </motion.div>
                                <h3 className="card-title mb-0 mobile:text-2xl">{t('additional.others.title')}</h3>
                            </div>
                            <p className="card-text mb-4 mobile:text-base mobile:mb-3 mobile:leading-relaxed">{t('additional.others.desc')}</p>
                            <div className="row">
                                <div className="col-md-6 mobile:col-12" style={{textAlign: 'start'}}>
                                    {t('additional.others.points', { returnObjects: true }).slice(0, 3).map((point, index) => (
                                      <motion.div 
                                        key={index}
                                        className="d-flex align-items-start mb-2 mobile:mb-1"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * (index + 1) }}
                                      >
                                          <motion.i 
                                            className="fa fa-check me-2 mt-1 mobile:text-sm"
                                            whileHover={{ scale: 1.2 }}
                                          ></motion.i>
                                          <span className="mobile:text-sm">{point}</span>
                                      </motion.div>
                                    ))}
                                </div>
                                <div className="col-md-6 mobile:col-12 mobile:mt-2" style={{textAlign: 'start'}}>
                                    {t('additional.others.points', { returnObjects: true }).slice(3, 6).map((point, index) => (
                                      <motion.div 
                                        key={index + 3}
                                        className="d-flex align-items-start mb-2 mobile:mb-1"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * (index + 4) }}
                                      >
                                          <motion.i 
                                            className="fa fa-check me-2 mt-1 mobile:text-sm"
                                            whileHover={{ scale: 1.2 }}
                                          ></motion.i>
                                          <span className="mobile:text-sm">{point}</span>
                                      </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="alert alert-light mt-4 mobile:mt-3" role="alert">
                                <i className="fa fa-info-circle text-primary me-2"></i>
                                <strong>Disclaimer:</strong> {t('additional.others.note')}
                            </div>
                            <motion.a 
                              href="/medical-enquiry" 
                              className="btn btn-light mt-3 mobile:py-2 mobile:w-full"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Contact for Coordination Details
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
    {/* <!-- Treatments End --> */}


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
                      className="card border-0 shadow mobile:shadow-sm"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        <div className="card-body p-5 mobile:p-4">
                            <h3 className="card-title mb-4 mobile:text-2xl mobile:mb-3">{t('benefits.title')}</h3>
                            <div className="treatment-benefits">
                                {t('benefits.points', { returnObjects: true }).map((point, index) => (
                                  <motion.p 
                                    key={index}
                                    className="mb-3 mobile:mb-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * (index + 1) }}
                                    style={{textAlign: 'left'}}
                                  >
                                    <motion.i 
                                      className="fa fa-check text-primary me-2 mobile:text-sm"
                                      whileHover={{ scale: 1.2 }}
                                    ></motion.i>
                                    <span className="mobile:text-sm">{point}</span>
                                  </motion.p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
    {/* <!-- CTA Section End --> */}


    {/* <!-- Treatment Process Start --> */}
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
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('process.tag')}</h5>
                <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('process.title')}</h1>
                <p className="fs-5 mobile:text-base mobile:leading-relaxed">
                  <strong>Disclaimer:</strong> MedEminence acts as a coordination partner, not a healthcare provider. All medical services are delivered by independent, licensed healthcare providers.
                </p>
            </motion.div>
            
            <motion.div 
              className="row g-4 mobile:g-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                {t('process.steps', { returnObjects: true }).map((step, index) => (
                  <motion.div 
                    key={index}
                    className="col-lg-3 col-md-6 mobile:col-12 mobile:mb-2"
                    variants={fadeInUp}
                  >
                      <motion.div 
                        className="card border-0 shadow-sm h-100"
                        whileHover={{ 
                          y: -5,
                          boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                          transition: { duration: 0.3 }
                        }}
                      >
                          <div className="card-body text-center p-4 mobile:p-3">
                              <motion.div 
                                className="step-icon bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mobile:mb-3" 
                                style={{width: '80px', height: '80px'}}
                                variants={stepIconAnimation}
                                initial="initial"
                                whileHover="hover"
                              >
                                  <i className={`fas fa-${getStepIcon(index)} text-white fa-2x mobile:text-xl`}></i>
                              </motion.div>
                              <h5 className="card-title mb-3 mobile:text-lg mobile:mb-2">{index + 1}. {step.title}</h5>
                              <p className="card-text mobile:text-sm">{step.desc}</p>
                          </div>
                      </motion.div>
                  </motion.div>
                ))}
            </motion.div>
            
            <motion.div 
              className="text-center mt-5 mobile:mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
                <div className="alert alert-info mx-auto mobile:p-3" style={{maxWidth: '800px'}}>
                    <p className="fs-5 mb-0 mobile:text-base">{t('additional.others.note')}</p>
                </div>
                <motion.a 
                  href="/patient-journey" 
                  className="btn btn-outline-primary rounded-pill py-3 px-5 mt-3 mobile:py-2 mobile:px-4 mobile:mt-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Coordination Journey Details
                </motion.a>
            </motion.div>
        </div>
    </div>
    </>
  )
}

// Helper function to get appropriate icon for each step
const getStepIcon = (index) => {
  const icons = ['file-medical', 'share-alt', 'route', 'headset'];
  return icons[index] || 'check-circle';
}

export default Treatment;