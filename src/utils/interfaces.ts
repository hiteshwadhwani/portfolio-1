export interface UserObject {
    success: boolean;
    user: User;
}

export interface User {
    about: About;
    _id: string;
    username: string;
    email: string;
    role: string;
    timeline: Timeline[];
    skills: Skill[];
    youtube: any[];
    projects: Project[];
    social_handles: SocialHandle[];
    services: Service[];
    testimonials: Testimonial[];
    createdAt: string;
    updatedAt: string;
    refreshToken: string;
}

export interface About {
    name: string;
    title: string;
    subTitle: string;
    description: string;
    quote: string;
    exp_year: string;
    address: string;
    some_total: string;
    phoneNumber: string;
    avatar: Avatar;
}

export interface Avatar {
    url: string;
}

export interface Skill {
    enabled: boolean;
    name: string;
    sequence: number;
    percentage: number;
    image: Avatar;
}

export interface Project {
    liveurl: string;
    githuburl: string;
    title: string;
    sequence: number;
    image: Image;
    description: string;
    techStack: string[];
    _id: string;
    enabled: boolean;
}

export interface Image {
    public_id: string;
    url: string;
}

export interface SocialHandle {
    platform: string;
    url: string;
    enabled: boolean;
}

export interface Service {
    name: string;
    charge: string;
    desc: string;
    enabled: boolean;
    _id: string;
    image: Image;
}

export interface Testimonial {
    image: Image;
    name: string;
    review: string;
    position: string;
    enabled: boolean;
    _id: string;
}

export interface Timeline {
    company_name: string;
    summary: string;
    sequence: number;
    startDate: string;
    endDate?: string;
    jobTitle: string;
    jobLocation: string;
    bulletPoints: string[];
    forEducation: boolean;
    enabled: boolean;
}
