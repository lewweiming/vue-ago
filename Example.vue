<template>
<div>
    <div>
        The time is {{ new Date() }}
    </div>

    <div>
        <v-ago :date="exampleParsedDate" />
    </div>
    <div>
        <v-ago :mysql="true" :mysqlTimestamp="exampleMySqlDate" mode="full" />
    </div>
</div>
</template>

<script>
import VAgo from './VAgo.vue'

export default {
    components: {
        VAgo
    },
    data() {
        return {
            exampleMySqlDate: '2021-07-08 03:20:46',
            exampleParsedDate: null
        }
    },
    created() {
        this.exampleParsedDate = new Date(Date.parse(this.exampleMySqlDate.replace(/-/g, '/')))
    }
}
</script>