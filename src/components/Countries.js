import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";

const Countries = () => {
  const { t, i18n } = useTranslation("countries");
  const [languageKey, setLanguageKey] = useState(i18n.language);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setLanguageKey(lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

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
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardHoverAnimation = {
    initial: { y: 0 },
    hover: { 
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 }
    }
  };

  // Add a key to force re-animation when language changes
  const animationKey = `${languageKey}-${Date.now()}`;

  return (
    <>
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid countries-header py-5 mb-5">
        <div className="container py-5">
            <div className="row justify-content-center">
                <motion.div 
                  className="col-lg-8 text-center mobile:col-12"
                  key={`header-${languageKey}`}
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


    {/* <!-- Primary Regions We Support Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <motion.div 
              key={`intro-${animationKey}`}
              className="text-center mx-auto mb-5 mobile:mb-4" 
              style={{maxWidth: '800px'}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('intro.tag')}</h5>
                <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('intro.title')}</h1>
                <motion.p 
                  className="fs-5 mobile:text-base mobile:leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t('intro.desc')}
                </motion.p>
            </motion.div>
            
            <motion.div 
              key={`primary-title-${animationKey}`}
              className="text-center mb-5 mobile:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="display-7 mb-4 mobile:text-2xl mobile:mb-3">{t('primaryRegions.title')}</h2>
            </motion.div>
            
            <motion.div 
              key={`primary-regions-${animationKey}`}
              className="row g-4 mobile:g-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
                {t('primaryRegions.regions', { returnObjects: true }).map((region, index) => (
                  <motion.div 
                    key={`${region.name}-${languageKey}-${index}`}
                    className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                    variants={fadeInUp}
                  >
                      <motion.div
                        className="card border-0 shadow-sm h-100"
                        variants={cardHoverAnimation}
                        initial="initial"
                        whileHover="hover"
                      >
                          <div className="card-body p-4 mobile:p-3">
                              <div className="d-flex align-items-center mb-4 mobile:mb-3">
                                  <motion.div 
                                    className={`icon-wrapper bg-${region.color} rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2`}
                                    style={{width: '60px', height: '60px'}}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                  >
                                      <i className={`fas ${region.icon} text-white fa-lg mobile:fa-md`}></i>
                                  </motion.div>
                                  <h4 className="card-title mb-0 mobile:text-lg">{region.name}</h4>
                              </div>
                              
                              <div className="country-list mb-4 mobile:mb-3">
                                  <h6 className="mb-3 mobile:text-base mobile:mb-2">Countries in this region:</h6>
                                  <div className="d-flex flex-wrap gap-2 mobile:gap-1">
                                      {region.countries.map((country, countryIndex) => (
                                        <motion.span 
                                          key={`${country}-${languageKey}-${countryIndex}`}
                                          className="badge bg-light text-dark border px-3 py-2 mobile:px-2 mobile:py-1 mobile:text-xs"
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: 0.05 * (countryIndex + 1) }}
                                          whileHover={{ scale: 1.05, backgroundColor: "#e9ecef" }}
                                        >
                                            {country}
                                        </motion.span>
                                      ))}
                                  </div>
                              </div>
                              
                              <div className="coordination-info">
                                  <p className="small text-muted mb-0 mobile:text-xs" style={{textAlign: 'start'}}>
                                      <i className="fas fa-info-circle text-primary me-1"></i>
                                      MedEminence coordinates healthcare access to India for patients from this region
                                  </p>
                              </div>
                          </div>
                      </motion.div>
                  </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
    {/* <!-- Primary Regions We Support End --> */}


    {/* <!-- Selective Support Regions Start --> */}
    <div className="container-fluid bg-light py-5">
        <div className="container">
            <motion.div 
              key={`selective-title-${animationKey}`}
              className="text-center mx-auto mb-5 mobile:mb-4" 
              style={{maxWidth: '800px'}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="display-7 mb-3 mobile:text-2xl mobile:mb-2">{t('selectiveRegions.title')}</h2>
                <motion.p 
                  className="fs-5 mobile:text-base mobile:leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t('selectiveRegions.desc')}
                </motion.p>
            </motion.div>
            
            <div className="row justify-content-center">
                {t('selectiveRegions.regions', { returnObjects: true }).map((region, index) => (
                  <motion.div 
                    key={`${region.name}-selective-${languageKey}-${index}`}
                    className="col-lg-5 col-md-6 mb-4 mobile:col-12 mobile:mb-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                      <motion.div 
                        className="card border-0 shadow-sm h-100"
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      >
                          <div className="card-body p-4 mobile:p-3">
                              <div className="d-flex align-items-center mb-4 mobile:mb-3">
                                  <motion.div 
                                    className={`icon-wrapper bg-${region.color} rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2`}
                                    style={{width: '60px', height: '60px'}}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                  >
                                      <i className={`fas ${region.icon} text-white fa-lg mobile:fa-md`}></i>
                                  </motion.div>
                                  <div>
                                      <h4 className="card-title mb-1 mobile:text-lg mobile:mb-1">{region.name}</h4>
                                      <p className="small text-muted mb-0 mobile:text-xs">Selective support based on assessment</p>
                                  </div>
                              </div>
                              
                              <div className="country-list">
                                  <h6 className="mb-3 mobile:text-base mobile:mb-2">Countries in this region:</h6>
                                  <div className="d-flex flex-wrap gap-2 mobile:gap-1">
                                      {region.countries.map((country, countryIndex) => (
                                        <motion.span 
                                          key={`${country}-selective-${languageKey}-${countryIndex}`}
                                          className="badge bg-white text-dark border px-3 py-2 mobile:px-2 mobile:py-1 mobile:text-xs"
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: 0.05 * (countryIndex + 1) }}
                                          whileHover={{ scale: 1.05, backgroundColor: "#f8f9fa" }}
                                        >
                                            {country}
                                        </motion.span>
                                      ))}
                                  </div>
                              </div>
                              
                              <div className="mt-4 pt-3 border-top mobile:mt-3 mobile:pt-2">
                                  <p className="small mb-0 text-muted mobile:text-xs">
                                      <i className="fas fa-exclamation-triangle text-warning me-1"></i>
                                      Support evaluated case-by-case based on medical urgency, visa feasibility, and treatment requirements
                                  </p>
                              </div>
                          </div>
                      </motion.div>
                  </motion.div>
                ))}
            </div>
        </div>
    </div>
    {/* <!-- Selective Support Regions End --> */}


    {/* <!-- Why India Section Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center mobile:flex-column-reverse">
                <motion.div 
                  key={`why-india-${animationKey}`}
                  className="col-lg-6 mb-5 mb-lg-0 mobile:col-12 mobile:mt-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    <div className="mb-4 mobile:mb-3">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('whyIndia.tag')}</h5>
                        <h1 className="display-6 mobile:text-3xl mobile:mt-2">{t('whyIndia.title')}</h1>
                    </div>
                    <motion.p 
                      className="fs-5 mb-4 mobile:text-base mobile:leading-relaxed mobile:mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {t('whyIndia.desc')}
                    </motion.p>
                    
                    <div className="mb-4 mobile:mb-3">
                        {t('whyIndia.points', { returnObjects: true }).map((point, index) => (
                          <motion.div 
                            key={`point-${languageKey}-${index}`}
                            className="d-flex align-items-start mb-3 mobile:mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                          >
                              <motion.i 
                                className="bi bi-check-circle-fill text-primary me-3 fs-5 mobile:text-lg"
                                whileHover={{ scale: 1.2 }}
                              ></motion.i>
                              <div>
                                  <p className="mb-0 mobile:text-sm" style={{textAlign: 'start'}}>{point}</p>
                              </div>
                          </motion.div>
                        ))}
                    </div>
                    
                    <div className="alert alert-info mobile:p-3">
                        <p className="mb-0 mobile:text-sm">
                            <strong>Disclaimer:</strong> {t('whyIndia.disclaimer')}
                        </p>
                    </div>
                    
                    <motion.a 
                      href="/medeminence" 
                      className="btn btn-primary mt-3 mobile:mt-2 mobile:py-2 mobile:w-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t('whyIndia.cta')}
                    </motion.a>
                </motion.div>
                <motion.div 
                  className="col-lg-6 mobile:col-12"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    <div className="row g-3 mobile:g-2">
                        <motion.div 
                          className="col-6 mobile:col-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                            <motion.div 
                              className="card border-0 shadow-sm mobile:p-2"
                              whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <div className="card-body p-3 text-center mobile:p-2">
                                    <i className="fas fa-hospital-alt text-primary fa-3x mb-3 mobile:text-2xl mobile:mb-2"></i>
                                    <h5 className="mobile:text-lg">Accredited Hospitals</h5>
                                    <p className="small mb-0 mobile:text-xs">Internationally recognized facilities</p>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                          className="col-6 mobile:col-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <motion.div 
                              className="card border-0 shadow-sm mobile:p-2"
                              whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <div className="card-body p-3 text-center mobile:p-2">
                                    <i className="fas fa-user-md text-primary fa-3x mb-3 mobile:text-2xl mobile:mb-2"></i>
                                    <h5 className="mobile:text-lg">Licensed Professionals</h5>
                                    <p className="small mb-0 mobile:text-xs">Experienced medical specialists</p>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                          className="col-6 mobile:col-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <motion.div 
                              className="card border-0 shadow-sm mobile:p-2"
                              whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <div className="card-body p-3 text-center mobile:p-2">
                                    <i className="fas fa-stethoscope text-primary fa-3x mb-3 mobile:text-2xl mobile:mb-2"></i>
                                    <h5 className="mobile:text-lg">Advanced Technology</h5>
                                    <p className="small mb-0 mobile:text-xs">Modern medical equipment</p>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                          className="col-6 mobile:col-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <motion.div 
                              className="card border-0 shadow-sm mobile:p-2"
                              whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <div className="card-body p-3 text-center mobile:p-2">
                                    <i className="fas fa-language text-primary fa-3x mb-3 mobile:text-2xl mobile:mb-2"></i>
                                    <h5 className="mobile:text-lg">Multilingual Support</h5>
                                    <p className="small mb-0 mobile:text-xs">International patient departments</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
    {/* <!-- Why India Section End --> */}


    {/* <!-- Process Section Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <motion.div 
              key={`process-${animationKey}`}
              className="text-center mx-auto mb-5 mobile:mb-4" 
              style={{maxWidth: '800px'}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('process.tag')}</h5>
                <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('process.title')}</h1>
            </motion.div>
            
            <motion.div 
              key={`process-steps-${animationKey}`}
              className="row g-4 mobile:g-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
                {t('process.steps', { returnObjects: true }).map((step, index) => (
                  <motion.div 
                    key={`${step.title}-${languageKey}-${index}`}
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
                                whileHover={{ scale: 1.1, rotate: 5 }}
                              >
                                  <span className="text-white fs-2 fw-bold mobile:text-xl">{index + 1}</span>
                              </motion.div>
                              <h5 className="card-title mb-3 mobile:text-lg mobile:mb-2">{step.title}</h5>
                              <p className="card-text mobile:text-sm">{step.desc}</p>
                          </div>
                      </motion.div>
                  </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
    {/* <!-- Process Section End --> */}


    {/* <!-- CTA Section Start --> */}
    <div className="container-fluid bg-light my-5 py-5">
        <div className="container py-5">
            <div className="row gx-5 align-items-center mobile:gx-0">
                <motion.div 
                  key={`cta-${animationKey}`}
                  className="col-lg-8 mb-5 mb-lg-0 mobile:col-12 mobile:mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    <div className="mb-4 mobile:mb-3">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('cta.tag')}</h5>
                        <h1 className="display-6 mobile:text-3xl mobile:mt-2">{t('cta.title')}</h1>
                    </div>
                    <motion.p 
                      className="fs-5 mb-4 mobile:text-base mobile:leading-relaxed mobile:mb-3 mobile:text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {t('cta.desc')}
                    </motion.p>
                    <div className="d-flex flex-wrap gap-3 mobile:justify-center">
                      <motion.a 
                        className="btn btn-primary rounded-pill py-3 px-5 mobile:py-2 mobile:px-4 mobile:w-full mobile:max-w-xs"
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
                        className="btn btn-outline-primary rounded-pill py-3 px-5 mobile:py-2 mobile:px-4 mobile:w-full mobile:max-w-xs"
                        href="/medical-enquiry"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(13,110,253,0.1)"
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
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    <motion.div 
                      className="card border-0 shadow mobile:shadow-sm"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        <div className="card-body p-5 mobile:p-4">
                            <h3 className="card-title mb-4 mobile:text-2xl mobile:mb-3" style={{textAlign: 'center'}}>Our Coordination Focus</h3>
                            <div className="destination-benefits">
                                <p className="mb-3 mobile:mb-2 mobile:text-sm" style={{textAlign: 'start'}}>
                                    <i className="fa fa-check text-primary me-2"></i>Facilitating access to healthcare in India
                                </p>
                                <p className="mb-3 mobile:mb-2 mobile:text-sm" style={{textAlign: 'start'}}>
                                    <i className="fa fa-check text-primary me-2"></i>Coordinating with accredited hospitals
                                </p>
                                <p className="mb-3 mobile:mb-2 mobile:text-sm" style={{textAlign: 'start'}}>
                                    <i className="fa fa-check text-primary me-2"></i>Supporting non-medical aspects of care
                                </p>
                                <p className="mb-3 mobile:mb-2 mobile:text-sm" style={{textAlign: 'start'}}>
                                    <i className="fa fa-check text-primary me-2"></i>Maintaining clear role separation
                                </p>
                                <p className="mb-0 mobile:text-sm" style={{textAlign: 'start'}}>
                                    <i className="fa fa-check text-primary me-2"></i>Focusing on patient coordination
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
    {/* <!-- CTA Section End --> */}
    </>
  )
}

export default Countries;