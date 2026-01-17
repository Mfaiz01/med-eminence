import React from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaBalanceScale, FaUserMd, FaExclamationTriangle, FaShieldAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation("terms");

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid terms-header py-4 py-md-5 mb-4 mb-md-5">
        <div className="container py-4 py-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h1 className="display-4 text-white mb-3 mb-md-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                {t('header.title', 'Terms & Conditions')}
              </h1>

              <p className="lead text-white mb-3 mb-md-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                {t('header.subtitle', 'Legal terms for using MedEminence services')}
              </p>

              <div className="d-inline-flex text-white flex-wrap justify-content-center">
                <p className="m-0">
                  <a className="text-white" href="/">Home</a>
                </p>
                <p className="m-0 px-2">/</p>
                <p className="m-0">Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Terms & Conditions Content */}
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
                    <FaFileContract size={32} className="me-2 me-md-3" />
                    <div>
                      <h2 className="mb-0" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                        {t('title', 'Terms & Conditions')}
                      </h2>
                      <p className="mb-0 opacity-75 d-none d-md-block">
                        MedEminence Medical Tourism Facilitation
                      </p>
                      <p className="mb-0 opacity-75 d-md-none" style={{ fontSize: '1.25rem' }}>
                        Medical Tourism Facilitation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-body p-3 p-md-5">
                  {/* Main Terms Statement from Approved Document */}
                  <motion.div
                    className="terms-statement bg-light p-3 p-md-5 rounded mb-4 mb-md-5"
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
                          <FaBalanceScale size={28} className="text-white" />
                        </div>
                      </div>
                      <div className="text-center text-md-start">
                        <h3 className="text-primary mb-2 mb-md-3" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
                          {t('mainStatement.title', 'Service Description & Limitations')}
                        </h3>
                        <p className="lead mb-0" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                          <em>
                            {t('mainStatement.content',
                              'MedEminence acts solely as a medical tourism facilitation and coordination platform. We do not provide medical advice, diagnosis, or treatment. All medical services are delivered by independent, licensed healthcare providers.'
                            )}
                          </em>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Important Points */}
                  <div className="row g-3 g-md-4 mb-4 mb-md-5">
                    <div className="col-12 col-md-6">
                      <motion.div
                        className="h-100 p-3 p-md-4 border rounded bg-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="text-center mb-2 mb-md-3">
                          <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center p-3">
                            <FaUserMd size={24} className="text-white" />
                          </div>
                        </div>
                        <h4 className="text-center mb-2 mb-md-3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                          {t('points.facilitation.title', 'Facilitation Only')}
                        </h4>
                        <p className="text-center mb-0" style={{ fontSize: '1.25rem' }}>
                          {t('points.facilitation.content', 'We coordinate access to healthcare services but do not provide medical treatment directly.')}
                        </p>
                      </motion.div>
                    </div>

                    <div className="col-12 col-md-6">
                      <motion.div
                        className="h-100 p-3 p-md-4 border rounded bg-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="text-center mb-2 mb-md-3">
                          <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center p-3">
                            <FaExclamationTriangle size={24} className="text-white" />
                          </div>
                        </div>
                        <h4 className="text-center mb-2 mb-md-3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                          {t('points.limitations.title', 'Important Limitations')}
                        </h4>
                        <p className="text-center mb-0" style={{ fontSize: '1.25rem' }}>
                          {t('points.limitations.content', 'Clinical decisions and treatment outcomes are determined by healthcare providers, not by MedEminence.')}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Service Fee Information */}
                  <motion.div
                    className="bg-light p-3 p-md-4 rounded mb-4 mb-md-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="d-flex align-items-center mb-2 mb-md-3">
                      <FaShieldAlt className="text-primary me-2 me-md-3" size={24} />
                      <h4 className="mb-0" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                        {t('serviceFees.title', 'Service Fee Structure')}
                      </h4>
                    </div>
                    <p className="mb-2 mb-md-3" style={{ fontSize: '1.25rem' }}>
                      {t('serviceFees.description', 'MedEminence charges a separate service fee for non-medical coordination and support. This fee covers logistical and travel-related assistance only and does not include medical treatment costs.')}
                    </p>
                    <div className="row">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <ul className="list-unstyled">
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '1.25rem' }}>
                              {t('serviceFees.points.coordination', 'Medical case review coordination')}
                            </span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '1.25em' }}>
                              {t('serviceFees.points.travel', 'Travel planning and accommodation support')}
                            </span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '1.25rem' }}>
                              {t('serviceFees.points.logistics', 'Treatment pathway logistics')}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6">
                        <ul className="list-unstyled">
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '1.25rem' }}>
                              {t('serviceFees.points.communication', 'Communication coordination')}
                            </span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <FaCheckCircle className="text-primary me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '1.25rem' }}>
                              {t('serviceFees.points.followup', 'Post-treatment follow-up support')}
                            </span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <FaTimesCircle className="text-danger me-2 mt-1 flex-shrink-0" />
                            <span style={{ fontSize: '1.25rem' }}>
                              {t('serviceFees.points.excludes', 'Does not include medical treatment costs')}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Important Notice */}
                  <motion.div
                    className="alert alert-warning mb-4 mb-md-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    role="alert"
                  >
                    <div className="d-flex">
                      <FaExclamationTriangle size={20} className="me-2 me-md-3 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="alert-heading mb-1 mb-md-2" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                          {t('notice.title', 'Important Notice')}
                        </h5>
                        <p className="mb-0" style={{ fontSize: '1.25rem' }}>
                          {t('notice.content', 'All medical treatment costs are paid directly to the hospital by the patient and are determined solely by the healthcare provider. MedEminence does not control or influence medical treatment pricing.')}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Agreement Section */}
                  <motion.div
                    className="mt-4 mt-md-5 pt-3 pt-md-4 border-top"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h5 className="mb-2 mb-md-3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                      {t('agreement.title', 'Agreement to Terms')}
                    </h5>
                    <p className="mb-3 mb-md-4" style={{ fontSize: '1.25rem' }}>
                      {t('agreement.content', 'By using MedEminence services, you acknowledge and agree to these Terms & Conditions. You understand that MedEminence is a facilitation platform and not a healthcare provider.')}
                    </p>
                    <div className="bg-light p-3 p-md-4 rounded">
                      <p className="mb-0" style={{ fontSize: '1.25rem' }}>
                        <strong>{t('agreement.summary', 'Summary:')}</strong> {t('agreement.summaryText', 'MedEminence facilitates connections between patients and healthcare providers. We coordinate non-medical aspects of the healthcare journey. Medical decisions, treatments, and outcomes remain the responsibility of licensed healthcare professionals.')}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="card-footer bg-light py-3 py-md-4">
                  <div className="text-center">
                    <p className="mb-0 text-muted" style={{ fontSize: '1.25rem' }}>
                      <small>
                        {t('footer', 'These Terms & Conditions are effective as of the last update date and constitute the entire agreement between you and MedEminence regarding our facilitation services.')}
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

export default Terms;