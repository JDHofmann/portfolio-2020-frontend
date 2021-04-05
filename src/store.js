export const projects = [
    {
        path: "/candg",
        title : "C&G E-commerce",
        lesson: "I had a great opportunity to learn about realistic retail product databases while working on this project. In accounting for every possible product option, I developed a real appreciation for an very commonly used database design. I worked to make the site keyboard accessible, and integrating local storage to store user's cart items was a fun challenge as well.",
        description: "C&G is a fully responsive e-commerce site utilizing a retail product database, a React & NextJS user interface, and a customized shopping cart. Styled with custom SASS and supported by a Ruby on Rails API.",
        links : [
            {linkUrl: "https://candg.netlify.app/",
            linkText: "Live Demo"},
            {linkUrl: "https://github.com/JDHofmann/plugs-frontend",
            linkText: "Frontend Repo"},
            {linkUrl: "https://github.com/JDHofmann/plugs-backend",
            linkText: "Backend Repo"}
        ]
    },
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