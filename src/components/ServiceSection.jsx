import { Code, Layout, Newspaper, BarChart, Image, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';

const services = [
    {
        icon: <Layout className="h-10 w-10 text-nile-purple" />,
        title: 'UI/UX Design',
        description: 'We craft intuitive, user-friendly interfaces that captivate, engage, and convert with designs that speak and experience that connect. Your brand deserves an unforgettable digital presence.',
    },
    {
        icon: <Code className="h-10 w-10 text-nile-purple" />,
        title: 'Web & Mobile Development',
        description: 'We custom-build your website or app with a rich user experience. We ask you about your goals as we begin to plan for your project so we can create solutions that exceed your expectations.',
    },
    {
        icon: <BarChart className="h-10 w-10 text-nile-purple" />,
        title: 'Digital Strategy',
        description: "Your roadmap to digital success. We don't just create, we strategise. Using data-driven insights, we craft winning digital strategies that maximise engagement and growth.",
    },
    {
        icon: <Newspaper className="h-10 w-10 text-nile-purple" />,
        title: 'Content Creation',
        description: 'Stand out, be seen, and be remembered. Our content creation services use eye-catching visuals to bring your brand to life across every platform.',
    },
    {
        icon: <Image className="h-10 w-10 text-nile-purple" />,
        title: 'Brand Identity',
        description: "It's more than just a logo; it is your story, voice, and impact. We build brands that leave strong impressions and turn audiences into loyal customers.",
    },
    {
        icon: <Rocket className="h-10 w-10 text-nile-purple" />,
        title: 'Copywriting & Website Content',
        description: 'Words that sell, stories that stick. We create compelling, high-converting website content, blog posts, and brand messaging that make an impact.',
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Services</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We leverage the power of AI and strategic insights to deliver exceptional digital experiences that drive results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 card-hover overflow-hidden group">
                            <CardHeader className="pb-4 items-center text-center  md:items-start md:text-left">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-center md:text-left">
                                    {service.description}
                                </CardDescription>
                            </CardContent>

                            <div className="h-1 w-0 bg-gradient-to-r from-nile-purple to-nile-cyan group-hover:w-full transition-all duration-300"></div>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="/contact" className="inline-flex items-center text-nile-purple font-medium hover:text-nile-cyan transition-colors animated-underline">
                        Ready to start your project? <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
