import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThunderstorm} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    return (<Navbar expand="lg" className={'sticky-top bg-light mb-3'}>
        <div className={'container'}>
            <Link to={"/"} className={'navbar-brand'}>
                <FontAwesomeIcon icon={faThunderstorm} className={`me-2 fs-2`}/>
                <span className={`fw-bold fs-3`}>Tanishq</span>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                    <NavItem>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/project" className="nav-link" >
                            Project
                        </Link>
                    </NavItem>
                </Nav>

            </Navbar.Collapse>
        </div>

    </Navbar>);
}