import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-10"
        >
            {/* Additional Contact Info Section */}
            <div className="h-full flex flex-col items-center text-center p-10 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">I'm open to discussions about new projects, collaborations, or networking.</p>
                <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300">
                    <p className="flex items-center space-x-2">
                        📧 <span>lafkirrabie2000@gmail.com</span>
                    </p>
                    <p className="flex items-center space-x-2">
                        📍 <span>Morocco, North Africa</span>
                    </p>
                    <p className="flex items-center space-x-2">
                        📞 <span>+212 600 000 000</span>
                    </p>
                </div>
                {/* Social Media Links */}
                <div className="flex space-x-6 mt-8">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"><FaFacebook size={30} /></a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"><FaTwitter size={30} /></a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-110"><FaLinkedin size={30} /></a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform transform hover:scale-110"><FaGithub size={30} /></a>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="h-full bg-gray-100 dark:bg-gray-800 p-10 rounded-lg shadow-lg flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-center">Let's collaborate and create something amazing together.</p>
                <form>
                    <div className="mb-6 relative">
                        <input type="text" id="name" placeholder=" " className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 dark:text-white" required />
                        <label htmlFor="name" className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">Name</label>
                    </div>

                    <div className="mb-6 relative">
                        <input type="email" id="email" placeholder=" " className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 dark:text-white" required />
                        <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">Email</label>
                    </div>

                    <div className="mb-6 relative">
                        <textarea id="message" placeholder=" " rows="5" className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 dark:text-white" required></textarea>
                        <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">Message</label>
                    </div>

                    <button type="submit" className="w-full py-3 px-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition">Send Message</button>
                </form>
            </div>


        </motion.div>
    );
};

export default Contact;
