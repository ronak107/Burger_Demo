import axios from "axios";

const instance = axios.create({
    baseURL:"https://burger-1070-default-rtdb.firebaseio.com/"
})

export default instance;