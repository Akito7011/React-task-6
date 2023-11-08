import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ToolItem({tool}) {
    return <div className={"col-12 col-lg-6 my-4"}>
        <div className={"row align-items-center"}>
            <FontAwesomeIcon icon={tool.icon} className={"fs-1 col-3"}/>
            <div className={"col-8"}>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
            </div>
        </div>
    </div>;
}

export default function ToolList({tools}) {
    return (
        <div>
            <h4 className={'mb-4'}>My Favourite development tool list - </h4>


            <div className={'row'}>
                {tools.map((tool, index) => (
                    <ToolItem key={index} tool={tool}/>))}
            </div>
        </div>
    )
}