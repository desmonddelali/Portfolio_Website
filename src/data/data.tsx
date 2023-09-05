import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import testimonialImage from '../images/dark_background.png';
import heroImage from '../images/ghana-wallpapers.jpeg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profile.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Personal Portfolio',
  description: "Created with React and Typescript",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Desmond Delali Atakpla.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Ghanaian based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently an intern
        at <strong className="text-stone-100">Responsible AI Lab</strong> helping in Research Work and building AI solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me binging <strong className="text-stone-100">movies</strong>,
        practicing my <strong className="text-stone-100">swimming</strong>, or exploring new{' '}
        <strong className="text-stone-100">Technologies</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'src/images/portfolio/Desmond-CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      onClick: function () {
        // URL to your PDF file
        const pdfUrl = 'https://drive.google.com/file/d/1YotnWtTd3Bh6CwNlCI8v2wHKSv_om8RW/view?usp=sharing';
  
        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');
      }
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a versatile software developer proficient in modern web technologies such as React, Tailwind CSS, TypeScript, and Node.js. My expertise extends to mobile development using Flutter, and I am skilled in crafting efficient backend solutions. In addition, I have a solid foundation in machine learning with Python and TensorFlow. With a passion for clean code and user-centric design, I create seamless and impactful digital experiences. Let's collaborate to turn your ideas into reality.`,
  aboutItems: [
    {label: 'Location', text: 'Accra, GH', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Ghanaian', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology Innovation,Blogging,Sci-Fi Enthusiast', Icon: SparklesIcon},
    {label: 'Study', text: 'Kwame Nkrumah University of Science and Technology', Icon: AcademicCapIcon},
    
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 5,
      },
      {
        name: 'Japanese',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 8,
      },
      {
        name: 'Swift',
        level: 4,
      },
    ],
  },
  {
    name: 'Machine Learning Development',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Tensorflow',
        level: 7,
      },
      {
        name: 'Pytorch',
        level: 6,
      },
      {
        name: 'Sklearn',
        level: 7,
      },

    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2018 - September 2022',
    location: 'Kwame Nkrumah University of Science and Technology',
    title: 'Bachelor of Science in Telecommunications Enginnering',
    content: <>
    <p>During my time at Kwame Nkrumah University of Science and Technology, I acquired a comprehensive education in Telecommunication Engineering, equipping me with both theoretical knowledge and practical skills in this dynamic field.</p>
    <br/>
    <h2>Highlights:</h2>
    <p><strong>Telecom Fundamentals:</strong> Gained a solid understanding of signal processing, modulation, and transmission protocols.</p>
    <p><strong>Network Architecture:</strong> Proficient in designing, implementing, and managing communication networks, with expertise in protocols like TCP/IP.</p>
    <p><strong>Wireless Tech:</strong> Explored cellular networks, Wi-Fi, Bluetooth, and signal propagation techniques.</p>
    <p><strong>Signal Processing:</strong> Acquired skills in analyzing and manipulating digital signals for optimal transmission.</p>
    <br/>
    <h2>Skills Acquired:</h2>
    <p><strong>Problem Solving</strong>,<strong>Technical Proficiency</strong>,<strong>Collaboration</strong>,<strong>Adaptability</strong>,<strong>Project Management</strong>.</p>
    <br/>
    <p>My education has equipped me with a strong foundation to contribute to the innovative world of Telecommunication Engineering.</p>


    </>,
  },
  {
    date: 'November 2015 - May 2018',
    location: 'Pope John Senior High School and Minor Seminary',
    title: 'General Science',
    content: <p>My time at Pope John Senior High School and Minor Seminary studying General Science was a transformative experience that laid the groundwork for my academic and personal growth. This education encompassed subjects like Physics, Chemistry, Biology, and Mathematics, fostering critical thinking and a solid scientific foundation.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2022 - October 2023',
    location: 'Responsible AI Lab',
    title: 'Research Assistant',
    content: (
      <>
        During my tenure as an  Research Assistant at the Responsible AI Lab, I had the privilege of immersing myself in a dynamic environment that fostered innovation, collaboration, and ethical AI development. This experience enriched my understanding of cutting-edge technologies and principles of responsible artificial intelligence.
        <br />
        <h2>Skills Acquired:</h2>
        <p><strong>AI Research and Development:</strong>Engaging with the research team, I actively contributed to the development of AI models and algorithms. This hands-on experience expanded my understanding of AI architectures, optimization techniques, and data preprocessing.</p>
        <p><strong>Ethical AI:</strong>I delved into the ethical considerations surrounding AI technologies, learning how to embed fairness, transparency, and accountability into AI systems. These insights underscored the importance of technology aligning with societal values.</p>
        <p><strong>Interdisciplinary Collaboration:</strong> Working alongside experts from diverse fields, I honed my ability to communicate complex technical concepts across disciplines. This skill enabled me to effectively contribute to discussions and projects spanning AI's broad spectrum.</p>
        <p><strong>Experimental Analysis:</strong>I conducted rigorous experiments to evaluate AI models' performance and behavior under various conditions. This practical approach heightened my analytical thinking and ability to draw meaningful conclusions from data.</p>
      
      </>
    ),
  },
  {
    date: 'July 2021 - October 2021',
    location: 'YAF Ghana',
    title: 'Assistant Coding Instructor',
    content: (
      <p>
        Taught programming languages C++ and Java to student Online through zoom. 
        <br />
        Provided a roadmap on beginners in coding mistakes. 
      </p>
    ),
  },
  {
    date: 'July 2021 - October 2021',
    location: 'TechWorld Boot Camp and Tournament',
    title: 'Participant',
    content: (
      <p>
        Participated in an intensive 8-week program centered on technology 
        innovation,design thinking and entrepreneurship.
      </p>
    ),
  },
  {
    date: 'October 2020 - January 2021',
    location: 'KrisTech IT Solutions',
    title: 'Apprenticeship',
    content: (
      <p>
        Learnt diagnostic test on computer hardware and software malfunctions.
        <br />
        Customer support and assistance to pinpoint faulty areas. 
        <br />
        Installation of software and programs. 
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Musah Ali',
      text: 'I had the pleasure of partnering with Desmond on a Flutter mobile app project. His dedication to crafting an exceptional user experience was evident in every line of code. Also his attention to design and responsiveness ensured the app stood out in a crowded market.',
      
    },
    {
      name: 'Prince Koranteng',
      text: 'Collaborating with Desmond on a challenging backend project was an enlightening experience. His proficiency in Node.js and their meticulous approach to problem-solving ensured that we achieved our project goals efficiently. His reliability and dedication are commendable.',
      
    },
    {
      name: 'Mr. Smith',
      text: 'Working with Desmond was a game-changer for our project. His expertise in React and Node.js brought our web application to life with an intuitive interface and seamless functionality. His commitment to delivering on time and their attention to detail truly impressed us.',
      
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'My email is always available to reach me the earliest possible',
  items: [
    {
      type: ContactType.Email,
      text: 'desmon.delali@gmail.com',
      href: 'desmon.delali@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Accra, Ghana',
      href: 'https://www.google.ca/maps/place/Accra/@5.5911167,-0.5094167,10z/data=!3m1!4b1!4m6!3m5!1s0xfdf9084b2b7a773:0xbed14ed8650e2dd3!8m2!3d5.6037168!4d-0.1869644!16zL20vMGZueWM?entry=ttu',
    },
    {
      type: ContactType.Twitter,
      text: '@desmonddelali',
      href: 'https://twitter.com/LameCabin_',
    },
    {
      type: ContactType.Github,
      text: 'desmonddelali',
      href: 'https://github.com/desmonddelali',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/desmonddelali'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/13564275/desmond-delali'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/desmond-atakpla-a00790175/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/desm_dev/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/LameCabin_'},
];
