import {Route, Routes} from "react-router-dom";

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {

    return <>
        <NavBar/>
        <div className={'container-lg container-fluid'}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
        <Footer/>
    </>;

}

export default App;
