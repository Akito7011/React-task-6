// about page content
import Header from "./UI/Header";
import Paragraph from "./UI/Paragraph";
import SocialList from "./UI/SocialList";
import {
    faBootstrap,
    faChrome,
    faCss3,
    faGithub,
    faHtml5,
    faInstagram,
    faJs,
    faLinkedin,
    faNodeJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import SkillList from "./UI/SkillList";
import {
    faCamera,
    faCode,
    faCoffee,
    faComputer,
    faDatabase,
    faGamepad,
    faMusic,
    faTools,
} from "@fortawesome/free-solid-svg-icons";
import InterestList from "./UI/InterestList";
import ToolList from "./UI/ToolList";

// about content
let content = {
    header: "This is about me.",
    paragraph:[
        "I am student pursuing B.Tech with specialization in Cybersecurity and I aspire to become a pentester soon. ",
        "I have started learning web development and now I want to keep going deeper to learn more techniques."]


};

// social list
let list = [
    {
        route: "https://www.linkedin.com/in/tanishq-tanwar/",
        type: faLinkedin,
    },
    {
        route: "https://github.com/Akito7011",
        type: faGithub,
    },
    {
        route: "https://www.linkedin.com/in/tanishq-tanwar/",
        type: faInstagram,
    },
];

// skill list
let skill_list = [
    {
        name: "JavaScript",
        icon: faJs,
        exp: "6 month learning Experience, including functional programming concepts, and others.",
    },
    {
        name: "Express.js : Node.js",
        icon: faNodeJs,
        exp: "2 months Learning Experience for MERN full-stack project.",
    },
    {                     
        name: "React.js",
        icon: faReact,
        exp: "2 months Learning Experience for MERN full-stack project.",
    },
    {
        name: "MySQL",
        icon: faDatabase,
        exp: "1 year Learning Experience with DB management and API.",
    },
    {
        name: "MongoDB",
        icon: faDatabase,
        exp: "2 months Learning Experience for MERN full-stack project.",
    },
    {
        name: "HTML",
        icon: faHtml5,
        exp: "1 year experience since the start of the Web Development.",
    },
    {
        name: "CSS",
        icon: faCss3,
        exp: "1 year experience since the start of the Web Development.",
    },
    {
        name: "Bootstrap",
        icon: faBootstrap,
        exp: "6 months experience since the start of the Web Development.",
    },
];

// interest link
let interest_list = [
    faComputer,
    faCode,
    faGamepad,
    faMusic,
    faCamera,
    faCoffee,
];

// tool list
let tool_list = [
    {
        name: "Google Chrome",
        icon: faChrome,
        description: "The best web browser for web development.",
    },
    {
        name: "Visual Studio Code",
        icon: faTools,
        description: "Light weight text editor.",
    },
    {
        name: "MySQL Workbench",
        icon: faTools,
        description: "By using this I manage databases and API's .",
    },
];

export default function About() {
    return (
        <div className={"bg-light rounded-2 p-3 p-lg-5"}>

            <div className={"my-2"}>
                <Header content={content.header}/>
                <Paragraph content={content.paragraph}/>
            </div>


            <hr/>


            <div className={"my-5"}>
                <SkillList skills={skill_list}/>
            </div>


            <hr/>


            <div className={"my-5"}>
                <ToolList tools={tool_list}/>
            </div>


            <hr/>

            <div className={"my-5"}>
                <InterestList interests={interest_list}/>
            </div>




            <div className={"my-5 my-3-lg"}>
                <SocialList list={list}/>
            </div>


        </div>
    );
}
