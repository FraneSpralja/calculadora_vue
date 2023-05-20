<template>
    <div class="calculadora">        
        <Screen 
            :numOne="numOne"
            :operator="operator"
            :numTwo="numTwo"
            :result="result"
            @endOperation="cleanVars($event)"
        />
        <Numbers 
            :numbers="numbersArr"
            :operator="checkOperator"
            @first="getFirstNumber($event)"
            @second="getSecondNumber($event)"
        />
        <Operators 
            :operators="operators"
            @operator="getOperator($event)"
            @equal="checkResult($event)"
        />
    </div>
</template>

<script>
import Screen from '@/components/Screen';
import Numbers from '@/components/Numbers';
import Operators from '@/components/Operators';

import printNumbers from '@/assets/helpers/printNumbers';
import printOperators from '@/assets/helpers/printOperators';

export default {
    name: 'Calculadora',
    components: { 
        Screen,
        Numbers,
        Operators
    },
    data() {
        return {
            numbersArr: null,
            operators: null,
            numOne: [],
            numTwo: [],
            operator: null,
            checkOperator: false,
            result: false,
            reset: false
        }
    },
    watch: {
        operator:{
            handler(value) {
                if(value !== null) return this.checkOperator = true;
            },
            immediate: true,
            deep: true,
        },
        checkOperator: {
            handler(value) {
                if(value == false) {
                    this.getFirstNumber()
                    return
                }
                if(value == true) {
                    this.getSecondNumber()
                }
            },
        }
    },
    methods: {
        getNumbers() {
            this.numbersArr = printNumbers();
        },
        printOperators() {
            this.operators = printOperators()
        },
        getOperator(op) {
            this.operator = op;
        },
        getFirstNumber(number) {
            if(!this.reset) {
                this.numOne.push(number)
            } else {
                this.numOne = [];
                this.numTwo = [];
                this.operator = null;
                this.checkOperator = false;
                this.result = false;
                this.numOne.push(number)
            }
        },
        getSecondNumber(number) {
            this.numTwo.push(number)
        },
        checkResult(equal) {
            if(equal) this.result = true;
        },
        cleanVars(clean) {
            this.reset = true
        }
    },
    mounted() {
        this.getNumbers();
        this.printOperators();
    },
    created() {
        this.cleanVars()
    }
}
</script>

<style>

</style>