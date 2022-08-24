import '../../styles/Gallery.css'
import { Link } from 'react-router-dom'

function Gallery({ logements }) {

    return (
        <section className="gallery">
            {
                logements.map(({id, cover, title}) => (
                    <Link to={"/Details/" + id}  key={id} className="gallery-card">
                        <div className='image-background'>
                            <img src={cover} alt="flatImage" />
                            <h2>{title}</h2>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}

export default Gallery
