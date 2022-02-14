<template>
    <div>
        <div>
            <h1>Авторизация</h1>
            <input type="text" name="tell" v-model="username" />
            <input type="password" name="password" v-model="password" />
            <button @click="handleAuth">Авторизация</button>
        </div>

        <button>Профиль пользователя</button>
    </div>
</template>

<script>
import api from "../services/api";

export default {
    name: "PharmaHub",
    data() {
        return {
            username: "+77052279866",
            password: 1111,
        };
    },
    methods: {
        async handleAuth() {
            const bodyFormData = new FormData();
            bodyFormData.append("tell", this.username);
            bodyFormData.append("password", this.password);

            try {
                const { data } = await api({
                    method: "post",
                    url: "/auth/login",
                    data: bodyFormData,
                    headers: { "Content-Type": "multipart/form-data" },
                });
                console.log(data);
            } catch (error) {
                console.log("ERROR", error);
            }
        },
        handleProfile() {},
    },
};
</script>

<style lang="css" scoped>
.auth__root {
    text-align: center;
    margin-top: 20px;
}

input {
    display: block;
}

button {
    background-color: #ff3f61;
    padding: 20px;
    border: 0px;
    border-radius: 14px;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
}

button:first-child {
    margin-right: 14px;
}
</style>
