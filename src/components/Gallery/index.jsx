import '../../styles/Gallery.css'
import { flatList } from '../../data/flatList'

function Gallery() {

    return (
        <section className="gallery">
            {
                flatList.map(({id, cover, title}) => (
                    <a href="#" key={id} className="gallery-card">
                        <div className='image-background'>
                            <img src={cover} alt="flatImage" />
                            <h2>{title}</h2>
                        </div>
                    </a>
                ))
            }
        </section>
    )
}

export default Gallery
