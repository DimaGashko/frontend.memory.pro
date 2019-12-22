<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">
        <img
          src="/logo/logo-white.svg"
          width="32"
          class="d-inline-block align-top mr-1"
          alt="Memory.pro"
        />
        Memory.pro
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/train">Train</b-nav-item>
          <b-nav-item to="/leaderboard">Leaderboard</b-nav-item>
          <b-nav-item to="/performance">Performance</b-nav-item>
          <b-nav-item to="/contacts">Contacts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>DmitryGashko </em>
            </template>
            <b-dropdown-item to="/users/DmitryGashko">Profile</b-dropdown-item>
            <b-dropdown-item to="/signout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
