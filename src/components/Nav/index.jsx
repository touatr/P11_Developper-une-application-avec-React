import '../../styles/Nav.css'
import { Link } from 'react-router-dom'

 
function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/" className='accueil-link active-link'><li>Accueil</li></Link>
                <Link to="/About"><li>A Propos</li></Link>
            </ul>
        </nav>
    )
}

export default Nav

