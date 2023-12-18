interface Me {
  name: string
  title: string
  short_bio: string
}

type About = string[]

interface Experience {
  title: string
  company: string
  description: string
  period: {
    from: string
    to: string
  }
  location: string
  tech: string[]
  url?: string
  projects?: Array<Partial<Projects>>
}

interface Projects {
  name: string
  description: string
  year: string
  tech: string[]
  url?: string
  download?: {
    github?: string
    npm?: string
  }
  image?: string
  overview?: Array<{
    src: string
    title: string
    description: string
  }>
}

const me: Me = {
  name: 'Maulana Aprizqy Sumaryanto',
  title: 'Freelance Full-Stack Developer',
  short_bio: 'I love transforming ideas into valuable websites.'
}

const about: About = [
  "Graduated from <strong>Software Engineering at Bina Sarana Informatika University</strong>. I currently work as a Freelance Full-Stack Developer. Over time, I've had wonderful opportunities to contribute to a variety of freelance projects as a Full Stack Developer. Through my journey as a Freelance Full-Stack Developer, I have become well-versed in using technologies like <strong>Laravel, Vue.js, Typescript, and MySQL</strong>",
  "In my free time, I enjoy dedicating my time to building <a href='https://github.com/zlnew/vibes-in-spotify' target='_blank' class='link'>open-source projects</a> or write an article on my <a href='https://aprizqy.com/' target='_blank' class='link'>personal blog</a>. I find great satisfaction in being able to share my projects with others and contribute to helping people through my websites."
]

const experience: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelance',
    description: 'Involved with several projects as a full-stack developer. Gained experience on how to communicate well with clients and improved my skills in using Laravel, Vue.js, Typescript, and MySQL.',
    period: {
      from: 'Apr 2021',
      to: 'Dec 2023'
    },
    location: 'Online',
    tech: ['Vue.js', 'Tailwind CSS', 'Quasar UI', 'Typescript', 'CodeIgniter', 'Laravel', 'MySQL'],
    projects: [
      {
        name: 'E-Student Card',
        url: 'https://ektm.mercusuar.ac.id/login'
      },
      {
        name: 'Student Financial App',
        url: 'https://sikeu.mercusuar.ac.id/'
      },
      {
        name: 'New Student Admission',
        url: 'https://admisi.mercusuar.ac.id/'
      },
      {
        name: 'Project Management App',
        url: 'https://laras.bisniskoe.com/'
      }
    ]
  },
  {
    title: 'Full-Stack Developer Internship',
    company: 'Beecons',
    description: 'Contributed in marketplace website development for estimator.id in a team. Learned how to collaborate using git as a team and how to create and cosume REST API.',
    period: {
      from: 'Aug',
      to: 'Dec 2022'
    },
    location: 'On site',
    tech: ['Bootstrap', 'JQuery', 'CodeIgniter', 'Midtrans API', 'REST API', 'MySQL', 'Git', 'Agile Development'],
    url: 'https://estimator.id/'
  },
  {
    title: 'Software Engineering',
    company: 'Bina Sarana Informatika University',
    description: "Actively involved in the Student Association as the responsible person for the Publication and Documentation division for 1 year. Bachelor's degree in Computer Science, with 3.98 GPA.",
    period: {
      from: 'Aug 2019',
      to: 'Dec 2023'
    },
    location: 'On site',
    tech: ["Bachelor's degree in Computer Science"],
    url: 'https://bsi.ac.id/'
  }
]

const projects: Projects[] = [
  {
    name: 'Personal Blog',
    description: 'My personal blog, where I share coding tips, tutorials, and my thoughts.',
    year: '2023',
    tech: ['Nuxt.js', 'Nuxt.UI', 'Typescript', 'Tailwind CSS', 'Supabase', 'OAuth', 'Netlify'],
    download: {
      github: 'https://github.com/zlnew/blog'
    },
    url: 'https://aprizqy.com/',
    image: createUrl('projects/aprizqy-blog.webp'),
    overview: [
      {
        src: createUrl('projects/personal_blog/home.webp'),
        title: 'Home',
        description: 'This is the interface of the blog home page. This page shows the latest articles of the blog.'
      },
      {
        src: createUrl('projects/personal_blog/browse.png'),
        title: 'Browse',
        description: 'This is the interface for browsing articles. You can search and filter articles based on order and tags.'
      },
      {
        src: createUrl('projects/personal_blog/dashboard.png'),
        title: 'Dashboard for writer',
        description: 'Dashboard can be accessed if the user is logged in. The default dashboard page shows all the articles created by the writer.'
      },
      {
        src: createUrl('projects/personal_blog/editor.png'),
        title: 'Article Editor',
        description: 'Writer can create and edit their articles, this blog uses Tiptap editor for content editing.'
      }
    ]
  },
  {
    name: 'Spotify Music Discovery App',
    description: 'A Music Discovery Web App Powered by the Spotify Web API that recommends various tracks generated based on user-selected vibes.',
    year: '2023',
    tech: ['Vue.js', 'Typescript', 'Tailwind CSS', 'Spotify Web API', 'Netlify'],
    download: {
      github: 'https://github.com/zlnew/vibes-in-spotify'
    },
    url: 'https://vibes-in.netlify.app/',
    image: createUrl('projects/vibes-in.webp'),
    overview: [
      {
        src: createUrl('projects/vibes_in/vibe_selector.png'),
        title: 'Choose Vibe',
        description: 'Users can choose a Vibe. The vibes are Energetic, Melancholic, Relaxing, Upbeat, Uplifting, Love, and Thoughtful'
      },
      {
        src: createUrl('projects/vibes_in/music_recommendation.webp'),
        title: 'Song Recommendations',
        description: 'This app will generate 20 songs based on user-selected vibes, all songs can be saved as a playlist.'
      }
    ]
  },
  {
    name: 'E-Ijazah App',
    description: 'An app that can easily verifies Ijazah authenticity via QR codes and facilitates application of certificate validation letter.',
    year: '2023',
    tech: ['Laravel', 'Vue.js', 'Typescript', 'Quasar UI', 'reCaptcha'],
    url: 'https://eijazah.bisniskoe.com/',
    image: createUrl('projects/e-ijazah.webp'),
    overview: [
      {
        src: createUrl('projects/e_ijazah/search.webp'),
        title: 'Search by ijazah number',
        description: 'User can verify their ijazah by inputing ijazah number'
      },
      {
        src: createUrl('projects/e_ijazah/identity.png'),
        title: 'Student Identity',
        description: 'If ijazah number is verified, the app will show the student identity.'
      },
      {
        src: createUrl('projects/e_ijazah/validity_letter_form.png'),
        title: 'Validity Letter Form',
        description: 'User can also make a request for Ijazah Validity Letter by filling the Validity Letter Form.'
      },
      {
        src: createUrl('projects/e_ijazah/admin_dashboard.png'),
        title: 'Dashboard for admin',
        description: 'Admins can access the dashboard to manage master data in the form of app settings, certificates of validity, ijazah, users and process applications for letters of validity.'
      }
    ]
  }
]

function createUrl (fileName: string) {
  const basePath = '/'
  return new URL(basePath + fileName, import.meta.url).href
}

export {
  me,
  about,
  experience,
  projects
}
