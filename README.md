# V-Ago - Vue 3 Human Readable Time

- Does not depend on moment.js
- Lightweight
- MySQL Timestamp support

# Basic Usage

```
<template>
  <div>
    <v-ago :date="exampleParsedDate" />
  </div>
</template>

<script>
import VAgo from 'vue-human-readable';

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

# Remaining Tasks

- Build a Gitpage
- Test code efficiency
- Write test cases
- Rollup deployment
- Using Date FNS?