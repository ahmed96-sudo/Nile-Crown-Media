import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Royal Wharf Clinics",
        category: "Web Development, UI/UX, Branding, Website Content",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        description: "Luxury aesthetics clinic website with WooCommerce booking, conversion tracking, and site speed optimization.",
        link: "/portfolio/royal-wharf-clinics",
    },
    {
        title: "Roda Clinics",
        category: "Web Development, UI/UX, Branding, Website Content",
        image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
        description: "Clinical services website with enhanced analytics, custom event tracking, and streamlined booking funnel.",
        link: "/portfolio/roda-clinics",
    },
];

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="pt-20 bg-gray-50 md:py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className='flex md:block flex-col items-center text-center md:text-left'>
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Portfolio</h2>
                        <div className="w-48 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mb-6 md:w-24"></div>
                        <p className="text-lg text-gray-600 max-w-xl">
                            Every project we touch turns into a digital masterpiece. Here's how we bring brands to life and drive real-world results.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Link to={`/portfolio`} reloadDocument>
                            <Button variant="outline" className="border-nile-purple text-nile-purple hover:bg-nile-purple/10">
                                View All Projects
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-nile-blue/90 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                                <div className="absolute bottom-0 left-0 p-6 text-white z-10 text-center md:text-left">
                                    <span className="text-xs uppercase tracking-wider text-[beige] mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold font-display mb-2">{project.title}</h3>

                                    <p className="text-sm text-white/80 md:max-w-xs max-w-fit mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.description}
                                    </p>

                                    <a
                                        href={`${project.link}`}
                                        className="inline-flex items-center text-nile-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        View Case Study <ArrowRight size={16} className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-nile-blue to-nile-purple p-8 md:p-12 rounded-2xl text-white">
                    <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
                            Ready to transform your digital presence?
                        </h3>
                        <p className="text-white/80 md:text-[16px] text-[15px]">
                            Let's craft something extraordinary together.
                        </p>
                    </div>
                    <div className="md:w-1/3 md:text-right">
                        <Link to={`/contact`} reloadDocument>
                            <Button size="lg" className="bg-white text-nile-blue hover:bg-white/90">
                                Start Your Project <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
