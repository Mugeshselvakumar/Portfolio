export interface ExperienceEntry {
  id: string;
  organization: string;
  title: string;
  type: 'training' | 'internship' | 'employment';
  dateRange: string;
  description?: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'accenture',
    organization: 'Accenture',
    title: '.NET Full Stack Development Training',
    type: 'training',
    dateRange: 'May 2026 – September 2026',
    description:
      'Completed training in C#, ASP.NET Core MVC, Web APIs, microservices concepts, SQL Server, Entity Framework Core, HTML, CSS, JavaScript, and React.',
    points: [
      'Hands-on exercises and case studies covering full-stack .NET development',
      'Capstone full-stack application integrating learned technologies',
      'Exposure to Azure, Docker, Kubernetes, and DevOps practices',
    ],
  },
  {
    id: 'mist',
    organization: 'Mist Software Solutions Private Limited',
    title: 'Software Development Intern',
    type: 'internship',
    dateRange: 'May 2025',
    points: [
      'Developed and maintained web application features using JavaScript, HTML, CSS, Bootstrap, and MySQL',
      'Worked on reusable components and modular code architecture',
      'Implemented and tested authentication, validation, and database-operation logic',
      'Debugged issues through logs and reproduction steps',
      'Collaborated through code reviews and feedback',
    ],
  },
];
