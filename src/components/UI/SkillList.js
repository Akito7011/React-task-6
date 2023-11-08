import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Skill({skill}) {
    return (<div className={"col-12 col-lg-6 mb-5 mt-2"}>
        <div className={'row align-items-center'}>
            <FontAwesomeIcon icon={skill.icon} className={'fs-1 col-3'}/>
            <div className={'col-8'}>
                <h3>{skill.name}</h3>
                <p>{skill.exp}</p>
            </div>
        </div>
    </div>);
}


export default function SkillList({skills}) {
    return (<div className={'row flex-wrap'}>
        <h4 className={'mb-4'}>These are my skills - </h4>
        {skills.map((skill, index) => (
            <Skill key={index} skill={skill}/>
        ))}
    </div>);
}