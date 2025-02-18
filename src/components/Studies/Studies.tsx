import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import educationIllustration from "../../assets/images/studies.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Studies = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("studies.title")} - Rabie Lafkir</title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10"
            >
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-extrabold mb-12 flex items-center space-x-4 md:text-center"
                >
                    <FaGraduationCap className="text-red-500 animate-bounce text-3xl md:text-6xl" />
                    <span>{t("studies.title")}</span>
                </motion.h1>

                <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-between gap-10 md:gap-14">
                    {/* Left Section - Education Details */}
                    <div className="w-full md:w-1/2 space-y-8">
                        {/* Master Degree */}
                        <motion.div
                            initial={{ x: -60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl hover:shadow-red-500 transition-all duration-300"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                {t("studies.master_title")}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                                {t("studies.master_university")}
                            </p>
                            <p className="text-md md:text-lg text-gray-500 dark:text-gray-300 font-semibold">
                                {t("studies.master_years")}
                            </p>
                        </motion.div>

                        {/* Bachelor Degree */}
                        <motion.div
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl hover:shadow-red-500 transition-all duration-300"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                {t("studies.bachelor_title")}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                                {t("studies.bachelor_university")}
                            </p>
                            <p className="text-md md:text-lg text-gray-500 dark:text-gray-300 font-semibold">
                                {t("studies.bachelor_years")}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Section - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.03 }}
                        className="hidden md:flex w-full md:w-1/2 justify-center"
                    >
                        <img src={educationIllustration} alt="Education Illustration" className="w-full max-w-lg drop-shadow-xl" />
                    </motion.div>
                </div>
            </motion.div>
        </>

    );
};

export default Studies;
