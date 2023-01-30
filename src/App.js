import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import Cart from './pages/Cart';
import Collections from './pages/Collections';
import Home from './pages/Home';
import Layout from './setup/Layout';
import Loader from './components/Loader';
import Login from 'pages/Login';
import Products from './pages/Products';
import SignUp from 'pages/SignUp';

const App = () => {


  return (
    <>
      <div className="fonts_license">
        Font made from{' '}
        <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed
        by CC BY 3.0
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categorias/:id" element={<Collections />} />
          <Route
            path="/productos/:id"
            element={

              <Products />

            }
          />
          <Route path="/carrito" element={<Cart />} />

          <Route >


          </Route>

          <Route >
            <Route path="/cuenta/login" element={<Login />} />
            <Route path="/cuenta/signup" element={<SignUp />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
