import { Button } from "./ui/Button";
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-nile-blue via-[#1a365d] to-[#1e3a8a] overflow-hidden pt-20">
            {/* Background blobs */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-nile-purple/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-nile-cyan/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-fade-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
                            Let's Build Something <span className="text-nile-cyan">Extraordinary</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                            At Nile Crown Media, we don't just create, we innovate. From brainstorming creative branding to creating eye-catching digital experiences, we craft solutions that inspire, drive actual results, and dare you to be different. Whether you're introducing something new or on a path of brand improvement, we'll make your digital presence unforgettable.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to={`/contact`} reloadDocument>
                                <Button size="lg" className="bg-nile-cyan hover:bg-nile-cyan/90 text-nile-blue font-medium">
                                    Let's Create Magic <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </Link>
                            <Link to={`/portfolio`} reloadDocument>
                                <Button size="lg" className="border-white text-white">
                                    Explore Our Work
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative animate-fade-in">
                        <div className="relative">
                            {/* The main image container with 3D-like appearance */}
                            <div className="mx-auto relative z-20 rounded-lg shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/971.jpg"
                                    alt="Digital Design"
                                    className="w-full object-cover"
                                />

                                {/* Color overlay for brand alignment */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-nile-blue/50 to-nile-purple/30 mix-blend-multiply"></div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-nile-cyan rounded-lg z-10 hidden md:block"></div>
                            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-nile-purple to-nile-pink opacity-20 z-0 hidden md:block"></div>
                        </div>

                        {/* Floating badges */}
                        {/* <div className="absolute -bottom-5 left-1/4 bg-white p-3 rounded-lg shadow-xl items-center animate-bounce-slow hidden md:flex">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="font-medium text-sm">AI Powered</span>
                        </div>
                        <div className="absolute top-10 right-0 bg-white p-3 rounded-lg shadow-xl hidden md:block">
                            <span className="font-medium text-sm">Future-Ready</span>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-white text-sm mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
