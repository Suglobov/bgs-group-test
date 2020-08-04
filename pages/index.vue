<template>
  <v-layout column justify-center align-center>
    <div v-if="!$store.state.authUser">
      <div>Логин <b>demo</b>, пароль <b>demo</b></div>
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <v-form @submit.prevent="login">
        <v-text-field
          v-model="formUsername"
          label="Username"
          type="text"
          name="username"
        ></v-text-field>
        <v-text-field
          v-model="formPassword"
          label="Password"
          type="password"
          name="password"
          :rules="[rules.required]"
        >
        </v-text-field>
        <v-btn type="submit">Login</v-btn>
      </v-form>
    </div>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <v-btn @click="logout">Logout</v-btn>
    </div>
    <NuxtLink to="/profile">В профиль</NuxtLink>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: '',
      rules: {
        required: (value) => !!value || 'Required.',
      },
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword,
        });
        this.formUsername = '';
        this.formPassword = '';
        this.formError = null;

        this.$router.push('profile');
      } catch (error) {
        this.formError = error.message;
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout');
      } catch (e) {
        this.formError = e.message;
      }
    },
  },
};
</script>
