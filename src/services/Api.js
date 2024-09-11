
import axios from 'axios';

export const categoriesMovies = async (API_URL)=>{

    try{
          let response = await axios.get(API_URL);
          return response.data;
    }
    catch(error){
         console.log('error while calling api', error.message);
         return error.response;
    }
}

// 9facf8213e4597c4a88a15accae142ec  api key