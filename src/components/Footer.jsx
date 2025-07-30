import { useState } from 'react';
import { ArrowUpRight, ArrowUp, ArrowDown } from 'lucide-react';
import { Separator } from './ui/Separator';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(true);
    return (
        <footer className="bg-nile-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div>
                        <div className="text-2xl font-bold font-display mb-4">
                            <Link to="/" reloadDocument>
                                <span className="text-nile-cyan">Nile Crown Media</span>
                            </Link>
                        </div>
                        <p className="text-gray-300 mb-6">
                            AI-powered design solutions for forward-thinking brands. We build digital experiences that convert and inspire.
                        </p>
                        <div className="flex space-x-4">
                            {['/facebook2.png', '/twitter2.png', '/instagram2.png', '/linkedin2.png'].map((platform,index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                                >
                                    <img className='w-6 h-6' src={platform} alt="contact info" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='hidden md:block'>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Services', 'Portfolio', 'About Us', 'Blog', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`${link.toLowerCase().replace(' us', '')}`}
                                        className="text-gray-300 hover:text-nile-cyan transition-colors flex items-center"
                                    >
                                        <span>{link}</span>
                                        <ArrowUpRight size={14} className="ml-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Phone */}
                    <div className='block md:hidden'>
                        <h3 onClick={()=>setIsOpen1(!isOpen1)} className="text-lg font-semibold mb-4 hover:text-nile-cyan flex flex-row justify-between cursor-pointer">Quick Links {isOpen1 ? <ArrowUp size={20} /> : <ArrowDown size={20} />}</h3>
                        {isOpen1 && <ul className="space-y-3">
                            {['Services', 'Portfolio', 'About Us', 'Blog', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`${link.toLowerCase().replace(' us', '')}`}
                                        className="text-gray-300 hover:text-nile-cyan transition-colors flex items-center"
                                    >
                                        <span>{link}</span>
                                        <ArrowUpRight size={14} className="ml-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>}
                    </div>

                    {/* Services */}
                    <div className='hidden md:block'>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {[
                                {
                                    name: 'UI/UX Design',
                                    url: '/services/ui-ux-design',
                                },
                                {
                                    name: 'AI-Powered Development',
                                    url: '/services/ai-powered-development',
                                },
                                {
                                    name: 'Digital Strategy',
                                    url: '/services/digital-strategy',
                                },
                                {
                                    name: 'Content Creation',
                                    url: '/services/content-creation',
                                },
                                {
                                    name: 'Brand Identity',
                                    url: '/services/brand-identity',
                                },
                                {
                                    name: 'Growth Marketing',
                                    url: '/services/growth-marketing',
                                }
                            ].map((service,index) => (
                                <li key={index}>
                                    <a
                                        href={`${service.url}`}
                                        className="text-gray-300 hover:text-nile-cyan transition-colors flex items-center"
                                    >
                                        <span>{service.name}</span>
                                        <ArrowUpRight size={14} className="ml-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Phone */}
                    <div className='block md:hidden'>
                        <h3 onClick={()=>setIsOpen2(!isOpen2)} className="text-lg font-semibold mb-4 hover:text-nile-cyan flex flex-row justify-between cursor-pointer">Services {isOpen2 ? <ArrowUp size={20} /> : <ArrowDown size={20} />}</h3>
                        {isOpen2 && <ul className="space-y-3">
                            {[
                                {
                                    name: 'UI/UX Design',
                                    url: '/services/ui-ux-design',
                                },
                                {
                                    name: 'AI-Powered Development',
                                    url: '/services/ai-powered-development',
                                },
                                {
                                    name: 'Digital Strategy',
                                    url: '/services/digital-strategy',
                                },
                                {
                                    name: 'Content Creation',
                                    url: '/services/content-creation',
                                },
                                {
                                    name: 'Brand Identity',
                                    url: '/services/brand-identity',
                                },
                                {
                                    name: 'Growth Marketing',
                                    url: '/services/growth-marketing',
                                }
                            ].map((service,index) => (
                                <li key={index}>
                                    <a
                                        href={`${service.url}`}
                                        className="text-gray-300 hover:text-nile-cyan transition-colors flex items-center"
                                    >
                                        <span>{service.name}</span>
                                        <ArrowUpRight size={14} className="ml-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>}
                    </div>

                    {/* Contact */}
                    <div className='hidden md:block'>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <address className="not-italic text-gray-300 space-y-3">
                            <a href="https://maps.app.goo.gl/zg2XCeGc8wV2VsR7A">
                                <p>124 City Road</p>
                                <p>London</p>
                                <p>United Kingdom EC1V 2NX</p>
                            </a>
                            <p className="pt-2">
                                <a href="mailto:hello@nilecrownmedia.com" className="hover:text-nile-cyan transition-colors">
                                    hello@nilecrownmedia.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+440123456789" className="hover:text-nile-cyan transition-colors">
                                    +440123456789
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Contact Phone */}
                    <div className='block md:hidden'>
                        <h3 onClick={()=>setIsOpen3(!isOpen3)} className="text-lg font-semibold mb-4 hover:text-nile-cyan flex flex-row justify-between cursor-pointer">Contact Us {isOpen3 ? <ArrowUp size={20} /> : <ArrowDown size={20} />}</h3>
                        {isOpen3 && <address className="not-italic text-gray-300 space-y-3">
                            <a href="https://maps.app.goo.gl/zg2XCeGc8wV2VsR7A">
                                <p>124 City Road</p>
                                <p>London</p>
                                <p>United Kingdom EC1V 2NX</p>
                            </a>
                            <p className="pt-2">
                                <a href="mailto:hello@nilecrownmedia.com" className="hover:text-nile-cyan transition-colors">
                                    hello@nilecrownmedia.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+440123456789" className="hover:text-nile-cyan transition-colors">
                                    +440123456789
                                </a>
                            </p>
                        </address>}
                    </div>
                </div>

                <Separator className="my-8 bg-white/20" />

                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <div className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Nile Crown Media. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-nile-cyan transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-nile-cyan transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-nile-cyan transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
