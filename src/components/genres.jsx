const axios = require('axios');
function Genres (){
const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/genres',
    params: {
      output_language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'f889bc00ebmshff0aba9d228e12ap1d5235jsn947464232414',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  const dataArray = Object.entries(options).map(([key, value]) => ({ key, ...value }));
  
  try {
      const response =  axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
      return(
        
        {dataArray}
        
      )
  }
}
  export default Genres;