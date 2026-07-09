import { Component, Input } from '@angular/core';

@Component({
    selector: 'home-icon',
    standalone: true,
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            [class]="iconClass"
            fill="currentColor"
        >
            <path
                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
            />
            <path
                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
            />
        </svg>
    `,
})
export class HomeIconComponent {
    @Input() iconClass = 'w-5 h-5';
}

@Component({
    selector: 'light-icon',
    standalone: true,
    template: `
        <svg
            [class]="iconClass"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>
    `,
})
export class LigthIconComponent {
    @Input() iconClass = 'w-5 h-5';
}

@Component({
    selector: 'dark-icon',
    standalone: true,
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            [class]="iconClass"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
        </svg>
    `,
})
export class DarkIconComponent {
    @Input() iconClass = 'w-5 h-5';
}

@Component({
    selector: 'cv-icon',
    standalone: true,
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            [class]="iconClass"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
        </svg>
    `,
})
export class CVIconComponent {
    @Input() iconClass = 'w-5 h-5';
}
