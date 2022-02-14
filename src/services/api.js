import axios from "axios";

const api = axios.create({
    baseURL: "https://api.pharma.cryptoguy.net/api/v1",
});

export default api;
