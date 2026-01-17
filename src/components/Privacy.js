import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield, FaFileContract, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation("legal");

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid privacy-header py-4 py-md-5 mb-4 mb-md-5">
        <div className="container py-4 py-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h1 className="display-4 text-white mb-3 mb-md-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                {t('header.title', 'Privacy Policy')}
              </h1>

              <p className="lead text-white mb-3 mb-md-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                {t('header.subtitle', 'Protecting your personal and medical information')}
              </p>

              <div className="d-inline-flex text-white flex-wrap justify-content-center">
                <p className="m-0">
                  <a className="text-white" href="/">Home</a>
                </p>
                <p className="m-0 px-2">/</p>
                <p className="m-0">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Privacy Policy Content */}
      <div className="container-fluid py-4 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-10">
              <motion.div
                className="card border-0 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-header bg-primary text-white py-3 py-md-4">
                  <div className="d-flex align-items-center">
                    <FaShieldAlt size={32} className="me-2 me-md-3" />
                    <div>
                      <h2 className="mb-0" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                        {t('title', 'Privacy Policy')}
                      </h2>
                      <p className="mb-0 opacity-75 d-none d-md-block">
                        MedEminence - Protecting Your Information
                      </p>
                      <p className="mb-0 opacity-75 d-md-none" style={{ fontSize: '0.875rem' }}>
                        Protecting Your Information
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-body p-3 p-md-5">
                  {/* Main Privacy Statement from Approved Document */}
                  <motion.div
                    className="privacy-statement bg-light p-3 p-md-5 rounded mb-4 mb-md-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderLeft: '4px solid #3B82F6' }}
                  >
                    <div className="d-flex flex-column flex-md-row align-items-start mb-3 mb-md-4">
                      <div className="me-0 me-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                             style={{ 
                               width: 'clamp(50px, 10vw, 60px)', 
                               height: 'clamp(50px, 10vw, 60px)' 
                             }}>
                          <FaFileContract size={28} className="text-white" />
                        </div>
                      </div>
                      <div className="text-center text-md-start">
                        <h3 className="text-primary mb-2 mb-md-3" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
                          {t('mainStatement.title', 'Our Privacy Commitment')}
                        </h3>
                        <p className="lead mb-0" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                          <em>
                            {t('mainStatement.content',
                              'We implement appropriate technical and organizational safeguards inspired by globally recognized privacy standards to protect personal and medical information shared with us.'
                            )}
                          </em>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Key Principles */}
                  <div className="row g-3 g-md-4 mb-4 mb-md-5">
                    <div className="col-12 col-md-4">
                      <motion.div
                        className="h-100 p-3 p-md-4 border rounded bg-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="text-center mb-2 mb-md-3">
                          <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center p-3">
                            <FaLock size={24} className="text-white" />
                          </div>
                        </div>
                        <h4 className="text-center mb-2 mb-md-3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                          {t('principles.security.title', 'Secure Data Handling')}
                        </h4>
                        <p className="text-center mb-0" style={{ fontSize: '0.875rem' }}>
                          {t('principles.security.content', 'All personal and medical information is protected with industry-standard security measures.')}
                        </p>
                      </motion.div>
                    </div>

                    <div className="col-12 col-md-4">
                      <motion.div
                        className="h-100 p-3 p-md-4 border rounded bg-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="text-center mb-2 mb-md-3">
                          <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center p-3">
                            <FaUserShield size={24} className="text-white" />
                          </div>
                        </div>
                        <h4 className="text-center mb-2 mb-md-3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                          {t('principles.confidentiality.title', 'Strict Confidentiality')}
                        </h4>
                        <p className="text-center mb-0" style={{ fontSize: '0.875rem' }}>
                          {t('principles.confidentiality.content', 'Information is shared only with authorized healthcare providers for care coordination purposes.')}
                        </p>
                      </motion.div>
                    </div>

                    <div className="col-12 col-md-4">
                      <motion.div
                        className="h-100 p-3 p-md-4 border rounded bg-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="text-center mb-2 mb-md-3">
                          <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center p-3">
                            <FaShieldAlt size={24} className="text-white" />
                          </div>
                        </div>
                        <h4 className="text-center mb-2 mb-md-3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                          {t('principles.standards.title', 'Global Standards')}
                        </h4>
                        <p className="text-center mb-0" style={{ fontSize: '0.875rem' }}>
                          {t('principles.standards.content', 'Our safeguards are inspired by globally recognized privacy and security standards.')}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <motion.div
                    className="bg-light p-3 p-md-4 rounded mb-4 mb-md-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="mb-2 mb-md-3" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                      {t('additional.title', 'Important Information')}
                    </h4>
                    <div className="row">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <ul className="list-unstyled">
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '0.875rem' }}>
                              {t('additional.points.medical', 'Medical information is used solely for healthcare coordination')}
                            </span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '0.875rem' }}>
                              {t('additional.points.consent', 'We obtain consent for data processing as required')}
                            </span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '0.875rem' }}>
                              {t('additional.points.access', 'Patients can request access to their information')}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6">
                        <ul className="list-unstyled">
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '0.875rem' }}>
                              {t('additional.points.security', 'Regular security audits and updates')}
                            </span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '0.875rem' }}>
                              {t('additional.points.training', 'Staff training on privacy protection')}
                            </span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '0.875rem' }}>
                              {t('additional.points.compliance', 'Compliance with applicable privacy laws')}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div
                    className="mt-4 mt-md-5 pt-3 pt-md-4 border-top"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h5 className="mb-2 mb-md-3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                      {t('contact.title', 'Privacy Contact')}
                    </h5>
                    <p className="mb-0" style={{ fontSize: '0.875rem' }}>
                      {t('contact.content', 'For privacy-related inquiries, please contact us at:')}
                      <br className="d-md-none" />
                      <strong className="ms-0 ms-md-2 d-block d-md-inline mt-1 mt-md-0">
                        info@medeminence.com
                      </strong>
                    </p>
                  </motion.div>
                </div>

                <div className="card-footer bg-light py-3 py-md-4">
                  <div className="text-center">
                    <p className="mb-0 text-muted" style={{ fontSize: '0.875rem' }}>
                      <small>
                        {t('footer', 'This privacy policy is part of MedEminence\'s commitment to transparent and secure healthcare coordination.')}
                      </small>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;