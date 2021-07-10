<template>
    <span>{{ out}}</span>
</template>
<script>
import funcs from './function.js'
export default {
    name: 'v-ago',
    props: {
        mode: {
            type: String,
            default: 'single'
        },
        mysql: {
            type: Boolean,
            default: false
        },
        prefix: {
            type: String,
            default: 'Posted '
        },
        suffix: {
            type: String,
            default: ' ago'
        },
        mysqlTimestamp: {
            type: String,
            default: ''
        },
        date: {
            type: Object,
            default: function () { return new Date() }
        },
        delimiter: {
            type: String,
            default: ', '
        },
    },
    data() {
        return {
            out: ''
        }
    },
    mounted() {

        this.getDiff()
    },
    methods: {

        getDiff() {
            
            let date2 = new Date()
            var date1

            if(this.mysql == true) {
                date1 = new Date(Date.parse(this.mysqlTimestamp.replace(/-/g, '/')))
            } else {
                date1 = this.date
            }

            let diff = Math.abs(date2 - date1); // Milliseconds

            if(this.mode == 'full') {
                this.out = this.prefix + funcs.getFull(diff) + this.suffix
            } else {
                this.out = this.prefix + funcs.getSingle(diff) + this.suffix
            }
           
        }
    }
}
</script>
