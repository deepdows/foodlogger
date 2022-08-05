<template>
  <div class="form-signin w-100 m-auto">
    <form class="login" @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Username"
          v-model="form.username"
        />
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="form.password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p class="warning-text">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: function () {
    return {
      errorMessage: "",
      form: {
        username: "",
        password: "",
      },
      url: process.env.VUE_APP_BACKEND_URL,
    };
  },
  methods: {
    async submit() {
      if (!this.form.username.length) {
        this.errorMessage = "Username is empty";
        return;
      } else if (!this.form.password.length) {
        this.errorMessage = "Password is empty";
        return;
      }
      var response = await fetch(`${this.url}/api/v1/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form),
      });
      var data = await response.json();
      if (response.status == 200) {
        Cookies.set('token', data.token);
        await this.$router.push({ path: "/" });
      } else {
        this.errorMessage = data.detail;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
