import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import NotFound from './Components/NotFound/NotFound'
import Home from './Components/Home/Home'
import Blog from './Components/Blog/Blog'
import About from './Components/About/About'
import MainLayout from './Components/MainLayout/MainLayout';
import PostDetails from './Components/Blog/PostDetails/PostDetails';

const router = createBrowserRouter([
 {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <PostDetails /> },
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
