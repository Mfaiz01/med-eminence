import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHospitalAlt,
  FaStethoscope,
  FaCalendarCheck,
  FaFileMedicalAlt,
  FaExclamationTriangle,
  FaFolderOpen,
  FaUserCircle,
  FaClipboardCheck,
  FaUserShield,
  FaFilePdf,
  FaFileImage,
  FaFileWord,
  FaFileAlt,
  FaTrashAlt,
  FaImage,
  FaClock,
  FaHdd,
  FaNotesMedical,
  FaLaptopMedical,
  FaClipboardList,
  FaUserMd,
  FaTextHeight,
  FaExclamationCircle,
  FaCheckCircle,
  FaCalendarDay,
  FaFirstAid,
  FaAmbulance,
  FaHeartbeat,
  FaVideo,
  FaHospitalUser,
  FaExchangeAlt,
  FaThermometer,
  FaShieldAlt,
  FaArrowLeft,
  FaEdit,
  FaPaperPlane,
  FaSpinner,
  FaArrowRight,
  FaVenusMars,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCalendarAlt,
  FaLock,
  FaCommentAlt,
  FaHeart,
  FaBone,
  FaPrescriptionBottle,
  FaBrain,
  FaLeaf,
  FaBaby,
  FaTooth,
  FaAllergies,
  FaVial,
  FaChild,
  FaEye,
  FaEar,
  FaQuestionCircle,
  FaPaperclip,
  FaUpload,
  FaTimes,
  FaFile,
  FaHistory,
  FaInfoCircle
} from 'react-icons/fa';
import { useTranslation } from "react-i18next";

// Department options moved inside the component
const MedicalEnquiry = () => {
  const { t } = useTranslation("enquiry");

  // State Management
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progressWidth, setProgressWidth] = useState(33);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  // Create ref for file input
  const fileInputRef = useRef(null);

  // Form Data State
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    fullName: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    country: '',
    referralSource: '',

    // Step 2: Medical Information
    medicalDepartment: '',
    specificCondition: '',
    medicalHistory: '',
    consultationType: '',
    urgencyLevel: 'routine',

    // Step 3: Consent
    privacyConsent: false,
    communicationConsent: false,

    // File Uploads
    files: []
  });

  // Get department options from approved document
  const departmentOptions = [
    { value: 'cardiology-cardiac-surgery', label: 'Cardiology & Cardiac Surgery', icon: FaHeart },
    { value: 'orthopedics-joint-replacement', label: 'Orthopedics & Joint Replacement', icon: FaBone },
    { value: 'neurology-neurosurgery', label: 'Neurology & Neurosurgery', icon: FaBrain },
    { value: 'oncology-cancer-care', label: 'Oncology & Hematology', icon: FaPrescriptionBottle },
    { value: 'gastroenterology', label: 'Gastroenterology', icon: FaAllergies },
    { value: 'nephrology-urology', label: 'Nephrology & Urology', icon: FaVial },
    { value: 'fertility-ivf', label: 'Fertility & Reproductive Medicine', icon: FaBaby },
    { value: 'dental-treatment', label: 'Dental Care & Oral Surgery', icon: FaTooth },
    { value: 'ayurvedic-treatment', label: 'Ayurveda & Integrative Medicine', icon: FaLeaf },
    { value: 'not-sure', label: 'Not Sure - Need Guidance', icon: FaQuestionCircle }
  ];

  // Handler functions
  const nextStep = (targetStep) => {
    if (validateStep(currentStep)) {
      setCurrentStep(targetStep);

      // Update progress width based on target step
      if (targetStep === 2) {
        setProgressWidth(66);
      } else if (targetStep === 3) {
        setProgressWidth(100);
      } else {
        setProgressWidth(33);
      }
    } else {
      alert(`Please fill all required fields in Step ${currentStep} correctly.`);
    }
  };

  const prevStep = (targetStep) => {
    setCurrentStep(targetStep);

    // Update progress width based on target step
    if (targetStep === 1) {
      setProgressWidth(33);
    } else if (targetStep === 2) {
      setProgressWidth(66);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    const files = e.target.files;
    
    if (files && files.length > 0) {
      // Allow only one file
      if (files.length > 1) {
        alert('Only one file can be uploaded at a time. Please select a single file.');
        e.target.value = ''; // Reset input
        return;
      }
      
      const file = files[0];
      
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB.');
        e.target.value = ''; // Reset input
        return;
      }
      
      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF and Word documents are allowed.');
        e.target.value = ''; // Reset input
        return;
      }
      
      // Replace existing file with new one
      setUploadedFiles([file]);
      setFormData(prev => ({
        ...prev,
        files: [file]
      }));
    }
    
    // Reset the input value to allow selecting the same file again
    e.target.value = '';
  };

  // Handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    
    if (files && files.length > 0) {
      // Allow only one file
      if (files.length > 1) {
        alert('Only one file can be uploaded at a time. Please drop a single file.');
        return;
      }
      
      const file = files[0];
      
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB.');
        return;
      }
      
      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF and Word documents are allowed.');
        return;
      }
      
      // Replace existing file with new one
      setUploadedFiles([file]);
      setFormData(prev => ({
        ...prev,
        files: [file]
      }));
    }
  };

  // Handle click on upload area
  // const handleUploadAreaClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };

  // Validation function
  const validateStep = (step) => {
    const errors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) errors.fullName = t('errors.fullName', { defaultValue: 'Full Name is required' });
      if (!formData.dob) errors.dob = t('errors.dob', { defaultValue: 'Date of Birth is required' });
      if (!formData.gender) errors.gender = t('errors.gender', { defaultValue: 'Gender is required' });
      if (!formData.phone.trim()) errors.phone = t('errors.phone', { defaultValue: 'Phone is required' });
      if (!formData.email.trim()) errors.email = t('errors.email', { defaultValue: 'Email is required' });
    }

    if (step === 2) {
      if (!formData.medicalDepartment) errors.medicalDepartment = t('errors.medicalDepartment', { defaultValue: 'Medical Department is required' });
      if (!formData.medicalHistory || formData.medicalHistory.length < 10) {
        errors.medicalHistory = t('errors.medicalHistory', { defaultValue: 'Medical History (minimum 10 characters) is required' });
      }
    }

    if (step === 3) {
      if (!formData.privacyConsent) errors.privacyConsent = t('errors.privacyConsent', { defaultValue: 'Privacy consent is required' });
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(3)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted successfully');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Remove uploaded file
  const removeFile = (index) => {
    setUploadedFiles([]);
    setFormData(prev => ({
      ...prev,
      files: []
    }));
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Animation variants
  const stepVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.3 } }
  };

  const progressBarVariants = {
    animate: {
      width: `${progressWidth}%`,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid medical-enquiry-header py-5 mb-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h1 className="display-4 text-white mb-3 mb-md-4">
                {t('header.title', { defaultValue: 'Medical Enquiry Form' })}
              </h1>

              <p className="lead text-white mb-3 mb-md-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                {t('header.subtitle', {
                  defaultValue:
                    'Share your medical details securely for coordinated healthcare consultation',
                })}
              </p>

              <div className="d-inline-flex text-white">
                <p className="m-0">
                  <a className="text-white" href="/">Home</a>
                </p>
                <p className="m-0 px-2">/</p>
                <p className="m-0">Medical Enquiry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Medical Enquiry Form Start */}
      <div className="container-fluid py-4 py-md-5">
        <div className="container">
          <div className="row gx-3 gx-md-5">
            <div className="col-12 col-lg-12">
              {/* Progress Steps - Responsive */}
              <div className="mb-4 mb-md-5">
                <div className="progress progress-medical mb-3" style={{ height: '8px' }}>
                  <motion.div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    variants={progressBarVariants}
                    animate="animate"
                    aria-valuenow={progressWidth}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></motion.div>
                </div>
                <div className="d-flex justify-content-between progress-steps">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="text-center" style={{ flex: 1, padding: '0 5px' }}>
                      <div
                        className={`rounded-circle ${currentStep === step ? 'bg-primary text-white' : currentStep > step ? 'bg-success text-white' : 'bg-light border'} d-inline-flex align-items-center justify-content-center mb-1 mb-md-2`}
                        style={{ 
                          width: 'clamp(32px, 8vw, 40px)', 
                          height: 'clamp(32px, 8vw, 40px)',
                          fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                        }}
                      >
                        <span className="step-number">{step}</span>
                      </div>
                      <h6 className="mb-0 d-none d-md-block" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
                        {step === 1 ? t('progress.step1', { defaultValue: 'Patient Details' }) :
                          step === 2 ? t('progress.step2', { defaultValue: 'Medical Information' }) :
                            t('progress.step3', { defaultValue: 'Review & Submit' })}
                      </h6>
                      <small className="d-md-none text-muted">
                        {step === 1 ? 'Step 1' : step === 2 ? 'Step 2' : 'Step 3'}
                      </small>
                    </div>
                  ))}
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center">
                  <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading" style={{ textAlign: 'center' }}>
                      <FaCheckCircle className="me-2" />
                      {t('success.title', { defaultValue: 'Medical Enquiry Submitted Successfully!' })}
                    </h4>
                    <p className="mb-3">{t('success.message', { defaultValue: 'Thank you for submitting your medical enquiry through our secure enquiry form. Our coordination team will review your medical information and contact you within 24 hours to discuss the next steps.' })}</p>
                    <div className="mt-3">
                      <p className="mb-2"><strong>Next Steps:</strong></p>
                      <ol className="text-start mx-auto" style={{ maxWidth: '500px' }}>
                        <li>Case review coordination with partner hospitals</li>
                        <li>Treatment pathway planning based on specialist evaluation</li>
                        <li>Transparent communication regarding coordination process</li>
                      </ol>
                    </div>
                    <hr />
                    <p className="mb-0">
                      <small>For immediate assistance, please contact: <strong>info@medeminence.com</strong></small>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-light rounded p-3 p-md-5">
                  <div className="text-center mb-4 mb-md-5">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white mb-2 mb-md-3" 
                         style={{ 
                           width: 'clamp(50px, 10vw, 60px)', 
                           height: 'clamp(50px, 10vw, 60px)' 
                         }}>
                      <FaFileMedicalAlt size={28} />
                    </div>
                    <h2 className="mb-2 mb-md-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                      {t('form.title', { defaultValue: 'Medical Enquiry Form' })}
                    </h2>
                    <p className="text-muted mb-0" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)' }}>
                      {t('form.description', { defaultValue: 'Patients securely share medical reports and treatment requirements through our enquiry form. All information is handled confidentially and disclosed only to authorized healthcare providers for care coordination purposes.' })}
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {/* Step 1: Patient Details */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                      >
                        <h4 className="mb-3 mb-md-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                          <FaUserCircle className="text-primary me-2" />
                          {t('form.step1.title', { defaultValue: 'Patient Information' })}
                          <small className="text-muted fs-6 ms-2 d-none d-md-inline">
                            {t('form.step1.subtitle', { defaultValue: '(Step 1 of 3)' })}
                          </small>
                        </h4>

                        <div className="alert alert-info mb-3 mb-md-4" role="alert">
                          <div className="d-flex align-items-start">
                            <FaUserShield className="me-2 me-md-3 mt-1" />
                            <div style={{ fontSize: '1.5rem' }}>
                              <strong>Privacy Notice:</strong> All patient information shared with MedEminence is handled confidentially and disclosed only to authorized healthcare providers strictly for care coordination purposes.
                            </div>
                          </div>
                        </div>

                        <div className="row g-2 g-md-3">
                          <div className="col-12 col-md-6">
                            <label className="form-label">{t('form.step1.fields.fullName', { defaultValue: 'Full Name *' })}</label>
                            <input
                              type="text"
                              className={`form-control ${formErrors.fullName ? 'is-invalid' : ''}`}
                              placeholder={t('form.step1.placeholders.fullName', { defaultValue: 'Enter your full name' })}
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                            />
                            {formErrors.fullName && <div className="invalid-feedback">{formErrors.fullName}</div>}
                          </div>

                          <div className="col-12 col-md-6">
                            <label className="form-label">{t('form.step1.fields.dob', { defaultValue: 'Date of Birth *' })}</label>
                            <input
                              type="date"
                              className={`form-control ${formErrors.dob ? 'is-invalid' : ''}`}
                              name="dob"
                              value={formData.dob}
                              onChange={handleInputChange}
                              max={new Date().toISOString().split('T')[0]}
                            />
                            {formErrors.dob && <div className="invalid-feedback">{formErrors.dob}</div>}
                          </div>

                          <div className="col-12 col-md-6">
                            <label className="form-label">{t('form.step1.fields.gender', { defaultValue: 'Gender *' })}</label>
                            <select
                              className={`form-select ${formErrors.gender ? 'is-invalid' : ''}`}
                              name="gender"
                              value={formData.gender}
                              onChange={handleInputChange}
                            >
                              <option value="">{t('form.step1.fields.selectGender', { defaultValue: 'Select Gender' })}</option>
                              <option value="male">{t('form.step1.fields.male', { defaultValue: 'Male' })}</option>
                              <option value="female">{t('form.step1.fields.female', { defaultValue: 'Female' })}</option>
                              <option value="other">{t('form.step1.fields.other', { defaultValue: 'Other' })}</option>
                              <option value="prefer-not-to-say">{t('form.step1.fields.preferNotToSay', { defaultValue: 'Prefer not to say' })}</option>
                            </select>
                            {formErrors.gender && <div className="invalid-feedback">{formErrors.gender}</div>}
                          </div>

                          <div className="col-12 col-md-6">
                            <label className="form-label">{t('form.step1.fields.phone', { defaultValue: 'Contact Number *' })}</label>
                            <input
                              type="tel"
                              className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                              placeholder={t('form.step1.placeholders.phone', { defaultValue: '+012 345 6789' })}
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                            />
                            {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                          </div>

                          <div className="col-12 col-md-6">
                            <label className="form-label">{t('form.step1.fields.email', { defaultValue: 'Email Address *' })}</label>
                            <input
                              type="email"
                              className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                              placeholder={t('form.step1.placeholders.email', { defaultValue: 'your.email@example.com' })}
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                          </div>

                          <div className="col-12 col-md-6">
                            <label className="form-label">{t('form.step1.fields.country', { defaultValue: 'Country *' })}</label>
                            <select
                              className={`form-select ${formErrors.country ? 'is-invalid' : ''}`}
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                            >
                              <option value="">{t('form.step1.fields.selectCountry', { defaultValue: 'Select Country' })}</option>
                              <optgroup label="South Asia">
                                <option value="bangladesh">Bangladesh</option>
                                <option value="afghanistan">Afghanistan</option>
                                <option value="nepal">Nepal</option>
                                <option value="sri-lanka">Sri Lanka</option>
                              </optgroup>
                              <optgroup label="Middle East">
                                <option value="uae">United Arab Emirates</option>
                                <option value="saudi-arabia">Saudi Arabia</option>
                                <option value="oman">Oman</option>
                                <option value="kuwait">Kuwait</option>
                                <option value="qatar">Qatar</option>
                                <option value="iraq">Iraq</option>
                                <option value="yemen">Yemen</option>
                              </optgroup>
                              <optgroup label="Africa">
                                <option value="nigeria">Nigeria</option>
                                <option value="kenya">Kenya</option>
                                <option value="ghana">Ghana</option>
                                <option value="ethiopia">Ethiopia</option>
                                <option value="tanzania">Tanzania</option>
                                <option value="uganda">Uganda</option>
                                <option value="zambia">Zambia</option>
                                <option value="zimbabwe">Zimbabwe</option>
                              </optgroup>
                              <optgroup label="Selective Support Regions">
                                <option value="romania">Romania</option>
                                <option value="bulgaria">Bulgaria</option>
                                <option value="serbia">Serbia</option>
                                <option value="greece">Greece</option>
                                <option value="baltic-states">Baltic States</option>
                                <option value="usa">United States</option>
                                <option value="canada">Canada</option>
                              </optgroup>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div className="col-12">
                            <div className="mt-3 mt-md-4">
                              <motion.button
                                type="button"
                                className="btn btn-primary w-100 py-2 py-md-3"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => nextStep(2)}
                              >
                                {t('form.step1.buttons.next', { defaultValue: 'Continue to Medical Information' })}
                                <FaArrowRight className="ms-2" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Medical Information */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                      >
                        <div className="step-header mb-3 mb-md-4">
                          <div className="d-flex align-items-center mb-2 mb-md-3">
                            <div className="step-icon bg-primary bg-gradient rounded d-flex align-items-center justify-content-center me-2 me-md-3" 
                                 style={{ 
                                   width: 'clamp(40px, 8vw, 50px)', 
                                   height: 'clamp(40px, 8vw, 50px)' 
                                 }}>
                              <FaFileMedicalAlt size={24} className="text-white" />
                            </div>
                            <div>
                              <h4 className="mb-0 text-dark" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                                {t('form.step2.title', { defaultValue: 'Medical Information' })}
                              </h4>
                              <p className="text-muted mb-0 d-none d-md-block">
                                {t('form.step2.subtitle', { defaultValue: 'Step 2 of 3 - Share your medical details' })}
                              </p>
                            </div>
                          </div>

                          <div className="alert alert-warning mb-3 mb-md-4" role="alert">
                            <div className="d-flex align-items-start">
                              <FaExclamationTriangle className="me-2 me-md-3 mt-1" />
                              <div style={{ fontSize: '0.875rem' }}>
                                <strong>Important:</strong> MedEminence does not provide medical diagnosis, prescriptions, or treatment. All clinical decisions, treatment plans, and medical outcomes are determined exclusively by licensed healthcare providers.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row g-3 g-md-4">
                          {/* Medical Department */}
                          <div className="col-12">
                            <div className="form-card p-3 p-md-4 border rounded bg-white">
                              <label className="form-label form-required d-flex align-items-center mb-2 mb-md-3">
                                <div className="icon-container bg-primary bg-opacity-10 rounded d-flex align-items-center justify-content-center me-2 me-md-3" 
                                     style={{ 
                                       width: 'clamp(40px, 8vw, 50px)', 
                                       height: 'clamp(40px, 8vw, 50px)' 
                                     }}>
                                  <FaHospitalAlt size={24} className="text-white" />
                                </div>
                                <div>
                                  <span className="h5 mb-0 d-block" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                                    {t('form.step2.department.label', { defaultValue: 'Treatment Department / Specialty *' })}
                                  </span>
                                  <small className="text-muted d-none d-md-block">
                                    {t('form.step2.department.help', { defaultValue: 'Select the medical specialty for your treatment needs' })}
                                  </small>
                                </div>
                              </label>
                              <select
                                className={`form-select ${formErrors.medicalDepartment ? 'is-invalid' : ''}`}
                                required
                                name="medicalDepartment"
                                value={formData.medicalDepartment}
                                onChange={handleInputChange}
                              >
                                <option value="">{t('form.step2.department.placeholder', { defaultValue: 'Select a Treatment Department or Specialty' })}</option>
                                {departmentOptions.map((option) => {
                                  const Icon = option.icon;
                                  return (
                                    <option key={option.value} value={option.value}>
                                      {option.label}
                                    </option>
                                  );
                                })}
                              </select>
                              {formErrors.medicalDepartment && (
                                <div className="invalid-feedback d-flex align-items-center mt-2">
                                  <FaExclamationCircle className="me-2 text-danger" />
                                  {formErrors.medicalDepartment}
                                </div>
                              )}
                              <div className="form-text mt-2 mt-md-3">
                                <em>Treatment availability depends on hospital capability, medical suitability, and applicable regulatory requirements.</em>
                              </div>
                            </div>
                          </div>

                          {/* Specific Condition */}
                          <div className="col-12">
                            <div className="form-card p-3 p-md-4 border rounded bg-white">
                              <label className="form-label d-flex align-items-center mb-2 mb-md-3">
                                <div className="icon-container bg-info bg-opacity-10 rounded d-flex align-items-center justify-content-center me-2 me-md-3" 
                                     style={{ 
                                       width: 'clamp(40px, 8vw, 50px)', 
                                       height: 'clamp(40px, 8vw, 50px)' 
                                     }}>
                                  <FaStethoscope size={24} className="text-white" />
                                </div>
                                <div>
                                  <span className="h5 mb-0 d-block" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                                    {t('form.step2.condition.label', { defaultValue: 'Specific Medical Condition / Diagnosis' })}
                                  </span>
                                  <small className="text-muted d-none d-md-block">
                                    {t('form.step2.condition.help', { defaultValue: 'If you have a diagnosed condition, please specify' })}
                                  </small>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={t('form.step2.condition.placeholder', { defaultValue: 'e.g., Coronary artery disease, Knee osteoarthritis, Breast cancer, Type 2 diabetes' })}
                                name="specificCondition"
                                value={formData.specificCondition}
                                onChange={handleInputChange}
                              />
                              <div className="form-text mt-2">
                                <FaClipboardList className="text-info me-2" />
                                {t('form.step2.condition.note', { defaultValue: 'This helps us coordinate with appropriate specialists for case review' })}
                              </div>
                            </div>
                          </div>

                          {/* Medical History */}
                          <div className="col-12">
                            <div className="form-card p-3 p-md-4 border rounded bg-white">
                              <label className="form-label form-required d-flex align-items-center mb-2 mb-md-3">
                                <div className="icon-container bg-warning bg-opacity-10 rounded d-flex align-items-center justify-content-center me-2 me-md-3" 
                                     style={{ 
                                       width: 'clamp(40px, 8vw, 50px)', 
                                       height: 'clamp(40px, 8vw, 50px)' 
                                     }}>
                                  <FaNotesMedical size={24} className="text-white" />
                                </div>
                                <div>
                                  <span className="h5 mb-0 d-block" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                                    {t('form.step2.history.label', { defaultValue: 'Medical History & Treatment Requirements *' })}
                                  </span>
                                  <small className="text-muted">
                                    {t('form.step2.history.hint', { defaultValue: 'Minimum 10 characters required' })}
                                  </small>
                                </div>
                              </label>

                              <div className="position-relative">
                                <textarea
                                  className={`form-control ${formErrors.medicalHistory ? 'is-invalid' : ''}`}
                                  rows="6"
                                  placeholder={t('form.step2.history.placeholder', {
                                    defaultValue: `Please provide details about:
• Current symptoms and duration
• Previous medical diagnoses
• Current medications and dosages
• Past surgeries, treatments, or hospitalizations
• Results of recent medical tests
• Any known allergies or adverse reactions
• Family medical history (if relevant)
• Specific treatment requirements or preferences` })}
                                  required
                                  name="medicalHistory"
                                  value={formData.medicalHistory}
                                  onChange={handleInputChange}
                                ></textarea>
                                <div className="position-absolute bottom-0 end-0 p-2 p-md-3">
                                  <span className={`badge ${formData.medicalHistory.length >= 10 ? 'bg-success' : 'bg-danger'}`}>
                                    <FaTextHeight className="me-1" />
                                    {formData.medicalHistory.length} {t('form.step2.history.characters', { defaultValue: 'characters' })}
                                  </span>
                                </div>
                              </div>

                              {formErrors.medicalHistory && (
                                <div className="invalid-feedback d-flex align-items-center mt-2">
                                  <FaExclamationCircle className="me-2 text-danger" />
                                  {formErrors.medicalHistory}
                                </div>
                              )}

                              <div className="form-text mt-2 mt-md-3">
                                <div className="row">
                                  <div className="col-md-6">
                                    <FaNotesMedical className="text-warning me-2" />
                                    {t('form.step2.history.help', { defaultValue: 'Detailed information helps in case review coordination with hospitals' })}
                                  </div>
                                  <div className="col-md-6 text-end">
                                    {formData.medicalHistory.length < 10 ? (
                                      <span className="text-danger">
                                        <FaExclamationTriangle className="me-1" />
                                        {10 - formData.medicalHistory.length} {t('form.step2.history.moreNeeded', { defaultValue: 'more characters needed' })}
                                      </span>
                                    ) : (
                                      <span className="text-success">
                                        <FaCheckCircle className="me-1" />
                                        {t('form.step2.history.minimumSatisfied', { defaultValue: 'Minimum length satisfied' })}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* File Upload Section */}
                          <div className="col-12">
                            <div className="form-card p-3 p-md-4 border rounded bg-white">
                              <label className="form-label d-flex align-items-center mb-2 mb-md-3">
                                <div className="icon-container bg-secondary bg-opacity-10 rounded d-flex align-items-center justify-content-center me-2 me-md-3" 
                                     style={{ 
                                       width: 'clamp(40px, 8vw, 50px)', 
                                       height: 'clamp(40px, 8vw, 50px)' 
                                     }}>
                                  <FaFolderOpen size={24} className="text-white" />
                                </div>
                                <div>
                                  <span className="h5 mb-0 d-block" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                                    {t('form.step2.upload.title', { defaultValue: 'Medical Reports & Documents' })}
                                  </span>
                                  <small className="text-muted d-none d-md-block">
                                    {t('form.step2.upload.subtitle', { defaultValue: 'Upload relevant medical files for case review (Optional)' })}
                                  </small>
                                </div>
                              </label>

                              <div className="upload-container">
                                <div
                                  className={`upload-area border-dashed rounded p-3 p-md-5 text-center bg-light position-relative cursor-pointer ${isDragging ? 'border-primary bg-primary bg-opacity-10' : ''}`}
                                  // onClick={handleUploadAreaClick}
                                  onDragOver={handleDragOver}
                                  onDragLeave={handleDragLeave}
                                  onDrop={handleDrop}
                                >
                                  <input
                                    type="file"
                                    className="form-control"
                                    accept=".pdf,.doc,.docx"
                                    ref={fileInputRef}
                                    onChange={handleFileSelect}
                                    style={{
                                      position: 'absolute',
                                      top: 0,
                                      left: 0,
                                      width: '100%',
                                      height: '100%',
                                      opacity: 0,
                                      cursor: 'pointer'
                                    }}
                                  />
                                  <div className="upload-content">
                                    <div className="mb-3 mb-md-4">
                                      <div className="icon-container bg-primary bg-opacity-10 rounded d-inline-flex align-items-center justify-content-center" 
                                           style={{ 
                                             width: 'clamp(60px, 12vw, 80px)', 
                                             height: 'clamp(60px, 12vw, 80px)' 
                                           }}>
                                        <FaFileMedicalAlt size={48} className="text-white" />
                                      </div>
                                    </div>
                                    <h5 className="mb-2" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                                      {t('form.step2.upload.uploadTitle', { defaultValue: 'Upload Medical Document' })}
                                    </h5>
                                    <p className="text-muted mb-2 mb-md-3" style={{ fontSize: '0.875rem' }}>
                                      {t('form.step2.upload.uploadHelp', { defaultValue: 'Click to upload or drag & drop your medical file' })}
                                    </p>
                                    <div className="supported-formats mb-2 mb-md-3">
                                      <span className="badge bg-light text-dark mx-1 mb-1 p-1 p-md-2">
                                        <FaFilePdf className="text-danger me-1" />
                                        <span className="d-none d-sm-inline">PDF</span>
                                      </span>
                                      <span className="badge bg-light text-dark mx-1 mb-1 p-1 p-md-2">
                                        <FaFileWord className="text-primary me-1" />
                                        <span className="d-none d-sm-inline">Word</span>
                                      </span>
                                    </div>
                                    <p className="small text-muted mt-2 mb-0">
                                      <FaShieldAlt className="me-1" />
                                      {t('form.step2.upload.hint', { defaultValue: 'Max 10MB • One file only • Secure and confidential' })}
                                    </p>
                                    {uploadedFiles.length > 0 && (
                                      <div className="mt-2 mt-md-3">
                                        <span className="badge bg-success">
                                          <FaCheckCircle className="me-1" />
                                          {t('form.step2.upload.fileSelected', { defaultValue: 'File selected' })}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* Uploaded Files Preview */}
                                {uploadedFiles.length > 0 && (
                                  <div className="mt-3 mt-md-4">
                                    <h6 className="mb-2 mb-md-3 d-flex align-items-center">
                                      <FaFileMedicalAlt className="text-primary me-2" />
                                      {t('form.step2.upload.uploadedFile', { defaultValue: 'Uploaded Document' })}
                                    </h6>
                                    <div className="row g-2 g-md-3">
                                      {uploadedFiles.map((file, index) => (
                                        <div key={index} className="col-12">
                                          <div className="file-item bg-white border rounded p-2 p-md-3 d-flex align-items-center">
                                            <div className="file-icon me-2 me-md-3">
                                              {file.type === 'application/pdf' ? (
                                                <div className="bg-danger rounded d-flex align-items-center justify-content-center" 
                                                     style={{ 
                                                       width: 'clamp(40px, 8vw, 50px)', 
                                                       height: 'clamp(40px, 8vw, 50px)' 
                                                     }}>
                                                  <FaFilePdf size={24} className="text-white" />
                                                </div>
                                              ) : (
                                                <div className="bg-primary rounded d-flex align-items-center justify-content-center" 
                                                     style={{ 
                                                       width: 'clamp(40px, 8vw, 50px)', 
                                                       height: 'clamp(40px, 8vw, 50px)' 
                                                     }}>
                                                  <FaFileWord size={24} className="text-white" />
                                                </div>
                                              )}
                                            </div>
                                            <div className="file-details flex-grow-1 overflow-hidden">
                                              <h6 className="mb-1 text-truncate" style={{ fontSize: '0.875rem' }}>
                                                {file.type === 'application/pdf' ? (
                                                  <FaFilePdf className="text-danger me-1 me-md-2" />
                                                ) : (
                                                  <FaFileWord className="text-primary me-1 me-md-2" />
                                                )}
                                                {file.name}
                                              </h6>
                                              <small className="text-muted d-flex align-items-center">
                                                <FaHdd className="me-1" />
                                                {(file.size / 1024 / 1024).toFixed(2)} MB
                                                <span className="mx-2">•</span>
                                                <FaClock className="me-1" />
                                                {t('form.step2.upload.uploadedNow', { defaultValue: 'Uploaded now' })}
                                              </small>
                                            </div>
                                            <button
                                              type="button"
                                              className="btn btn-sm btn-outline-danger ms-2"
                                              onClick={() => removeFile(index)}
                                              title={t('form.step2.upload.removeFile', { defaultValue: 'Remove file' })}
                                            >
                                              <FaTrashAlt />
                                            </button>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="alert alert-info mt-2 mt-md-3" role="alert">
                                      <FaExclamationCircle className="me-2" />
                                      {t('form.step2.upload.note', { defaultValue: 'Medical details are shared with appropriate partner hospitals and specialists for evaluation as part of our case review coordination.' })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="row mt-4 mt-md-5 pt-3 pt-md-4 border-top">
                          <div className="col-md-6 mb-2 mb-md-0">
                            <motion.button
                              type="button"
                              className="btn btn-outline-primary w-100 py-2 py-md-3 d-flex align-items-center justify-content-center"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => prevStep(1)}
                            >
                              <FaArrowLeft className="me-2" />
                              {t('form.step2.buttons.back', { defaultValue: 'Back to Personal Details' })}
                            </motion.button>
                          </div>
                          <div className="col-md-6">
                            <motion.button
                              type="button"
                              className="btn btn-primary w-100 py-2 py-md-3 d-flex align-items-center justify-content-center"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => nextStep(3)}
                            >
                              <FaClipboardCheck className="me-2" />
                              {t('form.step2.buttons.next', { defaultValue: 'Review & Submit' })}
                            </motion.button>
                            <small className="text-muted d-block text-center mt-1 mt-md-2">
                              <FaUserShield className="me-1" />
                              {t('form.step2.confidentiality', { defaultValue: 'Your medical information is handled confidentially for care coordination' })}
                            </small>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Review & Submit */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                      >
                        <div className="text-center mb-4 mb-md-5">
                          <motion.div
                            className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white mb-2 mb-md-3"
                            style={{ 
                              width: 'clamp(50px, 10vw, 60px)', 
                              height: 'clamp(50px, 10vw, 60px)' 
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <FaClipboardCheck size={28} />
                          </motion.div>
                          <h3 className="text-dark mb-2" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                            {t('form.step3.title', { defaultValue: 'Review & Submit Medical Enquiry' })}
                          </h3>
                          <p className="text-muted" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                            {t('form.step3.subtitle', { defaultValue: 'Please review your information before submitting for case review coordination' })}
                          </p>
                        </div>

                        {/* Summary Cards */}
                        <div className="row g-3 g-md-4 mb-4 mb-md-5">
                          {/* Personal Information Card */}
                          <div className="col-12 col-lg-6">
                            <motion.div
                              className="card h-100 border-primary"
                              whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                              <div className="card-header bg-primary text-white d-flex align-items-center py-2 py-md-3">
                                <FaUserCircle size={24} className="me-2 me-md-3" />
                                <div>
                                  <h5 className="mb-0" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                                    {t('form.step3.personal', { defaultValue: 'Patient Information' })}
                                  </h5>
                                  <small className="opacity-75 d-none d-md-block">
                                    {t('form.step3.personalSubtitle', { defaultValue: 'Personal Details' })}
                                  </small>
                                </div>
                              </div>
                              <div className="card-body p-2 p-md-3">
                                <div className="row g-2 g-md-3">
                                  <div className="col-12">
                                    <div className="info-item mb-2 mb-md-3">
                                      <small className="text-muted d-block">
                                        {t('form.step1.fields.fullName', { defaultValue: 'Full Name' })}
                                      </small>
                                      <strong className="d-block" style={{ fontSize: '0.875rem' }}>
                                        {formData.fullName || t('form.common.notProvided', { defaultValue: 'Not provided' })}
                                      </strong>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="info-item mb-2 mb-md-3">
                                      <small className="text-muted d-block">
                                        {t('form.step1.fields.email', { defaultValue: 'Email Address' })}
                                      </small>
                                      <strong className="d-block" style={{ fontSize: '0.875rem' }}>
                                        {formData.email || t('form.common.notProvided', { defaultValue: 'Not provided' })}
                                      </strong>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="info-item mb-2 mb-md-3">
                                      <small className="text-muted d-block">
                                        {t('form.step1.fields.phone', { defaultValue: 'Phone Number' })}
                                      </small>
                                      <strong className="d-block" style={{ fontSize: '0.875rem' }}>
                                        {formData.phone || t('form.common.notProvided', { defaultValue: 'Not provided' })}
                                      </strong>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="info-item mb-2 mb-md-3">
                                      <small className="text-muted d-block">
                                        {t('form.step1.fields.gender', { defaultValue: 'Gender' })}
                                      </small>
                                      <strong className="d-block" style={{ fontSize: '0.875rem' }}>
                                        {formData.gender ?
                                          formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1) :
                                          t('form.common.notProvided', { defaultValue: 'Not provided' })}
                                      </strong>
                                    </div>
                                  </div>

                                  {formData.dob && (
                                    <div className="col-md-6">
                                      <div className="info-item mb-2 mb-md-3">
                                        <small className="text-muted d-block">
                                          {t('form.step1.fields.dob', { defaultValue: 'Date of Birth' })}
                                        </small>
                                        <strong className="d-block" style={{ fontSize: '0.875rem' }}>
                                          {new Date(formData.dob).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                          })}
                                        </strong>
                                      </div>
                                    </div>
                                  )}

                                  {formData.country && (
                                    <div className="col-12">
                                      <div className="info-item mb-2 mb-md-3">
                                        <small className="text-muted d-block">
                                          {t('form.step1.fields.country', { defaultValue: 'Country' })}
                                        </small>
                                        <strong className="d-block" style={{ fontSize: '0.875rem' }}>
                                          {formData.country}
                                        </strong>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          </div>

                          {/* Medical Information Card */}
                          <div className="col-12 col-lg-6">
                            <motion.div
                              className="card h-100 border-success"
                              whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                              <div className="card-header bg-success text-white d-flex align-items-center py-2 py-md-3">
                                <FaFileMedicalAlt size={24} className="me-2 me-md-3" />
                                <div>
                                  <h5 className="mb-0" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                                    {t('form.step3.medical', { defaultValue: 'Medical Information' })}
                                  </h5>
                                  <small className="opacity-75 d-none d-md-block">
                                    {t('form.step3.medicalSubtitle', { defaultValue: 'Treatment Details' })}
                                  </small>
                                </div>
                              </div>
                              <div className="card-body p-2 p-md-3">
                                <div className="row g-2 g-md-3">
                                  <div className="col-12">
                                    <div className="info-item mb-2 mb-md-3">
                                      <small className="text-muted d-block">
                                        {t('form.step2.department.label', { defaultValue: 'Medical Department' })}
                                      </small>
                                      <strong className="d-block" style={{ fontSize: '0.875rem' }}>
                                        {formData.medicalDepartment || t('form.common.notProvided', { defaultValue: 'Not provided' })}
                                      </strong>
                                    </div>
                                  </div>

                                  {formData.specificCondition && (
                                    <div className="col-12">
                                      <div className="info-item mb-2 mb-md-3">
                                        <small className="text-muted d-block">
                                          {t('form.step2.condition.label', { defaultValue: 'Specific Condition' })}
                                        </small>
                                        <strong className="d-block" style={{ fontSize: '0.875rem' }}>
                                          {formData.specificCondition}
                                        </strong>
                                      </div>
                                    </div>
                                  )}

                                  {/* Medical History Preview */}
                                  <div className="col-12">
                                    <div className="info-item mb-2 mb-md-3">
                                      <small className="text-muted d-block">
                                        {t('form.step2.history.label', { defaultValue: 'Medical History Summary' })}
                                      </small>
                                      <div className="bg-light rounded p-2 p-md-3 mt-1">
                                        <p className="mb-0 text-dark" style={{ fontSize: '0.875rem' }}>
                                          {formData.medicalHistory ? (
                                            formData.medicalHistory.length > 150 ?
                                              `${formData.medicalHistory.substring(0, 150)}...` :
                                              formData.medicalHistory
                                          ) : t('form.common.notProvided', { defaultValue: 'Not provided' })}
                                        </p>
                                        {formData.medicalHistory && formData.medicalHistory.length > 150 && (
                                          <small className="text-muted">{t('form.step3.truncatedNote', { defaultValue: '(Truncated preview)' })}</small>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        {/* Uploaded Files Section */}
                        {uploadedFiles.length > 0 && (
                          <motion.div
                            className="card mb-4 mb-md-5 border-info"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="card-header bg-info text-white d-flex align-items-center py-2 py-md-3">
                              <FaPaperclip size={24} className="me-2 me-md-3" />
                              <div>
                                <h5 className="mb-0" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                                  {t('form.step3.uploadedFiles', { defaultValue: 'Uploaded Medical Document' })}
                                </h5>
                                <small className="opacity-75 d-none d-md-block">
                                  {t('form.step3.uploadedFile', { defaultValue: '1 file attached' })}
                                </small>
                              </div>
                            </div>
                            <div className="card-body p-2 p-md-3">
                              <div className="row g-2 g-md-3">
                                {uploadedFiles.map((file, index) => (
                                  <motion.div
                                    key={index}
                                    className="col-12"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                  >
                                    <div className="file-card bg-white border rounded p-2 p-md-3 d-flex align-items-center">
                                      <div className="file-icon me-2 me-md-3">
                                        {file.type === 'application/pdf' ? (
                                          <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center" 
                                               style={{ 
                                                 width: 'clamp(36px, 7vw, 48px)', 
                                                 height: 'clamp(36px, 7vw, 48px)' 
                                               }}>
                                            <FaFilePdf size={20} className="text-white" />
                                          </div>
                                        ) : (
                                          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                                               style={{ 
                                                 width: 'clamp(36px, 7vw, 48px)', 
                                                 height: 'clamp(36px, 7vw, 48px)' 
                                               }}>
                                            <FaFileWord size={20} className="text-white" />
                                          </div>
                                        )}
                                      </div>
                                      <div className="file-details flex-grow-1 overflow-hidden">
                                        <h6 className="mb-1 text-truncate" style={{ fontSize: '0.875rem' }}>
                                          {file.name}
                                        </h6>
                                        <small className="text-muted d-flex align-items-center">
                                          <FaHdd className="me-1" />
                                          {(file.size / 1024 / 1024).toFixed(2)} MB
                                        </small>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Consent Section */}
                        <motion.div
                          className="card mb-4 mb-md-5 border-warning"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="card-header bg-warning bg-opacity-10 d-flex align-items-center py-2 py-md-3">
                            <FaShieldAlt size={24} className="text-warning me-2 me-md-3" />
                            <div>
                              <h5 className="mb-0 text-dark" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                                {t('form.step3.consent.title', { defaultValue: 'Consent & Agreements' })}
                              </h5>
                              <small className="text-muted d-none d-md-block">
                                {t('form.step3.consent.subtitle', { defaultValue: 'Required for case review coordination' })}
                              </small>
                            </div>
                          </div>
                          <div className="card-body p-2 p-md-3">
                            <form onSubmit={handleSubmit}>
                              <div className="row g-3 g-md-4">
                                <div className="col-12">
                                  <div className={`consent-card p-3 p-md-4 rounded ${formErrors.privacyConsent ? 'border-danger' : 'border'}`}>
                                    <div className="form-check mb-0">
                                      <input
                                        className="form-check-input me-2 me-md-3"
                                        type="checkbox"
                                        id="privacyConsent"
                                        name="privacyConsent"
                                        checked={formData.privacyConsent}
                                        onChange={handleInputChange}
                                        style={{ width: '20px', height: '20px' }}
                                      />
                                      <label className="form-check-label" htmlFor="privacyConsent">
                                        <strong className="d-block">
                                          {t('form.step3.consent.privacyTitle', { defaultValue: 'Privacy Consent *' })}
                                        </strong>
                                        <p className="mt-2 mb-0 small">
                                          {t('form.step3.consent.privacyText', { defaultValue: 'I consent to MedEminence collecting and processing my personal and medical information for the purpose of medical case review coordination. I understand this information will be shared only with authorized healthcare providers for care coordination purposes.' })}
                                        </p>
                                      </label>
                                    </div>
                                    {formErrors.privacyConsent && (
                                      <div className="text-danger small mt-2">
                                        <FaExclamationCircle className="me-1" />
                                        {t('form.step3.consent.privacyError', { defaultValue: 'You must accept the privacy consent to submit your enquiry' })}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="consent-card p-3 p-md-4 rounded border">
                                    <div className="form-check mb-0">
                                      <input
                                        className="form-check-input me-2 me-md-3"
                                        type="checkbox"
                                        id="communicationConsent"
                                        name="communicationConsent"
                                        checked={formData.communicationConsent}
                                        onChange={handleInputChange}
                                        style={{ width: '20px', height: '20px' }}
                                      />
                                      <label className="form-check-label" htmlFor="communicationConsent">
                                        <strong className="d-block">
                                          {t('form.step3.consent.communicationTitle', { defaultValue: 'Communication Consent (Optional)' })}
                                        </strong>
                                        <p className="mt-2 mb-0 small">
                                          {t('form.step3.consent.communicationText', { defaultValue: 'I agree to receive updates regarding my medical case review and coordination via email and phone.' })}
                                        </p>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Disclaimer */}
                              <div className="alert alert-warning mt-3 mt-md-4" role="alert">
                                <div className="d-flex">
                                  <FaExclamationTriangle size={20} className="me-2 me-md-3 mt-1" />
                                  <div>
                                    <h6 className="alert-heading">
                                      {t('form.step3.disclaimer.title', { defaultValue: 'Important Medical Disclaimer' })}
                                    </h6>
                                    <p className="mb-0 small">
                                      {t('form.step3.disclaimer.text', { defaultValue: 'MedEminence is a medical tourism facilitation and healthcare coordination platform. We do not provide medical advice, diagnosis, or treatment. All clinical decisions and treatment plans are determined exclusively by licensed healthcare providers. Information on this website is for general informational purposes only and does not constitute medical advice.' })}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Submit Button */}
                              <div className="row g-2 g-md-3 mt-3 mt-md-4">
                                <div className="col-md-6">
                                  <motion.button
                                    type="button"
                                    className="btn btn-outline-primary w-100 py-2 py-md-3"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => prevStep(2)}
                                  >
                                    <FaEdit className="me-2" />
                                    {t('form.step3.buttons.edit', { defaultValue: 'Edit Information' })}
                                  </motion.button>
                                </div>
                                <div className="col-md-6">
                                  <motion.button
                                    type="submit"
                                    className="btn btn-success w-100 py-2 py-md-3"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                  >
                                    {isSubmitting ? (
                                      <>
                                        <FaSpinner className="fa-spin me-2" />
                                        {t('form.step3.buttons.submitting', { defaultValue: 'Submitting...' })}
                                      </>
                                    ) : (
                                      <>
                                        <FaPaperPlane className="me-2" />
                                        {t('form.step3.buttons.submit', { defaultValue: 'Submit Medical Enquiry' })}
                                      </>
                                    )}
                                  </motion.button>
                                  <small className="text-muted d-block text-center mt-1 mt-md-2">
                                    <FaLock className="me-1" />
                                    {t('form.step3.security', { defaultValue: 'Secure submission to: info@medeminence.com' })}
                                  </small>
                                </div>
                              </div>
                            </form>
                          </div>
                        </motion.div>

                        {/* Final Note */}
                        <div className="alert alert-info" role="alert">
                          <div className="d-flex align-items-start">
                            <FaQuestionCircle className="me-2 me-md-3 mt-1" />
                            <div>
                              <strong>What happens next?</strong>
                              <ol className="mb-0 mt-2" style={{ fontSize: '0.875rem' }}>
                                <li>Your medical details will be shared with appropriate partner hospitals and specialists for evaluation.</li>
                                <li>Our coordination team will contact you within 24 hours to discuss the next steps.</li>
                                <li>We will assist with treatment pathway planning and coordination support.</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Medical Enquiry Form End */}
    </>
  );
};

export default MedicalEnquiry;