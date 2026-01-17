import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";

// Import Bootstrap Icons
import {
  GearFill,
  Hospital,
  CurrencyDollar,
  Person,
  ArrowsAngleContract,
  HandThumbsUp,
  CheckCircle,
  ShieldCheck,
  StarFill,
  Megaphone,
  Lock,
  Check,
  Check2Circle,
  Sitemap,
  ChatRightText,
  Headphones,
  ArrowLeftRight,
  Handshake
} from 'react-bootstrap-icons';

const WhyChooseMedEminence = () => {
  const { t } = useTranslation("whyChoose");
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
      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
      transition: { duration: 0.3 }
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

  const featureIconAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  }

  const tableRowAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const statCountAnimation = {
    initial: { scale: 1 },
    whileInView: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 0.6,
        repeat: 1,
        repeatType: "reverse"
      }
    }
  }

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Bootstrap Icons mapping for features
  const featureIcons = [
    GearFill,           // Structured Healthcare Facilitation
    Hospital,           // Accredited Hospital Coordination
    CurrencyDollar,     // Transparent Coordination Model
    Person,             // Patient-Focused Communication
    ArrowsAngleContract, // Clear Role Separation
    HandThumbsUp        // Coordination Partner Focus
  ];

  // Bootstrap Icons mapping for trust badges
  const trustIcons = [
    GearFill,           // Non-Clinical Intermediary
    StarFill,           // Accreditation Focus
    Megaphone,          // Transparent Role Definition
    Lock                // Patient Information Protection
  ];

  return (
    <>
         {/* <!-- Page Header Start --> */}
    <div className="container-fluid why-choose-header py-5 mb-5">
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


    {/* <!-- Why Choose Us Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center mobile:flex-column-reverse">
                <motion.div 
                  className="col-lg-6 mb-5 mb-lg-0 mobile:col-12 mobile:mt-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <div className="mb-4 mobile:mb-3">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('intro.tag')}</h5>
                        <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('intro.title')}</h1>
                    </div>
                    <motion.p 
                      className="fs-5 mb-4 mobile:text-base mobile:leading-relaxed mobile:mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {t('intro.desc')}
                    </motion.p>
                    
                    <div className="row g-3 mobile:g-2">
                        <div className="col-md-6 mobile:col-12">
                            <motion.div 
                              className="d-flex align-items-start mb-4 mobile:mb-3"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4 }}
                            >
                                <motion.div 
                                  className="feature-icon-small bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                                  style={{width: '50px', height: '50px', flexShrink: 0}}
                                  variants={iconPulseAnimation}
                                  initial="initial"
                                  whileHover="hover"
                                >
                                    <GearFill className="text-white mobile:text-sm" size={20} />
                                </motion.div>
                                <div>
                                    <h5 className="mobile:text-lg mobile:mb-1">{t('differentiators.timely.title')}</h5>
                                    <p className="mb-0 mobile:text-sm" style={{textAlign: 'start'}}>{t('differentiators.timely.desc')}</p>
                                </div>
                            </motion.div>
                            <motion.div 
                              className="d-flex align-items-start mb-4 mobile:mb-3"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <motion.div 
                                  className="feature-icon-small bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                                  style={{width: '50px', height: '50px', flexShrink: 0}}
                                  variants={iconPulseAnimation}
                                  initial="initial"
                                  whileHover="hover"
                                >
                                    <Hospital className="text-white mobile:text-sm" size={20} />
                                </motion.div>
                                <div>
                                    <h5 className="mobile:text-lg mobile:mb-1" style={{textAlign: 'start'}}>{t('differentiators.verified.title')}</h5>
                                    <p className="mb-0 mobile:text-sm" style={{textAlign: 'start'}}>{t('differentiators.verified.desc')}</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-6 mobile:col-12">
                            <motion.div 
                              className="d-flex align-items-start mb-4 mobile:mb-3"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <motion.div 
                                  className="feature-icon-small bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                                  style={{width: '50px', height: '50px', flexShrink: 0}}
                                  variants={iconPulseAnimation}
                                  initial="initial"
                                  whileHover="hover"
                                >
                                    <CurrencyDollar className="text-white mobile:text-sm" size={20} />
                                </motion.div>
                                <div>
                                    <h5 className="mobile:text-lg mobile:mb-1" style={{textAlign: 'start'}}>{t('differentiators.pricing.title')}</h5>
                                    <p className="mb-0 mobile:text-sm" style={{textAlign: 'start'}}>{t('differentiators.pricing.desc')}</p>
                                </div>
                            </motion.div>
                            <motion.div 
                              className="d-flex align-items-start mb-4 mobile:mb-3"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <motion.div 
                                  className="feature-icon-small bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 mobile:me-2" 
                                  style={{width: '50px', height: '50px', flexShrink: 0}}
                                  variants={iconPulseAnimation}
                                  initial="initial"
                                  whileHover="hover"
                                >
                                    <Person className="text-white mobile:text-sm" size={20} />
                                </motion.div>
                                <div>
                                    <h5 className="mobile:text-lg mobile:mb-1">{t('differentiators.personalized.title')}</h5>
                                    <p className="mb-0 mobile:text-sm" style={{textAlign: 'start'}}>{t('differentiators.personalized.desc')}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    
                    <div className="alert alert-info mt-4 mobile:mt-3 mobile:p-3">
                        <p className="mb-0 mobile:text-sm">
                            <strong>Important:</strong> MedEminence acts as a coordination partner, not a healthcare provider. All medical services are delivered by independent, licensed healthcare providers.
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                  className="col-lg-6 mobile:col-12"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <motion.div 
                      className="position-relative"
                      variants={imageAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                        <motion.img 
                          className="img-fluid rounded w-100 mobile:h-auto" 
                          src="img/business-cordination3.png" 
                          alt="MedEminence Coordination Partner"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          style={{height: '820px'}}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                        </div>
                    </motion.div>
                    
                    <div className="card border-0 shadow-sm mt-4 mobile:mt-3">
                        <div className="card-body p-4 mobile:p-3">
                            <h5 className="card-title mb-3 mobile:text-lg mobile:mb-2">Our Coordination Role</h5>
                            <div className="coordination-points">
                                <p className="mb-2 mobile:text-sm" style={{textAlign: 'start'}}>
                                    <Check className="text-primary me-2 mobile:text-sm" size={18} />
                                    Facilitating access to accredited healthcare providers
                                </p>
                                <p className="mb-2 mobile:text-sm" style={{textAlign: 'start'}}>
                                    <Check className="text-primary me-2 mobile:text-sm" size={18} />
                                    Coordinating medical case reviews and evaluations
                                </p>
                                <p className="mb-2 mobile:text-sm" style={{textAlign: 'start'}}>
                                    <Check className="text-primary me-2 mobile:text-sm" size={18} />
                                    Supporting travel and logistical arrangements
                                </p>
                                <p className="mb-0 mobile:text-sm" style={{textAlign: 'start'}}>
                                    <Check className="text-primary me-2 mobile:text-sm" size={18} />
                                    Maintaining clear separation from clinical decisions
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
    {/* <!-- Why Choose Us End --> */}


    {/* <!-- Key Features Start --> */}
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
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('features.tag')}</h5>
                <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('features.title')}</h1>
                <motion.p 
                  className="fs-5 mobile:text-base mobile:leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t('features.subtitle')}
                </motion.p>
            </motion.div>
            
            <motion.div 
              className="row g-4 mobile:g-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                {t('features.items', { returnObjects: true }).map((feature, index) => {
                  const FeatureIcon = featureIcons[index] || Check;
                  return (
                    <motion.div 
                      key={index}
                      className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                      variants={fadeInUp}
                    >
                        <motion.div 
                          className="text-center p-4 h-100 mobile:p-3"
                          whileHover={{ 
                            y: -5,
                            boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                            transition: { duration: 0.3 }
                          }}
                        >
                            <motion.div 
                              className="feature-icon mb-3 mobile:mb-2"
                              variants={featureIconAnimation}
                              initial="initial"
                              whileHover="hover"
                            >
                                <FeatureIcon className="text-white mobile:text-2xl" size={48} />
                            </motion.div>
                            <h4 className="mb-3 mobile:text-xl mobile:mb-2">{feature.title}</h4>
                            <p className="mobile:text-sm" style={{textAlign: 'start'}}>{feature.desc}</p>
                        </motion.div>
                    </motion.div>
                  );
                })}
            </motion.div>
        </div>
    </div>
    {/* <!-- Key Features End --> */}


    {/* <!-- Role Comparison Section Start --> */}
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
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('comparison.tag')}</h5>
                <h1 className="display-6 mb-4 mobile:text-3xl mobile:mb-3">{t('comparison.title')}</h1>
                <motion.p 
                  className="fs-5 mobile:text-base mobile:leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t('comparison.subtitle')}
                </motion.p>
            </motion.div>
            
            <motion.div 
              className="comparison-table mobile:overflow-x-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <div className="table-responsive">
                    <table className="table table-bordered mb-0 mobile:text-sm">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="mobile:px-2">{t('comparison.table.feature')}</th>
                                <th className="mobile:px-2">{t('comparison.table.medeminence')}</th>
                                <th className="mobile:px-2">{t('comparison.table.traditional')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {t('comparison.rows', { returnObjects: true }).map((row, index) => (
                              <motion.tr 
                                key={index}
                                variants={tableRowAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                whileHover={{ backgroundColor: 'rgba(13, 110, 253, 0.05)' }}
                              >
                                  <td className="mobile:px-2"><strong className="mobile:text-sm">{row.feature}</strong></td>
                                  <td className="mobile:px-2">
                                    <div className="d-flex align-items-center">
                                        <motion.div 
                                          whileHover={{ scale: 1.2 }}
                                        >
                                          <CheckCircle className="text-success me-2 mobile:text-sm" size={20} />
                                        </motion.div>
                                        <span className="mobile:text-sm">{row.med}</span>
                                    </div>
                                  </td>
                                  <td className="mobile:px-2">
                                    <div className="d-flex align-items-center">
                                        <motion.div 
                                          whileHover={{ scale: 1.2 }}
                                        >
                                          <CheckCircle className="text-success me-2 mobile:text-sm" size={20} />
                                        </motion.div>
                                        <span className="mobile:text-sm">{row.traditional}</span>
                                    </div>
                                  </td>
                              </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
            
            <motion.div 
              className="text-center mt-5 mobile:mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
                <div className="alert alert-info mx-auto mobile:p-3" style={{maxWidth: '800px'}}>
                    <p className="mb-0 mobile:text-sm">
                        <strong>Clarification:</strong> Both roles are important and complementary. MedEminence focuses on coordination while healthcare providers focus on clinical care. Our coordination supports access to appropriate medical care.
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
    {/* <!-- Role Comparison Section End --> */}


    {/* <!-- Coordination Commitment Start --> */}
    <div className="container-fluid bg-primary text-white py-5">
        <div className="container py-5">
            <motion.div 
              className="text-center mx-auto mb-5 mobile:mb-4" 
              style={{maxWidth: '800px'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="mb-4 mobile:text-2xl mobile:mb-3">{t('trust.title')}</h2>
                <motion.p 
                  className="fs-5 mobile:text-base mobile:leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t('trust.subtitle')}
                </motion.p>
            </motion.div>
            
            <motion.div 
              className="row g-4 mobile:g-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                {t('trust.badges', { returnObjects: true }).map((badge, index) => {
                  const TrustIcon = trustIcons[index] || ShieldCheck;
                  return (
                    <motion.div 
                      key={index}
                      className="col-lg-3 col-md-6 mobile:col-12 mobile:mb-3"
                      variants={fadeInUp}
                    >
                        <motion.div 
                          className="bg-white text-dark rounded p-4 h-100 mobile:p-3"
                          whileHover={{ 
                            y: -5,
                            boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
                            transition: { duration: 0.3 }
                          }}
                        >
                          <div className="text-center mb-3 mobile:mb-2">
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                              >
                                <TrustIcon className="text-primary mobile:text-2xl" size={48} />
                              </motion.div>
                          </div>
                          <h5 className="text-center mb-3 mobile:text-lg mobile:mb-2">{badge.title}</h5>
                          <p className="mb-0 text-center mobile:text-sm" style={{textAlign: 'start'}}>{badge.desc}</p>
                        </motion.div>
                    </motion.div>
                  );
                })}
            </motion.div>
            
            <motion.div 
              className="row mt-5 pt-4 mobile:mt-3 mobile:pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
                <motion.div 
                  className="col-lg-3 col-md-6 text-center mobile:col-6 mobile:mb-3"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <motion.div 
                      className="stat-number text-white mobile:text-xl"
                      variants={statCountAnimation}
                      initial="initial"
                      whileInView="whileInView"
                    >
                      Non-Clinical
                    </motion.div>
                    <p className="text-white mb-0 mobile:text-xs">Coordination Focus</p>
                </motion.div>
                <motion.div 
                  className="col-lg-3 col-md-6 text-center mobile:col-6 mobile:mb-3"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <motion.div 
                      className="stat-number text-white mobile:text-xl"
                      variants={statCountAnimation}
                      initial="initial"
                      whileInView="whileInView"
                    >
                      Accredited
                    </motion.div>
                    <p className="text-white mb-0 mobile:text-xs">Hospital Partners</p>
                </motion.div>
                <motion.div 
                  className="col-lg-3 col-md-6 text-center mobile:col-6"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <motion.div 
                      className="stat-number text-white mobile:text-xl"
                      variants={statCountAnimation}
                      initial="initial"
                      whileInView="whileInView"
                    >
                      Clear
                    </motion.div>
                    <p className="text-white mb-0 mobile:text-xs">Role Definition</p>
                </motion.div>
                <motion.div 
                  className="col-lg-3 col-md-6 text-center mobile:col-6"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <motion.div 
                      className="stat-number text-white mobile:text-xl"
                      variants={statCountAnimation}
                      initial="initial"
                      whileInView="whileInView"
                    >
                      Structured
                    </motion.div>
                    <p className="text-white mb-0 mobile:text-xs">Coordination Model</p>
                </motion.div>
            </motion.div>
        </div>
    </div>
    {/* <!-- Coordination Commitment End --> */}


    {/* <!-- CTA Section Start --> */}
    <div className="container-fluid my-5 py-5">
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
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t('cta.tag')}</h5>
                        <h1 className="display-6 mobile:text-3xl mobile:mt-2">{t('cta.title')}</h1>
                    </div>
                    <motion.p 
                      className="fs-5 mb-4 mobile:text-base mobile:leading-relaxed mobile:mb-3 mobile:text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
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
                          backgroundColor: "rgba(13, 110, 253, 0.1)"
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
                            <h3 className="card-title mb-4 mobile:text-2xl mobile:mb-3 text-center">{t('faq.title')}</h3>
                            <div className="faq-preview">
                                {t('faq.items', { returnObjects: true }).map((item, index) => (
                                  <React.Fragment key={index}>
                                    <motion.p 
                                      className="mb-3 mobile:mb-2 mobile:text-sm"
                                      initial={{ opacity: 0, x: -20 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: 0.1 * (index * 2) }}
                                    >
                                      <strong>Q: {item.q}</strong>
                                    </motion.p>
                                    <motion.p 
                                      className={index < t('faq.items', { returnObjects: true }).length - 1 ? "mb-4 mobile:mb-3 mobile:text-sm" : "mb-0 mobile:text-sm"}
                                      initial={{ opacity: 0, x: -20 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: 0.1 * (index * 2 + 1) }}
                                    >
                                      A: {item.a}
                                    </motion.p>
                                  </React.Fragment>
                                ))}
                            </div>
                            <motion.a 
                              href="/medical-enquiry" 
                              className="btn btn-primary w-100 mt-4 mobile:mt-3 mobile:py-2"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                            >
                              {t('faq.cta')}
                            </motion.a>
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

export default WhyChooseMedEminence;