import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  badge?: string;
}

interface Project {
  title: string;
  tech: string;
  description: string[];
  icon: string;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
  location: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Personal Info Signals [cite: 1, 2, 3, 4, 5]
  protected readonly name = signal('Babneet Kaur'); // 
  protected readonly title = signal('Associate Software Engineer | Frontend Developer'); // [cite: 2]
  protected readonly email = signal('babneetkaur00001@gmail.com'); // [cite: 3]
  protected readonly phone = signal('+91 9115193935'); // [cite: 4]
  protected readonly location = signal('Ludhiana, Punjab, India'); // [cite: 5]
  
  protected readonly summary = signal(
    'Motivated and detail-oriented Associate Software Engineer with 1 year of full-time experience and 6 months of internship experience in front-end and cross-platform mobile development. Skilled in building responsive web and mobile applications using Angular, Ionic, React, and modern web technologies. Experienced in REST API integration, MySQL databases, API testing tools, and workflow automation. Passionate about learning new technologies including FastAPI, .NET, and n8n workflow automation to build scalable applications.' // [cite: 7, 8, 9, 10]
  );

  // Skills Data [cite: 43, 44, 45, 46, 47, 48]
  protected readonly skillCategories = signal<SkillCategory[]>([
    {
      category: 'Programming Languages', // [cite: 43]
      skills: ['JavaScript', 'TypeScript', 'PHP', 'C#'] // [cite: 43]
    },
    {
      category: 'Frontend Development', // [cite: 43]
      skills: ['Angular', 'React', 'Ionic', 'Bootstrap', 'SCSS', 'HTML5', 'CSS3'] // [cite: 43]
    },
    {
      category: 'Mobile Development', // [cite: 44]
      skills: ['Ionic Framework', 'Capacitor', 'Android Studio'] // [cite: 44, 48]
    },
    {
      category: 'Backend & Automation', // [cite: 45, 46]
      skills: ['FastAPI', '.NET', 'PHP', 'REST APIs', 'n8n Workflow Automation'] // [cite: 45, 46]
    },
    {
      category: 'Databases & Tools', // [cite: 47, 48]
      skills: ['MySQL', 'Azure Data Studio', 'MySQL Workbench', 'Git', 'VS Code', 'Postman', 'Swagger', 'Azure DevOps'] // [cite: 47, 48]
    }
  ]);

  // Experience Data 
  protected readonly experiences = signal<Experience[]>([
    {
      role: 'Associate Software Engineer', // [cite: 12]
      company: 'Niwiai Private Limited', // [cite: 12]
      period: 'April 2025 - Present', // [cite: 13]
      location: 'Ludhiana, India', // [cite: 13]
      badge: '2x Employee of the Month', // [cite: 18]
      highlights: [
        'Develop cross-platform mobile and web applications using Angular, Ionic, React, and SCSS.', // [cite: 14]
        'Built more than 20 responsive UI components improving usability across web and mobile platforms.', // [cite: 15]
        'Integrated 10+ REST APIs and managed application data using MySQL databases.', // [cite: 16]
        'Collaborated with cross-functional teams using Agile methodologies and Git version control.', // [cite: 17]
        'Performed API testing and debugging using Postman and Swagger.' // [cite: 17]
      ]
    },
    {
      role: 'Software Engineering Intern', // [cite: 18]
      company: 'Niwiai Private Limited', // [cite: 18]
      period: 'Oct 2024 - March 2025', // [cite: 19]
      location: 'Ludhiana, India', // [cite: 19]
      highlights: [
        'Assisted in development of web and mobile applications using Angular and Ionic Framework.', // [cite: 20]
        'Supported frontend development, debugging, and UI improvements across application modules.', // [cite: 21]
        'Performed API testing and documentation using Postman, Swagger, and Azure DevOps.', // [cite: 22]
        'Worked with developers and QA teams to improve system stability and performance.' // [cite: 23]
      ]
    }
  ]);

  // Projects Data [cite: 25, 28, 32, 35]
  protected readonly projects = signal<Project[]>([
    {
      title: 'AI Diet Generator', // [cite: 35]
      tech: 'FastAPI, AI, Python', // [cite: 36]
      icon: '🤖',
      description: [
        'Enhanced AI-powered system that generates personalized diet plans based on user health data.', // [cite: 37]
        'Built FastAPI backend services to process user inputs and generate structured diet recommendations.', // [cite: 38]
        'Automated diet generation workflow reducing manual diet planning effort.' // [cite: 39]
      ]
    },
    {
      title: 'Prim Diet App', // [cite: 25]
      tech: 'Ionic, Angular, SCSS', // [cite: 26]
      icon: '🥗',
      description: [
        'Developed cross-platform mobile application for Android, iOS, and Web platforms.', // [cite: 27]
        'Implemented personalized diet plan modules and wellness program purchases.', // [cite: 27]
        'Designed responsive UI components improving user experience across devices.' // [cite: 28]
      ]
    },
    {
      title: 'Prim Dietitian App', // [cite: 28]
      tech: 'Ionic, Angular, REST APIs', // [cite: 29]
      icon: '👨‍⚕️',
      description: [
        'Built modules enabling dietitians to manage client health data and diet plans.', // [cite: 30]
        'Implemented comprehensive client monitoring and diet plan management features.' // [cite: 31]
      ]
    },
    {
      title: 'Prim Principal Portal', // [cite: 32]
      tech: 'Angular, REST APIs, Bootstrap', // [cite: 33]
      icon: '🏢',
      description: [
        'Improved administrative web portal for onboarding organizations and managing secure access.', // [cite: 34]
        'Built interactive dashboards displaying real-time organization activity and system insights.' // [cite: 34]
      ]
    }
  ]);

  // Education Data 
  protected readonly education = signal<Education[]>([
    {
      institution: 'Lovely Professional University', // 
      degree: 'Bachelor of Science in Information Technology', // 
      year: '2022 - 2025', // 
      location: 'Punjab, India' // 
    },
    {
      institution: 'Brilliko Institute of Multimedia', // 
      degree: 'Full Stack Development Certification', // 
      year: '2023 - 2024', // 
      location: 'Punjab, India' // 
    },
    {
      institution: 'Green Land Senior Secondary Public School', // 
      degree: 'Higher Secondary Education - 90%', // 
      year: '2021', // 
      location: 'Punjab, India' // 
    }
  ]);
}