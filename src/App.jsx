import './App.css'
import Footer from './Components/Footer/Footer'
import Footer2 from './Components/Footer2/Footer2'
import Gallery from './Components/Gallery/Gallery'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Pagination from './Components/Pagination/Pagination'
import ProductInformation from './Components/Product Info/ProductInformation'
import Navbar from './Components/Navbar/navbar'

function App() {


  return (
    <>
      <Navbar/>
      <ProductDetails />
      <ProductInformation />
      <Gallery />
      <Pagination />
      <Footer />
      <Footer2 />

    </>
  )
}

export default App
