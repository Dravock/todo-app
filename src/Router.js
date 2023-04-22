// IMPORTS FOR WEBSITE DESIGN
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './Pages/Privat/App';
import Login from './Pages/Public/Login';
import { Validation } from './functions/Validation';

// HEADER/FOOTER IMPORTS
import Cookies from 'universal-cookie';




function Router() {

  const [userLoggedIn,setUserLoggedIn]=useState(false)
  const [userData,setUserData] = useState([{role:"",first_name:"",last_name:""}])

  const cookies = new Cookies
  const token = cookies.get('token')

  const userDataTest =[{
    vorname:"deryan",
    nachname:"keskin",
    role:"meister"
  }]

// useEffect(() => {
//   (async()=>{
//       try{
//         if(token !== undefined && token !== null && token !== "" ){
//           Validation()
//           setUserLoggedIn(true)
          
//         }
//       } catch (error) {
//         setUserLoggedIn(false)
//       }
//   })() 
// }, [token])





return (
    <>
      <BrowserRouter basename='/to-do-app'>
        {/* REACT ROUTER ROUTES */}
        <Routes>
            {/* PUBLIC PAGES */}
            <Route path='/' element={<Login />} />

            {/* NAVBAR LINKS */}

            {/* Private Pages */}
            <Route path='/app' element={<App />} />

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default Router;
