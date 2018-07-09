<template>
    <div id="index">
        This is parcel page {{ num }}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                num: 0
            }
        },
        methods: {
            changeNum() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(99999)
                    }, 3000)
                })
            },
            async getNum() {
                this.num = await this.changeNum()
            }
        },

        created() {
            (async ()=> {
                this.num = await this.changeNum()
            })()
        }
    }
</script>
