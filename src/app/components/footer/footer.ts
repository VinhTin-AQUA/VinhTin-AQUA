import { Component } from '@angular/core';
import { MeService } from '../../services/me.service';
import { Icons } from "../icons/icons";

@Component({
    selector: 'app-footer',
    imports: [Icons],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
})
export class Footer {
    currentYear: number = new Date().getFullYear();

    // Contact items with icons only
    contactItems = [
        { label: 'Email', href: 'mailto:hello@john.design', icon: '✉' },
        { label: 'Phone', href: 'tel:+15551234567', icon: '📞' },
        { label: 'GitHub', href: '#', icon: '⌨' },
        { label: 'Twitter', href: '#', icon: '🐦' },
    ];

    constructor(public meService: MeService) {}
}
