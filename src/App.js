
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
          path: 'friend',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friend></Friend>
        }

      ],

    },
    {
      // eikhane about er modde header ta diye kora hoise

      path: 'about', element: <About></About>
    },
    {
      path: '*', element: <div><h1>You route not Found</h1></div>
    }



  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
