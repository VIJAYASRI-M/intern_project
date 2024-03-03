import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductsList from "./pages/ProductsList";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddProducts from "./pages/AddProducts";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/products" element={<ProductsList />}></Route>
          <Route path="/addproducts" element={<AddProducts />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
