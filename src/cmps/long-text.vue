<template>
    <section class="">
    <p class="card-title">{{getTextForDisplay}}<span v-if="showBtn">...</span></p> 
    </section>
</template>
<script>
export default {
props: ['txt'],
    data() {
        return {
            isLong: false
        }
    },
    methods: {
        setLong() {
            return this.txt.length > 50
        },
    },
    computed: {
        getTextForDisplay() {
            if (this.isLong) return this.txt.substring(0, 50);
            else return this.txt
        },
        showBtn() {
            return this.txt.length > 50
        },
        setBtnTxt() {
            if (this.isLong) return 'read more'
            else return 'read less'
        }
    },
    created() {
        this.isLong = this.setLong()
    
}
}
</script>





