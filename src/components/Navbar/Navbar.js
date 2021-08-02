import './Navbar.css'
import { Button } from 'react-bootstrap';

const Navbar = ({ buttonclicked }) => {
    const clicked = () => {
        buttonclicked(true);
    }
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">LGM Task 2</h1>
            <Button className="nav-button" onClick={clicked}>Get Users From Api</Button>
        </nav>
    )
}
export default Navbar;