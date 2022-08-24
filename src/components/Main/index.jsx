import Banner from '../Banner'
import '../../styles/Main.css'
import Gallery from '../Gallery';


function Main({logements}) {
    return (
        <main>
            <Banner />
            <Gallery logements={logements}/>
        </main>
    )
}

export default Main;