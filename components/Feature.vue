<template>
  <div v-editable="blok" class="feature util__flex-eq">
    <img :src="resizedIcon" class="feature__icon">
    <h1>{{ blok.name }}</h1>
    <div class="feature__description">
      {{ blok.description }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    resizedIcon () {
      if (typeof this.blok.icon !== 'undefined') {
        return '//img2.storyblok.com/' + this.blok.icon.replace('//a.storyblok.com', '')
      }
      return null
    }
  },
  props: ['blok']
}
</script>

<style lang="scss">
.feature {
  text-align: center;
  padding: 50px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 2px 0 2px 2px rgba(0,0,0,.1), 2px 0 2px 2px rgba(0,0,0,.1);

  h1 {
      margin: 20px;
  }
}

.feature__icon {
 width: auto;
 height: 80px;
}

</style>