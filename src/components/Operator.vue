<template>
    <div class="grid grid-operators operator">
        <button
        v-for="(operator, i) in operators"
        :key="i"
        @click="operator !== '=' ? 
                $emit('push-operator', operator) : 
                $emit('show-result', operator)"
        @keydown.enter="$emit('show-result', operators[operators.length - 1])"
        class="btn btn-operator"
        >
        {{ operator }}
        </button>
    </div>
</template>

<script>

export default {
    name: "Operator",
    props: {
        operators: {
            type: Array,
            required: true,
            default: null,
        }
    },
    methods: {
        keyEventOperators() {
            addEventListener('keydown', (e) => {
                this.operators.map((o) => {
                    if(e.key === o) o !== "=" ? 
                        this.$emit('push-operator', o) : 
                        this.$emit('show-result', o)
                })
            })
        },
        keyEventResolve() {
            addEventListener('keydown', (e) => {
                if(e.key === "Enter") this.$emit('show-result')
            })
        }
    },
    mounted() {
        this.keyEventOperators();
        this.keyEventResolve();
    }
}

</script>