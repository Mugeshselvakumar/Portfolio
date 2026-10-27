export interface SkillGroup {
  category: string;
  isPrimary: boolean;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Core Development',
    isPrimary: true,
    skills: [
      '.NET',
      'ASP.NET Core MVC',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'RESTful APIs',
    ],
  },
  {
    category: 'Frontend',
    isPrimary: true,
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Databases',
    isPrimary: false,
    skills: [ 'MySQL', 'MongoDB'],
  },
  {
    category: 'Additional Languages & Frameworks',
    isPrimary: false,
    skills: ['Java', 'Python', 'C++'],
  },
  {
    category: 'Engineering & Security',
    isPrimary: false,
    skills: [
      'Object-Oriented Programming',
      'Secure Authentication',
      'Cryptography',
      'Snort',
      'Wireshark',
    ],
  },
];
