<template>
  <v-container>
    <v-card>
      <v-card-title primary-title class="display-1">Login</v-card-title>
      <v-card-text>Please enter your username and password and lick "Submit."</v-card-text>
      <v-container>
        <v-form>
          <v-flex md6>
            <v-text-field v-model="username" label="Username"></v-text-field>
            <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          </v-flex>
          <v-layout justify-end>
            <v-btn @click="login">Login</v-btn>
          </v-layout>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      login() {
        this.$router.push("/list")
      }
    }
  }
</script>
