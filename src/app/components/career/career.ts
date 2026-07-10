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
            period: '06/2025 – 04/2026',
            title: 'Backend Developer',
            company: 'BITECH DEVELOPMENT INVESTMENT COMPANY LIMITED',
            location: 'Viet Nam',
            isCurrent: false,
            color: 'blue',
            technologies: ['.NET', 'Asp Net Core API', 'PostgreSQL', 'RabbitMQ', 'Microservice'],
            description: [
                'Participate in business requirements analysis and implement backend features using ASP.NET Core.',
                'Build and maintain RESTful APIs, using Entity Framework and LINQ to query and process data with a PostgreSQL database.',
                "Implement asynchronous communication between services via RabbitMQ and MassTransit based on the project's existing structure.",
                'Receive bug feedback, conduct checks, and fix source code to ensure the system operates according to business logic.',
                'Collaborate with team members to standardize API interfaces and support the testing process.',
            ],
        },
        {
            id: 2,
            period: '05/2024 - 02/2025',
            title: 'Back-End Developer',
            company: 'COLIV HOME Joint Stock Company',
            location: 'Viet Nam',
            isCurrent: false,
            color: 'indigo',
            technologies: [
                '.NET',
                'Asp Net Core API',
                'SQL Server',
                'MongoDB',
                'NestJS',
                'Docker',
                'Nginx',
            ],
            description: [
                'Participate in developing a room rental management system, providing features for landlords and brokers.',
                'Develop APIs using ASP.NET Core API and NestJS, storing and querying data on SQL Server and MongoDB.',
                'Integrate third-party services into the system to support data processing.',
                'Package using Docker and Nginx as a reverse proxy to support application deployment.',
                'Work in a team following an Agile/Scrum model, participating in daily and sprint meetings to update progress and complete features according to plan.',
            ],
        },
    ];

    // Helper methods
    // getDotColor(color: string): string {
    //     const colors: Record<string, string> = {
    //         blue: 'bg-blue-600',
    //         indigo: 'bg-indigo-500',
    //         emerald: 'bg-emerald-500',
    //         amber: 'bg-amber-500',
    //         rose: 'bg-rose-400',
    //     };
    //     return colors[color] || colors['blue'];
    // }

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

    // getBadgeColor(color: string): string {
    //     const colors: Record<string, string> = {
    //         blue: 'text-blue-600 bg-blue-50',
    //         indigo: 'text-indigo-600 bg-indigo-50',
    //         emerald: 'text-emerald-600 bg-emerald-50',
    //         amber: 'text-amber-600 bg-amber-50',
    //         rose: 'text-rose-600 bg-rose-50',
    //     };
    //     return colors[color] || colors['blue'];
    // }

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
