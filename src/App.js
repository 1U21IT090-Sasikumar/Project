import logo from './logo.svg';
import './App.css';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routerpage from './components/Routerpage';
import Content from './components/Content';
import Product from './components/Product';
// import Routerpage from './components2/Routerpage';
// import CartProvider from './components/CartProvider';
function App() {
  return (
    <div className="App">
      {/* <Routerpage/> */}
      <Product>
        <Routerpage/>
      </Product>
      {/* <Routerpage/> */}
    {/* <CartProvider/> */}
    </div>
  );
}

export default App;
