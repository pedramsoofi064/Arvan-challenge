<template>
   <section class="articles">
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
    padding: 20px 30px;

    &__title {
        font-size: 2.5em;
    }
}

</style>