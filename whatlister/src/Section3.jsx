import { useState, useEffect } from "react";
import shipping from "./assets/pexels-tomfisk-1427107.jpg";
import { motion } from "framer-motion";
import { TrendingUp, Truck, Users, Globe } from "lucide-react";

export default function Section3() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const ratings = [
        { 
            number: "100k+", 
            title: "Operational Vehicles",
            icon: <Truck size={32} className="text-orange-400" />,
            delay: 0.2
        },
        { 
            number: "1k+", 
            title: "Global Offices",
            icon: <Globe size={32} className="text-orange-400" />,
            delay: 0.3
        },
        { 
            number: "10+", 
            title: "Years Experience",
            icon: <TrendingUp size={32} className="text-orange-400" />,
            delay: 0.4
        },
        { 
            number: "3M+", 
            title: "Happy Clients",
            icon: <Users size={32} className="text-orange-400" />,
            delay: 0.5
        },
    ];

    // Text reveal animation
    const letterAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        })
    };

    // Split text for animation
    const title1 = "Unleashing";
    const title2 = "the";
    const title3 = "Power";
    const title4 = "of";
    const title5 = "Global Shipping";

    return (
        <motion.section 
            className="min-h-[60vh] flex flex-col p-8 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
                 {/* Top curvy separator */}
                      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0" style={{ transform: "translateY(-98%)" }}>
                        <svg 
                          data-name="Layer 1" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 1200 120" 
                          preserveAspectRatio="none" 
                          className="relative block w-full h-16"
                          style={{ fill: "#0f0f0f" }}
                        >
                          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C-0.56,53.93,35.57,83.47,71.16,97.67,148.76,128.16,246.32,78.35,321.39,56.44Z"></path>
                        </svg>
                      </div>

            <div className="overflow-hidden">
                <motion.h1 className="font-black text-5xl md:text-7xl text-white leading-tight drop-shadow-lg mt-4 flex flex-wrap">
                    <div className="overflow-hidden mr-3 md:mr-4">
                        <motion.span 
                            className="text-orange-500 inline-block"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.1,
                                ease: [0.2, 0.65, 0.3, 0.9]
                            }}
                        >
                            {title1}
                        </motion.span>
                    </div>
                    
                    <div className="overflow-hidden mr-3 md:mr-4">
                        <motion.span 
                            className="inline-block"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.2,
                                ease: [0.2, 0.65, 0.3, 0.9]
                            }}
                        >
                            {title2}
                        </motion.span>
                    </div>
                    
                    <div className="overflow-hidden mr-3 md:mr-4">
                        <motion.span 
                            className="text-orange-600 inline-block"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.3,
                                ease: [0.2, 0.65, 0.3, 0.9]
                            }}
                        >
                            {title3}
                        </motion.span>
                    </div>
                    
                    <br className="md:hidden" />
                    
                    <div className="overflow-hidden mr-3 md:mr-4">
                        <motion.span 
                            className="inline-block"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.4,
                                ease: [0.2, 0.65, 0.3, 0.9]
                            }}
                        >
                            {title4}
                        </motion.span>
                    </div>
                    
                    <div className="overflow-hidden">
                        <motion.span 
                            className="underline decoration-orange-400 decoration-4 inline-block"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.5,
                                ease: [0.2, 0.65, 0.3, 0.9]
                            }}
                        >
                            {title5}
                        </motion.span>
                    </div>
                </motion.h1>
            </div>

            <motion.p 
                className="text-white text-lg mt-6 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                Seamlessly connecting continents, our logistics solutions are crafted for reliability and speed. 
                With a legacy of excellence, a vast fleet, and a passionate team, we deliver your cargo—wherever, whenever.
            </motion.p>

            <motion.div 
                className="flex gap-6 md:gap-8 mt-12 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                {ratings.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-6 shadow-xl flex flex-col items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.6, 
                            delay: item.delay,
                            ease: [0.2, 0.65, 0.3, 0.9]
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(255, 255, 255, 0.15)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: item.delay + 0.2,
                                type: "spring"
                            }}
                        >
                            {item.icon}
                        </motion.div>
                        <motion.h2 
                            className="font-extrabold text-4xl text-orange-400 drop-shadow mt-3"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    delay: item.delay + 0.3
                                }
                            }}
                        >
                            {item.number}
                        </motion.h2>
                        <motion.p 
                            className="font-medium mt-2 text-white tracking-wide uppercase text-center text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    delay: item.delay + 0.4
                                }
                            }}
                        >
                            {item.title}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                className="relative mt-16"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl opacity-75 blur-lg"
                    animate={{ 
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse" 
                    }}
                />
                <motion.img
                    src={shipping}
                    alt="Global shipping operations"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl relative z-10"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl pointer-events-none z-20" />
                
                <motion.div 
                    className="absolute bottom-8 left-8 z-30 bg-black/50 backdrop-blur-md p-4 rounded-lg border-l-4 border-orange-500 max-w-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <h3 className="text-white font-bold text-lg">24/7 Global Operations</h3>
                    <p className="text-gray-200 text-sm">Our worldwide network ensures your shipments move efficiently across borders and oceans.</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}