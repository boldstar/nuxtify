<template>
    <div class="navbar">
        <nuxt-link class="brand" to="/">Nuxtify</nuxt-link>

        <ul class="nav-links">
            <li class="link"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="link"><nuxt-link to="/about">About</nuxt-link></li>
            <li class="link"><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
            <li class="link"><nuxt-link to="/en/blog">Blog</nuxt-link></li>
            <li class="link"><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Navbar'

}
</script>
