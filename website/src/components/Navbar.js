import "./Navbar.css"

function NavBar(){
    return (
        <div className="navbar">
            <div className="navbar-logo">
                NicolasRochaPacheco
            </div>
            <ul className="navbar-menu">
                <li className="active">EDUCATION</li>
                <li>PROJECTS</li>
                <li>EXPERIENCE</li>
                <li>SKILLS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
}

export default NavBar;