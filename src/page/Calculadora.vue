<template>
    <Switchs 
        :reset="reset" 
        @clean-all="cleanAll"
        @fix-to-result="fixToResult"
    />
    <Screen 
        :number="number"
        :operator="operator"
        :cleaner="cleanNumber"
        :resolve="resolve"
        :reset="reset"
    />
    <Numbers 
        :numbers="numbers"
        :cleaner="cleanNumber"
        :reset="reset"
        @number-string="pushNumber"
    />
    <Operator 
        :operators="operatorsArr"
        :reset="reset"
        @push-operator="pushOperator"
        @show-result="showResult"
    />
</template>

<script>
import Screen from '@/components/Screen';
import Numbers from '@/components/Numbers';
import Operator from '@/components/Operator';
import Switchs from '@/components/Switchs';

import { arrayOfNumbers } from '@/assets/helpers/getNumbers'
import { arrayOfOperators } from '@/assets/helpers/getOperators'
import { equationResult } from '@/assets/helpers/equationResolve';

export default {
    components: {
        Screen,
        Numbers,
        Operator,
        Switchs
    },
    data() {
        return {
            numbers: null,
            operatorsArr: null,
            operator: "",
            number: "",
            equationArr: [],
            cleanNumber: false,
            resolve: "",
            reset: false,
            fixed: null,
        }
    },
    watch: {
        operator: {
            deep: true,
            handler(newValue, oldValue) {
                if( this.equationArr.length <= 0 && this.operator === "(") {
                    this.equationArr.push(this.operator)
                } else if (newValue) {
                    if(this.operator == ")") {
                        this.equationArr.push(this.number);
                        this.equationArr.push(this.operator);
                        this.cleanNumber = true;
                        
                    } else if(this.equationArr[this.equationArr.length - 1] === ")") {                        
                        this.equationArr.push(this.operator);
                        this.cleanNumber = true;
                        
                    } else {
                        this.equationArr.push(this.number);
                        this.equationArr.push(this.operator);
                        this.cleanNumber = true;
                    }
                }
            }
        },
        number: {
            deep: true,
            handler(newValue, oldValue) {
                if(newValue) {
                    this.cleanNumber = false;

                    if(this.reset) this.reset = false;
                }
            }
        }
    },
    methods: {
        getNumbers() {
            this.numbers = arrayOfNumbers()
        },
        getOperators() {
            this.operatorsArr = arrayOfOperators()
        },
        pushNumber(num) {
            this.number = num
        },
        pushOperator(opt) {
            this.operator = opt
        },
        showResult() {
            this.equationArr.push(this.number);
            this.resolve = equationResult(this.equationArr, this.fixed);
            this.operator = "";
            this.number = "";
            this.equationArr = [];
            this.reset = true;
        },
        cleanAll(r) {
            if(r) {
                this.resolve = "";
                this.operator = "";
                this.number = "";
                this.equationArr = [];
                this.reset = true;
            }
        },
        fixToResult(e) {
            if(this.resolve !== "") {
                this.fixed = e;
                this.resolve = Number(this.resolve).toFixed(e)
            } else {
                this.fixed = e;
            }
        }
    },
    mounted() {
        this.getNumbers(),
        this.getOperators()
    }
}

</script>