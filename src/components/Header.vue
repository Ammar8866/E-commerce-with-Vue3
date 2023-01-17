<template>
<header>

    <nav>
        <div class="navigation">
            <div class="logo">
                <i class="fa-solid fa-cart-shopping"></i>
                <router-link to="/Home" class="no-underline">
                    Shop.in
                </router-link>

            </div>
            <div class="newmenu">
                <router-link to="/Home">Home</router-link>
                <router-link to="/Shop">Shop</router-link>
                <router-link to="/Blog">Blog</router-link>
                <a href="/Home#contact" id="response1">Contact us</a>
                <router-link to="/Login" id="response1">Login</router-link>
            </div>

            <div class="icons">
                <a>
                    <input type="text" id="searching" placeholder="Search" v-model="queryEntered">
                    <router-link :to="{name: 'Search' , params:{query:queryEntered}}"> <button class="sercbtn"><i class="fa-solid fa-magnifying-glass"></i></button></router-link>
                </a>
                <router-link to="/Login"><button class="cart" id="cart2" data-toggle="dropdown">Cart</button></router-link>
                <a href="/Login" id="response2">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </a>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {
    name: 'Header',

    data() {
        return {
            queryEntered: " ",
        }

    },
}
</script>

<style scoped>
/* --------------------------HEADER------------------- */
.navigation {
    background-image: linear-gradient(to right, #e7f1ad, #ffffff, #e5f0aa);
    height: 65px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 50px;
    box-sizing: border-box;
    z-index: 2;
    /* animation magic */
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;

}

.logo i {
    margin-left: 30px;
    color: #000000;
    text-decoration: none;
    font-size: 25px;
    padding: 0px 6px 0px 0px;
}

.navigation .logo a {
    position: relative;
    color: #000000;
    font-size: 30px;
    font-family: "billabong", sans-serif;
    text-decoration: none;
}

.icons i {
    color: #000000;
    text-decoration: none;
    font-size: 22px;
    padding: 0px 5px 0px 20px;
}

#searching {
    width: 42%;
}

.sercbtn {
    width: 10%;
    background-color: rgb(247, 47, 47);
}

.sercbtn :hover {
    color: rgb(255, 255, 255);
}

.sercbtn i {
    padding: 0px 0px 0px 0px;
    font-size: small;
}

.cart {
    width: 25%;
    margin: 0px 0px 0px 20px;
    background-color: rgb(252, 19, 19);
    font-weight: bold;
    font-size: 17px;
    border-radius: 15px;
}

#cart2 {
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 17px;
    width: 25%;
}

#cart2:hover {
    color: #ffffff;
    background-color: rgb(255, 115, 0);
}

.newmenu a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    padding: 0px 5px 0px 30px;
    margin-left: 0px;
    font-weight: bold;
    font-size: 17px;
}

/* ------------------------------------MEDIA QUERIES MOBILE RESPONSIVE-------------------------- */

@media only screen and (min-width: 300px) and (max-width: 650px) {

    /* Navigation */
    .navigation {
        padding: 0 20px;
        justify-content: space-between;
    }

    #cart2 {
        display: none;
    }

    .icons {
        display: flex;
        margin: 0px -5px -1px -14px;
    }

    .logo i {
        display: none;
    }

    .newmenu a {
        color: rgb(0, 0, 0);
        text-decoration: none;
        padding: 0px 0px 0px 14px;
        margin-left: 10px;
        font-weight: bold;
        font-size: 12px;
    }

    #searching {
        margin: 0px 0px 0px 40px;
        padding: 0;

    }

    #response1 {
        display: none;
    }

    #response2 {
        display: none;
    }

    .sercbtn {
        width: 20%;
        background-color: rgb(247, 47, 47);
    }
}
</style>
