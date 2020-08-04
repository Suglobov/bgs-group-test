<template>
  <v-layout column justify-center align-center>
    <NuxtLink to="/">На главную</NuxtLink>
    <div v-if="$store.state.authUser">
      <v-img height="50%" :src="photoUrl"></v-img>
      <div>Username: {{ username }}</div>
      <div>Email: {{ email }}</div>
      <v-btn @click="logout">Logout</v-btn>
    </div>
    <div v-else>
      Пожалуйста авторизуйтесь
    </div>
  </v-layout>
</template>

<script>
export default {
  // middleware: 'auth',
  data() {
    return {
      photoUrl: this.$store.state.authUser?.photoUrl,
      username: this.$store.state.authUser?.username,
      email: this.$store.state.authUser?.email,
    };
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/');
      } catch (e) {}
    },
  },
};
</script>
