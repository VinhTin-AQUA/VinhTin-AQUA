import { Component, signal } from '@angular/core';
import { Icons } from '../icons/icons';
import { ThemeService } from '../../services/theme.service';
import { MeService } from '../../services/me.service';

@Component({
    selector: 'app-header',
    imports: [Icons],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    isMobileMenuOpen = signal(false);

    // Menu items data
    menuItems = signal([
        {
            label: 'About Me',
            href: '#about-me',
            icon: '',
        },
        {
            label: 'Career',
            href: '#career',
            icon: '',
        },
        {
            label: 'Technical',
            href: '#technical-skill',
            icon: '',
        },

        {
            label: 'Projects',
            href: '#project',
            icon: '',
        },
    ]);

    constructor(
        public themeService: ThemeService,
        public meService: MeService,
    ) {}

    ngOnInit() {}

    toggleMobileMenu() {
        this.isMobileMenuOpen.update((value) => !value);
        if (this.isMobileMenuOpen()) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMobileMenu() {
        this.isMobileMenuOpen.set(false);
        document.body.style.overflow = '';
    }

    setTheme(theme: string) {
        if (theme === 'dark') {
            this.themeService.applyThemeToDOM('dark');
        } else {
            this.themeService.applyThemeToDOM('light');
        }
    }
}
