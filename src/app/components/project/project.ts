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
            title: 'GoVibe',
            description:
                'Platform for discovering and managing entertainment, leisure, and sports locations',
            techStack: [
                'Asp Net Core API',
                'Angular',
                'Docker',
                'Rabbit MQ',
                'Garage S3',
                'PostgreSQL',
                'Elasticsearch',
                'Qdrant',
                'open-router',
            ],
            image: 'https://github.com/VinhTin-AQUA/GoVibe/blob/main/docs/details.png?raw=true',
            github: 'https://github.com/VinhTin-AQUA/GoVibe',
            demo: '',
        },
        {
            id: 2,
            title: 'Video Streaming App',
            description:
                'Video uploading and streaming application using public video streaming DASH',
            techStack: [
                'Asp Net Core API',
                'NestJS',
                'Angular',
                'Docker',
                'MongoDB',
                'rGPC',
                'K8S',
                'MinIO',
                'FFmpeg',
            ],
            image: 'https://github.com/VinhTin-AQUA/Video-Streaming-App/blob/main/images/demo_1.png?raw=true',
            github: 'https://github.com/VinhTin-AQUA/Video-Streaming-App',
            demo: '',
        },
        {
            id: 3,
            title: 'Tun Installer',
            description: 'Modern Windows EXE Installer Builder powered by HTML & CSS UI',
            techStack: ['Rust', 'Tauri', 'Angular'],
            image: 'https://github.com/VinhTin-AQUA/tun-installer/raw/main/docs/app-ui/1.png',
            github: 'https://github.com/VinhTin-AQUA/tun-installer',
            demo: '',
        },
        {
            id: 4,
            title: 'VSCode Terminal',
            description:
                'VS Code Terminal is a lightweight desktop terminal application inspired by the integrated terminal in Visual Studio Code',
            techStack: ['Rust', 'Tauri', 'Angular'],
            image: 'https://github.com/VinhTin-AQUA/vsc-terminal/raw/main/docs/demo.png',
            github: 'https://github.com/VinhTin-AQUA/vsc-terminal',
            demo: '',
        },
        {
            id: 5,
            title: 'Bill Insight',
            description: 'Smart Invoice Management on Google Sheets',
            techStack: ['Rust', 'Tauri', 'Angular'],
            image: 'https://github.com/VinhTin-AQUA/My-Tools/raw/main/Bill-Insight/docs/3.jpg',
            github: 'https://github.com/VinhTin-AQUA/My-Tools/tree/main/Bill-Insight',
            demo: '',
        },
        {
            id: 6,
            title: 'Password Management',
            description:
                'Password management app, stored on firebase database registered by user account',
            techStack: ['Rust', 'Tauri', 'Angular'],
            image: 'https://github.com/VinhTin-AQUA/My-Tools/raw/main/Password-Management/docs/1.jpg',
            github: 'https://github.com/VinhTin-AQUA/My-Tools/tree/main/Password-Management',
            demo: '',
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
