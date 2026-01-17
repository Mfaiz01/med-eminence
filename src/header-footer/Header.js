import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const translation = useTranslation("common");
  const t = translation.t;
  const i18n = translation.i18n;
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Topbar Start - Desktop only */}
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center flex-wrap">
                <a
                  className="text-decoration-none text-body pe-3 d-flex align-items-center"
                  href={`tel:${t("phone").replace(/[^\d+]/g, "")}`}
                >
                  <i className="bi bi-telephone me-2"></i>
                  {t("phone")}
                </a>
                <span className="text-body">|</span>
                <a
                  className="text-decoration-none text-body px-3 d-flex align-items-center"
                  href="mailto:info@medeminence.com"
                >
                  <i className="bi bi-envelope me-2"></i>
                  {t("email")}
                </a>
              </div>
            </div>

            <div className="col-md-6 text-center text-lg-end">
              <button
                className={`btn btn-sm ${i18n.language === "en" ? "btn-primary" : "btn-outline-primary"} me-2`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`btn btn-sm ${i18n.language === "ar" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => changeLanguage("ar")}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <NavLink to="/" className="navbar-brand">
              <img
                src="img/logo-med-em.png"
                alt="Medeminence Logo"
                className="logo-img"
              />
            </NavLink>

            {/* Mobile Language Switcher and Toggler */}
            <div className="d-lg-none d-flex align-items-center">
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-primary btn-sm dropdown-toggle"
                  type="button"
                  id="mobileLanguageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {i18n.language === "en" ? "EN" : "العربية"}
                </button>
                <ul className="dropdown-menu" aria-labelledby="mobileLanguageDropdown">
                  <li>
                    <button
                      className={`dropdown-item ${i18n.language === "en" ? "active" : ""}`}
                      onClick={() => changeLanguage("en")}
                    >
                      English (EN)
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item ${i18n.language === "ar" ? "active" : ""}`}
                      onClick={() => changeLanguage("ar")}
                    >
                      العربية (AR)
                    </button>
                  </li>
                </ul>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                onClick={handleMobileMenuToggle}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                {/* Desktop Language Switcher - Commented out as per original */}
                <div className="d-none d-lg-block me-3 mt-1">
                  <div className="btn-group" role="group">
                    {/* Original commented out buttons */}
                    {/* <button
                      className={`btn btn-sm ${i18n.language === "en" ? "btn-primary" : "btn-outline-primary"}`}
                      onClick={() => changeLanguage("en")}
                    >
                      EN
                    </button>
                    <button
                      className={`btn btn-sm ${i18n.language === "ar" ? "btn-primary" : "btn-outline-primary"}`}
                      onClick={() => changeLanguage("ar")}
                    >
                      AR
                    </button> */}
                  </div>
                </div>

                <NavLink 
                  to="/" 
                  end 
                  className={({ isActive }) => 
                    `nav-item nav-link ${isActive ? 'active text-primary fw-bold' : ''}`
                  }
                >
                  {t("nav.home")}
                </NavLink>

                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `nav-item nav-link ${isActive ? 'active text-primary fw-bold' : ''}`
                  }
                >
                  {t("nav.about")}
                </NavLink>

                <NavLink 
                  to="/service" 
                  className={({ isActive }) => 
                    `nav-item nav-link ${isActive ? 'active text-primary fw-bold' : ''}`
                  }
                >
                  {t("nav.services")}
                </NavLink>

                <NavLink 
                  to="/treatment" 
                  className={({ isActive }) => 
                    `nav-item nav-link ${isActive ? 'active text-primary fw-bold' : ''}`
                  }
                >
                  {t("nav.treatments")}
                </NavLink>

                <div className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{ cursor: "pointer" }}
                  >
                    {t("nav.more")}
                  </span>
                  <div className="dropdown-menu m-0">
                    <NavLink to="/countries" className="dropdown-item">
                      {t("nav.countries")}
                    </NavLink>
                    <NavLink to="/medeminence" className="dropdown-item">
                      {t("nav.why")}
                    </NavLink>
                    <NavLink to="/patient-journey" className="dropdown-item">
                      {t("nav.journey")}
                    </NavLink>
                    <NavLink to="/medical-enquiry" className="dropdown-item">
                      {t("nav.enquiry")}
                    </NavLink>
                    <NavLink to="/privacy-policy" className="dropdown-item">
                      {t("nav.privacy")}
                    </NavLink>
                    <NavLink to="/terms-and-conditions" className="dropdown-item">
                      {t("nav.terms")}
                    </NavLink>
                  </div>
                </div>

                <NavLink 
                  to="/medical-enquiry" 
                  className={({ isActive }) => 
                    `nav-item nav-link ${isActive ? 'active text-primary fw-bold' : ''}`
                  }
                >
                  {t("nav.contact")}
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Custom CSS - Responsive improvements only */}
      <style jsx>{`
        .logo-img {
          height: 70px;
          width: auto;
        }
        
        /* Active language highlighting */
        .dropdown-item.active {
          background-color: teal;
          color: white;
        }
        
        /* Mobile adjustments - Responsive improvements */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            padding-top: 1rem;
            background-color: white;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-top: 0.5rem;
            max-height: calc(100vh - 120px);
            overflow-y: auto;
          }
          
          .nav-item {
            margin-bottom: 0.5rem;
            text-align: center;
          }
          
          .nav-link {
            padding: 0.75rem 0;
            display: block;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .nav-link:last-child {
            border-bottom: none;
          }
          
          .dropdown-menu {
            text-align: center;
            border: none;
            box-shadow: none;
            background-color: #f8f9fa;
            padding: 0.5rem 0;
            margin: 0.5rem 0;
            border-radius: 6px;
          }
          
          .dropdown-item {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #e9ecef;
          }
          
          .dropdown-item:last-child {
            border-bottom: none;
            text-align: left;
          }
          
          /* Adjust logo size for very small screens */
          @media (max-width: 576px) {
            .logo-img {
              height: 40px;
            }
            
            .navbar-toggler {
              padding: 0.25rem 0.5rem;
            }
            
            .btn-sm {
              padding: 0.25rem 0.5rem;
              font-size: 0.75rem;
            }
          }
        }
        
        /* Desktop hover effects - Keeping original style */
        @media (min-width: 992px) {
          .nav-link {
            position: relative;
            padding: 0.5rem 1rem;
          }
          
          .nav-link:hover {
            color: teal !important;
          }
          
          .nav-link.active {
            color: #0d6efd;
            font-weight: 600;
          }
          
          .dropdown-menu {
            border-top: 3px solid #0d6efd;
            min-width: 200px;
          }
          
          .dropdown-item:hover {
            background-color: #f8f9fa;
            color: #0d6efd;
          }
        }
        
        /* Fix for dropdown on mobile */
        .dropdown-toggle::after {
          margin-left: 0.5em;
          vertical-align: 0.15em;
        }
        
        /* Ensure proper spacing on mobile */
        @media (max-width: 991.98px) {
          .navbar-brand {
            margin-right: auto;
          }
          
          .d-flex.align-items-center {
            margin-left: auto;
          }
        }
        
        /* Prevent body scroll when mobile menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Header;