import { RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/layout/Layout';
import Router from './Components/Router/Router';

function App() {
  return (
    <div>
      <RouterProvider  router={Router}>
      <Layout/>
      </RouterProvider>
     
      
    </div>
  );
}

export default App;
