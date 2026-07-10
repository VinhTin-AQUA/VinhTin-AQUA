import { Injectable, signal } from '@angular/core';
import { AppTheme, AppThemeType } from '../models/app.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    appThemes = signal<Record<string, AppTheme>>({});
    currentTheme = signal<AppThemeType>('dark');
    themeKey = 'theme';

    constructor(private http: HttpClient) {}

    async init() {
        // themes
        const themes = await firstValueFrom(
            this.http.get<Record<string, AppTheme>>('themes/themes.json'),
        );
        this.appThemes.set(themes);
        const theme = localStorage.getItem(this.themeKey) as AppThemeType;

        if (theme) {
            this.applyThemeToDOM(theme);
        } else {
            this.applyThemeToDOM(this.currentTheme());
        }
    }

    applyThemeToDOM(type: AppThemeType) {
        localStorage.setItem(this.themeKey, type);
        this.currentTheme.set(type);

        const root = document.documentElement;
        const selectedTheme: AppTheme = this.appThemes()[type];

        Object.entries(selectedTheme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    }
}
