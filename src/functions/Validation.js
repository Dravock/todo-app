import Cookies from 'universal-cookie';
import axios from 'axios';
import Messages from '../Includes/enums/Messages.js';


export const Validation = async () => {

    const cookies = new Cookies()
    const token = cookies.get('token')

    
    if(typeof token === 'undefined') {
        throw Messages.unauthorized.message
    }

    return axios.get(process.env.REACT_APP_BASE_URL+'/login/checkauth.php',{headers: {'Authorization':"Bearer " +token}})
                    .then((response)=>{
                        
                    }
                    )
                    .catch((error) => {
                        if(error.response.status === 401){
                            throw Messages.unauthorized.message 
                        }else{
                            throw Messages.error.message
                        }
    })
}