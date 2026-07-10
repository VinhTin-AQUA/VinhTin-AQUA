import { Component, signal } from '@angular/core';
import { Icons } from '../icons/icons';
import { ThemeService } from '../../services/theme.service';

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
            label: 'Trang chủ',
            href: '#',
            icon: '',
        },
        {
            label: 'Dự án',
            href: '#',
            icon: '',
        },
        {
            label: 'Dịch vụ',
            href: '#',
            icon: '',
        },
        {
            label: 'Liên hệ',
            href: '#',
            icon: '',
        },
    ]);

    constructor(private themeService: ThemeService) {}

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
