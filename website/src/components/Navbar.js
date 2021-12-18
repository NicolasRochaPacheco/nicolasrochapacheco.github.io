import "./Navbar.css"
import { NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <div className="navbar">

            {/* Logo link to home */}
            <NavLink to="/" className="navbar-link navbar-logo">
                NRP <i className="fas fa-microchip" />
            </NavLink>
            
            <ul className="navbar-menu">    
                <NavLink
                    to="/education"
                    className={({isActive}) => 
                        isActive ? "navbar-link navbar-active":"navbar-link" 
                    }
                >
                    <li>EDUCATION</li>
                </NavLink>

                <NavLink
                    to="/experience"
                    className={({isActive}) => 
                        isActive ? "navbar-link navbar-active":"navbar-link" 
                    }
                >
                    <li>EXPERIENCE</li>
                </NavLink>

                <NavLink 
                    to="/skills" 
                    className={({isActive}) => 
                        isActive ? "navbar-link navbar-active":"navbar-link" 
                    }
                >
                    <li>SKILLS</li>
                </NavLink>

                <NavLink 
                    to="/contact" 
                    className={({isActive}) => 
                        isActive ? "navbar-link navbar-active":"navbar-link" 
                    }
                >
                    <li>CONTACT</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default NavBar;