<template>
  <div>
    <Navbar />
    <div class="body-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components:{
    Navbar
  }
}
</script>

