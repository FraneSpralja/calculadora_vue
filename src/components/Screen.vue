<template>
    <div class="screen">
        <div 
            v-if="!newEquation"
            class="screen_results"
        >
            0
        </div>
        <div 
            v-else-if="newEquation && !equation"
            class="screen_results">
            {{ newEquation }}
        </div>
        <div 
            v-else-if="newEquation && equation"
            class="screen_results">
            {{ equation.toFixed(3) }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Screen',
    props: {
        numOne: {
            type: Array,
            required: true,
            default: null
        },
        operator: {
            type: String,
            required: true,
        },
        numTwo: {
            type: Array,
            required: true,
            default: null
        },
        result: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    data() {
        return {
            newEquation: null,
            equation: null,
        }
    },
    watch: {
        numOne:{
                deep: true,
                handler(newVal, oldVal) {
                this.newEquation = [...this.numOne].join("")
            }
        },
        operator:{
                deep: true,
                async handler(newVal, oldVal) {
                    if(await newVal) {
                        this.newEquation = [ ...this.operator ].join("")
                    }
            }
        },
        numTwo:{
                deep: true,
                handler(newVal, oldVal) {
                    if(newVal) {
                        this.newEquation = [ ...this.numTwo].join("")
                    }
            }
        },
        result: {
            deep: true,
            async handler(newVal, oldVal) {
                if(await newVal) {
                    let firstNum = Number([...this.numOne].join(""))
                    let secondNum = Number([...this.numTwo].join(""))

                    switch(this.operator) {
                        case "+":
                            this.equation = firstNum + secondNum;
                            this.$emit('endOperation', true)
                            break;
                        case "-":
                            this.equation = firstNum - secondNum;
                            this.$emit('endOperation', true)
                            break;
                        case "x":
                            this.equation = firstNum * secondNum;
                            this.$emit('endOperation', true)
                            break;
                        case "/":
                            this.equation = firstNum / secondNum;
                            this.$emit('endOperation', true)
                            break;
                        default:
                            this.equation = "Error";
                    }
                }
            }
        }
    },
}
</script>

<style>

</style>