import AppNavbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Slider from "./component/Slider";
import Footer from "./component/InfoContact";


function App() {
  return (
    <>
      <AppNavbar />
      <Slider />
      <ProductList />
      <div className="d-flex justify-content-center">
        <img src = "./Map/Map.gif" alt="Map" style={{ width: '80%', marginTop: '20px', marginBottom: '20px'}} />
      </div>
      <Footer />
    </>
  );
}

export default App;
