import { NgComponentOutlet } from '@angular/common';
import { Component, Input, Type } from '@angular/core';
import { CVIconComponent, DarkIconComponent, HomeIconComponent, LigthIconComponent } from './list-icons';

export const ICON_REGISTRY: Record<string, Type<any>> = {
    home: HomeIconComponent,
    light: LigthIconComponent,
    dark: DarkIconComponent,
    cv: CVIconComponent,
};

export type IconNames = 'home' | 'light' | 'dark' | 'cv' | 'error';

@Component({
    selector: 'app-icons',
    imports: [NgComponentOutlet],
    templateUrl: './icons.html',
    styleUrl: './icons.css',
})
export class Icons {
    @Input() iconName: IconNames = 'error';
    @Input() class: string = 'h-5 w-5';

    iconComponent(): Type<any> | null {
        return ICON_REGISTRY[this.iconName] || null;
    }
}
