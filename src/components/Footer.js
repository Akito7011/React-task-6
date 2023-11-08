import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright, faHome, faRocket, faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


let list = [
    {
        name: "Home",
        route: "/",
        type:faHome
    },
    {
        name: "About",
        route: "/about",
        type:faUser
    }
    , {
        name: "Project",
        route: "/project",
        type:faRocket
    }

]

function NavListFooter({list}) {
    return <ul className={'nav'}>
        {list.map((item, index) => <li key={index}>
            <Link to={item.route} className="nav-link text-white">
                <FontAwesomeIcon icon={item.type} className={'d-block d-lg-none'}/>
                <span className={'d-none d-lg-block'}>{item.name}</span>
            </Link>
        </li>)}
    </ul>
}

export default function Footer() {
    return (
        <footer className={`bg-dark mt-3 p-5`}>
            <div className="container">
                <div className={'row align-items-center'}>
                    <div className={'col-7'}>
                        <NavListFooter list={list}/>
                    </div>
                    <div className={'col-5'}>
                        <div className={'ms-2 text-white'}>
                            <FontAwesomeIcon icon={faCopyright}/> 2023 by Akito7011
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}