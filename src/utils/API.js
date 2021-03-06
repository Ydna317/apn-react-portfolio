import weatherDashboard from "../assets/images/weatherDashboard.png";
import googleBooks from "../assets/images/googleBooksSearch.jpg";
import employeeTracker from "../assets/images/employeeTracker.jpg";
import nodejsLogo from "../assets/images/nodejsLogo.svg";
import mongodbLogo from "../assets/images/mongodbLogo.svg";
import mysqlLogo from "../assets/images/mysqlLogo.svg";
import expressjsLogo from "../assets/images/expressjsLogo.svg";
import jqueryLogo from "../assets/images/jqueryLogo.svg";
import htmlLogo from "../assets/images/htmlLogo.svg";
import cssLogo from "../assets/images/cssLogo.svg";
import javascriptLogo from "../assets/images/javascriptLogo.svg";
import budgetBoss from "../assets/images/budgetboss.png";
import fitnessTracker from "../assets/images/fitnessTracker.png";
import iShip from "../assets/images/iShip.png";
import lifeCruiser from "../assets/images/lifeCruiser.png";



const projects = [
    {
        title: "Budget Boss",
        description: "Command your budget and stay organized with both online and offline features!",
        imageUrl: budgetBoss,
        githubUrl: "https://github.com/Ydna317/Budget-Boss",
        deployedUrl: "https://budget-boss.herokuapp.com/"
    },
    {
        title: "Employee Manager",
        description: "Manage your staffing and roster with an integrated command line system. Our application will allow you to create, update, and delete anything from users, salaries, to departments and managers. The all in one employee manager.",
        imageUrl: employeeTracker,
        githubUrl: "https://github.com/Ydna317/employeeManager",
    },
    {
        title: "iShip",
        description: "Compare your shipping needs and get the best rates from the most popular shipping companies out there.",
        imageUrl: iShip,
        githubUrl: "https://github.com/Noreldin-S/iship",
        deployedUrl: "https://we-ship.herokuapp.com/"
    },
    {
        title: "Fit Companion",
        description: "Track your fitness goals and have a personalized record keeping of your physical success.",
        imageUrl: fitnessTracker,
        githubUrl: "https://github.com/Ydna317/fitCompanion",
        deployedUrl: "https://fit-companion.herokuapp.com/"
    },
    {
        title: "lifeCruiser",
        description: "Your personal traveling record keeper. lifeCruiser allows you to create a history of your traveled places and allows you to find the best flights at any given notice to wherever you want to go!",
        imageUrl: lifeCruiser,
        githubUrl: "https://github.com/jrdrenth/LifeCruiser",
        deployedUrl: "https://jrdrenth.github.io/LifeCruiser/index.html"
    },
    {
        title: "One For All Weather",
        description: "Know the best weather for any given place at any time! The app that helps you plan ahead!",
        imageUrl: weatherDashboard,
        githubUrl: "https://github.com/Ydna317/ofaWeather",
        deployedUrl: "https://ydna317.github.io/ofaWeather/"
    },
    {
        title: "Google Book Search",
        description: "Online database for finding the perfect read.",
        imageUrl: googleBooks,
    },
        
];

const skills = [
    {
        title: "HTML",
        icon: htmlLogo
    },
    {
        title: "CSS",
        icon: cssLogo
    },
    {
        title: "JavaScript",
        icon: javascriptLogo
    },
    {
        title: "jQuery",
        icon: jqueryLogo
    },
    {
        title: "Bootstrap",
        icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
    },
    {
        title: "UIKit",
        icon: "https://cdn.iconscout.com/icon/free/png-64/uikit-285322.png"
    },
    {
        title: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    },
    {
        title: "Node.js",
        icon: nodejsLogo
    },
    {
        title: "MongoDB",
        icon: mongodbLogo
    },
    {
        title: "MySQL",
        icon: mysqlLogo
    },
    {
        title: "Express",
        icon: expressjsLogo
    },
    {
        title: "Visual Studio",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
    },
    {
        title: "Adobe Illustrator",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
    },
    {
        title: "Adobe Photoshop",
        icon: "https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png"
    },
    {
        title: "Adobe InDesign",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg"
    }
]

const credits = [
    {
        text: "HTML5 Logo",
        link: "https://www.w3.org/html/logo/#downloads"
    },
    {
        text: "CSS3 Logo",
        link: "https://worldvectorlogo.com/downloaded/css3"
    },
    {
        text: "JavaScript Logo",
        link: "https://commons.wikimedia.org/wiki/File:Javascript-shield.svg"
    },
    {
        text: "jQuery Logo",
        link: "https://brand.jquery.org/logos/"
    },
    {
        text: "Bootstrap Logo",
        link: "https://commons.wikimedia.org/wiki/File:Bootstrap_logo.svg"
    },
    {
        text: "UIKit Logo",
        link: "https://iconscout.com/icon/uikit"
    },
    {
        text: "React Logo",
        link: "https://commons.wikimedia.org/wiki/File:React-icon.svg"
    },
    {
        text: "Node.js Logo",
        link: "https://nodejs.org/en/about/resources/"
    },
    {
        text: "MongoDB Logo",
        link: "https://www.mongodb.com/brand-resources"
    },
    {
        text: "MySQL Logo",
        link: "https://www.mysql.com/about/legal/logos.html"
    },
    {
        text: "Express Logo",
        link: "https://commons.wikimedia.org/wiki/File:Expressjs.png"
    },
    {
        text: "Visual Studio Logo",
        link: "https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg"
    },
    {
        text: "Adobe Illustrator Logo",
        link: "https://commons.wikimedia.org/wiki/File:Adobe_Illustrator_CC_icon.svg"
    },
    {
        text: "Adobe Photoshop Logo",
        link: "https://commons.wikimedia.org/wiki/File:Photoshop_CC_icon.png"
    },
    {
        text: "Adobe InDesign Logo",
        link: "https://commons.wikimedia.org/wiki/File:Adobe_InDesign_CC_icon.svg"
    },
]

export default {
    getProjects: function () {
        return new Promise(resolve => {
            resolve(projects);
        });
    },
    getSkills: function () {
        return new Promise(resolve => {
            resolve(skills);
        });
    },
    getCredits: function () {
        return new Promise(resolve => {
            resolve(credits);
        });
    },
};