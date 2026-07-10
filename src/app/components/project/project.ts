import { Component } from '@angular/core';
import { ProjectModel } from '../../models/project.model';

@Component({
    selector: 'app-project',
    imports: [],
    templateUrl: './project.html',
    styleUrl: './project.css',
})
export class Project {
    isDark = false;

    projects: ProjectModel[] = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description:
                'Full-featured online store with Stripe payments, admin dashboard, and real-time inventory.',
            techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&auto=format',
            github: 'https://github.com/example/ecommerce',
            demo: 'https://ecommerce-demo.example.com',
        },
        {
            id: 2,
            title: 'AI Chat Application',
            description:
                'Real-time chat powered by OpenAI API, with context-aware responses and conversation memory.',
            techStack: ['Next.js', 'OpenAI API', 'WebSocket', 'Tailwind'],
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&crop=center&auto=format',
            github: 'https://github.com/example/ai-chat',
            demo: 'https://ai-chat-demo.example.com',
        },
        {
            id: 3,
            title: 'Task Management Dashboard',
            description:
                'Kanban-style task board with drag-and-drop, team collaboration, and real-time updates.',
            techStack: ['Angular', 'Firebase', 'RxJS', 'Tailwind'],
            image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop&crop=center&auto=format',
            github: 'https://github.com/example/task-dashboard',
            demo: 'https://task-demo.example.com',
        },
        {
            id: 4,
            title: 'Weather Forecast App',
            description:
                'Interactive weather maps and 7-day forecast with geolocation and search by city.',
            techStack: ['Vue.js', 'Express', 'MongoDB', 'Leaflet'],
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center&auto=format',
            github: 'https://github.com/example/weather-app',
            demo: 'https://weather-demo.example.com',
        },
        {
            id: 5,
            title: 'Portfolio Generator',
            description:
                'Build a stunning portfolio in minutes with customizable templates and one-click deploy.',
            techStack: ['Svelte', 'Vite', 'Tailwind', 'Netlify'],
            image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&h=400&fit=crop&crop=center&auto=format',
            github: 'https://github.com/example/portfolio-gen',
            demo: 'https://portfolio-gen-demo.example.com',
        },
        {
            id: 6,
            title: 'Recipe Sharing Platform',
            description:
                'Discover and share recipes with step-by-step instructions, ratings, and meal planning.',
            techStack: ['Django', 'PostgreSQL', 'Bootstrap', 'Docker'],
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&crop=center&auto=format',
            github: 'https://github.com/example/recipe-platform',
            demo: 'https://recipe-demo.example.com',
        },
    ];

    toggleTheme(): void {
        this.isDark = !this.isDark;
        if (this.isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}
