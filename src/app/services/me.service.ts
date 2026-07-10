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
            { name: 'Email', icon: 'email', link: '' },
            { name: 'Github', icon: 'github', link: '' },
            { name: 'LinkedIn', icon: 'linkedin', link: '' },
            { name: 'CV', icon: 'cv', link: '' },
        ],
        openToWork: '✦ available',
        avatar: './avatar.png',
    });
}
