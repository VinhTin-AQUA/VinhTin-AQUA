import { NgComponentOutlet } from '@angular/common';
import { Component, Input, Type } from '@angular/core';
import { CVIconComponent, DarkIconComponent, HomeIconComponent, LigthIconComponent, MenuIconComponent, XIconComponent } from './list-icons';

export const ICON_REGISTRY: Record<string, Type<any>> = {
    home: HomeIconComponent,
    light: LigthIconComponent,
    dark: DarkIconComponent,
    cv: CVIconComponent,
    menu: MenuIconComponent,
    x: XIconComponent,
};

export type IconNames = 'home' | 'light' | 'dark' | 'cv' | 'menu' | 'x' | 'error';

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
