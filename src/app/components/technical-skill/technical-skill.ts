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
            name: 'Frontend',
            icon: '🖥️',
            items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        },
        {
            name: 'Backend',
            icon: '⚙️',
            items: ['Node.js', 'Express', 'NestJS'],
        },
        {
            name: 'Database',
            icon: '🗄️',
            items: ['PostgreSQL', 'MongoDB', 'Redis'],
        },
        {
            name: 'DevOps',
            icon: '🚀',
            items: ['Docker', 'AWS', 'CI/CD'],
        },
    ];
}
