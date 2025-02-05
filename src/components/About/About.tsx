import React from "react";
import { motion } from "framer-motion";
import profile from '../../assets/images/profile.jpg';

const About: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        >
            <header className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 w-full">
                <div className="flex items-center flex-col py-10 w-full">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="avatar">
                            <div className="ring-red-500 ring-offset-base-100 w-32 rounded-full ring ring-offset-2">
                                <img src={profile} alt="Profile" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-4 text-center"
                    >
                        <h1 className="md:text-4xl font-bold mt-0 mb-2 uppercase">Rabie Lafkir</h1>
                        <h2 className="text-gray-600 dark:text-gray-400 md:text-2xl max-w-2xl mx-auto">
                            Full Stack <span className="text-red-500">Developer</span>
                        </h2>
                    </motion.div>
                </div>
            </header>
            <motion.main
                className="container block p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <div className="flex flex-wrap -mx-2">
                    <div className="sm:w-3/4 px-2">
                        <h3 className="mb-4 text-xl font-semibold">About Me</h3>
                        <p>
                            Rabie Lafkir is a dynamic and enthusiastic <span className="text-red-500">full-stack developer</span> with a master's degree in <span className="text-red-500">Information Technology Methods Applied to Business Management</span>. He has a deep passion for programming, continuous learning, and exploring innovative solutions. Rabie enjoys reading, diving into new knowledge, and applying it to create impactful projects. Eager to contribute to ambitious endeavors, he brings energy and a unique philosophy to everything he does, blending his love for life with a relentless drive for growth and excellence.
                        </p>
                    </div>
                    <motion.div
                        className="sm:w-1/4 px-2 py-6 md:py-0"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <h3 className="mb-4 text-xl font-semibold">Contact</h3>
                        <div className="space-y-4">
                            <a href="mailto:lafkirrabie2000@gmail.com" className="flex items-center text-gray-700 dark:text-white hover:text-red-500 dark:hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                                <span className="ml-2">Email</span>
                            </a>
                            <a href="https://github.com/brikis98" className="flex items-center text-gray-700 dark:text-white hover:text-red-500 dark:hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="ml-2">GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/jbrikman" className="flex items-center text-gray-700 dark:text-white hover:text-red-500 dark:hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                                <span className="ml-2">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.main>
        </motion.div>
    );
};

export default About;
