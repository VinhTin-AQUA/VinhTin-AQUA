import { Component, signal } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Header } from "./components/header/header";
import { AboutMe } from "./components/about-me/about-me";
import { Career } from "./components/career/career";
import { TechnicalSkill } from "./components/technical-skill/technical-skill";
import { Project } from "./components/project/project";
import { Footer } from "./components/footer/footer";

@Component({
    selector: 'app-root',
    imports: [Header, AboutMe, Career, TechnicalSkill, Project, Footer],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected readonly title = signal('vinhtin-aqua');

    constructor(private themeService: ThemeService) {}

    async ngOnInit() {
        await this.themeService.init();
    }
}
