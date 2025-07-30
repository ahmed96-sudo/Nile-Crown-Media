import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Code, Layout, Newspaper, BarChart, Image, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
    {
        icon: <Layout className="h-12 w-12 text-nile-purple" />,
        title: 'UI/UX Design',
        description: 'Intuitive interfaces and seamless user experiences that delight your visitors',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
        link: '/services/ui-ux-design'
    },
    {
        icon: <Code className="h-12 w-12 text-nile-purple" />,
        title: 'AI-Powered Development',
        description: 'Custom websites built with cutting-edge technology that scales with your business',
        features: ['React Development', 'AI Integration', 'Performance Optimization', 'Mobile-First Design']
    },
    {
        icon: <BarChart className="h-12 w-12 text-nile-purple" />,
        title: 'Digital Strategy',
        description: 'Data-driven approaches to maximize your online presence and reach',
        features: ['SEO Strategy', 'Analytics Setup', 'Conversion Optimization', 'Growth Planning']
    },
    {
        icon: <Newspaper className="h-12 w-12 text-nile-purple" />,
        title: 'Content Creation',
        description: 'Engaging, SEO-optimized content that tells your brand story',
        features: ['Copywriting', 'Blog Content', 'Social Media', 'Video Scripts']
    },
    {
        icon: <Image className="h-12 w-12 text-nile-purple" />,
        title: 'Brand Identity',
        description: 'Distinctive visual elements that set your brand apart from competitors',
        features: ['Logo Design', 'Brand Guidelines', 'Visual Assets', 'Brand Strategy']
    },
    {
        icon: <Rocket className="h-12 w-12 text-nile-purple" />,
        title: 'Growth Marketing',
        description: 'Strategic campaigns that drive traffic, leads, and conversions',
        features: ['PPC Campaigns', 'Social Media Marketing', 'Email Marketing', 'Lead Generation']
    }
];

const Services = () => {
    document.title = 'Nile Crown Media | Services';
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-nile-blue via-[#1a365d] to-[#1e3a8a] overflow-hidden pt-20">
                <div className="absolute top-20 right-10 w-72 h-72 bg-nile-purple/20 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-nile-cyan/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 py-20 z-10 relative">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
                            Our <span className="text-nile-cyan">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            We offer comprehensive digital solutions powered by AI and driven by results. Let us help you transform your digital presence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover overflow-hidden group">
                                <CardHeader className="pb-4 items-center md:items-start text-center md:text-left">
                                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground mb-6">
                                        {service.description}
                                    </CardDescription>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-nile-cyan mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {service.link && (
                                        <Link to={`${service.link}`} reloadDocument>
                                            <Button variant="outline" className="w-full group-hover:bg-nile-purple group-hover:text-white transition-colors">
                                                Learn More <ArrowRight className="h-4 w-4 ml-2" />
                                            </Button>
                                        </Link>
                                    )}
                                </CardContent>

                                <div className="h-1 w-0 bg-gradient-to-r from-nile-purple to-nile-cyan group-hover:w-full transition-all duration-300"></div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-nile-purple to-nile-cyan">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss your project and create something amazing together.
                    </p>
                    <Link to={`/contact`} reloadDocument>
                        <Button size="lg" className="bg-white text-nile-purple hover:bg-gray-100">
                            Start Your Project <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;