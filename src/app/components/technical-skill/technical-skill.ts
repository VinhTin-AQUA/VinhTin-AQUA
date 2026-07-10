import { Component } from '@angular/core';
import { TechCategory } from '../../models/tech-category';

@Component({
    selector: 'app-technical-skill',
    imports: [],
    templateUrl: './technical-skill.html',
    styleUrl: './technical-skill.css',
})
export class TechnicalSkill {
    // Technical data structure matching the required categories
    technicalData: TechCategory[] = [
        {
            name: 'Backend',
            icon: '🖥️',
            items: ['ASP.NET Core', 'RESTful API', 'Entity Framework Core', 'LINQ'],
        },
        {
            name: 'Databases & Search Engines',
            icon: '⚙️',
            items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Elasticsearch'],
        },
        {
            name: 'Messaging & Distributed Systems',
            icon: '🗄️',
            items: ['RabbitMQ', 'MassTransit'],
        },
        {
            name: 'Caching',
            icon: '🚀',
            items: ['Redis'],
        },
        {
            name: 'DevOps & CI/CD',
            icon: '🔧',
            items: ['Docker', 'Nginx', 'Git', 'Github Action'],
        },
        {
            name: 'Frontend',
            icon: '🌐',
            items: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        },
        {
            name: 'App',
            icon: '📱',
            items: ['Tauri', 'Tauri Mobile'],
        },
    ];
}
