import Operator from '@/components/Operator';
<template>
    <div class="screen">
        <div v-if="resolve === ''" class="screen-text">
            {{ cleaner === false ? numberScreen : operator }}
        </div>
        <div v-else-if="resolve !== ''" class="screen-text">
            {{ resolve }}
        </div>
    </div>
</template>

<script>

export default {
    name: "Screen",

    props: {
        number: {
            type: String,
            required: true,
            default: ""
        },
        operator: {
            type: String,
            required: true,
            default: "",
        },
        cleaner: {
            type: Boolean,
            required: true,
            default: false,
        },
        resolve: {
            type: String,
            required: true,
            default: "",
        },
        reset: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    data() {
        return {
            numberScreen: "0",
            resolveStr: "",
        }
    },
    watch: {
        number: {
            deep: true,
            handler(newValue, oldValue) {
                if(newValue) this.numberScreen = this.number;
            }
        },
        resolve: {
            deep: true,
            handler(newValue, oldValue) {
                if(newValue) this.resolveStr = this.resolve;
            }
        },
        reset: {
            deep: true,
            handler(newValue, oldValue) {
                if(this.reset) {
                    this.resolveStr = "";
                    this.numberScreen = "0"
                }
            }
        }
    }
}

</script>