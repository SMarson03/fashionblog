import './App.css'
import Article from './components/Article'
import Header from './components/Header'
import Navbar from './components/Navbar'
import pic1 from './assets/blog-image-1.jpg'
import pic2 from './assets/blog-image-2.jpg'
import Footer from './components/Footer'


function App() {
 
  return (
    <>
      <div className="p-10 border-1-4 ml-6 m-6">
      <Header/>
      <Navbar/>
      <Article text="11/12/20" text2="On the Street in Brooklyn" image={pic1}/>
      <Article text="11/12/20" text2="Vintage in Vogue" image2={pic2}/>
    <Footer/>
    </div>
    </>
  )
}

export default App
