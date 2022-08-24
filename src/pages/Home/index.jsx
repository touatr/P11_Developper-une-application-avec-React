
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'

function Home({ logements }) {
  return  (
    <div>
      <Header />
      <Main logements={logements}/>
      <Footer />
    </div>
  )
}

export default Home
