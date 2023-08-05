import axios from "axios";

export default axios.create({
   baseURL:'https://api.rawg.io/api',
   params:{
    key:'a30610951fc04acab3df72c0b628d7d5'
   }
})