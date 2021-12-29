<template>
  <button @click="$emit('click')" class="btn btn-block">
        <div v-if="loading">
            <loading color="#f9f9f9"/>
        </div>
        <div class="d-flex justify-center" v-else>
            <slot />
        </div>
  </button>
</template>

<script>
import Loading from './loading.component.vue'
export default {
    name: 'buttonComponent',
    components: { Loading },
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        size: { 
            type: String,
            default: 'normal'
        }
    },
  
}
</script>

<style lang="scss">
.btn {
    padding: 10px ;
    border-radius: 4px;

    &-primary {
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
        color: white;
    }

    &-outline {
        background-color: transparent;
        color: var(--primary-color);
        
    }
}

</style>