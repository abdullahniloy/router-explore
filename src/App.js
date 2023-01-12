
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <div><h2>Default</h2></div>
    },
    {
      path: '/home', element: <div><h2>Home</h2></div>
    },
    {
      path: 'about', element: <div><h2>About</h2></div>
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
