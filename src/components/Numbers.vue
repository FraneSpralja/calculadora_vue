<template>
    <div class="numbers_grid">
        <div
        v-for="number in numbers"
        :key="number"
        :class="`btn btn_${number}`"
        @click="!operator ? $emit('first', number) : $emit('second', number)"
        >
            {{ number }}
        </div>
    </div>
</template>

<script>
export default {

    props: {
        numbers: {
            type: Array,
            required: true
        },
        operator: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    name: 'Numbers',
}
</script>

<style>

</style>