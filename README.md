# V-Ago

**Display Human Readable Time from a JS Date Object / MYSQL Timestamp String**

- Does not depend on moment.js / date-fns
- Lightweight
- MySQL Timestamp support

 https://www.npmjs.com/package/vue-ago

# Basic Usage

```
<template>
  <div>
    <v-ago :date="exampleParsedDate" />
  </div>
</template>

<script>
import VAgo from 'vue-ago';

export default {
  components: {
    VAgo
  },
  data() {
    return {
      
    }
  }
}
</script>
```

# MySQL (Default: false)

- If set true, accepts a MySQL Timestamp string
- If false, accepts a JS Date object

```
<v-ago :mysql="true" :mysqlTimestamp="p.created_at" />
```

# Remaining Tasks

- Build a Gitpage
- Test code efficiency
- Write test cases
- Rollup deployment
- Using Date FNS?
- Write documentation
