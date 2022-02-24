<template>
    <div v-if="restaurants">
        <div v-for="(r, id) in restaurants" :key="id">
            <h1>{{ r.restaurant.restaurant_data.name }}</h1>
        </div>
        <button @click="fetchWithoutSSL">FETCH</button>
    </div>
</template>

<script>
import axios from "axios";
const https = require("https");

export default {
    name: "App",
    data() {
        return {
            restaurants: null,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            axios({
                method: "get",
                url: "http://142.93.107.238/api/restaurants",
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            }).then(({ data }) => (this.restaurants = data));
        },
        fetchWithoutSSL() {
            axios.get("http://142.93.107.238/api/restaurants").then((data) => console.log(data));
        },
    },
};
</script>
