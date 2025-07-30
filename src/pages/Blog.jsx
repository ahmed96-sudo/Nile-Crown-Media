import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "../components/ui/Button";
import { Card, CardContent } from '../components/ui/Card';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const categories = ['All', 'AI & Technology', 'Design', 'Development', 'Marketing', 'SEO'];

const Blog = () => {
    document.title = 'Nile Crown Media | Blog';

    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

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
                            Our <span className="text-nile-cyan">Blog</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Insights, tips, and trends from the world of AI-powered web design and digital strategy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="mb-8">
                            <span className="text-nile-purple font-medium">Featured Article</span>
                        </div>
                        <Card className="overflow-hidden card-hover">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-64 lg:h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-nile-purple text-white text-sm rounded-full">
                                            {featuredPost.category}
                                        </span>
                                    </div>
                                </div>
                                <CardContent className="p-8 flex flex-col justify-center">
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                        <div className="flex items-center gap-1">
                                            <User className="h-4 w-4" />
                                            {featuredPost.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {new Date(featuredPost.date).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {featuredPost.readTime}
                                        </div>
                                    </div>
                                    <Link to={`/blog/${featuredPost.slug}`} reloadDocument className='m-auto md:m-0'>
                                        <Button className="w-[200px] bg-nile-purple hover:bg-nile-purple/90">
                                            Read Article <ArrowRight className="h-4 w-4 ml-2" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </section>
            )}

            {/* Blog Posts */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "default" : "outline"}
                                onClick={() => setActiveCategory(category)}
                                className={activeCategory === category ? "bg-nile-purple hover:bg-nile-purple/90" : ""}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(activeCategory === 'All' ? regularPosts : filteredPosts.filter(post => !post.featured)).map((post) => (
                            <Card key={post.id} className="overflow-hidden group card-hover">
                                <div className="relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-nile-purple text-white text-sm rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <CardContent className="p-6 text-center md:text-left flex flex-col items-center md:block">
                                    <Link to={`/blog/${post.slug}`} reloadDocument>
                                        <h3 className="text-xl font-bold font-display mb-3 group-hover:text-nile-purple transition-colors cursor-pointer">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-muted-foreground mb-4">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <User className="h-4 w-4" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        {new Date(post.date).toLocaleDateString()}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;