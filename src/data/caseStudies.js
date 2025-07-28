export const caseStudies = [
    {
        id: 1,
        slug: 'techflow-saas-platform',
        title: 'TechFlow SaaS Platform',
        client: 'TechFlow Inc.',
        industry: 'Software',
        challenge: 'Redesign outdated platform to improve user engagement and reduce churn',
        solution: 'Complete UI/UX overhaul with AI-powered personalization and streamlined workflows',
        results: [
            { metric: 'User Engagement', value: '+85%', icon: 'Users' },
            { metric: 'Conversion Rate', value: '+42%', icon: 'Target' },
            { metric: 'Customer Retention', value: '+67%', icon: 'TrendingUp' }
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        tags: ['UI/UX Design', 'React', 'AI Integration'],
        featured: true,

        // Enhanced fields
        overview: 'TechFlow Inc. approached us with a critical challenge: their existing SaaS platform was experiencing declining user engagement and increasing customer churn. The outdated interface and complex workflows were deterring both new and existing users from fully utilizing the platform\'s capabilities.',
        duration: '6 months',
        teamSize: '8 specialists',
        technologies: ['React', 'TypeScript', 'TensorFlow.js', 'AWS', 'PostgreSQL', 'Redis'],
        fullChallenge: 'TechFlow\'s platform suffered from several critical issues: outdated design patterns that didn\'t align with modern user expectations, complex navigation that confused users, lack of personalization leading to poor user experience, slow performance impacting productivity, and high learning curve for new users. These issues culminated in a 45% user churn rate and declining customer satisfaction scores.',
        fullSolution: 'Our comprehensive solution involved a complete platform redesign with AI-powered personalization at its core. We implemented machine learning algorithms to analyze user behavior and preferences, creating personalized dashboards and recommendations. The new interface featured intuitive navigation, modern design patterns, and streamlined workflows that reduced task completion time by 60%.',
        implementation: [
            {
                phase: 'Discovery & Research',
                description: 'Conducted user interviews, analyzed existing data, and performed competitive analysis to understand pain points and opportunities.',
                duration: '4 weeks'
            },
            {
                phase: 'Design & Prototyping',
                description: 'Created wireframes, interactive prototypes, and conducted usability testing with real users to validate design decisions.',
                duration: '6 weeks'
            },
            {
                phase: 'Development & Integration',
                description: 'Built the new platform using modern React architecture with AI integration for personalization and real-time analytics.',
                duration: '12 weeks'
            },
            {
                phase: 'Testing & Optimization',
                description: 'Performed comprehensive testing, performance optimization, and gradual rollout to ensure smooth transition.',
                duration: '4 weeks'
            }
        ],
        testimonial: {
            quote: 'The transformation has been incredible. Our users are more engaged than ever, and we\'ve seen a dramatic reduction in churn. The AI-powered features have made our platform not just more beautiful, but genuinely more intelligent.',
            author: 'Michael Chen',
            position: 'CEO',
            company: 'TechFlow Inc.',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
        },
        gallery: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
        ],
        nextSteps: 'Following the successful launch, we\'re now working on Phase 2 which includes advanced analytics dashboard and mobile application development.'
    },
    {
        id: 2,
        slug: 'royal-wharf-clinics',
        title: 'Royal Wharf Clinics',
        client: 'Royal Wharf Clinics',
        industry: 'Healthcare',
        challenge: 'Luxury aesthetics clinic website',
        solution: 'WordPress-based CMS with WooCommerce booking, conversion tracking, and site speed optimization',
        results: [
            { metric: 'Lead Engagement', value: '+92%', icon: 'Users' },
            { metric: 'Treatments Booked', value: '+73%', icon: 'Target' }
        ],
        image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
        tags: ['Web Development', 'UI/UX', 'Branding', 'Website Content'],

        overview: 'Luxury aesthetics clinic website with WooCommerce booking, conversion tracking, and site speed optimization.',
        duration: '6 months',
        teamSize: '7 specialists',
        technologies: ['WordPress', 'PHP', 'MySQL', 'Google Tag Manager', 'Javascript'],
        fullChallenge: 'Creating a scalable aesthetics clinic that could handle high-quality conversion tracking while providing interactive interface and real-time analytics for thousands of concurrent users.',
        fullSolution: 'We built a comprehensive CMS with adaptive WooCommerce booking, conversion tracking that adjust to learning patterns, interactive content delivery, and detailed analytics dashboard for Management.',
        implementation: [
            {
                phase: 'Platform Design',
                description: 'Designed scalable architecture for the interface and WooCommerce booking.',
                duration: '6 weeks'
            },
            {
                phase: 'Core CMS Development',
                description: 'Built Treatment management features and WooCommerce booking infrastructure.',
                duration: '16 weeks'
            },
            {
                phase: 'conversion tracking',
                description: 'Implemented conversion tracking using Google Tag Manager and Javascript to track user interactions and conversion rates.',
                duration: '6 weeks'
            }
        ],
        testimonial: {
            quote: 'Working with Nile Crown Media was a game-changer. Their branding and UX strategy gave our platform a completely new identity, and our user engagement doubled within weeks.',
            author: 'Sunny Mahmood',
            position: 'Director of Clinic',
            company: 'Royal Wharf Clinics',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
        },
        gallery: [
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7',
            'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0'
        ]
    },
    {
        id: 3,
        slug: 'roda-clinics',
        title: 'Roda Clinics',
        client: 'Roda Clinics',
        industry: 'Healthcare',
        challenge: 'Clinical services website',
        solution: 'WordPress-based CMS with enhanced analytics, custom event tracking, and streamlined booking funnel',
        results: [
            { metric: 'Lead Engagement', value: '+92%', icon: 'Users' },
            { metric: 'Treatments Booked', value: '+73%', icon: 'Target' }
        ],
        image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
        tags: ['Web Development', 'UI/UX', 'Branding', 'Website Content'],

        overview: 'Clinical services website with enhanced analytics, custom event tracking, and streamlined booking funnel.',
        duration: '5 months',
        teamSize: '2 specialists',
        technologies: ['WordPress', 'PHP', 'MySQL', 'Google Tag Manager', 'Javascript'],
        fullChallenge: 'Creating a scalable Clinical services website that could handle high-quality conversion tracking while providing interactive interface and real-time analytics for thousands of concurrent users.',
        fullSolution: 'We built a comprehensive CMS with adaptive custom event tracking, conversion tracking that adjust to learning patterns, interactive content delivery, and detailed analytics dashboard for Management.',
        implementation: [
            {
                phase: 'Platform Design',
                description: 'Designed scalable architecture for the interface and streamlined booking funnel.',
                duration: '6 weeks'
            },
            {
                phase: 'Core CMS Development',
                description: 'Built Treatment management features and custom event tracking.',
                duration: '16 weeks'
            },
            {
                phase: 'conversion tracking',
                description: 'Implemented conversion tracking using Google Tag Manager and Javascript to track user interactions and conversion rates.',
                duration: '6 weeks'
            }
        ],
        testimonial: {
            quote: 'From content to design to strategy, Nile Crown Media nailed every detail. Our website traffic increased by 70% after the new launch, and the feedback has been incredible.',
            author: 'Dr. Rosh Roddha',
            position: 'Director of Clinic',
            company: 'Roda Clinics',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
        },
        gallery: [
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7',
            'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0'
        ]
    },
    {
        id: 4,
        slug: 'edulearn-learning-platform',
        title: 'EduLearn Learning Platform',
        client: 'EduLearn Academy',
        industry: 'Education',
        challenge: 'Build scalable online learning platform with interactive content delivery',
        solution: 'React-based LMS with video streaming, progress tracking, and AI-powered assessments',
        results: [
            { metric: 'Student Engagement', value: '+92%', icon: 'Users' },
            { metric: 'Course Completion', value: '+73%', icon: 'Target' },
            { metric: 'Learning Efficiency', value: '+55%', icon: 'TrendingUp' }
        ],
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        tags: ['Education', 'Video Streaming', 'AI Assessment'],

        overview: 'EduLearn Academy needed a comprehensive learning management system that could deliver interactive content and provide detailed analytics on student progress.',
        duration: '7 months',
        teamSize: '9 specialists',
        technologies: ['React', 'Node.js', 'AWS MediaConvert', 'TensorFlow', 'WebRTC'],
        fullChallenge: 'Creating a scalable learning platform that could handle high-quality video streaming while providing interactive assessments and real-time analytics for thousands of concurrent users.',
        fullSolution: 'We built a comprehensive LMS with adaptive video streaming, AI-powered assessments that adjust to learning patterns, interactive content delivery, and detailed analytics dashboard for educators.',
        implementation: [
            {
                phase: 'Platform Design',
                description: 'Designed scalable architecture for video streaming and content delivery.',
                duration: '6 weeks'
            },
            {
                phase: 'Core LMS Development',
                description: 'Built learning management features and video streaming infrastructure.',
                duration: '16 weeks'
            },
            {
                phase: 'AI Assessment Integration',
                description: 'Implemented AI-powered assessment and adaptive learning algorithms.',
                duration: '6 weeks'
            }
        ],
        testimonial: {
            quote: 'Student engagement has increased dramatically. The AI assessments provide insights we never had before, helping us create better learning experiences.',
            author: 'Sarah Martinez',
            position: 'Director of Education',
            company: 'EduLearn Academy',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
        },
        gallery: [
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7',
            'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0'
        ]
    },
    {
        id: 5,
        slug: 'ecomarket-ecommerce',
        title: 'EcoMarket E-commerce',
        client: 'EcoMarket',
        industry: 'Retail',
        challenge: 'Build sustainable e-commerce platform with complex inventory management',
        solution: 'Custom e-commerce solution with AI-powered recommendations and sustainability tracking',
        results: [
            { metric: 'Sales Growth', value: '+120%', icon: 'TrendingUp' },
            { metric: 'Mobile Conversions', value: '+95%', icon: 'Target' },
            { metric: 'Average Order Value', value: '+38%', icon: 'Users' }
        ],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
        tags: ['E-commerce', 'AI/ML', 'Mobile-First'],

        overview: 'EcoMarket needed a complete e-commerce platform that could handle complex inventory management while promoting sustainable shopping practices.',
        duration: '8 months',
        teamSize: '10 specialists',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'TensorFlow'],
        fullChallenge: 'EcoMarket faced the challenge of creating an e-commerce platform that could effectively manage a complex inventory system while educating customers about sustainability and environmental impact of their purchases.',
        fullSolution: 'We developed a comprehensive e-commerce platform with AI-powered product recommendations, sustainability scoring for products, and intelligent inventory management system that optimizes stock levels and reduces waste.',
        implementation: [
            {
                phase: 'Platform Architecture',
                description: 'Designed scalable architecture to handle complex inventory and sustainability metrics.',
                duration: '6 weeks'
            },
            {
                phase: 'Core Development',
                description: 'Built e-commerce features, payment integration, and inventory management system.',
                duration: '16 weeks'
            },
            {
                phase: 'AI Integration',
                description: 'Implemented recommendation engine and sustainability tracking algorithms.',
                duration: '8 weeks'
            },
            {
                phase: 'Launch & Optimization',
                description: 'Performance testing, security audits, and post-launch optimization.',
                duration: '2 weeks'
            }
        ],
        testimonial: {
            quote: 'Our sales have more than doubled since launch. The AI recommendations and sustainability features have really resonated with our customers.',
            author: 'Lisa Parker',
            position: 'Founder',
            company: 'EcoMarket',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2c5'
        },
        gallery: [
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
            'https://images.unsplash.com/photo-1556740758-90de374c12ad'
        ]
    },
    {
        id: 6,
        slug: 'healthplus-medical-portal',
        title: 'HealthPlus Medical Portal',
        client: 'HealthPlus Clinics',
        industry: 'Healthcare',
        challenge: 'Create secure patient portal with appointment scheduling and medical records',
        solution: 'HIPAA-compliant portal with intuitive UX and automated appointment management',
        results: [
            { metric: 'Patient Satisfaction', value: '+78%', icon: 'Users' },
            { metric: 'Appointment Efficiency', value: '+60%', icon: 'Target' },
            { metric: 'Administrative Time', value: '-45%', icon: 'TrendingUp' }
        ],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f',
        tags: ['Healthcare', 'Security', 'UX Design'],

        overview: 'HealthPlus Clinics required a secure, HIPAA-compliant patient portal that would streamline appointment scheduling and provide easy access to medical records.',
        duration: '5 months',
        teamSize: '6 specialists',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS Healthcare', 'Socket.io'],
        fullChallenge: 'Creating a healthcare platform that balances security requirements with user experience while ensuring HIPAA compliance and seamless integration with existing medical systems.',
        fullSolution: 'We developed a comprehensive patient portal with end-to-end encryption, intuitive appointment scheduling, secure messaging, and integrated medical record access, all while maintaining strict HIPAA compliance.',
        implementation: [
            {
                phase: 'Security & Compliance',
                description: 'Established HIPAA-compliant infrastructure and security protocols.',
                duration: '4 weeks'
            },
            {
                phase: 'Core Portal Development',
                description: 'Built patient portal features and appointment scheduling system.',
                duration: '12 weeks'
            },
            {
                phase: 'Integration & Testing',
                description: 'Integrated with existing medical systems and conducted security testing.',
                duration: '4 weeks'
            }
        ],
        testimonial: {
            quote: 'The portal has transformed how we interact with our patients. Administrative tasks are much more efficient, and patients love the convenience.',
            author: 'Dr. Robert Kim',
            position: 'Chief Medical Officer',
            company: 'HealthPlus Clinics',
            avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d'
        },
        gallery: [
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f',
            'https://images.unsplash.com/photo-1559757148-5c350d0d3c56',
            'https://images.unsplash.com/photo-1551601651-2a8555f1a136'
        ]
    }
];