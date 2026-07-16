import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Metric {
  value: string;
  label: string;
  accent: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  highlights: string[];
}

interface Project {
  title: string;
  category: 'AI & Enterprise' | 'Mobile App' | 'Web Portal';
  tech: string[];
  description: string[];
  accentColor: string;
  iconSvg: string;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
  score?: string;
  badge: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Profile Signals
  protected readonly name = signal('Babneet Kaur');
  protected readonly title = signal('Software Engineer & Frontend Architect');
  protected readonly location = signal('Ludhiana, Punjab, India');
  protected readonly email = signal('babneetkaur00001@gmail.com');
  protected readonly phone = signal('+91 9115193935');

  // Impact Metrics for Hero Bento Box
  protected readonly metrics = signal<Metric[]>([
    { value: '2+', label: 'Years Total Experience', accent: '#50e3c2' },
    { value: '25+', label: 'Enterprise UI Modules', accent: '#17a589' },
    { value: '15+', label: 'AI & REST APIs Integrated', accent: '#00b4d8' },
    { value: '2x', label: 'Employee of the Month', accent: '#f59e0b' }
  ]);

  // Skill Grid Data
  protected readonly coreSkills = signal([
    { name: 'Angular 18+', level: '95%', category: 'Frontend Architecture', color: '#50e3c2' },
    { name: 'Enterprise AI APIs', level: '90%', category: 'AI Integration', color: '#17a589' },
    { name: 'Ionic Framework', level: '90%', category: 'Cross-Platform Mobile', color: '#00b4d8' },
    { name: 'TypeScript / JS', level: '90%', category: 'Core Language', color: '#3178c6' },
    { name: 'React', level: '85%', category: 'Frontend', color: '#61dafb' },
    { name: 'FastAPI & Python', level: '80%', category: 'Backend / AI', color: '#009688' },
    { name: '.NET & C#', level: '75%', category: 'Backend Systems', color: '#512bd4' },
    { name: 'SCSS & Tailwind', level: '95%', category: 'Modern Styling', color: '#38ef7d' },
    { name: 'n8n Automation', level: '85%', category: 'Workflow Pipelines', color: '#ea4b71' }
  ]);

  // Project Filtering Signal
  protected readonly selectedCategory = signal<string>('All');
  protected readonly projectCategories = signal<string[]>(['All', 'AI & Enterprise', 'Mobile App', 'Web Portal']);

  protected readonly projects = signal<Project[]>([
    {
      title: 'Aahar App',
      category: 'AI & Enterprise',
      tech: ['Angular', 'Enterprise AI API', 'TypeScript', 'SCSS'],
      accentColor: '#50e3c2',
      iconSvg: 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z',
      description: [
        'Architected the frontend of the Aahar dietary management application using Angular, delivering a lightning-fast, highly responsive user interface.',
        'Integrated robust Enterprise AI APIs to dynamically compute user biomarkers and generate precision-tailored meal regimens in real time.',
        'Built modular, reusable UI components optimized for complex nutritional diagnostics, seamless user onboarding, and continuous health tracking.'
      ]
    },
    {
      title: 'AI Diet Generator',
      category: 'AI & Enterprise',
      tech: ['FastAPI', 'Python AI', 'Workflow Automation'],
      accentColor: '#17a589',
      iconSvg: 'M13 10V3L4 14h7v7l9-11h-7z',
      description: [
        'Architected an AI-powered recommendation engine generating personalized clinical diet plans from real-time user health telemetry.',
        'Built high-concurrency FastAPI backend services to process complex dietary matrices and output structured JSON regimens.',
        'Automated end-to-end diet planning workflows, eliminating manual calculation overhead for healthcare providers.'
      ]
    },
    {
      title: 'Prim Diet Mobile App',
      category: 'Mobile App',
      tech: ['Ionic Framework', 'Angular', 'SCSS', 'Capacitor'],
      accentColor: '#00b4d8',
      iconSvg: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z',
      description: [
        'Engineered a unified cross-platform mobile application deployed seamlessly across Android, iOS, and Web environments.',
        'Integrated secure payment gateways for wellness program purchases and interactive personalized meal tracking modules.',
        'Designed pixel-perfect, highly responsive UI components that boosted user retention and session durations across devices.'
      ]
    },
    {
      title: 'Prim Dietitian Portal',
      category: 'Mobile App',
      tech: ['Ionic Angular', 'REST APIs', 'Biometrics'],
      accentColor: '#38ef7d',
      iconSvg: 'M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
      description: [
        'Created specialized clinical management modules enabling nutritionists to monitor patient vitals and adjust diet algorithms remotely.',
        'Delivered real-time client analytics dashboards and dynamic diet plan creation tools with instant cloud synchronization.'
      ]
    },
    {
      title: 'Prim Principal Portal',
      category: 'Web Portal',
      tech: ['Angular', 'REST APIs', 'Bootstrap 5', 'MySQL'],
      accentColor: '#2af598',
      iconSvg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
      description: [
        'Revamped the administrative onboarding web portal, streamlining multi-organization registration and role-based access control (RBAC).',
        'Built interactive executive dashboards surfacing system-wide telemetry, user engagement insights, and financial metrics.'
      ]
    }
  ]);

  protected readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'All') return this.projects();
    return this.projects().filter(p => p.category === category);
  });

  // Professional Experience Timeline
  protected readonly experiences = signal<Experience[]>([
    {
      role: 'Software Engineer',
      company: 'Niwiai Private Limited',
      period: 'April 2026 - Present',
      location: 'Ludhiana, India',
      badge: '🚀 Promoted Role',
      highlights: [
        'Lead frontend architectural initiatives using Angular 18+ and Ionic, spearheading the delivery of AI-powered consumer products like the Aahar App.',
        'Architect and integrate high-throughput Enterprise AI APIs, translating complex machine-learning recommendations into intuitive, real-time UI dashboards.',
        'Mentor junior developers, conduct comprehensive code reviews, and enforce rigorous frontend performance optimization standards across mobile and web platforms.'
      ]
    },
    {
      role: 'Associate Software Engineer',
      company: 'Niwiai Private Limited',
      period: 'April 2025 - March 2026',
      location: 'Ludhiana, India',
      badge: '🏆 2x Employee of the Month',
      highlights: [
        'Spearheaded frontend and cross-platform mobile development using Angular, Ionic, React, and SCSS for mission-critical client deployments.',
        'Architected and deployed 20+ reusable, highly responsive UI components, standardizing the design system across mobile and web ecosystems.',
        'Successfully integrated 10+ RESTful APIs, managing complex state and relational data flow using MySQL databases.',
        'Collaborated in high-velocity Agile sprints using Git version control, Postman, and Swagger for robust API testing.'
      ]
    },
    {
      role: 'Software Engineering Intern',
      company: 'Niwiai Private Limited',
      period: 'Oct 2024 - March 2025',
      location: 'Ludhiana, India',
      highlights: [
        'Co-developed cross-platform web and mobile applications using Angular and Ionic Framework.',
        'Resolved critical UI bugs and improved layout responsiveness across legacy application modules.',
        'Created extensive API documentation and executed end-to-end testing protocols using Postman, Swagger, and Azure DevOps.',
        'Partnered closely with senior developers and QA engineers to elevate application runtime stability and render performance.'
      ]
    }
  ]);

  // Education & Certifications
  protected readonly education = signal<Education[]>([
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Science in Information Technology',
      year: '2022 - 2025',
      badge: 'University Degree'
    },
    {
      institution: 'Brilliko Institute of Multimedia',
      degree: 'Full Stack Development Certification',
      year: '2023 - 2024',
      badge: 'Professional Cert'
    },
    {
      institution: 'Green Land Senior Secondary Public School',
      degree: 'Higher Secondary Education',
      year: '2021',
      score: '90% Academic Score',
      badge: 'High School'
    }
  ]);

  protected setFilter(category: string): void {
    this.selectedCategory.set(category);
  }
}