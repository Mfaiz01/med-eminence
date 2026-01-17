import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  // Create refs and controls for scroll animations
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const valuesControls = useAnimation()
  const valuesRef = useRef(null)
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 })

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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // Trigger values animation when in view
  useEffect(() => {
    if (isValuesInView) {
      valuesControls.start("visible")
    }
  }, [isValuesInView, valuesControls])

  return (
    <>
     {/* <!-- Page Header Start --> */}
    <div className="container-fluid about-header py-5 mb-5">
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


    {/* <!-- About Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5 mobile:gx-0">
                <motion.div 
                  className="col-lg-5 mb-5 mb-lg-0 mobile:mb-4" 
                  style={{minHeight: '500px'}}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                    <motion.div 
                      className="position-relative h-100"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                        <img 
                          className="position-absolute w-100 h-100 rounded mobile:h-auto mobile:position-static" 
                          src="img/about-us2.png" 
                          style={{objectFit: 'cover'}} 
                          alt="MedEminence Team - Medical Tourism Facilitation" 
                        />
                    </motion.div>
                </motion.div>
                <motion.div 
                  className="col-lg-7 mobile:mt-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                    <div className="mb-4 mobile:mb-3">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('whoWeAre.tag')}</h5>
                        <h1 className="display-6 mobile:text-4xl mobile:text-center mobile:mt-2">{t('whoWeAre.title')}</h1>
                    </div>
                    
                    <motion.p 
                      className="fs-5 mb-4 mobile:text-base mobile:text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <strong>{t('whoWeAre.highlight')}</strong>
                    </motion.p>
                    
                    <motion.p 
                      className="mb-4 mobile:text-base mobile:leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {t('whoWeAre.p1')}
                    </motion.p>
                    
                    <motion.p 
                      className="mb-4 mobile:text-base mobile:leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {t('whoWeAre.p2')}
                    </motion.p>
                    
                    <motion.div 
                      className="row g-3 pt-3 mobile:g-2 mobile:pt-2"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* <!-- Value Icons with Hover Animation --> */}
                        <motion.div 
                          className="col-sm-3 col-6 mobile:col-6"
                          variants={fadeInUp}
                          whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="bg-light text-center rounded-circle py-4 mobile:py-3">
                                <i className="fa fa-3x fa-globe-americas text-primary mb-3 mobile:mb-2 mobile:text-2xl"></i>
                                <h6 className="mb-0 mobile:text-sm">{t('valuesIcons.global')}</h6>
                            </div>
                        </motion.div>
                        <motion.div 
                          className="col-sm-3 col-6 mobile:col-6"
                          variants={fadeInUp}
                          whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="bg-light text-center rounded-circle py-4 mobile:py-3">
                                <i className="fa fa-3x fa-shield-alt text-primary mb-3 mobile:mb-2 mobile:text-2xl"></i>
                                <h6 className="mb-0 mobile:text-sm">{t('valuesIcons.verified')}</h6>
                            </div>
                        </motion.div>
                        <motion.div 
                          className="col-sm-3 col-6 mobile:col-6 mobile:mt-3"
                          variants={fadeInUp}
                          whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="bg-light text-center rounded-circle py-4 mobile:py-3">
                                <i className="fa fa-3x fa-clock text-primary mb-3 mobile:mb-2 mobile:text-2xl"></i>
                                <h6 className="mb-0 mobile:text-sm">{t('valuesIcons.timely')}</h6>
                            </div>
                        </motion.div>
                        <motion.div 
                          className="col-sm-3 col-6 mobile:col-6 mobile:mt-3"
                          variants={fadeInUp}
                          whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="bg-light text-center rounded-circle py-4 mobile:py-3">
                                <i className="fa fa-3x fa-project-diagram text-primary mb-3 mobile:mb-2 mobile:text-2xl"></i>
                                <h6 className="mb-0 mobile:text-sm">{t('valuesIcons.support')}</h6>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}

    {/* <!-- Stats Section Start --> */}
    <motion.div 
      className="container-fluid bg-primary py-5"
      ref={statsRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
        <div className="container py-5">
            <div className="row text-center text-white mobile:g-3">
                <motion.div 
                  className="col-md-3 col-6 mb-4 mobile:col-6 mobile:mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <div className="icon-wrapper bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mobile:mb-2" 
                          style={{width: '80px', height: '80px'}}>
                        <i className="fas fa-handshake text-primary fa-2x mobile:text-xl"></i>
                    </div>
                    <h1 className="display-5 mb-2 mobile:text-3xl mobile:mb-1">Non-Clinical</h1>
                    <h5 className="text-uppercase mobile:text-sm">{t('stats.patients.label')}</h5>
                    <p className="mb-0 mobile:text-xs">{t('stats.patients.sub')}</p>
                </motion.div>
                
                <motion.div 
                  className="col-md-3 col-6 mb-4 mobile:col-6 mobile:mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <div className="icon-wrapper bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mobile:mb-2" 
                          style={{width: '80px', height: '80px'}}>
                        <i className="fas fa-award text-primary fa-2x mobile:text-xl"></i>
                    </div>
                    <h1 className="display-5 mb-2 mobile:text-3xl mobile:mb-1">Accredited</h1>
                    <h5 className="text-uppercase mobile:text-sm">{t('stats.hospitals.label')}</h5>
                    <p className="mb-0 mobile:text-xs">{t('stats.hospitals.sub')}</p>
                </motion.div>
                
                <motion.div 
                  className="col-md-3 col-6 mb-4 mobile:col-6 mobile:mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <div className="icon-wrapper bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mobile:mb-2" 
                          style={{width: '80px', height: '80px'}}>
                        <i className="fas fa-user-md text-primary fa-2x mobile:text-xl"></i>
                    </div>
                    <h1 className="display-5 mb-2 mobile:text-3xl mobile:mb-1">Licensed</h1>
                    <h5 className="text-uppercase mobile:text-sm">{t('stats.specialties.label')}</h5>
                    <p className="mb-0 mobile:text-xs">{t('stats.specialties.sub')}</p>
                </motion.div>
                
                <motion.div 
                  className="col-md-3 col-6 mb-4 mobile:col-6 mobile:mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <div className="icon-wrapper bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mobile:mb-2" 
                          style={{width: '80px', height: '80px'}}>
                        <i className="fas fa-network-wired text-primary fa-2x mobile:text-xl"></i>
                    </div>
                    <h1 className="display-5 mb-2 mobile:text-3xl mobile:mb-1">Coordination</h1>
                    <h5 className="text-uppercase mobile:text-sm">{t('stats.satisfaction.label')}</h5>
                    <p className="mb-0 mobile:text-xs">{t('stats.satisfaction.sub')}</p>
                </motion.div>
            </div>
        </div>
    </motion.div>
    {/* <!-- Stats Section End --> */}


    {/* <!-- What We Do & What We Don't Do Start --> */}
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
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('purpose.tag')}</h5>
                <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('purpose.title')}</h1>
                <motion.p 
                  className="fs-5 mobile:text-base mobile:leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t('purpose.desc')}
                </motion.p>
            </motion.div>
            
            <div className="row g-5 mobile:g-3">
                <motion.div 
                  className="col-lg-6 mobile:col-12 mobile:mb-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <motion.div 
                      className="bg-white p-5 rounded shadow-sm h-100 mobile:p-4"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3 }
                      }}
                    >
                        <motion.div 
                          className="icon-wrapper bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mobile:mb-3" 
                          style={{width: '80px', height: '80px'}}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                            <i className="fas fa-check-circle text-white fa-2x mobile:text-xl"></i>
                        </motion.div>
                        <h3 className="mb-3 mobile:text-2xl mobile:mb-2">{t('whatWeDo.title')}</h3>
                        <motion.div 
                          className="text-start"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                            {t('whatWeDo.items', { returnObjects: true }).map((item, index) => (
                                <motion.p 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * (index + 1) }}
                                    className="mb-3 mobile:mb-2 mobile:text-sm"
                                >
                                    <i className="fa fa-check text-primary me-2"></i>{item}
                                </motion.p>
                            ))}
                        </motion.div>
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
                      className="bg-white p-5 rounded shadow-sm h-100 mobile:p-4"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3 }
                      }}
                    >
                        <motion.div 
                          className="icon-wrapper bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mobile:mb-3" 
                          style={{width: '80px', height: '80px'}}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                            <i className="fas fa-times-circle text-white fa-2x mobile:text-xl"></i>
                        </motion.div>
                        <h3 className="mb-3 mobile:text-2xl mobile:mb-2">{t('whatWeDoNot.title')}</h3>
                        <motion.p 
                          className="mb-4 fs-5 mobile:text-base mobile:leading-relaxed mobile:mb-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          <strong>{t('whatWeDoNot.desc')}</strong>
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
    {/* <!-- Mission & Vision End --> */}


{/* <!-- Why Choose MedEminence Start --> */}
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
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('coreValues.title')}</h5>
            <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('coreValues.subtitle')}</h1>
        </motion.div>
        
        <motion.div 
          className="row g-4 mobile:g-2"
          ref={valuesRef}
          animate={valuesControls}
          initial="hidden"
          variants={staggerContainer}
        >
            {/* <!-- Value 1 --> */}
            <motion.div 
              className="col-md-6 col-lg-4 mobile:col-12 mobile:mb-2"
              variants={slideInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <div className="bg-light p-4 rounded h-100 d-flex align-items-start mobile:p-3">
                    <motion.div 
                      className="icon-wrapper bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                      style={{width: '60px', height: '60px', flexShrink: '0'}}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                        <i className="fas fa-sitemap text-white fa-lg mobile:fa-md"></i>
                    </motion.div>
                    <div>
                        <h5 className="mb-2 mobile:text-lg mobile:mb-1">{t('coreValues.items.timeliness.title')}</h5>
                        <p className="mb-0 mobile:text-sm">{t('coreValues.items.timeliness.desc')}</p>
                    </div>
                </div>
            </motion.div>
            
            {/* <!-- Value 2 --> */}
            <motion.div 
              className="col-md-6 col-lg-4 mobile:col-12 mobile:mb-2"
              variants={slideInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <div className="bg-light p-4 rounded h-100 d-flex align-items-start mobile:p-3">
                    <motion.div 
                      className="icon-wrapper bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                      style={{width: '60px', height: '60px', flexShrink: '0'}}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                        <i className="fas fa-hospital-alt text-white fa-lg mobile:fa-md"></i>
                    </motion.div>
                    <div>
                        <h5 className="mb-2 mobile:text-lg mobile:mb-1">{t('coreValues.items.transparency.title')}</h5>
                        <p className="mb-0 mobile:text-sm">{t('coreValues.items.transparency.desc')}</p>
                    </div>
                </div>
            </motion.div>
            
            {/* <!-- Value 3 --> */}
            <motion.div 
              className="col-md-6 col-lg-4 mobile:col-12 mobile:mb-2"
              variants={slideInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <div className="bg-light p-4 rounded h-100 d-flex align-items-start mobile:p-3">
                    <motion.div 
                      className="icon-wrapper bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                      style={{width: '60px', height: '60px', flexShrink: '0'}}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                        <i className="fas fa-comments text-white fa-lg mobile:fa-md"></i>
                    </motion.div>
                    <div>
                        <h5 className="mb-2 mobile:text-lg mobile:mb-1">{t('coreValues.items.patient.title')}</h5>
                        <p className="mb-0 mobile:text-sm">{t('coreValues.items.patient.desc')}</p>
                    </div>
                </div>
            </motion.div>
            
            {/* <!-- Value 4 --> */}
            <motion.div 
              className="col-md-6 col-lg-4 mobile:col-12 mobile:mb-2"
              variants={slideInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <div className="bg-light p-4 rounded h-100 d-flex align-items-start mobile:p-3">
                    <motion.div 
                      className="icon-wrapper bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                      style={{width: '60px', height: '60px', flexShrink: '0'}}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                        <i className="fas fa-headset text-white fa-lg mobile:fa-md"></i>
                    </motion.div>
                    <div>
                        <h5 className="mb-2 mobile:text-lg mobile:mb-1">{t('coreValues.items.quality.title')}</h5>
                        <p className="mb-0 mobile:text-sm">{t('coreValues.items.quality.desc')}</p>
                    </div>
                </div>
            </motion.div>
            
            {/* <!-- Value 5 --> */}
            <motion.div 
              className="col-md-6 col-lg-4 mobile:col-12 mobile:mb-2"
              variants={slideInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <div className="bg-light p-4 rounded h-100 d-flex align-items-start mobile:p-3">
                    <motion.div 
                      className="icon-wrapper bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                      style={{width: '60px', height: '60px', flexShrink: '0'}}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                        <i className="fas fa-exchange-alt text-white fa-lg mobile:fa-md"></i>
                    </motion.div>
                    <div>
                        <h5 className="mb-2 mobile:text-lg mobile:mb-1">{t('coreValues.items.privacy.title')}</h5>
                        <p className="mb-0 mobile:text-sm">{t('coreValues.items.privacy.desc')}</p>
                    </div>
                </div>
            </motion.div>
            
            {/* <!-- Value 6 --> */}
            <motion.div 
              className="col-md-6 col-lg-4 mobile:col-12 mobile:mb-2"
              variants={slideInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <div className="bg-light p-4 rounded h-100 d-flex align-items-start mobile:p-3">
                    <motion.div 
                      className="icon-wrapper bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                      style={{width: '60px', height: '60px', flexShrink: '0'}}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                        <i className="fas fa-handshake text-white fa-lg mobile:fa-md"></i>
                    </motion.div>
                    <div>
                        <h5 className="mb-2 mobile:text-lg mobile:mb-1">{t('coreValues.items.support.title')}</h5>
                        <p className="mb-0 mobile:text-sm">{t('coreValues.items.support.desc')}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </div>
</div>
{/* <!-- Why Choose MedEminence End --> */}


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
                        <h3 className="mb-4 mobile:text-2xl mobile:mb-3">{t('whyChoose.title')}</h3>
                        <div className="text-start mobile:text-center">
                            {t('whyChoose.points', { returnObjects: true }).map((point, index) => (
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
                        <motion.a 
                          href="/services" 
                          className="btn btn-primary rounded-pill py-3 px-5 mt-3 mobile:py-2 mobile:px-4 mobile:mt-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {t('whyChoose.cta')}
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About;