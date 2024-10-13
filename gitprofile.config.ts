// gitprofile.config.ts
export type SocialLinks = {
  /** LinkedIn username. Example: "ariful-alam" */
  linkedin?: string;
  /** Twitter username. Example: "arif_szn" */
  twitter?: string;
  /** Mastodon username. Example: "arifszn@mastodon.social" */
  mastodon?: string;
  /** Personal website URL. Example: "https://www.arifszn.com" */
  website?: string;
  /** Contact email address. Example: "arifulalamszn@gmail.com" */
  email?: string;
};

export type Project = {
  /** Project title. Example: "Project Name" */
  title: string;
  /** Project description. Example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." */
  description: string;
  /** URL for the project image. Example: "https://example.com/image.jpg" */
  imageUrl: string;
  /** URL to the project. Example: "https://example.com" */
  link: string;
};

export type Experience = {
  /** Company name. Example: "Company Name" */
  company: string;
  /** Position held. Example: "Position" */
  position: string;
  /** Start date. Example: "September 2021" */
  from: string;
  /** End date. Use "Present" for current positions. Example: "Present" */
  to: string;
  /** URL to company website. Example: "https://example.com" */
  companyLink: string;
};

export type Education = {
  /** Name of the institution. Example: "Institution Name" */
  institution: string;
  /** Degree obtained. Example: "Degree" */
  degree: string;
  /** Start year. Example: "2015" */
  from: string;
  /** End year. Example: "2019" */
  to: string;
};

export type Publication = {
  /** Title of the publication. Example: "Publication Title" */
  title: string;
  /** Name of the journal (optional). Example: "Journal Name" */
  journalName?: string;
  /** Name of the conference (optional). Example: "Conference Name" */
  conferenceName?: string;
  /** Authors of the publication. Example: "John Doe, Jane Smith" */
  authors: string;
  /** URL to the publication. Example: "https://example.com" */
  link: string;
  /** Brief description of the publication. Example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." */
  description: string;
};

export type Config = {
  github: {
    /** Your GitHub org/user name. (This is the only required config) Example: "arifszn" */
    username: string;
  };
  /** Base URL for deployment. Example: "/gitprofile/" */
  base: string;
  projects: {
    github: {
      /** Display GitHub projects? Example: true */
      display: boolean;
      /** Header for GitHub projects section. Example: "Github Projects" */
      header: string;
      /** Mode can be: automatic or manual. Example: "automatic" */
      mode: 'automatic' | 'manual';
      automatic: {
        /** Sort projects by stars or updated. Example: "stars" */
        sortBy: 'stars' | 'updated';
        /** How many projects to display. Example: 8 */
        limit: number;
        exclude: {
          /** Forked projects will not be displayed if set to true. Example: false */
          forks: boolean;
          /** These projects will not be displayed. Example: [] */
          projects: string[];
        };
      };
      manual: {
        /** List of repository names to display. Example: ["arifszn/gitprofile", "arifszn/pandora"] */
        projects: string[];
      };
    };
    external: {
      /** Header for external projects section. Example: "My Projects" */
      header: string;
      /** List of external projects. */
      projects: Project[];
    };
  };
  seo: {
    /** Title for SEO. Example: "Portfolio of Ariful Alam" */
    title: string;
    /** Description for SEO. Example: "" */
    description: string;
    /** Image URL for SEO. Example: "" */
    imageURL: string;
  };
  social: SocialLinks;
  resume: {
    /** URL for resume file. Empty will hide the Download Resume button. Example: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" */
    fileUrl: string;
  };
  /** List of skills. Example: ["PHP", "Laravel", "JavaScript", "React.js", ...] */
  skills: string[];
  /** List of work experiences. */
  experiences: Experience[];
  certifications: {
    /** Name of the certification. Example: "Lorem ipsum" */
    name: string;
    /** Issuing body. Example: "Lorem ipsum dolor sit amet" */
    body: string;
    /** Year of certification. Example: "March 2022" */
    year: string;
    /** URL to the certification. Example: "https://example.com" */
    link: string;
  }[];
  /** List of educational qualifications. */
  educations: Education[];
  /** List of publications. */
  publications: Publication[];
  blog: {
    /** Source for blog articles (medium | dev). Example: "dev" */
    source: 'medium' | 'dev';
    /** Username for blog source. To hide blog section, keep it empty. Example: "arifszn" */
    username: string;
    /** How many articles to display. Max is 10. Example: 2 */
    limit: number;
  };
  googleAnalytics: {
    /** GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX. Example: "" */
    id: string;
  };
  hotjar: {
    /** Hotjar ID. Example: "" */
    id: string;
    /** Hotjar snippet version. Example: 6 */
    snippetVersion: number;
  };
  themeConfig: {
    /** Default theme for the application. Example: "lofi" */
    defaultTheme: string;
    /** Hides the theme switch in the navbar. Example: false */
    disableSwitch: boolean;
    /** Uses user system preferences for theme. Example: false */
    respectPrefersColorScheme: boolean;
    /** Displays a ring around the profile picture. Example: true */
    displayAvatarRing: boolean;
    /** Available themes. Example: ["light", "dark", "cupcake", ...] */
    themes: string[];
    customTheme: {
      primary: string;
      secondary: string;
      accent: string;
      neutral: string;
      'base-100': string;
      '--rounded-box': string;
      '--rounded-btn': string;
    };
  };
  /** Optional footer text or HTML. Example: "Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️" */
  footer: string;
  /** Enable Progressive Web App features. Example: true */
  enablePWA: boolean;
};

const CONFIG: Config = {
  github: {
    username: 'arifszn',
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['arifszn/gitprofile', 'arifszn/pandora'],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Project Name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ariful-alam',
    twitter: 'arif_szn',
    mastodon: 'arifszn@mastodon.social',
    website: 'https://www.arifszn.com',
    email: 'arifulalamszn@gmail.com',
  },
  resume: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
  blog: {
    source: 'dev',
    username: 'arifszn',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: 'Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️',
  enablePWA: true,
};

export default CONFIG;
