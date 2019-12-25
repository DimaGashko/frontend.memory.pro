<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">
        <img
          src="/img/logo/logo-white.svg"
          width="32"
          class="d-inline-block align-top mr-1"
          alt="Memory.pro"
        />
        Memory.pro
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active-class="active" exact to="/">Home</b-nav-item>
          <b-nav-item active-class="active" to="/train">Train</b-nav-item>
          <b-nav-item active-class="active" to="/leaderboard"
            >Leaderboard</b-nav-item
          >
          <b-nav-item active-class="active" to="/performance"
            >Performance</b-nav-item
          >
          <b-nav-item active-class="active" to="/contacts">Contacts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="$auth.loggedIn" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ $auth.user.username }}</em>
            </template>
            <b-dropdown-item :to="profilePath">Profile</b-dropdown-item>
            <b-dropdown-item to="/logout">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else to="/login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    profilePath() {
      return `/users/${this.$auth.user.username}`;
    }
  }
};
</script>

<style></style>
