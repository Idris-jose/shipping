import { useState } from 'react';
import image1 from './assets/pexels-pixabay-163726.jpg';
import { ArrowDownRight, Package, Clock, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Section4() {
    const [show, setShow] = useState(null);

    const faqs = [
        {
            title: "Worldwide shipping",
            description: "We offer worldwide shipping services to ensure your packages reach their destination, no matter where it is.",
            icon: <Package className="text-orange-400" size={24} />
        },
        {
            title: "Real-time tracking",
            description: "Our real-time tracking system allows you to monitor your shipment's progress at any time.",
            icon: <Clock className="text-orange-400" size={24} />
        },
        {
            title: "Customs clearance",
            description: "We handle all customs clearance procedures to ensure a smooth delivery process.",
            icon: <FileCheck className="text-orange-400" size={24} />
        },
    ];

    const toggleFAQ = (index) => {
        setShow(show === index ? null : index);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const contentVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto" }
    };

    return (
        <section className="min-h-screen flex flex-col p-8 bg-[#111112]">
        

            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-orange-200">Our services</h3>
                <h1 className="font-black text-5xl md:text-7xl text-white leading-tight drop-shadow-lg mt-4">
                    Manage your package <br />
                    from local to the <span className="text-orange-600 underline decoration-wavy">world.</span>
                </h1>
                <p className="text-white text-lg mt-4 max-w-2xl">
                    We offer a wide range of services to meet all your shipping needs, from local deliveries to international freight forwarding.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-7 mt-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <img 
                        src={image1} 
                        className="h-96 w-full object-cover rounded-2xl shadow-lg" 
                        alt="Shipping service"
                    />
                </motion.div>

                <motion.div 
                    className="flex flex-col gap-4 w-full md:w-1/2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {faqs.map((item, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="overflow-hidden"
                        >
                            <motion.div 
                                className={`bg-[#1a1a1a] rounded-xl p-6 shadow-lg cursor-pointer 
                                ${show === index ? 'bg-orange-600 bg-opacity-20' : ''}`}
                                onClick={() => toggleFAQ(index)}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {item.icon}
                                        <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: show === index ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowDownRight className="text-orange-400" size={24} />
                                    </motion.div>
                                </div>
                                
                                <AnimatePresence>
                                    {show === index && (
                                        <motion.div
                                            variants={contentVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.p 
                                                className="text-gray-300 mt-4 pl-9"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {item.description}
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}