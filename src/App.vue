<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">mCustomers</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/about" tag="li" active-class="active"><a>About</a></router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">Add Customer</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
<!--    <router-link to="/about">About</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

</style>
