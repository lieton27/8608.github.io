<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloKedua/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloKedua from '@/components/HelloKedua.vue'
export default {
  name: 'kedua',
  components: {
    HelloKedua
  }
}
</script>
