import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from "../../components/ui/Badge";
import {
    Layout,
    Users,
    Palette,
    ArrowRight,
    CheckCircle,
    Target,
    Eye,
    Brain
} from 'lucide-react';

const processSteps = [
    {
        number: '01',
        title: 'Research & Discovery',
        description: 'We dive deep into understanding your users, business goals, and market landscape.',
        icon: <Eye className="h-8 w-8 text-nile-purple" />
    },
    {
        number: '02',
        title: 'User Journey Mapping',
        description: 'Creating comprehensive user flows and identifying pain points and opportunities.',
        icon: <Users className="h-8 w-8 text-nile-cyan" />
    },
    {
        number: '03',
        title: 'Wireframing & Prototyping',
        description: 'Building interactive prototypes to test concepts before development begins.',
        icon: <Layout className="h-8 w-8 text-nile-purple" />
    },
    {
        number: '04',
        title: 'Visual Design',
        description: 'Crafting beautiful, on-brand interfaces that delight and engage users.',
        icon: <Palette className="h-8 w-8 text-nile-cyan" />
    },
    {
        number: '05',
        title: 'Testing & Refinement',
        description: 'Continuous testing and iteration to ensure optimal user experience.',
        icon: <Target className="h-8 w-8 text-nile-purple" />
    }
];

const services = [
    {
        title: 'User Experience Design',
        description: 'Creating intuitive user journeys that convert visitors into customers',
        features: ['User Research', 'Information Architecture', 'User Journey Mapping', 'Usability Testing']
    },
    {
        title: 'User Interface Design',
        description: 'Beautiful, functional interfaces that reflect your brand identity',
        features: ['Visual Design', 'Design Systems', 'Component Libraries', 'Brand Integration']
    },
    {
        title: 'Mobile Design',
        description: 'Responsive designs optimized for all devices and screen sizes',
        features: ['Mobile-First Approach', 'Touch Interactions', 'Progressive Web Apps', 'Native App Design']
    },
    {
        title: 'Design Systems',
        description: 'Scalable design frameworks that ensure consistency across platforms',
        features: ['Component Libraries', 'Style Guides', 'Design Tokens', 'Documentation']
    }
];

const benefits = [
    'Increased user engagement and satisfaction',
    'Higher conversion rates and sales',
    'Reduced development time and costs',
    'Improved brand perception and loyalty',
    'Better accessibility and inclusivity',
    'Data-driven design decisions'
];

const UIUXDesign = () => {
    document.title = 'Nile Crown Media | UI/UX Design Services';

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-nile-blue via-[#1a365d] to-[#1e3a8a] overflow-hidden pt-20">
                <div className="absolute top-20 right-10 w-72 h-72 bg-nile-purple/20 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-nile-cyan/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-4 py-20 z-10 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-nile-cyan text-nile-blue mb-4 cursor-default">UI/UX Design</Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
                                Design That <span className="text-nile-cyan">Converts</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mb-8">
                                Create intuitive, beautiful user experiences that drive engagement and deliver results. Our AI-powered design process ensures your users love every interaction.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to={`/contact`} reloadDocument>
                                    <Button size="lg" className="bg-nile-cyan hover:bg-nile-cyan/90 text-nile-blue">
                                        Start Your Project <ArrowRight className="h-5 w-5 ml-2" />
                                    </Button>
                                </Link>
                                <Link to={`/portfolio`} reloadDocument>
                                    <Button size="lg" className="border-white text-white">
                                        View Portfolio
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
                                alt="UI/UX Design"
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-nile-cyan rounded-lg hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our UI/UX Services</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mx-auto mb-6"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive design services that cover every aspect of user experience and interface design.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="card-hover">
                                <CardHeader>
                                    <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-nile-cyan mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Design Process</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mx-auto mb-6"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A proven methodology that ensures every design decision is backed by research and testing.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {processSteps.map((step, index) => (
                            <Card key={index} className="overflow-hidden card-hover">
                                <CardContent className="p-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                        <div className="lg:col-span-2 text-center lg:text-left">
                                            <div className="text-4xl font-bold text-nile-purple/20 mb-2">{step.number}</div>
                                            <div className="flex justify-center lg:justify-start">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div className="lg:col-span-10">
                                            <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                                            <p className="text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Why Great UI/UX Matters</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mb-6"></div>
                            <p className="text-muted-foreground mb-8">
                                Exceptional user experience design isn't just about making things look pretty. It's about creating meaningful interactions that drive business results and user satisfaction.
                            </p>

                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-nile-cyan mr-3 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <Card className="p-8 card-hover">
                                <div className="text-center">
                                    <Brain className="h-16 w-16 text-nile-purple mx-auto mb-6" />
                                    <h3 className="text-xl font-bold font-display mb-4">AI-Powered Design</h3>
                                    <p className="text-muted-foreground mb-6">
                                        We leverage artificial intelligence to analyze user behavior patterns, optimize layouts, and predict design performance before launch.
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-nile-purple">85%</div>
                                            <div className="text-sm text-muted-foreground">Faster Prototyping</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-nile-cyan">92%</div>
                                            <div className="text-sm text-muted-foreground">User Satisfaction</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-nile-purple">67%</div>
                                            <div className="text-sm text-muted-foreground">Conversion Lift</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-nile-purple to-nile-cyan">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                        Ready to Transform Your User Experience?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's create designs that not only look amazing but drive real business results for your company.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to={`/contact`} reloadDocument>
                            <Button size="lg" className="bg-white text-nile-purple hover:bg-gray-100">
                                Start Your Project <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </Link>
                        <Link to={`/portfolio`} reloadDocument>
                            <Button size="lg" className="border-white text-white">
                                View Our Work
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default UIUXDesign;