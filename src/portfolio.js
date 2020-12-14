
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section
import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sankalan Dasgupta",
  title: "Hi all, I'm Sankalan",
  subTitle: emoji("A passionate Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Express and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/14qFq5xfQvISEjuVTaTpzLAdOYoZHVVTv/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Sankalan47",
  linkedin: "https://www.linkedin.com/in/sankalan-dasgupta-ba390616a/",
  gmail: "sankalandasgupta@gmail.com",
  facebook: "https://www.facebook.com/sankalan.dasgupta.75",
  medium: "https://medium.com/@sankalandasgupta",
  twitter: "https://twitter.com/Sankalan47",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Netaji Subhash Engineering College",
      logo: require("./assets/images/download.jfif"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "June 2018 - 2022",
      
    },
    {
      schoolName: "Jalpaiguri Zilla School",
      logo: require("./assets/images/jzs.jfif"),
      subHeader: "Higher Secondary Education",
      duration: "September 2016 - April 2018",
      desc: "10 + 2 Education with Computer Science",
      
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Member",
      company: "DSC NSEC",
      companylogo: require("./assets/images/dsc nsec.png"),
      date: "",
      desc: "Helped team for organizing events"
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Sankalan47", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "Some Projects of Mine",
  projects: [
    {
      image: require("./assets/images/Chatly.png"),
      link: "https://github.com/Sankalan47/chat-app-using-socket.io"
    },
    {
      image: require("./assets/images/UPBOOK.png"),
      link: "https://github.com/Sankalan47/mernSocialMediaApp"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hacktober Fest",
      subtitle: "Successfully submitted 4 Pull requests and completed Hacktober Fest.",
      image: require("./assets/images/hcktbr.png"),
      footerLink: [
        
      ]
    },
    {
      title: "JavaScript Essential Training",
      subtitle: "Certificate.",
      image: require("./assets/images/lkndn.png"),
      footerLink: [{ name: "View Certificate", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },
    {
      title: "React Essential Training",
      subtitle: "Certificate.",
      image: require("./assets/images/lkndn.png"),
      footerLink: [{ name: "View Certificate", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },
    {
      title: "Node Essential Training",
      subtitle: "Certificate.",
      image: require("./assets/images/lkndn.png"),
      footerLink: [{ name: "View Certificate", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },
    {
      title: "Express Essential Training",
      subtitle: "Certificate.",
      image: require("./assets/images/lkndn.png"),
      footerLink: [{ name: "View Certificate", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },
    
    
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://sankalandasgupta.medium.com/using-fetch-method-javascript-d20cb7ff6aa5",
      title: "How to use Fetch Api",
      description: "What is Fetch Api, How to use Fetch() method to fetch resources"
    },
    {
      url: "https://sankalandasgupta.medium.com/http-in-a-brief-55dd5f35029f",
      title: "Why is HTTP",
      description: "Some basic key concepts of HTTP"
    }
  ]
};

// Talks Sections

// const talkSection = {
//   // title: "TALKS",
//   // subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ]
// };

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8967850692",
  email_address: "sankalandasgupta@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "Sankalan47"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, podcastSection, contactInfo , twitterDetails};
