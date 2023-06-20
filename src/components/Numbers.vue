<template>
    <div 
    class="grid numbers grid-numbers">
        <button
        v-for="(number, i) in numbers"
        :key="i"
        @click="getNumberStr(number)"
        :class="`btn btn-number numbers-${number}`"
        >
        {{ i }}
    </button>
    </div>
</template>

<script>

export default {
    name: "Numbers",

    props: {
        numbers: {
            type: Array,
            required: true,
            default: null
        },
        cleaner: {
            type: Boolean,
            required: true,
            default: false,
        },
        reset: {
            type: Boolean,
            required: true,
            default: false,
        }
    },

    data() {
        return {
            numberStr: "",
            resetScreen: false,
        }
    },

    watch: {
        cleaner: {
            deep: true,
            handler(newValue, oldValue) {
                if(this.cleaner) this.numberStr = "";
            }
        },
        reset: {
            deep: true,
            handler(newValue, oldValue) {
                if(this.reset) this.numberStr = "";
            }
        }
    },

    methods: {
        getNumberStr(num) {
            this.numberStr += num;
            this.$emit("number-string", this.numberStr)
        },
        numberKeyEvent() {
            addEventListener('keydown', (e) => {
                this.numbers.map((n) => {
                    if(e.key == n) this.getNumberStr(e.key)
                })
            })
        }
    },

    mounted() {
        this.numberKeyEvent()
    }
}

</script>