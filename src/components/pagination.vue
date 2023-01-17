<template>
    <!-- -------------------------Page Pagination on Shop Page--------------------------- -->
<div class="main_pagination">
    <ul class="pagination">
        <li class="pagination-item">
            <button type="button" id="btn7" @click="onClickFirstPage" :disabled="isInFirstPage">
                First
            </button>
        </li>

        <li class="pagination-item">
            <button type="button" id="btn7" @click="onClickPreviousPage" :disabled="isInFirstPage">
                Previous
            </button>
        </li>

        <!-- Visible Buttons Start -->
        <li v-for="page in pages" :key="page.name" class="pagination-item-2">
            <button type="button" id="btn8" @click="onClickPage(page.name)" :disabled="page.isDisabled" :class="{ active: isPageActive(page.name) }">
                {{ page.name }}
            </button>
        </li>

        <!-- ... -->

        <!-- Visible Buttons End -->

        <li class="pagination-item">
            <button type="button" id="btn7" @click="onClickNextPage" :disabled="isInLastPage">
                Next
            </button>
        </li>

        <li class="pagination-item">
            <button type="button" id="btn7" @click="onClickLastPage" :disabled="isInLastPage">
                Last
            </button>
        </li>
    </ul>
</div>
</template>

<script>
// ---------------------------------Pagination Logics--------------------------------
export default {
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },

    computed: {
        startPage() {
            // When on the first page
            if (this.currentPage === 1) {
                return 1;
            }
            // When on the last page
            if (this.currentPage === this.totalPages) {
                return this.totalPages - this.maxVisibleButtons;
            }
            // When inbetween
            return this.currentPage - 1;
        },
        pages() {
            const range = [];
            for (
                let i = this.startPage; i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages); i++
            ) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                });
            }
            return range;
        },
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
    },

    methods: {
        onClickFirstPage() {
            this.$emit('pagechanged', 1);
        },
        onClickPreviousPage() {
            this.$emit('pagechanged', this.currentPage - 1);
        },
        onClickPage(page) {
            this.$emit('pagechanged', page);
        },
        onClickNextPage() {
            this.$emit('pagechanged', this.currentPage + 1);
        },
        onClickLastPage() {
            this.$emit('pagechanged', this.totalPages);
        },

        isPageActive(page) {
            return this.currentPage === page;
        }
    },

};
</script>

<style scoped>
.main_pagination {
    background-image: linear-gradient(to right, #cae4ec, #f8d2ec, #cae4ec);
    height: 15vh;
    margin-top: -25px;
    padding: 20px;
}

.pagination {
    list-style-type: none;
    margin: 0px 0px 40px 400px;
}

.pagination-item {
    display: inline-block;
    margin: 0px 0px 0px 10px;
    margin-left: 2rem;
}

.pagination-item-2 {
    display: inline-block;
    width: 20px;
    margin: 0px 0px 0px 15px;
    margin-left: 2rem;

}

#btn8 {
    width: 150%;
    /* color: #df8989; */
    margin: 0px 0px 0px 5px;

}

#btn7 {
    width: 130%;
    background-color: rgb(247, 184, 197);
    border-radius: 10px;
}

.active {
    background-color: #4AAE9B;
    color: #ffffff;
    width: 100%;
}

/* ------------------------------------MEDIA QUERIES MOBILE RESPONSIVE-------------------------- */

@media only screen and (min-width: 300px) and (max-width: 1250px) {
    .pagination {
        margin-left: 0;
    }

    .pagination-item {
        margin: 0;
        padding: 0;
        margin-left: 1rem;

    }

    .pagination-item-2 {
        margin: 0;
        margin-left: 1rem;
    }

}
</style>
