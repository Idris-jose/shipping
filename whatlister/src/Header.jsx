import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Compass } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", section: "section1", icon: "●" },
        { name: "About", section: "section2", icon: "◆" },
        { name: "Service", section: "section3", icon: "■" },
        { name: "Office", section: "section4", icon: "▲" },
    ];
    
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
                <div className="flex items-center">
                    <Compass className="text-orange-500 mr-2" size={24} />
                    <h1 className="text-2xl text-orange-600 font-bold">Treek</h1>
                </div>
                
                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <div className="flex items-center">
                        <div className="p-1 bg-black/30 rounded-xl">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.section}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg mx-1 hover:bg-white/10 cursor-pointer text-white/90 hover:text-white transition-colors relative group"
                                    activeClass="text-orange-500 font-medium bg-white/5"
                                    spy={true}
                                >
                                    <span className="text-xs text-orange-400 absolute -top-1 -left-1 opacity-0 group-hover:opacity-100">{link.icon}</span>
                                    {link.name}
                                </Link>
                            ))}
                           <Link
                                to="section5"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="ml-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center justify-center cursor-pointer"
                            >
                                Learn more
                            </Link>
                           
                        </div>
                    </div>
                </nav>
                
                {/* Hamburger Icon */}
                {!mobileMenuOpen && (
                    <button
                        className="md:hidden text-white bg-orange-600/20 p-2 rounded-md"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={20} />
                    </button>
                )}
            </div>
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="bg-gradient-to-b mb-10 from-black via-black/95 to-black/90 z-50 md:hidden">
                    <div className="h-full flex flex-col items-center justify-center relative">
                        <button
                            className="absolute top-6 right-6 text-white p-2 bg-orange-600/20 rounded-full"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                        <nav className="flex flex-col items-center bg-black/40 p-8 rounded-xl border border-white/5">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.section}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="text-xl text-white hover:text-orange-500 transition-colors py-4 px-8 my-2 text-center w-full flex items-center"
                                    activeClass="text-orange-500 font-bold"
                                    onClick={handleLinkClick}
                                    spy={true}
                                >
                                    <span className="mr-3 text-orange-400">{link.icon}</span>
                                    {link.name}
                                </Link>
                            ))}
                           
                            <Link
                                to="section5"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="ml-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center justify-center cursor-pointer"
                            >
                                Learn more
                            </Link>
                        </nav>
                        
                    </div>
                </div>
            )}
        </header>
    );
}