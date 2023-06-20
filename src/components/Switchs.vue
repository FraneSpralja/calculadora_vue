<template>
    <div class="switchs">
        <div class="switchs__reset">
            <span class="switch-label">
                Clean All
            </span>
            <div class="switch-box">
                <button 
                class="btn-switch btn-switch--reset"
                @click="cleanAll"
                >
                    <!--  -->
                </button>
            </div>
        </div>
        <div class="switchs__decimals switchs__decimals-3">
            <span class="switch-label">
                .000
            </span>
            <div class="switch-box">
                <button 
                    class="btn-switch btn-switch--3" 
                    value="3"
                    @click="fixToResolve"
                >
                </button>
            </div>
        </div>
        <div class="switchs__decimals switchs__decimals-2">
            <span class="switch-label">
                .00
            </span>
            <div class="switch-box">
                <button 
                    class="btn-switch btn-switch--2" 
                    value="2"
                    @click="fixToResolve"
                >
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Switchs",
    props: {
        reset: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    data() {
        return {
            clean: false,
            fixTo: null,
        }
    },
    watch: {
        reset: {
            deep: true,
            handler(newValue) {
                if(this.reset) {
                    this.clean = false;
                }
            }
        }
    },
    methods: {
        cleanAll() {
            this.clean = true
            this.$emit("clean-all", this.clean)
        },
        keyEventClean() {
            addEventListener('keydown', (e) => {
                if(e.key === "Backspace") this.cleanAll()
            })
        },
        fixToResolve(e) {
            const active = (document.querySelector('.active'))
            const activeBox = (document.querySelector('.active-box'))

            this.fixTo = e.target.value;
            this.$emit('fix-to-result', this.fixTo)

            if(!active) {
                e.target.classList.add('active')
                e.target.parentElement.classList.add('active-box')
            } else {
                active.classList.remove('active')
                activeBox.classList.remove('active-box')
                e.target.parentElement.classList.add('active-box')
                e.target.classList.add('active')
            }
        }
    },
    mounted() {
        this.keyEventClean()
    }
}

</script>