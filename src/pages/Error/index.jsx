import { Link } from 'react-router-dom'
import '../../styles/Error.css'
import Header from '../../components/Header'

function Error() {
    return (
        <div className='error'>
            <Header />
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retournez sur la page d'accueil</Link>
        </div>
    )
}

export default Error