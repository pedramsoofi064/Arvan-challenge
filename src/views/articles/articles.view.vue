<template>
   <section class="articles">
       this is article
       <router-view />
   </section>
</template>

<script>
export default {
    name: "Articles"
}
</script>

<style lang="scss">
.articles {
    flex: 1;
}

</style>