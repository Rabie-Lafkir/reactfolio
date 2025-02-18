import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-6 text-center w-full">
            <div className="container mx-auto">
                <p className="text-sm">{t("footer.madeBy")} <span className="text-red-500">{t("footer.name")}</span></p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    © {currentYear} {t("footer.copyright")}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
