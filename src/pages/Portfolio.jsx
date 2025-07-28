import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "../components/ui/Button";
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from "../components/ui/Badge";
import { ArrowRight, TrendingUp, Users, Target, ExternalLink } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const getIconComponent = (iconName) => {
    switch (iconName) {
        case 'Users': return <Users className="h-5 w-5" />;
        case 'Target': return <Target className="h-5 w-5" />;
        case 'TrendingUp': return <TrendingUp className="h-5 w-5" />;
        default: return <Target className="h-5 w-5" />;
    }
};

const Portfolio = () => {
    const featuredStudy = caseStudies.find(study => study.featured);
    const regularStudies = caseStudies.filter(study => !study.featured);

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
                            <span className="text-nile-cyan">Portfolio</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Real results from real projects. See how we've helped businesses transform their digital presence and achieve measurable success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Case Study */}
            {featuredStudy && (
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="mb-8">
                            <Badge variant="outline" className="border-nile-purple text-nile-purple">
                                Featured Case Study
                            </Badge>
                        </div>

                        <Card className="overflow-hidden card-hover">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative">
                                    <img
                                        src={featuredStudy.image}
                                        alt={featuredStudy.title}
                                        className="w-full h-64 lg:h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <Badge className="bg-nile-purple">{featuredStudy.industry}</Badge>
                                    </div>
                                </div>

                                <CardContent className="p-8 lg:p-12">
                                    <h2 className="text-3xl font-bold font-display mb-2">{featuredStudy.title}</h2>
                                    <p className="text-muted-foreground mb-6">{featuredStudy.client}</p>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-nile-purple mb-2">Challenge</h3>
                                            <p className="text-muted-foreground">{featuredStudy.challenge}</p>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-nile-purple mb-2">Solution</h3>
                                            <p className="text-muted-foreground">{featuredStudy.solution}</p>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-nile-purple mb-4">Results</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {featuredStudy.results.map((result, index) => (
                                                    <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                                                        <div className="flex justify-center mb-2 text-nile-purple">
                                                            {getIconComponent(result.icon)}
                                                        </div>
                                                        <div className="text-2xl font-bold text-nile-purple">{result.value}</div>
                                                        <div className="text-sm text-muted-foreground">{result.metric}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {featuredStudy.tags.map((tag, index) => (
                                                <Badge key={index} variant="secondary">{tag}</Badge>
                                            ))}
                                        </div>

                                        <Link to={`/portfolio/${featuredStudy.slug}`} reloadDocument>
                                            <Button className="bg-nile-purple hover:bg-nile-purple/90 mt-[20px]">
                                                View Full Case Study <ExternalLink className="h-4 w-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </section>
            )}

            {/* Case Studies Grid */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">More Case Studies</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mx-auto mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularStudies.map((study) => (
                            <Card key={study.id} className="overflow-hidden group card-hover">
                                <div className="relative">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-nile-purple">{study.industry}</Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold font-display mb-2">{study.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{study.client}</p>

                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {study.challenge}
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 mb-4">
                                        {study.results.slice(0, 3).map((result, index) => (
                                            <div key={index} className="text-center">
                                                <div className="text-lg font-bold text-nile-purple">{result.value}</div>
                                                <div className="text-xs text-muted-foreground">{result.metric}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {study.tags.slice(0, 2).map((tag, index) => (
                                            <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
                                        ))}
                                        {study.tags.length > 2 && (
                                            <Badge variant="secondary" className="text-xs">+{study.tags.length - 2}</Badge>
                                        )}
                                    </div>

                                    <Link to={`/portfolio/${study.slug}`} reloadDocument>
                                        <Button variant="outline" className="w-full group-hover:bg-nile-purple group-hover:text-white transition-colors">
                                            Read More <ArrowRight className="h-4 w-4 ml-2" />
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

export default Portfolio;