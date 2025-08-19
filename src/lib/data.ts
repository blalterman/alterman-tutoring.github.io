import fs from 'fs/promises';
import path from 'path';

const cache = new Map<string, any>();

async function readJsonFile<T>(filename: string): Promise<T> {
    if (cache.has(filename)) {
        return cache.get(filename) as T;
    }
    const filePath = path.join(process.cwd(), 'public/data', filename);
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        cache.set(filename, data);
        return data as T;
    } catch (error) {
        console.error(`Error reading or parsing ${filename}:`, error);
        throw new Error(`Could not load data for ${filename}`);
    }
}

export interface SiteInfo {
  siteName: string;
  tagline: string;
  valueProposition: string;
  motivationLine: string;
  primaryCtaLabel: string;
  bookingEmail: string;
  ratePerHourUSD: number;
  cancellationPolicy: string;
  selectivityNote: string;
  serviceAreas: string[];
  levelsServed: string;
}

export interface NavigationItem {
    label: string;
    href: string;
}

export interface NavigationData {
    items: NavigationItem[];
}

export interface TutoringStyle {
    styleDescription: string;
}

export interface SubjectTopics {
    intro: string;
    topics: string[];
}

export interface SubjectsData {
    math: SubjectTopics;
    physics: SubjectTopics;
    latin: SubjectTopics;
}

export interface AboutContent {
  intro: string;
  experience: string;
  ldPerspective: string;
  meetingFormat: string;
  professionalNote: string;
  consultCta: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    relationship: string;
    quote: string;
    date: string;
    subject: string;
}

export interface TestimonialsData {
    items: Testimonial[];
}

export interface SeoEntry {
    title: string;
    description: string;
}

export interface SeoData {
    home: SeoEntry;
    services: SeoEntry;
    about: SeoEntry;
    testimonials: SeoEntry;
    contact: SeoEntry;
}

export const getSiteInfo = () => readJsonFile<SiteInfo>('site.json');
export const getNavigation = () => readJsonFile<NavigationData>('navigation.json');
export const getTutoringStyle = () => readJsonFile<TutoringStyle>('tutoringStyle.json');
export const getSubjects = () => readJsonFile<SubjectsData>('subjects.json');
export const getAboutContent = () => readJsonFile<AboutContent>('about.json');
export const getTestimonials = () => readJsonFile<TestimonialsData>('testimonials.json');
export const getSeoData = () => readJsonFile<SeoData>('seo.json');
