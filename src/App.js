import CheapestProducts from "./CheapestProducts";
import ElectroMenagerProducts from "./ElectroMenagerProducts";
import Footer from "./Footer";
import Header from "./Header";
import InformatiqueProducts from "./InformatiqueProducts";
import LastProducts from "./LastProducts";

function App() {
  return (
    <>
      <Header />
      <LastProducts />
      <ElectroMenagerProducts />
      <CheapestProducts />
      <InformatiqueProducts />
      <Footer />
    </>
  );
}

export default App;
