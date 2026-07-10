import { Component } from '@angular/core';
import { MeService } from '../../services/me.service';
import { Icons } from '../icons/icons';

@Component({
    selector: 'app-about-me',
    imports: [Icons],
    templateUrl: './about-me.html',
    styleUrl: './about-me.css',
})
export class AboutMe {
    // About blocks data
    aboutBlocks = [
        {
            id: 'who',
            title: 'Who I Am',
            icon: '👤',
            content:
                "I'm a .NET Developer with 2 years of experience building web applications and backend services using C# and ASP.NET Core. I enjoy learning new technologies, solving problems, and writing clean, maintainable code.",
        },
        {
            id: 'exp',
            title: 'Experience',
            icon: '💼',
            content:
                'Over the past 2 years, I have worked on developing and maintaining web applications, RESTful APIs, and database-driven systems. I have collaborated with cross-functional teams to deliver reliable and user-focused solutions.',
        },
        {
            id: 'tech',
            title: 'Core Technologies',
            icon: '⚡',
            content:
                'My primary technologies include C#, ASP.NET Core, Entity Framework Core, SQL Server, REST APIs, Git, and modern frontend frameworks when needed.',
        },
        {
            id: 'goal',
            title: 'Career Goal',
            icon: '🎯',
            content:
                'My goal is to continuously improve my technical skills, gain deeper expertise in .NET development, and contribute to building high-quality software that delivers real business value.',
        },
    ];

    // Tech stack for the 'tech' block
    techStack = [
        '.NET',
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'Tauri',
    ];

    constructor(public meService: MeService) {}
}
