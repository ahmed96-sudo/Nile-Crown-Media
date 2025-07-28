import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={cn(
            "fixed w-full py-4 z-50 transition-all duration-300",
            isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
                    <a href="/" className="text-2xl font-bold font-display">
                        <span className="text-nile-cyan">Nile</span> <span className="text-nile-cyan">Crown Media</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {['Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className={cn("animated-underline hover:text-nile-purple font-medium transition-colors",
                                        isScrolled ? "text-nile-cyan" : "text-white")}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link to="/contact" reloadDocument>
                        <Button className="bg-gradient-to-r from-nile-purple to-nile-cyan hover:shadow-lg transition-all">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-nile-blue"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden w-full h-screen bg-white absolute top-16 left-0 py-5 px-4 animate-fade-in">
                    <div className="flex flex-col space-y-6">
                        {['Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-xl font-medium text-nile-blue hover:text-nile-purple transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <div className="pt-4">
                            <Link to="/contact" reloadDocument>
                                <Button className="w-full bg-gradient-to-r from-nile-purple to-nile-cyan hover:shadow-lg transition-all">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
