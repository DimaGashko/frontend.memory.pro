<template>
  <div>
    <h1>Login</h1>
    <p>Click on the button to go to the oauth2 authentication</p>

    <b-button v-on:click="$auth.loginWith('laravel.passport')" variant="primary"
      >Login or Register</b-button
    >
  </div>
</template>
