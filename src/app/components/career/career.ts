import { Component } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Component({
    selector: 'app-career',
    imports: [],
    templateUrl: './career.html',
    styleUrl: './career.css',
})
export class Career {
    experiences: Experience[] = [
        {
            id: 1,
            period: '2023 – present',
            title: 'Senior Full Stack Engineer',
            company: 'Nexus Digital',
            location: 'Remote',
            isCurrent: true,
            color: 'blue',
            technologies: ['Angular', 'Node.js', 'Python', 'AWS'],
            description: [
                'Architected microservices with Node.js & Python',
                'Led frontend team on Angular 16+ (migrated to v21)',
                'Designed real-time dashboards with Tailwind & RxJS',
                'Implemented CI/CD pipelines with GitHub Actions',
            ],
        },
        {
            id: 2,
            period: '2021 – 2023',
            title: 'Lead Frontend Developer',
            company: 'Studio Orbit',
            location: 'London (hybrid)',
            isCurrent: false,
            color: 'indigo',
            technologies: ['Angular', 'Tailwind', 'Storybook', 'TypeScript'],
            description: [
                'Built design system with Tailwind & Storybook',
                'Migrated from Angular 12 → 21, adopted @if / @for',
                'Improved LCP by 40% via lazy-loading & CSS animations',
                'Mentored 5 junior developers',
            ],
        },
        {
            id: 3,
            period: '2019 – 2021',
            title: 'Full Stack Developer',
            company: 'CloudPulse',
            location: 'Berlin',
            isCurrent: false,
            color: 'emerald',
            technologies: ['.NET Core', 'PostgreSQL', 'Angular', 'Docker'],
            description: [
                'Developed RESTful APIs with .NET Core & PostgreSQL',
                'Created admin panels using Angular & Tailwind',
                'Introduced CI/CD pipelines (GitHub Actions)',
                'Optimized database queries improving performance by 30%',
            ],
        },
        {
            id: 4,
            period: '2018 – 2019',
            title: 'Junior Software Engineer',
            company: 'TechHub',
            location: 'Amsterdam',
            isCurrent: false,
            color: 'amber',
            technologies: ['Angular', 'Bootstrap', 'Jasmine', 'Karma'],
            description: [
                'Maintained Angular 6 apps with Bootstrap',
                'Wrote unit tests (Jasmine, Karma)',
                'Collaborated on 3 product releases',
                'Participated in daily stand-ups and sprint planning',
            ],
        },
        {
            id: 5,
            period: '2017 – 2018',
            title: 'Software Intern',
            company: 'Startup Lab',
            location: 'Barcelona',
            isCurrent: false,
            color: 'rose',
            technologies: ['Angular', 'Firebase', 'Tailwind'],
            description: [
                'Assisted in building MVP with Angular & Firebase',
                'Designed UI components with Tailwind',
                'Won "best intern project" award',
                'Conducted user testing sessions',
            ],
        },
    ];

    // Helper methods
    getDotColor(color: string): string {
        const colors: Record<string, string> = {
            blue: 'bg-blue-600',
            indigo: 'bg-indigo-500',
            emerald: 'bg-emerald-500',
            amber: 'bg-amber-500',
            rose: 'bg-rose-400',
        };
        return colors[color] || colors['blue'];
    }

    getDotColorHex(color: string): string {
        const colors: Record<string, string> = {
            blue: '#2563eb',
            indigo: '#6366f1',
            emerald: '#10b981',
            amber: '#f59e0b',
            rose: '#fb7185',
        };
        return colors[color] || colors['blue'];
    }

    getBadgeColor(color: string): string {
        const colors: Record<string, string> = {
            blue: 'text-blue-600 bg-blue-50',
            indigo: 'text-indigo-600 bg-indigo-50',
            emerald: 'text-emerald-600 bg-emerald-50',
            amber: 'text-amber-600 bg-amber-50',
            rose: 'text-rose-600 bg-rose-50',
        };
        return colors[color] || colors['blue'];
    }

    getBorderColor(color: string): string {
        const colors: Record<string, string> = {
            blue: 'border-blue-200',
            indigo: 'border-indigo-200',
            emerald: 'border-emerald-200',
            amber: 'border-amber-200',
            rose: 'border-rose-200',
        };
        return colors[color] || colors['blue'];
    }

    // Get gradient color for connecting line
    getLineGradient(color1: string, color2: string): string {
        const hex1 = this.getDotColorHex(color1);
        const hex2 = this.getDotColorHex(color2);
        return `linear-gradient(to bottom, ${hex1}, ${hex2})`;
    }
}
