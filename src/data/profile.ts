
export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  visible: boolean;
}

export interface ProfileData {
  name: string;
  location: string;
  email: string;
  phone: string;
  phoneVisible: boolean;
  linkedIn: SocialLink;
  github: SocialLink;
  heroEyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  primaryCTA: string;
  secondaryCTA: string;
  resumePath: string;
  resumeAvailable: boolean;
  aboutParagraphs: string[];
}

export const profile: ProfileData = {
  name: 'Mugesh S',
  location: 'Kallakurichi, Tamil Nadu, India',
  email: 'mugeshselvakumar0412@gmail.com',
  phone: '+91 6374474731',
  phoneVisible: false,
  linkedIn: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mugesh-selvakumar-842618255/',
    icon: 'linkedin',
    visible: true,
  },
  github: {
    label: 'GitHub',
    url: '',
    icon: 'github',
    visible: false,
  },
  heroEyebrow: 'Full Stack Developer',
  heroHeadline: 'Building full-stack applications with a security-first mindset.',
  heroDescription:
        "I'm Mugesh, Computer Science Engineering graduate specializing in Cybersecurity, with hands-on knowledge of Java, Spring Boot, Python, React, and MySQL.Skilled in full- stack development, database management, problem-solving, and application security, with practical experience through internships and academic projects.",
  primaryCTA: 'View Projects',
  secondaryCTA: 'Download Resume',
  resumePath: '/resume.pdf',
  resumeAvailable: true,
  aboutParagraphs: [
    'I build full-stack web applications using C#, ASP.NET Core, and React — with a focus on writing maintainable, modular code and implementing secure authentication patterns.',
    'My academic research in post-quantum cryptography and IoT data protection gave me a deeper understanding of how security should be embedded into application architecture from the start, not bolted on afterward.',
    'I\'m drawn to work that combines practical application development with thoughtful engineering — clean APIs, reliable data access, and interfaces that make complex systems approachable.',
  ],
};
