import { Router, createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import router from './Routes/Router';

function App() {
  return <RouterProvider router={createBrowserRouter(router)}/>
   
  
}

export default App;
