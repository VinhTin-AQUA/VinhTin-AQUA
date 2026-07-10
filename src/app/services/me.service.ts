import { Injectable, signal } from '@angular/core';
import { Me } from '../models/me.model';

@Injectable({
    providedIn: 'root',
})
export class MeService {
    me = signal<Me>({
        name: 'Ho Vinh Tin',
        jobTitle: '.NET Developer',
        contacts: [
            { name: 'Email', icon: 'email', link: 'mailto:tinhovinh@gmail.com' },
            { name: 'Github', icon: 'github', link: 'https://github.com/VinhTin-AQUA' },
            { name: 'LinkedIn', icon: 'linkedin', link: 'https://www.linkedin.com/in/tin-ho-vinh/' },
            { name: 'CV', icon: 'cv', link: '' },
        ],
        openToWork: '✦ available',
        avatar: './avatar.png',
    });
}
