import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/Button";
import { Card, CardContent } from '../components/ui/Card';
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';




const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
];

const values = [
    {
        icon: <Target className="h-12 w-12 text-nile-purple" />,
        title: 'Results-Driven',
        description: 'We focus on delivering measurable outcomes that drive your business forward.'
    },
    {
        icon: <Lightbulb className="h-12 w-12 text-nile-cyan" />,
        title: 'Innovation First',
        description: 'We leverage cutting-edge AI and technology to create future-ready solutions.'
    },
    {
        icon: <Users className="h-12 w-12 text-nile-purple" />,
        title: 'Client-Centric',
        description: 'Your success is our priority. We build lasting partnerships based on trust.'
    },
    {
        icon: <Award className="h-12 w-12 text-nile-cyan" />,
        title: 'Quality Excellence',
        description: 'We maintain the highest standards in every project we deliver.'
    }
];

/* const team = [
    {
        name: 'Hany Abdelkhalek',
        role: 'CEO & Co-Founder',
        image: '/1752766690924.jpg',
        description: 'Strategic and data-driven marketing leader with 15+ years of experience.'
    },
    {
        name: 'Emma Karen Abdelkhalek',
        role: 'CFO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
        description: 'Creative director specializing in user experience and brand identity.'
    },
    {
        name: 'Ahmed Saeed',
        role: 'Web Developer',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
        description: 'Full-stack developer and AI integration specialist with 5+ years experience.'
    }
]; */

const About = () => {
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
                            About <span className="text-nile-cyan">Nile Crown Media</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            We are a forward-thinking digital agency that combines AI innovation with strategic design to create exceptional digital experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-background border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold font-display text-nile-purple mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Our Story</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mb-6"></div>
                            <p className="text-muted-foreground mb-6">
                                Founded with a vision to democratize AI-powered web design, Nile Crown Media emerged from the belief that every business deserves a digital presence that truly represents their brand and drives results.
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Our team combines years of experience in design, development, and digital strategy with cutting-edge AI tools to deliver solutions that are not just beautiful, but intelligent and effective.
                            </p>
                            <p className="text-muted-foreground mb-8">
                                We're passionate about helping businesses transform their digital presence and achieve their goals through innovative technology and strategic thinking.
                            </p>
                            <Link to={`/portfolio`} reloadDocument>
                                <Button className="bg-nile-purple hover:bg-nile-purple/90">
                                    Explore Our Work <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <img
                                src="/photo-1522071820081-009f0129c71c.jpg"
                                alt="Our Team"
                                className="rounded-lg shadow-xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-nile-cyan rounded-lg hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Values</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mx-auto mb-6"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            These core principles guide everything we do and shape how we work with our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center p-6 card-hover">
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex justify-center">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Meet Our Team</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mx-auto mb-6"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The talented individuals behind Nile Crown Media's success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center overflow-hidden card-hover">
                                <div className="relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold font-display mb-1">{member.name}</h3>
                                    <p className="text-nile-purple font-medium mb-3">{member.role}</p>
                                    <p className="text-muted-foreground">{member.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section> */}
            <section className="py-16 bg-gradient-to-r from-nile-purple to-nile-cyan">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                        Ready to Create Your Success Story?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss your project and create a case study that showcases your business transformation.
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

export default About;