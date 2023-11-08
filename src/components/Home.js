import Header from "./UI/Header";
import Paragraph from "./UI/Paragraph";
import SocialList from "./UI/SocialList";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

// social list
let list = [
    {
        route:"https://www.linkedin.com/in/tanishq-tanwar/",
        type:faLinkedin
    },
    {
        route:"https://github.com/Akito7011",
        type:faGithub
    },
    {
        route:"https://www.instagram.com/tanishq.404_error/",
        type:faInstagram
    }

];

// home page content
let content = {
    header:"Hi, I'm Tanishq Tanwar .",
    paragraph:`I am an aspiring Pentester and right now learning about full-stack web development. I am also a cybersecurity enthusiast and practicing about bug bounty. `,
}


export default function Home(){
    return (
        <div className={'rounded-2 p-4 p-lg-5 bg-light'}>
            <div className={'mb-5 mb-3-lg p-5-lg p-3'}>
                <Header content={content.header}/>
                <Paragraph content={content.paragraph}/>
            </div>

            <hr/>
            
            <div className={'my-5 my-3-lg p-5-lg p-3'}>
                <h1 className={'fw-light mb-4'}>Project Carousel</h1>
                <div className={'bg-dark rounded'} style={{height:"400px"}}>
                    <h1 className={'text-white text-center'} style={{paddingTop:"150px"}}>I have made a lot of web development projects on various topics and some are added here.</h1>
                </div>
            </div>

            <div className={'my-5 my-3-lg'}>
                <SocialList list={list}/>
            </div>
        </div>
    )
}