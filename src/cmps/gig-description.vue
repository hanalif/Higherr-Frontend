<template>
  <section>
      <h1>About the gig</h1>
      <p>{{gig.jobDescription}}</p>
  </section>
</template>

<script>
export default {
    props: {
        gig: Object
    }

}
</script>