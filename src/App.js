
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <div><h2>Default</h2></div>
    },
    {
      path: '/home', element: <Home></Home>
    },
    {
      path: 'about', element: <About></About>
    },
    {
      path: 'products', element: <Products></Products>
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
