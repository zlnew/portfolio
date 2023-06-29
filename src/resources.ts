interface Me {
  name: string;
  title: string;
  short_bio: string;
}

type About = string[];

interface Experience {
  title: string;
  company: string;
  description: string;
  period: {
    from: string;
    to: string;
  }
  location: string;
  tech: string[];
  url?: string;
  projects?: Partial<Projects>[],
}

interface Projects {
  name: string;
  description: string;
  year: string;
  tech: string[];
  url?: string;
  image?: string;
}

const me: Me = {
  name: 'Maulana Aprizqy',
  title: 'Web Developer',
  short_bio: 'I enjoy transforming ideas into valuable websites for various purposes.'
};

const about: About = [
  "A final year <a href='https://bsi.ac.id' target='_blank' class='text-accent'>Software Engineering student</a>. Web development is my passion, and I absolutely love crafting innovative and user-friendly websites. I've had the chance to work on various freelance projects as a Full Stack Developer.",
  "Thanks to my freelance experiences, I've collaborated with different clients and tackled diverse projects. This has not only enhanced my technical abilities but also sharpened my adaptability on it.",
  "In my free time, I enjoy dedicating my time to building <a href='https://github.com/zlnew/vibes-in-spotify' target='_blank' class='text-accent'>open-source projects</a>. I find great satisfaction in being able to share my projects with others and contribute to helping people through my websites."
];

const experience: Experience[] = [
  {
    title: 'Web Developer',
    company: 'Freelance',
    description: 'Creating diverse websites for clients as an independent Full Stack Developer.',
    period: {
      from: '2021',
      to: 'Present',
    },
    location: 'Online',
    tech: ['Vue.js', 'Tailwind CSS', 'Typescript', 'CodeIgniter', 'Laravel', 'MySQL'],
    projects: [
      {
        name: 'E-KTM',
        url: 'https://sikeu.mercusuar.ac.id/',
      },
      {
        name: 'Admission',
        url: 'https://admisi.mercusuar.ac.id/',
      },
      {
        name: 'Laras Sembada',
        url: 'https://laras.bisniskoe.com/',
      },
    ]
  },
  {
    title: 'Full Stack Developer Internship',
    company: 'Beecons',
    description: 'Develop a marketplace website for Estimator.id that focuses on property sales and services in the construction field.',
    period: {
      from: 'Aug',
      to: 'Dec 2022',
    },
    location: 'On site',
    tech: ['Bootstrap', 'JQuery', 'CodeIgniter', 'Midtrans API', 'MySQL'],
    url: 'https://beecons.co.id/',
  },
  {
    title: 'Software Engineering Student',
    company: 'Bina Sarana Informatika University',
    description: 'This is the first place where I learned and entered the world of programming. I had the opportunity to learn basic programming skills and graduated as a computer science bachelor.',
    period: {
      from: '2019',
      to: '2023',
    },
    location: 'On site',
    tech: ['Basic programming'],
    url: 'https://bsi.ac.id/',
  }
];

const projects: Projects[] = [
  {
    name: 'Spotify Music Discovery App',
    description: 'A Music Discovery Web App Powered by the Spotify Web API that recommends various tracks generated based on user-selected vibes.',
    year: '2023',
    tech: ['Vue.js', 'Typescript', 'Tailwind CSS', 'Spotify Web API', 'Netlify'],
    url: 'https://vibes-in.netlify.app/',
  },
  {
    name: 'Ease Button UI',
    description: 'A user-friendly and customizable button UI component for Vue.js, designed to simplify its usage for users.',
    year: '2023',
    tech: ['Vue.js', 'Typescript', 'Tailwind CSS', 'Netlify'],
    url: 'https://ease-button-ui.netlify.app/',
  },
  {
    name: 'E-Commerce Website',
    description: 'An Office Stationery E-Commerce website built using CodeIgniter and integrated with the Midtrans Payment Gateway.',
    year: '2021',
    tech: ['CodeIgniter', 'JQuery', 'Bootstrap', 'Midtrans API'],
    url: 'https://github.com/ishamadway/toko-atk',
  }
];

export {
  me,
  about,
  experience,
  projects,
}