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
    currentTheme = signal('light');

    // Menu items data
    menuItems = signal([
        {
            label: 'About Me',
            href: '#',
            icon: '',
        },
        {
            label: 'Projects',
            href: '#',
            icon: '',
        },
    ]);

    constructor(
        private themeService: ThemeService,
        public meService: MeService,
    ) {}

    ngOnInit() {
        this.currentTheme.set(this.themeService.currentTheme());
    }

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
        this.currentTheme.set(theme);
        if (theme === 'dark') {
            this.themeService.applyThemeToDOM('dark');
        } else {
            this.themeService.applyThemeToDOM('light');
        }
    }
}
