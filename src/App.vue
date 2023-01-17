<template>
<router-view :key="$route.fullPath"></router-view>
<Loading v-if="showLoading"></Loading>
</template>

<script>
import Loading from './components/Loading.vue';
import {
    mapState
} from 'vuex';
export default {
    name: 'App',
    components: {
        Loading,
    },

    // ----------------------LOADING------------------------
    computed: {
        ...mapState({
            showLoading: (state) => state.showLoading,
        }),
    },
}
</script>

<style scoped>
</style>
