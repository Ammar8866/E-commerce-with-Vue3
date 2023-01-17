<template>
<Header />
<!-- -----------------HOME---------------------------------------- -->
<div class="background">
    <div class="text-block">
        <h3>Top sale on this season</h3>
        <h1>Explore Amazing</h1>
        <h1>Fashionable Products</h1>
        <h1>this Season with</h1>
        <h1>Discount Rates</h1><br><br>
        <router-link to="/Shop"><button id="butn1">Shop now</button></router-link>
        <router-link to="/Blog"><button id="butn2">Learn more</button></router-link>
    </div>
</div>

<!-- ------------------------------------Some Facilities------------------------ -->
<div class="second">
    <div class="second1">
        <div class="icon1"><i class="fa-solid fa-truck-fast"></i></div>
        <h2>Free Shipping</h2>
        <h5>On all orders over $100</h5>
    </div>
    <div class="second1">
        <div class="icon1"><i class="fa-solid fa-phone-volume"></i></div>
        <h2>Dedicated Support</h2>
        <h5>Quick Response 24/7</h5>

    </div>
    <div class="second1">
        <div class="icon1"><i class="fa-solid fa-sack-dollar"></i></div>
        <h2>Money Back Gurrantee</h2>
        <h5>Worry-Free Shipping</h5>
    </div>
</div>

<!-- ----------------------------------------Category buttons--------------------------------- -->
<div class="third">

    <div class="third1">
        <div class="card" id="card1">
            <div class="card-body">
                <h5 class="card-title">Men Coat</h5>
                <router-link to="/Shop" class="btn btn-primary">View all</router-link>
            </div>
        </div>

        <div class="card" id="card2">
            <div class="card-body">
                <h5 class="card-title">T-Shirts</h5>
                <router-link to="/Shop" class="btn btn-primary">View all</router-link>
            </div>
        </div>

        <div class="card" id="card3">
            <div class="card-body">
                <h5 class="card-title">Glasses</h5>
                <router-link to="/Shop" class="btn btn-primary">View all</router-link>
            </div>
        </div>
    </div>

    <div class="third2">
        <div class="card" id="card4">
            <div class="card-body">
                <h5 class="card-title">Men Coat</h5>
                <router-link to="/Shop" class="btn btn-primary">View all</router-link>
            </div>
        </div>

        <div class="card" id="card5">
            <div class="card-body">
                <h5 class="card-title">T-Shirts</h5>
                <router-link to="/Shop" class="btn btn-primary">View all</router-link>
            </div>
        </div>

        <div class="card" id="card6">
            <div class="card-body">
                <h5 class="card-title">Glasses</h5>
                <router-link to="/Shop" class="btn btn-primary">View all</router-link>
            </div>
        </div>
    </div>
</div>

<!-- -------------------------------Some Dummies-------------------------------- -->
<div class="fourth">
    <h4>Top Sale on this Season</h4>
    <h1>Features Products Dummy</h1>
    <h5>Go to Shop Explore Amazing Fashionable new arrivals this winter season with Discount Rates</h5>
</div>
<div class="fifth">
    <div class="products" id="product1">
        <img src="../assets/product-4.jpg" id="img1" alt="..."><br><br>
        <div class="texting">
            <router-link to="/Shop" class="card-link">Full Sleeve Shirt</router-link>
        </div>
        <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="price">
            <h5 class="product-old-price">$79.99</h5>
            <h5 class="product-price">$49.99</h5>
        </div>
    </div>

    <div class="products" id="product1">
        <img src="../assets/product-2.jpg" id="img1" alt="..."><br><br>
        <div class="texting">
            <router-link to="/Shop" class="card-link">Full Double Shirt</router-link>
        </div>
        <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="price">
            <h5 class="product-old-price">$89.99</h5>
            <h5 class="product-price">$59.99</h5>
        </div>
    </div>

    <div class="products" id="product1">
        <img src="../assets/product-5.jpg" id="img1" alt="..."><br><br>
        <div class="texting">
            <router-link to="/Shop" class="card-link">Half Sleeve Shirt</router-link>
        </div>
        <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="price">
            <h5 class="product-old-price">$79.99</h5>
            <h5 class="product-price">$49.99</h5>
        </div>
    </div>

    <div class="products" id="product1">
        <img src="../assets/product-6.jpg" id="img1" alt="..."><br><br>
        <div class="texting">
            <router-link to="/Shop" class="card-link">Girls Full Shirt</router-link>
        </div>
        <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="price">
            <h5 class="product-old-price">$65.00</h5>
            <h5 class="product-price">$32.05</h5>
        </div>
    </div>
</div>

<div class="six">

    <div class="products" id="product1">
        <img src="../assets/product-8.jpg" id="img1" alt="..."><br><br>
        <div class="texting">
            <router-link to="/Shop" class="card-link">Full Style Shirt</router-link>
        </div>
        <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="price">
            <h5 class="product-old-price">$79.99</h5>
            <h5 class="product-price">$49.99</h5>
        </div>
    </div>

    <div class="products" id="product1">
        <img src="../assets/product-4.jpg" id="img1" alt="..."><br><br>
        <div class="texting">
            <router-link to="/Shop" class="card-link">Full Double Shirt</router-link>
        </div>
        <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="price">
            <h5 class="product-old-price">$89.99</h5>
            <h5 class="product-price">$59.99</h5>
        </div>
    </div>

    <div class="products" id="product1">
        <img src="../assets/product-5.jpg" id="img1" alt="..."><br><br>
        <div class="texting">
            <router-link to="/Shop" class="card-link">Half Sleeve Shirt</router-link>
        </div>
        <div class="ratings">
            <i class="fa fa-star"></i>

            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="price">
            <h5 class="product-old-price">$79.99</h5>
            <h5 class="product-price">$49.99</h5>
        </div>
    </div>

    <div class="products" id="product1">
        <img src="../assets/product-6.jpg" id="img1" alt="..."><br><br>
        <div class="texting">
            <router-link to="/Shop" class="card-link">Girls Full Shirt</router-link>
        </div>
        <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="price">
            <h5 class="product-old-price">$65.00</h5>
            <h5 class="product-price">$32.05</h5>
        </div>
    </div>
</div>

<router-link to="/Shop"><button id="butn3">Shop now</button></router-link><br><br><br><br>

<!-- ----------------------------------Products Categories with APi---------------------------- -->
<div class="catalog2">
    <h1>All Products Categories</h1>
    <h3>Click here and Shop now</h3>
    <div class="fifth2">
        <div class="catalog" v-for="itemss in category" v-bind:key="itemss">
            <router-link :to="{name: 'Category' ,params:{category:itemss}}" id="router">
                <h4> {{ itemss }}</h4>
            </router-link>
        </div>
    </div>
</div>

<!-- ---------------------------------------New Arrivals------------------------------------- -->
<div class="six1">
    <div class="six2">
        <h1>NEW Winter ARRIVALS</h1><br>
        <h5>Explore Amazing Fashionable new arrivals</h5>
        <h5>this winter season with Discount Rates</h5>
    </div>
    <div class="six3">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <img src="../assets/winter1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="../assets/winter2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/winter3.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</div>
<!-- -----------------------------------------Client Testinomials----------------------------------------- -->

<div class="seven">
    <div class="texts">
        <h1>What our Clients Say</h1><br>
        <h5>Explore Amazing Fashionable new arrivals</h5>
        <h5>this winter season with Discount Rates</h5>
    </div>
    <div class="divide">

    </div>
    <div class="average">
        <h1>4.9</h1>
        <div class="ratings2">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <h2>Average Customer</h2>
    </div>
</div>
<div class="eight">
    <div class="customers"><br>
        <img src="../assets/customer1.jpg" id="testinomial" alt="..."><br><br>
        <div class="card-body" id="client1">
            <h5 class="card-title">Mark Michel</h5>
            <p class="card-text">I just wanted to say thank you. Thanks for all the support you give during these issues in the support forum, whether it's from me or from others. Even when I don't ask questions on my own, I learn a lot from reading your suggestions to other users.</p>
        </div>
    </div>

    <div class="customers" id="customers2"><br>
        <img src="../assets/customer2.jpg" id="testinomial" alt="..."><br><br>
        <div class="card-body" id="client2">
            <h5 class="card-title">Mike Henry</h5>
            <p class="card-text">
                I must also say that before I purchased your product I was never happy with support forums. I've used others and had my questions go unanswered for days and even weeks. You guys though have set a standard by which I'll measure everyone else by.</p>
        </div>
    </div>

    <div class="customers" id="customers2"><br>
        <img src="../assets/customer3.jpg" id="testinomial" alt="..."><br><br>
        <div class="card-body" id="client3">
            <h5 class="card-title">John Albert</h5>
            <p class="card-text">I just wanted to say thank you. Thanks for all the support you give during these issues in the support forum, whether it's from me or from others. Even when I don't ask questions on my own, I learn a lot from reading your suggestions to other users.</p>
        </div>
    </div>
</div>

<!------------------------- Contact---------------------------------->
<section id="contact">
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div class="row" id="row1">
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control">
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control">
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
            </form>
            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
        </div>
    </div>
</section>
<Footer />
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Category from './Category.vue';

export default {
    name: 'Home',

    computed: {
        category() {
            return this.$store.state.category;
        }
    },

    mounted() {
        this.$store.dispatch('created')
    },

    components: {
        Header,
        Category,
        Footer
    },

}
</script>

<style scoped>
.background {
    height: 100vh;
    width: 100%;
    background-image: url('../assets/model.png');
    background-size: cover;
    text-align: center;
    position: relative;
}

.text-block {
    position: absolute;
    bottom: 100px;
    left: 20px;
    color: rgb(0, 0, 0);
    padding-left: 100px;
    padding-right: 20px;
}

.text-block h1 {
    font-size: 50px;
}

.second {
    border: 0px solid;
    height: 200px;
    width: 100%;
    display: flex;
}

.second1 {
    border: 0px solid;
    height: 200px;
    width: 500px;
    background-color: rgb(255, 244, 244);
    padding: 25px 0px 0px 80px;
    border-right: 3px solid #bbb;
}

.icon1 {
    font-size: 30px;
    padding: 0px 0px 0px 85px;
}

#butn1 {
    background-color: purple;
    color: bisque;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    margin: 0px 50px 0px 0px;
}

#butn2 {
    background-color: red;
    color: bisque;
    border-radius: 20px;
    width: 100px;
    height: 35px;
}

#butn1:hover {
    background-color: rgb(169, 116, 238);
    color: black;
}

#butn2:hover {
    background-color: rgb(238, 132, 132);
    color: black;
}

.third {
    border: 0px solid;
    height: 80vh;
    width: 100%;
    margin: 60px 0px 0px 0px;
}

.third1 {
    display: flex;
    margin: 0px 0px 40px 100px;

}

.third2 {
    display: flex;
    margin: 0px 0px 0px 100px;
}

.card {
    margin-left: 3rem;
    width: 20rem;
}

.card-body {
    height: 15rem;
}

#card1 {
    background-image: url('../assets/pic1.png');
    background-size: cover;
}

#card1:hover {
    transform: scale(1.1);
}

#card2 {
    background-image: url('../assets/pic2.png');
    background-size: cover;
}

#card2:hover {
    transform: scale(1.1);
}

#card3 {
    background-image: url('../assets/pic3.png');
    background-size: cover;
}

#card3:hover {
    transform: scale(1.1);
}

#card4 {
    background-image: url('../assets/pic1.png');
    background-size: cover;
}

#card4:hover {
    transform: scale(1.1);
}

#card5 {
    background-image: url('../assets/pic2.png');
    background-size: cover;
}

#card5:hover {
    transform: scale(1.1);
}

#card6 {
    background-image: url('../assets/pic3.png');
    background-size: cover;
}

#card6:hover {
    transform: scale(1.1);
}

.fourth {
    border: 0px solid;
    height: 35vh;
    width: 100%;
    margin: 60px 0px 0px 0px;
    background-color: rgb(250, 242, 242);
    padding: 0px 0px 0px 0px;
}

.fourth h4 {
    color: rgb(0, 0, 0);
    padding: 75px 0px 0px 545px;

}

.fourth h1 {
    color: deeppink;
    padding: 0px 0px 0px 450px;

}

.fourth h5 {
    color: rgb(102, 4, 148);
    padding: 0px 0px 0px 320px;

}

.fifth {
    border: 0px solid;
    height: 100vh;
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
}

.fifth2 {
    border: 0px solid;
    /* height: 100vh;
    width:100%; */
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #d8fccf);
    display: flex;
    flex-wrap: wrap;

}

.fifth2 :hover {
    transform: scale(1.1);
}

#router {
    text-decoration: none;
}

.catalog {
    border: 2px solid rgb(255, 0, 179);
    box-shadow: #432ad3 5px 5px 5px 4px;
    border-radius: 30px;
    height: 10vh;
    width: 220px;
    /* display: flex;
    flex-wrap: wrap; */
    margin: 5px 0px 50px 70px;
    background-color: #e2f7dd;

}

.catalog h4 {
    padding: 10px 0px 0px 22px;
    color: rgb(43, 8, 245);
    font-size: 20px;
}

.catalog2 {

    border: 0px solid;
    width: 100%;
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #d8fccf);
}

.catalog2 h1 {
    padding: 50px 0px 0px 50px;
    color: rgb(255, 0, 179);
}

.catalog2 h3 {
    padding: 0px 0px 30px 52px;
    color: rgb(14, 33, 206);
}

.products {
    border: 0px solid;
    margin-left: 4.5rem;
    width: 245px;
    height: 22rem;
    margin-top: 50px;

}

#img1 {
    height: 265px;
    width: 241px;
}

.ratings {
    color: rgb(240, 172, 25);
    padding: 2px 0px 2px 80px;
}

.texting {
    padding: 4px 0px 2px 70px;
}

.product-old-price {
    position: relative;
    padding: 0 10px;
    opacity: 0.6;
}

.product-old-price::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #444444;
    transform: translateY(-50%);
}

.price {
    display: flex;
    padding: 0px 0px 0px 52px;
}

.six {
    border: 0px solid;
    height: 80vh;
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    margin-top: -150px;
}

#butn3 {
    background-color: rgb(4, 0, 255);
    color: bisque;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    margin-left: 45%;
}

#butn3:hover {
    background-color: rgb(87, 86, 192);
    color: black;
}

.six1 {
    border: 0px solid;
    height: 100vh;
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
}

.six2 {
    border: 0px solid;
    height: 73%;
    width: 50%;
    padding: 70px 0px 0px 50px;

}

.six2 h1 {
    color: rgb(255, 0, 0);
    font-size: 70px;

}

.six2 h5 {
    color: blue;
    font-size: 30px;

}

.six3 {
    border: 0px solid;
    width: 50%;
}

.seven {
    border: 0px solid;
    height: 60vh;
    width: 100%;
    background-image: linear-gradient(to right, #f5d6d6, #e9a9a9, #f18686);
    margin-top: -162px;
    display: flex;
}

.seven h1 {
    color: red;
    font-size: 60px;

}

.seven h5 {
    color: rgb(25, 0, 255);
}

.texts {
    margin: 0px 0px 65px 40px;
    padding: 150px 0px 0px 60px;

}

.divide {
    border-right: 3px solid rgb(255, 5, 5);
    height: 100%;
    padding: 0px 0px 0px 40px;
}

.average {
    margin: 0px 0px 65px 40px;
    padding: 0px 0px 0px 120px;

}

.average h1 {
    font-size: 200px;
    color: #000000;
}

.ratings2 {
    color: rgb(255, 123, 0);
    padding: 0px 0px 2px 65px;
    font-size: 30px;
}

.eight {
    border: 0px solid;
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to right, #f5d6d6, #e9a9a9, #f18686);
    display: flex;
}

.customers {
    border: 2px red solid;
    border-radius: 10px;
    margin-left: 4.5rem;
    width: 350px;
    height: 27rem;
    margin-top: 50px;
    background-color: rgb(255, 255, 255);

}

#testinomial {
    height: 210px;
    width: 210px;
    border-radius: 150px;
    margin: 0px 0px 0px 50px;

}

#client1 {
    padding: 0px 0px 0px 20px;
}

#client2 {
    padding: 0px 0px 0px 20px;
}

#client3 {
    padding: 0px 0px 0px 20px;
}

/* -------------------------------Contact------------------------- */

#contact {
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #d8fccf);
    border: 0px solid;

    width: 100%;
    padding: 10px 0px 50px 300px;
}

#contact h2 {
    padding: 0px 300px 0px 0px;
}

#contact p {
    padding: 0px 300px 0px 0px;
}

#row1 {
    width: 100%;
}

/* ------------------------------------MEDIA QUERIES MOBILE RESPONSIVE-------------------------- */

@media only screen and (min-width: 300px) and (max-width: 1250px) {

    /* Home */
    .background {
        height: 32vh;
        width: 100%;
        background-image: url('../assets/model.png');
        background-repeat: no-repeat;
        background-size: contain;
        border: 0px solid red;
    }

    .text-block {
        position: absolute;
        top: 25%;
        right: 40%;
        padding-left: 0;

    }

    .text-block h1 {
        font-size: 10px;
    }

    #butn2 {
        display: none;
    }

    #butn1 {
        top: 139%;
        margin: 0;
        left: 25%;
        position: absolute;
        height: 30px;
        width: 90px;
    }

    .second {
        display: flex;
        flex-direction: column;
        margin-bottom: 60%;
        display: none;

    }

    .third1 {
        display: block;
        margin-left: 6rem;

    }

    .fifth {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 180%;
        margin-left: 10px;
    }

    .six {
        display: flex;
        flex-direction: column;
        display: none;
    }

    .card {
        margin-bottom: 2rem;
        margin-left: -50px;
    }

    .fourth h4 {
        color: rgb(0, 0, 0);
        padding: 75px 0px 0px 90px;

    }

    .fourth h1 {
        color: deeppink;
        padding: 0px 0px 0px 39px;

    }

    .fourth h5 {
        color: rgb(102, 4, 148);
        padding: 0px 0px 0px 70px;

    }

    .third2 {
        display: none;
    }

    #butn3 {
        margin-left: 38%;
        margin-top: 40px;
    }

    #contact {
        padding: 0;
        margin-top: -40px;
    }

    #contact h2 {
        padding: 0;
    }

    #contact p {
        padding: 0;
    }

    .eight {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: -310px;
        margin-top: -1px;
    }

    .customers {
        margin-left: 0;
        margin-top: 70px;
    }

    #customers2 {
        display: none;
    }

    .average {
        display: none;
    }

    .seven {
        height: 22vh;
        margin-top: -140px;
    }

    .seven h1 {
        font-size: 30px;

    }

    .seven h5 {
        font-size: 20px;
    }

    .texts {
        margin: 30px 0px 0px 10px;
        padding: 40px 53px 0px 38px;

    }

    .divide {
        display: none;
    }

    .six2 {
        border: 0px solid;
        width: 50%;
        padding: 8px 0px 0px 10px;

    }

    .six2 h1 {
        color: rgb(255, 0, 0);
        font-size: 20px;

    }

    .six2 h5 {
        color: blue;
        font-size: 10px;

    }

    .catalog {
        border: 2px solid rgb(255, 0, 179);
        box-shadow: #432ad3 5px 5px 5px 4px;
        border-radius: 30px;
        height: 4vh;
        width: 120px;
        /* display: flex;
    flex-wrap: wrap; */
        margin: 5px 0px 50px 54px;
        background-color: #e2f7dd;
    }

    .catalog h4 {
        padding: 10px 0px 0px 18px;
        color: rgb(43, 8, 245);
        font-size: 10px;
    }

    .six1 {
        border: 0px solid;
        height: 33vh;
        width: 100%;
        background-color: rgb(255, 255, 255);
        display: flex;
    }

}
</style>
