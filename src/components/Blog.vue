<template>
<!-- ---------------Blog---------------------- -->
<Header />
<div class="blog">
    <h2>E-commerce Best Blogs</h2>
    <div id="card10">
        <img src="../assets/winter3.jpg" class="card-img-top" alt="..."><br><br>
        <div class="card-body">
            <p class="card-text">The 10 Best E-commerce Blogs for Businesses
                Now, it is time to know what the examples of the best e-commerce blogs are!

                We have collected the 10 qualified e-commerce blogs, and we hope you enjoy reading them.

                1. A Better Lemonade Stand Blog
                A Better Lemonade Stand is a guide to e-commerce and entrepreneurs to start doing online business by supporting them through the beginning.

                a better lemonade stand blog page with a cover image featuring a dumbbell, mask, glasses, little bears, and an advertisement next to it

                The ones visiting the landing page of A Better Lemonade Stand find the blog page on the header very quickly.

                The first thing to attract attention is the filter by phase divided as build, launch, and grow. That is how the readers can find the part they are interested in.

                Also, when one scrolls down the page, it is possible to find an explanation for related parts, and then blogs appear.

                Blogs have the details of the author, publication date, and the shares with the cover images.

                The blog contents of A Better Lemonade Stand are generally to-the-point blogs with direct explanations and detailed examination of the subjects in it with the choice of sharing it on various social media platforms.

                Additionally, the blog page gives the authors the credits by sharing their names with a little information box.

            </p>
        </div>
    </div>

</div><br>
<Footer />
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    name: 'Blog',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
.blog {
    border: 0px solid;

    width: 100%;
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #d8fccf);
    padding: 60px 0px 0px 100px;

}

.blog h2 {
    color: rgb(255, 0, 98);
    padding: 45px 0px 45px 100px;
    font-size: 50px;
}

#card10 {
    border: 0px solid;
    width: 90%;
    padding: 0px 0px 0px 0px;
}
</style>
