import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaGlobe, FaProjectDiagram } from "react-icons/fa";
import reactLogo from "../../assets/logos/react.png";
import typescriptLogo from "../../assets/logos/typescript.png";
import tailwindLogo from "../../assets/logos/tailwind.png";
import projectImage1 from "../../assets/images/project1.png";
import projectImage2 from "../../assets/images/project2.png";
import projectImage3 from "../../assets/images/project3.png";

const projects = [
    {
        title: "APIP Chatbot",
        description: "User interface for an interactive chatbot.",
        technologies: [reactLogo, typescriptLogo, tailwindLogo],
        implementation: "Developed a responsive and ergonomic interface for interacting with a chatbot, offering a smooth and modern user experience.",
        image: projectImage1,
        icon: <FaLaptopCode className="text-red-500 text-6xl" />
    },
    {
        title: "IntelliHome",
        description: "E-commerce site for selling connected devices for smart homes.",
        technologies: [reactLogo, typescriptLogo, tailwindLogo],
        implementation: "Designed and developed a high-performance website with product management, cart, and payment integration, utilizing a robust backend architecture.",
        image: projectImage2,
        icon: <FaDatabase className="text-red-500 text-6xl" />
    },
    {
        title: "MoroccanWonders (Final Year Project)",
        description: "Platform for managing tourism experiences for international visitors in Morocco.",
        technologies: [reactLogo, typescriptLogo, tailwindLogo],
        implementation: "Developed a complete solution to book and manage tourism activities, featuring an optimized management system for users and administrators.",
        image: projectImage3,
        icon: <FaGlobe className="text-red-500 text-6xl" />
    }
];

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center py-12 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        >
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-extrabold mb-12 flex items-center space-x-4 md:text-center"
            >
                <FaProjectDiagram className="text-red-500 animate-bounce text-3xl md:text-6xl" />
                <span>My Projects</span>
            </motion.h1>

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        id={project.title}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.5)" }}
                        className="card dark:bg-gray-800 w-full shadow-xl overflow-hidden transition-all duration-300 hover:shadow-red-500"
                    >
                        <figure>
                            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold dark:text-white">{project.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className="text-lg dark:text-gray-300">{project.description}</p>
                            <div className="flex justify-center space-x-4 my-4">
                                {project.technologies.map((tech, i) => (
                                    <img key={i} src={tech} alt="tech" className="w-10 hover:scale-110 transition-transform duration-300" />
                                ))}
                            </div>
                            <p className="text-md text-gray-600 dark:text-gray-400 font-semibold">{project.implementation}</p>
                            <div className="card-actions justify-end mt-4">
                                <div className="badge badge-outline">Tech</div>
                                <div className="badge badge-outline">Development</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
