export interface Education {
  degree: string;
  field: string;
  institution: string;
  dateRange: string;
  cgpa: string;
}

export interface Certification {
  name: string;
  date: string;
  verificationUrl?: string;
}

export const education: Education = {
  degree: 'Bachelor of Engineering',
  field: 'Computer Science Engineering',
  institution: 'Sri Krishna College of Technology',
  dateRange: 'October 2022 – March 2026',
  cgpa: '7.54',
};

export const certifications: Certification[] = [
  // {
  //   name: 'Fortinet Certified Professional (FCP)',
  //   date: 'September 2025',
  // },
  {
    name: 'Fortinet Certified Associate in Cybersecurity',
    date: 'June 2025',
  },
];
