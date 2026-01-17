import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("home");

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: { 
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: { 
                    slidesToShow: 1,
                    dots: true,
                    arrows: true
                }
            }
        ]
    };

    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            {/* Hero Text Animation */}
                            <motion.h1
                                className="display-4 text-white mb-md-4 mobile:display-6 mobile:text-center mobile:mb-3"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {t("hero.title")}
                            </motion.h1>

                            <motion.h5
                                className="d-inline-block text-third text-uppercase border-5 mb-4 mobile:text-center mobile:mb-3 mobile:text-base mobile:leading-relaxed"
                                style={{ borderColor: '#b88e4b !important', color: 'white', fontSize: 'x-large', textAlign: 'justify'  }}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            >
                                {t("hero.subtitle")}
                            </motion.h5>

                            <motion.div
                                className="pt-2 mobile:pt-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                {/* CTA with Pulse Animation */}
                                <div className="d-flex flex-wrap justify-content-lg-start justify-content-center gap-2 mobile:flex-column mobile:items-center mobile:gap-3">
                                    <motion.a
                                        href="/medical-enquiry"
                                        className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2 mobile:mx-0 mobile:py-3 mobile:px-4 mobile:w-full mobile:max-w-sm"
                                        style={{ fontSize: 'large' }}
                                        initial={{ scale: 1 }}
                                        animate={{
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {t("hero.ctaPrimary")}
                                    </motion.a>

                                    <motion.a
                                        href="/service"
                                        className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2 mobile:mx-0 mobile:py-3 mobile:px-4 mobile:w-full mobile:max-w-sm"
                                        style={{ fontSize: 'large' }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(255,255,255,0.1)",
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {t("hero.ctaSecondary")}
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- About / Introduction Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row gx-5">
                        <motion.div
                            className="col-lg-5 mb-5 mb-lg-0 mobile:mb-4"
                            style={{ minHeight: '500px' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="position-relative h-100"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img className="position-absolute w-100 h-100 rounded mobile:h-auto mobile:position-static" 
                                    src="img/home-2.png"
                                    style={{ objectFit: 'cover' }} 
                                    alt="MedEminence Team - Medical Tourism Facilitation" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="col-lg-7 mobile:mt-4"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-4 mobile:mb-3">
                                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t("about.problemTitle")}
                                </h5>
                                <h1 className="display-6 mobile:text-4xl mobile:text-center mobile:mt-2" style={{textAlign: 'start'}}>{t("about.problemHeadline")}</h1>
                            </div>
                            <p className="fs-5 mobile:text-base mobile:leading-relaxed mobile:text-center">
                                {t("about.problemDescription")}
                            </p>
                            <div className="row g-3 pt-3 mobile:g-2 mobile:pt-2">
                                {/* Updated icons with hover animations */}
                                <motion.div
                                    className="col-sm-3 col-6 mobile:col-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                >
                                    <div className="bg-light text-center rounded-circle py-4 mobile:py-3">
                                        <i className="fa fa-3x fa-globe text-primary mb-3 mobile:mb-2 mobile:text-2xl"></i>
                                        <h6 className="mb-0 mobile:text-sm">{t("about.icons.global")}<small className="d-block text-primary mobile:text-xs">{t("about.icons.network")}</small></h6>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="col-sm-3 col-6 mobile:col-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                >
                                    <div className="bg-light text-center rounded-circle py-4 mobile:py-3">
                                        <i className="fa fa-3x fa-user-md text-primary mb-3 mobile:mb-2 mobile:text-2xl"></i>
                                        <h6 className="mb-0 mobile:text-sm">{t("about.icons.experienced")}<small className="d-block text-primary mobile:text-xs">{t("about.icons.specialists")}</small></h6>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="col-sm-3 col-6 mobile:col-6 mobile:mt-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                >
                                    <div className="bg-light text-center rounded-circle py-4 mobile:py-3">
                                        <i className="fa fa-3x fa-clock text-primary mb-3 mobile:mb-2 mobile:text-2xl"></i>
                                        <h6 className="mb-0 mobile:text-sm">{t("about.icons.timely")}<small className="d-block text-primary mobile:text-xs">{t("about.icons.access")}</small></h6>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="col-sm-3 col-6 mobile:col-6 mobile:mt-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                >
                                    <div className="bg-light text-center rounded-circle py-4 mobile:py-3">
                                        <i className="fa fa-3x fa-handshake text-primary mb-3 mobile:mb-2 mobile:text-2xl"></i>
                                        <h6 className="mb-0 mobile:text-sm">{t("about.icons.endToEnd")}<small className="d-block text-primary mobile:text-xs">{t("about.icons.support")}</small></h6>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* <!-- About / Introduction End --> */}


            {/* <!-- Services Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <motion.div
                        className="text-center mx-auto mb-5 mobile:mb-4"
                        style={{ maxWidth: '500px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">{t("services.title")}</h5>
                        <h1 className="display-4 mobile:text-3xl">{t("services.headline")}</h1>
                    </motion.div>
                    <div className="row g-5 mobile:g-3">
                        {/* Service Card 1 */}
                        <motion.div
                            className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="service-icon mb-4 mobile:mb-3"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <i className="fa fa-2x fa-file-medical text-white mobile:text-xl"></i>
                                </motion.div>
                                <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t("services.items.caseReview.title")}</h4>
                                <p className="m-0 mobile:text-base" style={{ fontSize: 'larger' }}>{t("services.items.caseReview.desc")}</p>
                                <motion.a
                                    className="btn btn-lg btn-primary rounded-pill mt-3 mobile:mt-2 mobile:py-2 mobile:px-4"
                                    href="/service"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Service Card 2 */}
                        <motion.div
                            className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <motion.div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="service-icon mb-4 mobile:mb-3"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <i className="fa fa-2x fa-hospital text-white mobile:text-xl"></i>
                                </motion.div>
                                <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t("services.items.hospitalMatch.title")}</h4>
                                <p className="m-0 mobile:text-base" style={{ fontSize: 'larger' }}>{t("services.items.hospitalMatch.desc")}</p>
                                <motion.a
                                    className="btn btn-lg btn-primary rounded-pill mt-3 mobile:mt-2 mobile:py-2 mobile:px-4"
                                    href="/service"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Service Card 3 */}
                        <motion.div
                            className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="service-icon mb-4 mobile:mb-3"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <i className="fa fa-2x fa-plane text-white mobile:text-xl"></i>
                                </motion.div>
                                <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t("services.items.cost.title")}</h4>
                                <p className="m-0 mobile:text-base" style={{ fontSize: 'larger' }}>{t("services.items.cost.desc")}</p>
                                <motion.a
                                    className="btn btn-lg btn-primary rounded-pill mt-3 mobile:mt-2 mobile:py-2 mobile:px-4"
                                    href="/service"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Service Card 4 */}
                        <motion.div
                            className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <motion.div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="service-icon mb-4 mobile:mb-3"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <i className="fa fa-2x fa-hotel text-white mobile:text-xl"></i>
                                </motion.div>
                                <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t("services.items.visa.title")}</h4>
                                <p className="m-0 mobile:text-base" style={{ fontSize: 'larger' }}>{t("services.items.visa.desc")}</p>
                                <motion.a
                                    className="btn btn-lg btn-primary rounded-pill mt-3 mobile:mt-2 mobile:py-2 mobile:px-4"
                                    href="/service"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Service Card 5 */}
                        <motion.div
                            className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <motion.div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="service-icon mb-4 mobile:mb-3"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <i className="fa fa-2x fa-map-marker-alt text-white mobile:text-xl"></i>
                                </motion.div>
                                <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t("services.items.travel.title")}</h4>
                                <p className="m-0 mobile:text-base" style={{ fontSize: 'larger' }}>{t("services.items.travel.desc")}</p>
                                <motion.a
                                    className="btn btn-lg btn-primary rounded-pill mt-3 mobile:mt-2 mobile:py-2 mobile:px-4"
                                    href="/service"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Service Card 6 */}
                        <motion.div
                            className="col-lg-4 col-md-6 mobile:col-12 mobile:mb-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <motion.div
                                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mobile:p-4"
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="service-icon mb-4 mobile:mb-3"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <i className="fa fa-2x fa-phone-alt text-white mobile:text-xl"></i>
                                </motion.div>
                                <h4 className="mb-3 mobile:text-xl mobile:mb-2">{t("services.items.care.title")}</h4>
                                <p className="m-0 mobile:text-base" style={{ fontSize: 'larger' }}>{t("services.items.care.desc")}</p>
                                <motion.a
                                    className="btn btn-lg btn-primary rounded-pill mt-3 mobile:mt-2 mobile:py-2 mobile:px-4"
                                    href="/service"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <i className="bi bi-arrow-right"></i>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* <!-- Services End --> */}


            {/* <!-- Appointment / CTA Section Start --> */}
            <div className="container-fluid bg-primary my-5 py-5">
                <div className="container py-5">
                    <div className="row gx-5 mobile:gx-0">

                        {/* LEFT SIDE */}
                        <motion.div
                            className="col-lg-6 mb-5 mb-lg-0 mobile:mb-4"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-4 mobile:mb-3">
                                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
                                    {t("cta.title")}
                                </h5>
                                <h1 className="display-4 text-white mobile:text-3xl mobile:mt-2">
                                    {t("cta.headline")}?
                                </h1>
                            </div>

                            <p className="text-white mb-5 fs-5 mobile:text-base mobile:mb-4 mobile:text-center mobile:leading-relaxed">
                                {t("cta.description")}
                            </p>

                            <div className="d-flex flex-wrap gap-3 mobile:justify-center">
                                <motion.a
                                    className="btn btn-dark rounded-pill py-3 px-5 mobile:py-2 mobile:px-4 mobile:w-full mobile:max-w-xs"
                                    href="/medical-enquiry"
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t("cta.primary")}
                                </motion.a>

                                <motion.a
                                    className="btn btn-outline-dark rounded-pill py-3 px-5 mobile:py-2 mobile:px-4 mobile:w-full mobile:max-w-xs"
                                    href="/medical-enquiry"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.1)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t("cta.secondary")}
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE */}
                        <motion.div
                            className="col-lg-6 mobile:mt-4"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="bg-white text-center rounded p-5 mobile:p-4"
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <h1 className="mb-4 mobile:text-2xl mobile:mb-3">
                                    {t("india.title")}
                                </h1>

                                <p className="mb-4 mobile:text-base mobile:mb-3">
                                    {t("india.desc")}
                                </p>

                                {/* INDIA POINTS FROM JSON */}
                                <div className="text-start mobile:text-center">
                                    {t("india.points", { returnObjects: true }).map((point, index) => (
                                        <motion.p
                                            key={index}
                                            className="mobile:text-sm mobile:mb-1"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <i className="fa fa-check text-primary me-2"></i>
                                            {point}
                                        </motion.p>
                                    ))}
                                </div>

                                <motion.a
                                    href="/why-india"
                                    className="btn btn-primary rounded-pill py-3 px-5 mt-3 mobile:py-2 mobile:px-4 mobile:mt-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t("india.cta")}
                                </motion.a>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
            {/* <!-- Appointment / CTA Section End --> */}


            {/* <!-- Treatments / Specialties Start --> */}
            <div className="container-fluid py-5">
                <div className="container">

                    <motion.div
                        className="text-center mx-auto mb-5 mobile:mb-4"
                        style={{ maxWidth: "500px" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                            {t("treatments.title")}
                        </h5>
                        <h1 className="display-4 mobile:text-3xl">
                            {t("treatments.headline")}
                        </h1>
                    </motion.div>

                    <div className="row g-4 justify-content-center mobile:g-2">

                        {[
                            { key: "cardiology", icon: "fa-heartbeat" },
                            { key: "orthopedics", icon: "fa-bone" },
                            { key: "oncology", icon: "fa-stethoscope" },
                            { key: "neurology", icon: "fa-brain" },
                            { key: "cosmetic", icon: "fa-tooth" },
                            { key: "fertility", icon: "fa-baby" }
                        ].map((item, index) => (
                            <motion.div
                                key={item.key}
                                className="col-md-6 col-lg-4 mobile:col-12 mobile:mb-3"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <motion.div
                                    className="bg-light p-4 rounded text-center h-100 mobile:p-3"
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.i
                                        className={`fa ${item.icon} fa-3x text-primary mb-3 mobile:text-2xl mobile:mb-2`}
                                        whileHover={{ scale: 1.1 }}
                                    ></motion.i>

                                    <h4 className="mobile:text-xl">
                                        {t(`treatments.items.${item.key}.title`)}
                                    </h4>

                                    <p className="mobile:text-base">
                                        {t(`treatments.items.${item.key}.desc`)}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-5 mobile:mt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="fs-5 mobile:text-base mobile:mb-3">
                            {t("treatments.note")}
                        </p>

                        <motion.a
                            href="/treatments"
                            className="btn btn-primary rounded-pill py-3 px-5 mobile:py-2 mobile:px-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("treatments.cta")}
                        </motion.a>
                    </motion.div>

                </div>
            </div>
            {/* <!-- Treatments / Specialties End --> */}

            {/* <!-- Countries We Serve Start --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container">
                    <motion.div
                        className="text-center mx-auto mb-5 mobile:mb-4"
                        style={{ maxWidth: "500px" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                            {t("countries.title")}
                        </h5>
                        <h1 className="display-4 mobile:text-3xl">
                            {t("countries.headline")}
                        </h1>
                    </motion.div>

                    <div className="row justify-content-center text-center mobile:g-2">
                        {/* Filter out empty country names */}
                        {[
                            { key: "india", img: "img/india-flag.jpg" },
                            { key: "uae", img: "img/UAE-flag.png" },
                            { key: "nigeria", img: "img/nigeria-flag.jpg" },
                            { key: "kenya", img: "img/kenya-flag.png" },
                            { key: "tanzania", img: "img/tanzania-flag.png" }
                        ].map((country, index) => (
                            <motion.div
                                key={country.key}
                                className="col-md-4 col-lg-2 mb-4 mobile:col-4 mobile:mb-2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <motion.div
                                    className="country-item p-4 bg-white rounded shadow-sm mobile:p-2"
                                    whileHover={{
                                        y: -10,
                                        scale: 1.03,
                                        boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                                    }}
                                >
                                    <motion.img
                                        src={country.img}
                                        alt={country.key}
                                        className="map-img mb-3 mobile:mb-2"
                                        style={{ width: "80px", height: "50px", objectFit: "cover" }}
                                        whileHover={{ scale: 1.05 }}
                                    />
                                    <h5 className="mobile:text-sm">{t(`countries.list.${country.key}`)}</h5>
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Africa Special Card */}
                        <motion.div
                            className="col-md-4 col-lg-2 mb-4 mobile:col-4 mobile:mb-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <motion.div
                                className="country-item p-4 bg-primary text-white rounded shadow-sm mobile:p-2"
                                animate={{
                                    boxShadow: [
                                        "0 0 0px rgba(59,130,246,0.5)",
                                        "0 0 20px rgba(59,130,246,0.8)",
                                        "0 0 0px rgba(59,130,246,0.5)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <motion.img
                                    src="img/Africa_Flag_Map.png"
                                    alt="Africa"
                                    className="map-img mb-3 mobile:mb-2"
                                    style={{ width: "80px", height: "50px", objectFit: "cover" }}
                                    whileHover={{ scale: 1.05 }}
                                />
                                <h5 className="mobile:text-sm" style={{ color: "white" }}>
                                    {t("countries.africa")}
                                </h5>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="text-center mt-4 mobile:mt-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="fs-5 mobile:text-base mobile:mb-3">
                            {t("countries.note")}
                        </p>
                        <motion.a
                            href="/countries"
                            className="btn btn-outline-primary rounded-pill py-3 px-5 mobile:py-2 mobile:px-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("countries.cta")}
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            {/* <!-- Countries We Serve End --> */}

            {/* ================= Patient Journey Start ================= */}
            <div className="container-fluid py-5">
                <div className="container">
                    <motion.div
                        className="text-center mx-auto mb-5 mobile:mb-4"
                        style={{ maxWidth: "500px" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                            {t("journey.title")}
                        </h5>
                        <h1 className="display-4 mobile:text-3xl">{t("journey.headline")}</h1>
                    </motion.div>

                    <Slider {...settings}>
                        {/* Step 1 */}
                        <div className="px-3 mobile:px-2">
                            <motion.div
                                className="bg-light p-4 rounded text-center h-100 shadow-sm mobile:p-3"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 mobile:mb-2"
                                    style={{ width: 80, height: 80 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <h2 className="text-white mb-0 mobile:text-3xl">1</h2>
                                </motion.div>
                                <h4 className="mobile:text-xl">{t("journey.steps.1.title")}</h4>
                                <p className="fs-5 mobile:text-base">
                                    {t("journey.steps.1.desc")}
                                </p>
                            </motion.div>
                        </div>

                        {/* Step 2 */}
                        <div className="px-3 mobile:px-2">
                            <motion.div
                                className="bg-light p-4 rounded text-center h-100 shadow-sm mobile:p-3"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 mobile:mb-2"
                                    style={{ width: 80, height: 80 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <h2 className="text-white mb-0 mobile:text-3xl">2</h2>
                                </motion.div>
                                <h4 className="mobile:text-xl">{t("journey.steps.2.title")}</h4>
                                <p className="fs-5 mobile:text-base">
                                    {t("journey.steps.2.desc")}
                                </p>
                            </motion.div>
                        </div>

                        {/* Step 3 */}
                        <div className="px-3 mobile:px-2">
                            <motion.div
                                className="bg-light p-4 rounded text-center h-100 shadow-sm mobile:p-3"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 mobile:mb-2"
                                    style={{ width: 80, height: 80 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <h2 className="text-white mb-0 mobile:text-3xl">3</h2>
                                </motion.div>
                                <h4 className="mobile:text-xl">{t("journey.steps.3.title")}</h4>
                                <p className="fs-5 mobile:text-base">
                                    {t("journey.steps.3.desc")}
                                </p>
                            </motion.div>
                        </div>

                        {/* Step 4 */}
                        <div className="px-3 mobile:px-2">
                            <motion.div
                                className="bg-light p-4 rounded text-center h-100 shadow-sm mobile:p-3"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 mobile:mb-2"
                                    style={{ width: 80, height: 80 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <h2 className="text-white mb-0 mobile:text-3xl">4</h2>
                                </motion.div>
                                <h4 className="mobile:text-xl">{t("journey.steps.4.title")}</h4>
                                <p className="fs-5 mobile:text-base">
                                    {t("journey.steps.4.desc")}
                                </p>
                            </motion.div>
                        </div>

                        {/* Step 5 */}
                        <div className="px-3 mobile:px-2">
                            <motion.div
                                className="bg-light p-4 rounded text-center h-100 shadow-sm mobile:p-3"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 mobile:mb-2"
                                    style={{ width: 80, height: 80 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <h2 className="text-white mb-0 mobile:text-3xl">5</h2>
                                </motion.div>
                                <h4 className="mobile:text-xl">{t("journey.steps.5.title")}</h4>
                                <p className="fs-5 mobile:text-base">
                                    {t("journey.steps.5.desc")}
                                </p>
                            </motion.div>
                        </div>
                    </Slider>

                    <motion.div
                        className="text-center mt-5 mobile:mt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.a
                            href="/patient-journey"
                            className="btn btn-primary rounded-pill py-3 px-5 mobile:py-2 mobile:px-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("journey.cta")}
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            {/* ================= Patient Journey End ================= */}
        </>
    )
}

export default Home;