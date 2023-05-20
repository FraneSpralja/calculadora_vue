<template>
    <div class="operators_grid">
        <div 
        v-for="operator in operators"
        :key="operator"
        class="btn btn_operator"
        @click="operator != '=' ? $emit('operator', operator) : $emit('equal', true)"
        >
            {{ operator }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Operators',
    props: {
        operators: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>