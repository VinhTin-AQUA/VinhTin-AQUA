import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { Header } from "./components/header/header";
import { AboutMe } from "./components/about-me/about-me";
import { Career } from "./components/career/career";
import { TechnicalSkill } from "./components/technical-skill/technical-skill";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, AboutMe, Career, TechnicalSkill],
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
