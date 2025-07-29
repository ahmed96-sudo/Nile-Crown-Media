import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "../hooks/use-toast";
import { blogPosts } from '../data/blogPosts';


const BlogSection = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleSubmit = async  (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // const baseurl = window.location.protocol + '//' + window.location.hostname;
            const res = await fetch(`https://nile-crown-media-backend.vercel.app/api/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (data.success) {
                toast({
                    title: "Subscribed successfully!",
                    description: "You will receive updates from us. Thank you!",
                });
            } else {
                if (res.status === 409) {
                    toast({
                        title: "Email already subscribed!",
                        description: 'Your email is already subscribed. Thank you!',
                    });
                } else {
                    if (res.status === 400) {
                        toast({
                            title: "Something went wrong.",
                            description: `${data.errors[0].msg}`,
                        });
                    } else {
                        toast({
                            title: "Failed to send email.",
                            description: "An error occurred while sending the message. Please try again later. Thank you!",
                        });
                    }
                }
            }
        } catch (error) {
            toast({
                title: "Something went wrong.",
                description: "An error occurred while sending the message. Please try again later. Thank you!",
            });
            console.error(error);
        }
        setIsSubmitting(false);
        setEmail('');

        // Simulate form submission
        /* setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "We'll get back to you as soon as possible.",
            });
            setFormData({
                name: '',
                email: '',
                company: '',
                message: ''
            });
            // setIsSubmitting(false);
        }, 400); */
    };

    const regularPosts = blogPosts.filter(post => !post.featured).slice(0,3,1);
    return (
        <section id="blog" className="pt-16 bg-gray-50 md:py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className='md:block flex flex-col items-center text-center md:text-left'>
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Latest Insights</h2>
                        <div className="w-44 h-1 bg-gradient-to-r from-nile-purple to-nile-cyan mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-xl">
                            Stay sharp, inspired, and ahead. Dive into insights, industry trends, and actionable strategies to take your brand to the next level.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Link to={`/blog`} reloadDocument>
                            <Button variant="outline" className="border-nile-purple text-nile-purple hover:bg-nile-purple/10">
                                View All Articles
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post) => (
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

                            <CardContent className="p-6 md:text-left text-center md:block flex flex-col items-center">
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

                {/* Newsletter */}
                <div className="mt-16 bg-white rounded-lg shadow-md p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 mb-8 md:mb-0 md:text-left text-center">
                            <h3 className="text-[20px] md:text-3xl font-bold font-display mb-4">
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="text-gray-600">
                                Get the latest insights and trends delivered straight to your inbox.
                            </p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
                                    required
                                    value={email}
                                    onChange={handleChange}
                                />
                                <Button type="submit" disabled={isSubmitting} className="bg-nile-purple hover:bg-nile-purple/90 sm:whitespace-nowrap">
                                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
