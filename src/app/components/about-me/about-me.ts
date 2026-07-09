import { Component } from '@angular/core';

@Component({
    selector: 'app-about-me',
    imports: [],
    templateUrl: './about-me.html',
    styleUrl: './about-me.css',
})
export class AboutMe {
    // Contact links data
    contactLinks = [
        {
            label: 'Projects',
            url: '#',
            icon: '🚀',
        },
        {
            label: 'GitHub',
            url: 'https://github.com/yourusername',
            icon: '💻',
        },
        {
            label: 'Email',
            url: 'mailto:your.email@example.com',
            icon: '📧',
        },
        {
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/yourusername',
            icon: '🔗',
        },
        {
            label: 'CV',
            url: '#',
            icon: '📄',
        },
    ];

    // About blocks data
    aboutBlocks = [
        {
            id: 'who',
            title: 'Who I Am',
            icon: '👤',
            content:
                "I'm a passionate Full-Stack Developer with 5+ years of experience building scalable web applications. I thrive on solving complex problems and creating intuitive user experiences.",
        },
        {
            id: 'exp',
            title: 'Experience',
            icon: '💼',
            content:
                'Currently leading frontend development at TechCorp. Previously worked at StartupHub and Freelance projects. Built applications serving 1M+ users across finance, healthcare, and e-commerce sectors.',
        },
        {
            id: 'tech',
            title: 'Core Technologies',
            icon: '⚡',
            content:
                'My primary tech stack focuses on modern JavaScript ecosystem and cloud platforms:',
        },
        {
            id: 'goal',
            title: 'Career Goal',
            icon: '🎯',
            content:
                'To become a Tech Lead Architect, bridging the gap between business requirements and technical excellence. I aim to build products that make a positive impact while mentoring the next generation of developers.',
        },
    ];

    // Tech stack for the 'tech' block
    techStack = [
        'Angular',
        'React',
        'NestJS',
        'Node.js',
        'TypeScript',
        'Tailwind CSS',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'AWS',
    ];
}
