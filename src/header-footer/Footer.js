import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("common");
    const [showScrollButtons, setShowScrollButtons] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButtons(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

    return (
        <>
            {/* Scroll Buttons - Made Responsive */}
            {showScrollButtons && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    style={{
                        position: "fixed",
                        right: window.innerWidth < 768 ? "20px" : "30px",
                        bottom: window.innerWidth < 768 ? "70px" : "80px",
                        zIndex: 1000,
                        backgroundColor: "#1a237e",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: window.innerWidth < 768 ? "45px" : "50px",
                        height: window.innerWidth < 768 ? "45px" : "50px",
                        fontSize: window.innerWidth < 768 ? "20px" : "24px",
                        cursor: "pointer",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    title={t("footer.scrollTop")}
                    aria-label={t("footer.scrollTop")}
                >
                    ↑
                </button>
            )}

            {showScrollButtons && window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 100 && (
                <button
                    onClick={scrollToBottom}
                    className="scroll-to-bottom"
                    style={{
                        position: "fixed",
                        right: window.innerWidth < 768 ? "20px" : "30px",
                        bottom: window.innerWidth < 768 ? "120px" : "140px",
                        zIndex: 1000,
                        backgroundColor: "teal",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: window.innerWidth < 768 ? "45px" : "50px",
                        height: window.innerWidth < 768 ? "45px" : "50px",
                        fontSize: window.innerWidth < 768 ? "20px" : "24px",
                        cursor: "pointer",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    title={t("footer.scrollBottom")}
                    aria-label={t("footer.scrollBottom")}
                >
                    ↓
                </button>
            )}

            {/* Main Footer Content - Kept Exactly the Same */}
            <div className="container-fluid bg-dark text-light mt-5 py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-four text-uppercase border-bottom border-5 border-secondary mb-4">
                                <b>{t("footer.getInTouch")}</b>
                            </h4>
                            <p className="mb-4" style={{ fontSize: "larger", textAlign: 'start' }}>
                                {t("footer.tagline")}
                            </p>
                            <div className="footer-contact">
                                <p className="mb-2 d-flex align-items-center">
                                    <i className="bi bi-envelope text-a me-3" style={{ width: "20px" }}></i>
                                    <span>{t("email")}</span>
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                    <i className="bi bi-telephone text-a me-3" style={{ width: "20px" }}></i>
                                    <span>{t("phone")}</span>
                                </p>
                                <p className="mb-2 mt-4 d-flex align-items-center">
                                    <i className="bi bi-globe text-a me-3" style={{ width: "20px" }}></i>
                                    <span>www.medeminence.com</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-four text-uppercase border-bottom border-5 border-secondary mb-4">
                                <b>{t("footer.quickLinks")}</b>
                            </h4>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="/"><i className="fa fa-angle-right me-2"></i>{t("nav.home")}</a>
                                <a className="text-light mb-2" href="/about"><i className="fa fa-angle-right me-2"></i>{t("nav.about")}</a>
                                <a className="text-light mb-2" href="/service"><i className="fa fa-angle-right me-2"></i>{t("nav.services")}</a>
                                <a className="text-light mb-2" href="/treatment"><i className="fa fa-angle-right me-2"></i>{t("nav.treatments")}</a>
                                <a className="text-light mb-2" href="/countries"><i className="fa fa-angle-right me-2"></i>{t("nav.countries")}</a>
                                <a className="text-light" href="/medical-enquiry"><i className="fa fa-angle-right me-2"></i>{t("nav.contact")}</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-four text-uppercase border-bottom border-5 border-secondary mb-4">
                                <b>{t("footer.importantLinks")}</b>
                            </h4>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="/medeminence"><i className="fa fa-angle-right me-2"></i>{t("nav.why")}</a>
                                <a className="text-light mb-2" href="/patient-journey"><i className="fa fa-angle-right me-2"></i>{t("nav.journey")}</a>
                                <a className="text-light mb-2" href="/medical-enquiry"><i className="fa fa-angle-right me-2"></i>{t("nav.enquiry")}</a>
                                <a className="text-light mb-2" href="/privacy-policy"><i className="fa fa-angle-right me-2"></i>{t("nav.privacy")}</a>
                                <a className="text-light" href="/terms-and-conditions"><i className="fa fa-angle-right me-2"></i>{t("nav.terms")}</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-four text-uppercase border-bottom border-5 border-secondary mb-4">
                                <b>{t("footer.newsletter")}</b>
                            </h4>
                            <p>{t("footer.newsletterText")}</p>
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control p-3 border-0" placeholder={t("footer.emailPlaceholder")} />
                                    <button type="button" className="btn btn-primary">{t("footer.subscribe")}</button>
                                </div>
                            </form>
                            <h6 className="text-primary text-uppercase mt-4 mb-3">{t("footer.followUs")}</h6>
                            <div className="d-flex">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom - PERFECTED VERSION */}
            <div className="container-fluid bg-dark text-light border-top border-secondary py-3 py-md-4">
                <div className="container">
                    <div className="row gy-3 align-items-center">
                        {/* Left Column - Company Copyright */}
                        <div className="col-12 col-md-6 order-1 order-md-1">
                            <p className="mb-0 text-center text-md-start" style={{ fontSize: "1.25 rem" }}>
                                &copy; <span className="text-decoration-underline">Medeminence</span>. {t("footer.copyright")}
                            </p>
                        </div>
                        
                        {/* Right Column - Design Credit */}
                        <div className="col-12 col-md-6 order-2 order-md-2">
                            <p className="mb-0 text-center text-md-end" style={{ fontSize: "1.25rem" }}>
                                {t("footer.designedBy")}{" "}
                                <span className="text-decoration-underline">.veriteam software solutions private limited</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive CSS - Minimal & Effective */}
            <style jsx>{`
                /* Mobile-specific fixes for footer bottom */
                @media (max-width: 767px) {
                    /* Stack items vertically with proper spacing */
                    .row.gy-3 {
                        --bs-gutter-y: 1rem;
                    }
                    
                    /* Center align text on mobile */
                    .text-center {
                        text-align: center !important;
                    }
                    
                    /* Ensure proper line height for readability */
                    .mb-0 {
                        line-height: 1.6;
                    }
                    
                    /* Prevent long text from breaking layout */
                    .text-decoration-underline {
                        word-break: break-word;
                        display: inline;
                    }
                }

                /* Tablet optimizations */
                @media (min-width: 768px) and (max-width: 991px) {
                    .mb-0 {
                        font-size: 0.9rem;
                    }
                    
                    /* Ensure proper spacing between columns */
                    .row.gy-3 {
                        --bs-gutter-x: 1.5rem;
                    }
                }

                /* Desktop optimizations */
                @media (min-width: 992px) {
                    .mb-0 {
                        font-size: 1rem;
                    }
                }

                /* Very small screen optimizations */
                @media (max-width: 375px) {
                    .mb-0 {
                        font-size: 0.85rem;
                        padding: 0 0.5rem;
                    }
                    
                    .text-decoration-underline {
                        word-break: break-all;
                    }
                }

                /* Scroll buttons hover effect */
                .scroll-to-top:hover,
                .scroll-to-bottom:hover {
                    transform: scale(1.1);
                    transition: transform 0.2s ease;
                }

                /* Footer links hover effect */
                .text-light:hover {
                    color: #ffffff !important;
                    transition: color 0.2s ease;
                }
            `}</style>
        </>
    );
};

export default Footer;