
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Main from './layout/Main';
import Friend from './Components/Friends/Friend';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home', element: <Home></Home>
        },
        {
          path: '/', element: <Home></Home>
        },
        {
          path: 'products', element: <Products></Products>
        },
        {
          path: 'friend', element: <Friend></Friend>
        },
        {
          path: 'about', element: <About></About>
        }
      ]
    }



  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
