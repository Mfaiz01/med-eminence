import React from 'react'

const Disclaimer = () => {
  return (
    <>
        {/* <!-- Disclaimer Header Start --> */}
    <div className="container-fluid disclaimer-section">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: '800px'}}>
                <span className="disclaimer-badge">Important Medical Information</span>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Medical Disclaimer</h5>
                <h1 className="display-5 mb-4">Understanding Our Medical Information Limitations</h1>
                <p className="lead mb-4" style={{fontSize: 'x-large'}}>Please read this disclaimer carefully. It contains important information about the limitations of medical information provided through our services.</p>
            </div>
        </div>
    </div>
    {/* <!-- Disclaimer Header End --> */}


    {/* <!-- Disclaimer Content Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="disclaimer-card">
                {/* <!-- Disclaimer Content Wrapper --> */}
                <div className="disclaimer-content">
                    <div className="disclaimer-header">
                        <h2 className="text-dark mb-3">MedEminence Medical Disclaimer</h2>
                        <p className="text-muted mb-0">Last Updated: January 1, 2024 | Effective Date: January 1, 2024</p>
                    </div>
                    
                    {/* <!-- Critical Warning --> */}
                    <div className="warning-box">
                        <h5><i className="fas fa-exclamation-triangle me-2"></i> CRITICAL WARNING</h5>
                        <p className="mb-0">MEDICAL EMERGENCY: If you are experiencing a medical emergency, please call your local emergency number immediately or go to the nearest emergency room. Do not use this website or wait for a response from our services in emergency situations.</p>
                    </div>
                    
                    {/* <!-- 1. Purpose of Disclaimer --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">1.</span> Purpose of This Disclaimer</h4>
                        <p>This medical disclaimer is designed to inform you about the limitations of the information provided through MedEminence's website, services, and communications. It is essential that you understand these limitations before using our services.</p>
                        <p>By accessing our website or using our services, you acknowledge that you have read, understood, and agree to this medical disclaimer.</p>
                    </div>
                    
                    {/* <!-- 2. Not Medical Advice --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">2.</span> Information Provided is Not Medical Advice</h4>
                        
                        <div className="caution-box">
                            <h5><i className="fas fa-stethoscope me-2"></i> Important Clarification</h5>
                            <p className="mb-0">The information provided on our website, in our communications, or through our services is for informational purposes only and is not intended as medical advice, diagnosis, or treatment.</p>
                        </div>
                        
                        <p>All medical information we provide:</p>
                        
                        <ul className="disclaimer-list">
                            <li>Is general in nature and may not apply to your specific medical condition</li>
                            <li>Should not replace consultation with qualified healthcare professionals</li>
                            <li>Is not a substitute for professional medical evaluation, diagnosis, or treatment</li>
                            <li>May not include all possible information about medical conditions, treatments, or outcomes</li>
                            <li>Could be incomplete, outdated, or inaccurate for your particular situation</li>
                        </ul>
                        
                        <p className="mt-3">You should always seek the advice of qualified healthcare providers with any questions you may have regarding medical conditions or treatments.</p>
                    </div>
                    
                    {/* <!-- 3. No Doctor-Patient Relationship --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">3.</span> No Doctor-Patient Relationship Established</h4>
                        
                        <div className="warning-box">
                            <h5><i className="fas fa-user-md me-2"></i> Important Legal Notice</h5>
                            <p className="mb-0">Using our website or services does not create a doctor-patient relationship between you and MedEminence. We are a medical tourism facilitation service, not healthcare providers.</p>
                        </div>
                        
                        <p>The absence of a doctor-patient relationship means:</p>
                        
                        <ul className="disclaimer-list">
                            <li>We do not provide medical diagnosis, treatment, or prescriptions</li>
                            <li>We are not responsible for your medical care or treatment outcomes</li>
                            <li>We do not have ongoing responsibility for your medical management</li>
                            <li>You should not rely on our information as a basis for medical decisions</li>
                            <li>You remain responsible for seeking appropriate medical care from licensed professionals</li>
                        </ul>
                    </div>
                    
                    {/* <!-- 4. Treatment Information Limitations --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">4.</span> Treatment Information Limitations</h4>
                        
                        <h5 className="mt-4 mb-3 text-primary">4.1 Treatment Descriptions</h5>
                        <p>Treatment information provided on our website or through our services:</p>
                        <ul className="disclaimer-list">
                            <li>Is for general educational purposes only</li>
                            <li>May not include all risks, benefits, or alternatives</li>
                            <li>May not reflect the latest medical advances or research</li>
                            <li>Could vary based on individual patient factors</li>
                            <li>Should be verified with treating healthcare providers</li>
                        </ul>
                        
                        <h5 className="mt-4 mb-3 text-primary">4.2 Success Rates and Outcomes</h5>
                        <p>We do not guarantee specific treatment outcomes or success rates. Medical outcomes depend on numerous factors including:</p>
                        <ul className="disclaimer-list">
                            <li>Individual patient health status and medical history</li>
                            <li>Specific medical condition and disease progression</li>
                            <li>Skill and experience of treating healthcare providers</li>
                            <li>Quality of healthcare facilities and equipment</li>
                            <li>Patient compliance with treatment plans</li>
                            <li>Unpredictable biological responses to treatment</li>
                        </ul>
                        
                        <h5 className="mt-4 mb-3 text-primary">4.3 Cost Estimates</h5>
                        <p>Cost estimates provided are approximations only. Actual treatment costs may vary based on:</p>
                        <ul className="disclaimer-list">
                            <li>Specific treatment requirements and complications</li>
                            <li>Length of hospital stay and recovery time</li>
                            <li>Additional diagnostic tests or treatments needed</li>
                            <li>Currency exchange rate fluctuations</li>
                            <li>Healthcare provider pricing changes</li>
                        </ul>
                    </div>
                    
                    {/* <!-- 5. Third-Party Healthcare Providers --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">5.</span> Third-Party Healthcare Providers</h4>
                        
                        <div className="caution-box">
                            <h5><i className="fas fa-hospital me-2"></i> Important Notice About Healthcare Providers</h5>
                            <p className="mb-0">MedEminence connects patients with third-party healthcare providers. We are not responsible for the medical care provided by these healthcare providers.</p>
                        </div>
                        
                        <p>Regarding third-party healthcare providers:</p>
                        
                        <ul className="disclaimer-list">
                            <li>We facilitate connections but do not control medical treatment decisions</li>
                            <li>We verify credentials but cannot guarantee treatment outcomes</li>
                            <li>Medical decisions are made between you and your treating doctors</li>
                            <li>We are not liable for medical malpractice or negligence by healthcare providers</li>
                            <li>You should conduct your own due diligence on healthcare providers</li>
                        </ul>
                        
                        <p className="mt-3">You are responsible for evaluating and selecting healthcare providers based on your own judgment and in consultation with your local doctors.</p>
                    </div>
                    
                    {/* <!-- 6. International Medical Travel Risks --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">6.</span> International Medical Travel Risks</h4>
                        
                        <div className="warning-box">
                            <h5><i className="fas fa-plane-departure me-2"></i> Travel Risk Acknowledgement</h5>
                            <p className="mb-0">International medical travel involves inherent risks that you acknowledge and accept when using our services.</p>
                        </div>
                        
                        <p>These risks include but are not limited to:</p>
                        
                        <ul className="disclaimer-list">
                            <li><strong>Medical Risks:</strong> Complications from travel, different medical standards, language barriers in healthcare</li>
                            <li><strong>Travel Risks:</strong> Flight cancellations, lost luggage, travel delays, political instability</li>
                            <li><strong>Legal Risks:</strong> Different legal systems, limited malpractice protection, jurisdictional issues</li>
                            <li><strong>Financial Risks:</strong> Currency fluctuations, unexpected costs, limited insurance coverage</li>
                            <li><strong>Recovery Risks:</strong> Recovery away from home support systems, different post-treatment care standards</li>
                        </ul>
                        
                        <p className="mt-3">You are responsible for understanding and accepting these risks before proceeding with international medical travel.</p>
                    </div>
                    
                    {/* <!-- 7. Emergency and Follow-up Care --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">7.</span> Emergency and Follow-up Care</h4>
                        
                        <h5 className="mt-4 mb-3 text-primary">7.1 Emergency Situations</h5>
                        <p>MedEminence does not provide emergency medical services. In emergency situations:</p>
                        <ul className="disclaimer-list">
                            <li>Contact local emergency services immediately</li>
                            <li>Go to the nearest hospital emergency department</li>
                            <li>Do not wait for a response from our team</li>
                            <li>Inform emergency personnel of your medical condition and treatments</li>
                        </ul>
                        
                        <h5 className="mt-4 mb-3 text-primary">7.2 Follow-up Care</h5>
                        <p>You are responsible for arranging appropriate follow-up care, including:</p>
                        <ul className="disclaimer-list">
                            <li>Post-treatment monitoring and check-ups</li>
                            <li>Medication management and prescription refills</li>
                            <li>Physical therapy or rehabilitation services</li>
                            <li>Management of complications or side effects</li>
                            <li>Long-term care coordination with local healthcare providers</li>
                        </ul>
                    </div>
                    
                    {/* <!-- 8. Patient Responsibilities --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">8.</span> Patient Responsibilities</h4>
                        
                        <div className="important-box">
                            <h5><i className="fas fa-user-check me-2"></i> Your Responsibilities</h5>
                            <p className="mb-0">As a patient using our services, you have important responsibilities that cannot be delegated to MedEminence.</p>
                        </div>
                        
                        <p>You are responsible for:</p>
                        
                        <ul className="disclaimer-list">
                            <li><strong>Medical Decision Making:</strong> Making informed decisions about your medical care in consultation with healthcare providers</li>
                            <li><strong>Information Accuracy:</strong> Providing complete and accurate medical information to all healthcare providers</li>
                            <li><strong>Due Diligence:</strong> Researching and verifying the credentials of healthcare providers</li>
                            <li><strong>Risk Assessment:</strong> Understanding and accepting the risks of medical treatment and international travel</li>
                            <li><strong>Financial Management:</strong> Managing treatment costs, insurance claims, and financial obligations</li>
                            <li><strong>Legal Compliance:</strong> Complying with all laws and regulations in home and destination countries</li>
                            <li><strong>Follow-up Care:</strong> Arranging and attending necessary follow-up appointments and care</li>
                        </ul>
                    </div>
                    
                    {/* <!-- 9. No Guarantees or Warranties --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">9.</span> No Guarantees or Warranties</h4>
                        
                        <div className="warning-box">
                            <h5><i className="fas fa-ban me-2"></i> Important Limitations</h5>
                            <p className="mb-0">MedEminence makes no guarantees, warranties, or representations regarding medical outcomes, treatment success, or specific results.</p>
                        </div>
                        
                        <p>Specifically, we do not guarantee:</p>
                        
                        <ul className="disclaimer-list">
                            <li>Specific medical outcomes or treatment results</li>
                            <li>Complete cure or resolution of medical conditions</li>
                            <li>Absence of complications or side effects</li>
                            <li>Exact treatment costs or duration</li>
                            <li>Availability of specific treatments or procedures</li>
                            <li>Continuity of care or treatment success</li>
                            <li>Suitability of treatments for individual patients</li>
                        </ul>
                    </div>
                    
                    {/* <!-- 10. Acknowledgement and Acceptance --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">10.</span> Acknowledgement and Acceptance</h4>
                        
                        <div className="important-box">
                            <h5><i className="fas fa-file-signature me-2"></i> Your Acknowledgement</h5>
                            <p className="mb-0">By using MedEminence's services, you acknowledge that you have read, understood, and accept this medical disclaimer in its entirety.</p>
                        </div>
                        
                        <p>Your acknowledgement includes understanding that:</p>
                        
                        <ul className="disclaimer-list">
                            <li>MedEminence provides facilitation services, not medical treatment</li>
                            <li>Medical information provided is for educational purposes only</li>
                            <li>No doctor-patient relationship is established with MedEminence</li>
                            <li>You are responsible for all medical decisions and outcomes</li>
                            <li>International medical travel involves inherent risks</li>
                            <li>You should consult with qualified healthcare professionals for medical advice</li>
                        </ul>
                    </div>
                    
                    {/* <!-- 11. Contact for Medical Emergencies --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">11.</span> Contact for Medical Emergencies</h4>
                        
                        <div className="warning-box">
                            <h5><i className="fas fa-ambulance me-2"></i> EMERGENCY CONTACT INFORMATION</h5>
                            <p className="mb-0">IN MEDICAL EMERGENCIES: Call your local emergency number immediately (e.g., 911 in the US, 112 in Europe, 100 in India) or go to the nearest hospital emergency department.</p>
                        </div>
                        
                        <p><strong>Do NOT use our website or wait for our response in emergency situations.</strong></p>
                        
                        <p>For non-emergency medical questions, always consult with qualified healthcare providers who can evaluate your specific medical situation.</p>
                    </div>
                    
                    {/* <!-- 12. Updates to Disclaimer --> */}
                    <div className="mb-5">
                        <h4 className="mb-3"><span className="section-number">12.</span> Updates to This Disclaimer</h4>
                        <p>We may update this medical disclaimer from time to time. The updated version will be indicated by an updated "Last Updated" date and will be effective as soon as it is accessible.</p>
                        <p>We encourage you to review this medical disclaimer periodically to stay informed about the limitations of our medical information and services.</p>
                    </div>
                    
                    {/* <!-- Final Acknowledgement --> */}
                    <div className="warning-box">
                        <h5><i className="fas fa-hand-paper me-2"></i> Final Acknowledgement Required</h5>
                        <p className="mb-0">I acknowledge that I have read, understood, and accept this Medical Disclaimer in its entirety. I understand that MedEminence provides medical tourism facilitation services only and does not provide medical treatment, diagnosis, or advice. I understand that I should consult with qualified healthcare professionals for all medical decisions and care.</p>
                    </div>
                    
                    {/* <!-- Last Updated --> */}
                    <div className="last-updated">
                        <p><strong>Last Updated:</strong> January 1, 2024</p>
                        <p><strong>Version:</strong> 1.0</p>
                    </div>
                </div>
                {/* <!-- End Disclaimer Content Wrapper --> */}
            </div>
            
            {/* <!-- Related Documents --> */}
            <div className="row mt-5 related-cards">
                <div className="col-md-6 mb-4">
                    <div className="card h-100 border-primary">
                        <div className="card-body">
                            <h5 className="card-title text-primary"><i className="fas fa-shield-alt me-2"></i> Privacy Policy</h5>
                            <p className="card-text">Learn how we protect your personal and medical information in accordance with privacy regulations.</p>
                            <a href="/privacy-policy" className="btn btn-outline-primary">View Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100 border-primary">
                        <div className="card-body">
                            <h5 className="card-title text-primary"><i className="fas fa-balance-scale me-2"></i> Terms & Conditions</h5>
                            <p className="card-text">Read our complete Terms and Conditions governing the use of our healthcare services and website.</p>
                            <a href="/terms-and-conditions" className="btn btn-outline-primary">View Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Emergency Information --> */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading"><i className="fas fa-exclamation-circle me-2"></i> Medical Emergency Notice</h4>
                        <p className="mb-0">If you are experiencing a medical emergency: Call your local emergency number immediately or go to the nearest hospital emergency department. Do not use this website or wait for a response from our services.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Disclaimer Content End --> */}
    </>
  )
}

export default Disclaimer