<template>
  <!--Navbar-->
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Invoicely</strong></router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <template v-if="$store.state.isAuthenticated">
            <router-link to="/dashboard" class="navbar-item">Dashboard</router-link>
          </template>

          <template v-else>
            <router-link to="/" class="navbar-item">Home</router-link>

            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/sign-up" class="button is-success"><strong>Sign-up</strong></router-link>
                <router-link to="/log-in" class="button is-light"><strong>Log-in</strong></router-link>

              </div>
            </div>
          </template>
        </div>
      </div>
    </nav>
  </div>

  <!--content-->
  <section class="section">
    <router-view />
  </section>

  <!--footer-->
  <footer class="footer">
    <p class="has-text-centered">Copyright (c) 2021 </p>
  </footer>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App', /* default app name that is wrapper around the project */

    beforeCreate() { /* Initializing the application using the functions from the main.js, so we see if authenticated or not before this created */
      this.$store.commit('initializeStore')

      const token = this.$store.state.token /* if we get the token, or an empty string */

      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token" + token /* Auto past each time a request is sent to the server */
      } else {
        axios.defaults.headers.common['Authorization'] = "" /* Not authorized */

      }
    }
  }
</script>
<style lang="scss">
  @import '../node_modules/bulma'
  /* Remove all style, and just add this*/
</style>