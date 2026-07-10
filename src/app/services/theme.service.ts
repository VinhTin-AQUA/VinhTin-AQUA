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

    constructor(private http: HttpClient) {}

    async init() {
        // themes
        const themes = await firstValueFrom(
            this.http.get<Record<string, AppTheme>>('themes/themes.json'),
        );

        this.appThemes.set(themes);
        this.applyThemeToDOM(this.currentTheme());
    }

    applyThemeToDOM(type: AppThemeType) {
        const root = document.documentElement;
        const selectedTheme: AppTheme = this.appThemes()[type];

        Object.entries(selectedTheme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    }
}
