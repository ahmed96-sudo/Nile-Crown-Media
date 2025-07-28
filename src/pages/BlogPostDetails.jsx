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
import { ArrowLeft, Calendar, Clock, User, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostDetail = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                        <Link to="/blog">
                            <Button>Back to Blog</Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const relatedPosts = post.relatedPosts
        ? blogPosts.filter(p => post.relatedPosts?.includes(p.id))
        : blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

    const renderContent = (content, index) => {
        switch (content.type) {
            case 'heading':
                return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold font-display mt-12 mb-6 first:mt-0">
                        {content.content}
                    </h2>
                );
            case 'paragraph':
                return (
                    <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {content.content}
                    </p>
                );
            case 'list':
                return (
                    <div key={index} className="mb-8">
                        <p className="text-lg text-muted-foreground mb-4">{content.content}</p>
                        <ul className="space-y-2 text-muted-foreground">
                            {content.items?.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-nile-purple rounded-full mt-3 flex-shrink-0"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'quote':
                return (
                    <blockquote key={index} className="border-l-4 border-nile-purple pl-6 py-4 my-8 bg-muted/50 rounded-r-lg">
                        <p className="text-xl font-medium italic text-foreground">
                            {content.content}
                        </p>
                    </blockquote>
                );
            case 'image':
                return (
                    <div key={index} className="my-8">
                        <img
                            src={content.content}
                            alt="Blog post image"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                );
            default:
                return null;
        }
    };

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
                                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbPage>{post.title}</BreadcrumbPage>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <article className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <Link to="/blog" className="inline-flex items-center text-nile-purple hover:text-nile-purple/80 mb-8">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blog
                    </Link>

                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <header className="mb-12">
                            <Badge className="bg-nile-purple mb-4">{post.category}</Badge>
                            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </header>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium">
                                {post.excerpt}
                            </p>

                            {post.content.map((content, index) => renderContent(content, index))}
                        </div>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t">
                            <h3 className="text-lg font-semibold mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Author Bio */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                <img
                                    src={post.authorBio.avatar}
                                    alt={post.authorBio.name}
                                    className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                                />
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-bold font-display mb-2">
                                        {post.authorBio.name}
                                    </h3>
                                    <p className="text-nile-purple font-medium mb-4">
                                        {post.authorBio.title}
                                    </p>
                                    <p className="text-muted-foreground mb-6">
                                        {post.authorBio.bio}
                                    </p>
                                    <div className="flex justify-center md:justify-start gap-4">
                                        {post.authorBio.social.twitter && (
                                            <a
                                                href={post.authorBio.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-nile-purple transition-colors"
                                            >
                                                <Twitter className="h-5 w-5" />
                                            </a>
                                        )}
                                        {post.authorBio.social.linkedin && (
                                            <a
                                                href={post.authorBio.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-nile-purple transition-colors"
                                            >
                                                <Linkedin className="h-5 w-5" />
                                            </a>
                                        )}
                                        {post.authorBio.social.github && (
                                            <a
                                                href={post.authorBio.social.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-nile-purple transition-colors"
                                            >
                                                <Github className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold font-display text-center mb-12">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Card key={relatedPost.id} className="overflow-hidden group card-hover">
                                        <div className="relative">
                                            <img
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-nile-purple">{relatedPost.category}</Badge>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold font-display mb-3 group-hover:text-nile-purple transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                {relatedPost.excerpt}
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                                <div className="flex items-center gap-1">
                                                    <User className="h-4 w-4" />
                                                    {relatedPost.author}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4" />
                                                    {relatedPost.readTime}
                                                </div>
                                            </div>
                                            <Link to={`/blog/${relatedPost.slug}`} reloadDocument>
                                                <Button variant="outline" className="w-full">
                                                    Read Article <ArrowRight className="h-4 w-4 ml-2" />
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter Signup */}
            <section className="py-16 bg-gradient-to-r from-nile-purple to-nile-cyan">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest insights on AI, design, and technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
                        />
                        <Button size="lg" className="bg-white text-nile-purple hover:bg-gray-100">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPostDetail;