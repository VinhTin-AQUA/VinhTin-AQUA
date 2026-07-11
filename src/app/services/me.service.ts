import { computed, inject, Injectable, signal } from '@angular/core';
import { Me } from '../models/me.model';
import { ThemeService } from './theme.service';

@Injectable({
    providedIn: 'root',
})
export class MeService {
    private themeService = inject(ThemeService);

    me = signal<Me>({
        name: 'Ho Vinh Tin',
        jobTitle: '.NET Developer',
        contacts: [
            { name: 'Email', icon: 'email', link: 'mailto:tinhovinh@gmail.com' },
            { name: 'Github', icon: 'github', link: 'https://github.com/VinhTin-AQUA' },
            {
                name: 'LinkedIn',
                icon: 'linkedin',
                link: 'https://www.linkedin.com/in/tin-ho-vinh/',
            },
            { name: 'CV', icon: 'cv', link: '' },
        ],
        openToWork: '✦ available',
        avatar: './avatar.png',
        avatartWithSunglass: './avatartWithSunglass.png',
    });

    constructor() {
        const me = this.me();

        const images = [me.avatar, me.avatartWithSunglass];

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }

    currentAvatar = computed(() => {
        const me = this.me();

        return this.themeService.currentTheme() === 'light' ? me.avatartWithSunglass : me.avatar;
    });
}
