<template>
    <section class="gig-list main-layout">
        <ul>
            <li v-for="gig in gigs" :key="gig._id">
                <gig-preview :gig="gig"/>
            </li>
        </ul>
    </section>
</template>

<script>
import gigPreview from './gig-preview.vue'
export default {
props:{
    gigs:Array
},
components:{
    gigPreview
}
}
</script>

<style>

</style>