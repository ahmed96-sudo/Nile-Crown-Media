import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "../components/ui/Button";
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from "../components/ui/Badge";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage
} from "../components/ui/Breadcrumbs";
import { ArrowLeft, Clock, Users, ExternalLink, CheckCircle, Quote } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const getIconComponent = (iconName) => {
    switch (iconName) {
        case 'Users': return Users;
        case 'Target': return CheckCircle;
        case 'TrendingUp': return CheckCircle;
        default: return CheckCircle;
    }
};

const CaseStudyDetail = () => {
    const { slug } = useParams();
    const caseStudy = caseStudies.find(study => study.slug === slug);
    document.title = `Nile Crown Media | ${caseStudy.title}`;

    if (!caseStudy) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
                        <Link to="/portfolio">
                            <Button>Back to the Portfolio</Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const otherCaseStudies = caseStudies.filter(study => study.id !== caseStudy.id).slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-muted/30 py-4 mt-16">
                <div className="container mx-auto px-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/portfolio">Portfolio</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbPage>{caseStudy.title}</BreadcrumbPage>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <Link to="/portfolio" className="inline-flex items-center text-nile-purple hover:text-nile-purple/80 mb-8">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to the Portfolio
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className='text-center md:text-left flex md:block flex-col items-center'>
                            <Badge className="bg-nile-purple mb-4">{caseStudy.industry}</Badge>
                            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                {caseStudy.title}
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                {caseStudy.overview}
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <div className="text-sm text-muted-foreground">Duration</div>
                                    <div className="font-semibold">{caseStudy.duration}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Team Size</div>
                                    <div className="font-semibold">{caseStudy.teamSize}</div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {caseStudy.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src={caseStudy.image}
                                alt={caseStudy.title}
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-display text-center mb-12">Project Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudy.results.map((result, index) => {
                            const IconComponent = getIconComponent(result.icon);
                            return (
                                <Card key={index} className="text-center p-8">
                                    <CardContent className="pt-6">
                                        <div className="flex justify-center mb-4">
                                            <div className="p-3 bg-nile-purple/10 rounded-full">
                                                <IconComponent className="h-8 w-8 text-nile-purple" />
                                            </div>
                                        </div>
                                        <div className="text-4xl font-bold text-nile-purple mb-2">
                                            {result.value}
                                        </div>
                                        <div className="text-muted-foreground">
                                            {result.metric}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center md:text-left">
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold font-display text-nile-purple mb-4">
                                The Challenge
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {caseStudy.fullChallenge}
                            </p>
                        </Card>

                        <Card className="p-8">
                            <h3 className="text-2xl font-bold font-display text-nile-purple mb-4">
                                Our Solution
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {caseStudy.fullSolution}
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Implementation Timeline */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-display text-center mb-12">Implementation Process</h2>
                    <div className="max-w-4xl mx-auto">
                        {caseStudy.implementation.map((phase, index) => (
                            <div key={index} className="flex gap-6 mb-8 last:mb-0">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-nile-purple rounded-full flex items-center justify-center text-white font-bold">
                                        {index + 1}
                                    </div>
                                    {index < caseStudy.implementation.length - 1 && (
                                        <div className="w-0.5 h-16 bg-nile-purple/30 mx-auto mt-4"></div>
                                    )}
                                </div>
                                <Card className="flex-1 p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold">{phase.phase}</h3>
                                        <Badge variant="outline" className="flex items-center gap-1 text-center md:text-left">
                                            <Clock className="h-3 w-3" />
                                            {phase.duration}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground">{phase.description}</p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-display text-center mb-12">Technologies Used</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {caseStudy.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="px-4 py-2 text-base">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {caseStudy.testimonial && (
                <section className="py-16 bg-gradient-to-r from-nile-purple/10 to-nile-cyan/10">
                    <div className="container mx-auto px-4">
                        <Card className="max-w-4xl mx-auto p-8 md:p-12">
                            <div className="text-center">
                                <Quote className="h-12 w-12 text-nile-purple mx-auto mb-6" />
                                <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                                    "{caseStudy.testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center justify-center gap-4">
                                    <img
                                        src={caseStudy.testimonial.avatar}
                                        alt={caseStudy.testimonial.author}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <div className="font-semibold">{caseStudy.testimonial.author}</div>
                                        <div className="text-muted-foreground">
                                            {caseStudy.testimonial.position}, {caseStudy.testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>
            )}

            {/* Gallery */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-display text-center mb-12">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {caseStudy.gallery.map((image, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg">
                                <img
                                    src={image}
                                    alt={`${caseStudy.title} - Image ${index + 1}`}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            {caseStudy.nextSteps && (
                <section className="py-16 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <Card className="max-w-4xl mx-auto p-8 text-center md:text-left">
                            <h2 className="text-2xl font-bold font-display mb-4">Next Steps</h2>
                            <p className="text-muted-foreground">{caseStudy.nextSteps}</p>
                        </Card>
                    </div>
                </section>
            )}

            {/* Related Case Studies */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-display text-center mb-12">More Case Studies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {otherCaseStudies.map((study) => (
                            <Card key={study.id} className="overflow-hidden group card-hover">
                                <div className="relative">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-nile-purple">{study.industry}</Badge>
                                    </div>
                                </div>
                                <CardContent className="p-6 text-center md:text-left">
                                    <h3 className="text-xl font-bold font-display mb-2">{study.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{study.client}</p>
                                    <Link to={`/portfolio/${study.slug}`} reloadDocument>
                                        <Button variant="outline" className="w-full">
                                            View Case Study
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-nile-purple to-nile-cyan">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help transform your business with innovative solutions.
                    </p>
                    <Link to={`/contact`} reloadDocument>
                        <Button size="lg" className="bg-white text-nile-purple hover:bg-gray-100">
                            Get Started <ExternalLink className="h-5 w-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudyDetail;