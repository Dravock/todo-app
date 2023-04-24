// IMPORTS FOR WEBSITE DESIGN
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './Pages/Privat/App';
import Login from './Pages/Public/Login';
import { Validation } from './functions/Validation';

// HEADER/FOOTER IMPORTS
import Cookies from 'universal-cookie';




function Router() {

  const cookies = new Cookies()
  const token = cookies.get('token')

useEffect(() => {
  (async()=>{
      try{
        if(token !== undefined && token !== null && token !== "" ){
          Validation()
        }
      } catch (error) {
      }
  })() 
}, [token])





return (
    <>
      <BrowserRouter basename='/todo-app'>
        {/* REACT ROUTER ROUTES */}
        <Routes>
            {/* PUBLIC PAGES */}
            <Route path='/' element={<Login />} />

            {/* Private Pages */}
            <Route path='/app' element={<App />} />

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default Router;
