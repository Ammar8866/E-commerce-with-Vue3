<template>
<!-- ----------------------------Login template---------------------------- -->
<img class="wave" src="../assets/background.png">
<div class="main-container">
    <div class="Social-img">
        <!-- <img src="../assets/Social.png"> -->
    </div>
    <div class="login-data">
        <form action="login.html">
            <img src="../assets/login profile.png">
            <h2 class="title">Welcome</h2>
            <div class="input-div">
                <div class="i">
                    <i class="fas fa-user"></i>
                </div>
                <div class="div-1">
                    <input id="username" type="text" v-model="username" class="input" placeholder="Username" autocomplete="off">
                </div>
            </div>
            <div class="input-div">
                <div class="i">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="div-1">
                    <input type="password" id="password" v-model="password" class="input" placeholder="Password">
                </div>
            </div>
            <a href="#">Forgot Password?</a>

            <a class="btn" v-on:click="myBtn()">
                <p>Login</p>
            </a>
        </form>
    </div>
</div>
</template>

<script>
import {
    LOADING_SPINNER_SHOW_MUTATION
} from '../store/storeconstants';
import {
    mapMutations
} from 'vuex';
import Header from './Header.vue';
export default {
    name: 'Login',
    cpmponents: {
        Header,
    },

    data() {
        return {
            username: '',
            password: '',

        }
    },

    // ------------------------Loading spinner on Login System-----------------------
    methods: {
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),

        // ------------------------------------------Login Conditions----------------------------------

        async myBtn() {
            if (password.value !== "" && username.value !== "") {
                this.showLoading(true)
                try {
                    const arr = [];
                    const response = await fetch("https://dummyjson.com/auth/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: this.username /*---kminchelle---*/ ,
                            password: this.password /*---0lelplR---*/ ,
                        }),
                    });

                    if (response.status !== 400) {
                        console.log("success", response.status);
                        this.$router.push({
                            name: 'Cart'
                        })
                    } else {
                        console.log("failed");
                        alert("Incorrect password or email!");
                    }
                    arr.push({
                        username: `username is : ${username.value}`
                    });
                    arr.push({
                        password: `password is : ${this.password.value}`
                    });
                    localStorage.setItem("", JSON.stringify(arr));
                } catch (error) {
                    this.showLoading(false);
                    console.log(error, "error");
                }
                this.showLoading(false);
            } else {
                console.log("failed");
                alert("Please Enter Both field!");
            }
        },
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
}

.wave {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-size: cover;

}

.main-container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;
    padding: 0 2rem;
}

.Social-img {
    display: flex;
    justify-content: flex-end;
    align-items: center;

}

.login-data {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
}

.Social-img img {
    width: 500px;
}

form {
    width: 360px;
}

.login-data img {
    height: 100px;
}

.login-data h2 {
    margin: 15px 0;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    font-size: 2.9rem;
}

.login-data .input-div {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #000000;
}

.login-data .input-div {
    margin-top: 0;
}

.i {
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.input-div>div>input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 2.7rem;
    font-size: 1.2rem;
    color: #000000;
    font-family: 'poppins', sans-serif;
}

a {
    display: block;
    text-align: right;
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-size: 0.9rem;
    transition: .3s;
}

a:hover {
    color: #38d39f;
}

.btn {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #0c1ec4, #38d39f, #0c1ec4);
    background-size: 200%;
    font-size: 1.2rem;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    margin: 1rem 0;
    cursor: pointer;
    transition: .5s;

}

.btn p {
    align-items: center;
    padding: 15px 143px 0px 0px;
}

.btn:hover {
    background-position: right;
}

@media screen and (max-width: 1050px) {
    .container {
        grid-gap: 5rem;
    }
}

@media screen and (max-width: 1000px) {
    form {
        width: 290px;
    }

    .login-content h2 {
        font-size: 2.4rem;
        margin: 8px 0;
    }

    .Social-img img {
        width: 400px;
        display: none;
    }
}

@media screen and (max-width: 900px) {
    .main-container {
        grid-template-columns: 1fr;
    }

    .img {
        display: none;
    }

    .login-data {
        justify-content: center;
    }
}
</style>
