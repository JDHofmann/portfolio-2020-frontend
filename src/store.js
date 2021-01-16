export const projects = [
    {
        path: "/tombardier",
        title : "Tombardier",
        lesson: "Initially I had a lot of difficulty implementing active storage and cloud storage into Tombardier. My solution was to deconstruct each of Tombardier's functionalities into it's own application. From there, I combined functionalities one at a time until I achieved my MVP.",
        description: "Tombardier comes out of the box ready to provide users with their own personal portfolio site. With an inline editable UI, users can edit content right in their browsers. Built with React, Redux, Ruby on Rails, Active Storage, and AWS cloud storage.",
        gif: '/images/Tombardier.gif',
        links : [
            {linkUrl: "https://tombardier.netlify.app/",
            linkText: "Live Demo"},
            {linkUrl: "https://github.com/JDHofmann/tombardier-frontend-dev",
            linkText: "Frontend Repo"},
            {linkUrl: "https://github.com/JDHofmann/tombardier-backend-dev",
            linkText: "Backend Repo"},
            {linkUrl: "https://www.youtube.com/watch?v=p_RS2x-V300",
            linkText: "YouTube Demo"}
        ]
    },
    {
        path: "/bestbey",
        title : "Bestbey",
        lesson: "I had a great opportunity to learn about realistic retail product databases while working on this project. Accounting for every possible product option is a bigger undertaking than I anticipated. I developed a real appreciation for an very commonly used database design.",
        description: "Bestbey is an e-commerce site utilizing a retail product database, a full user interface, and a customized shopping cart. Built with React and a Ruby on Rails API.",
        links : [
            // {linkUrl: "https://bestbey.netlify.app/",
            // linkText: "Live Demo"},
            {linkUrl: "https://github.com/JDHofmann/bestbey-frontend",
            linkText: "Frontend Repo"},
            {linkUrl: "https://github.com/JDHofmann/bestbey-backend-v2.1",
            linkText: "Backend Repo"}
        ]
    },
    {
        path: "/starwars",
        title : "Star Wars Quiz",
        lesson: "Developing this quiz showed my the true value in designing mobile first. After attempting to work backwards from a design aimed at desktop sizing, I eventually rebuilt my layout from the ground up. I also learned to always have your facts straight when talking about Star Wars.",
        description: "A trivia game that tests your knowledge of Star Wars. The quiz is 10 questions where you can find out if you have what it takes to become a Jedi Master. Built with HTML5, CSS, Javascript, and Jquery.",
        gif: '/images/starwars.gif',
        links : [
            {linkUrl: "https://jdhofmann.github.io/Star-Wars-Quiz/",
            linkText: "Live Demo"},
            {linkUrl: "https://github.com/JDHofmann/Star-Wars-Quiz",
            linkText: "Github Repo"}
        ]
    }

]