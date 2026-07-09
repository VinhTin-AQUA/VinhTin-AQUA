export interface Experience {
    id: number;
    period: string;
    title: string;
    company: string;
    location: string;
    description: string[];
    technologies?: string[];
    isCurrent?: boolean;
    color: string;
}
