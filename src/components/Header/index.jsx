//Composant Header
import logo from '../../assets/LOGO.png'
import Nav from '../Nav'
import '../../styles/Header.css'

function Header() {
    return (
        <header>
            <img id="logo" src={logo} alt="logo"/>
            <Nav />
        </header>
    )
} 

export default Header