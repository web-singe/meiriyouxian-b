<template>
  <div>
    <div class="backg">
      <div class="login">
        <h2>用户登陆</h2>
        <form action="#" class="login-form" @submit.prevent="login">
          <div>
            <input
              type="text"
              name="account"
              placeholder="请输入用户名"
              v-model="account"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
          <div>
            <button class="button-login">登录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  methods: {
    async login() {
      if (this.account && this.password) {
        try {
          const data = await this.$api.login({ email: this.account, password: this.password });
          this.$store.dispatch('setuserInfo', data.data);
          this.$router.push('/');
          this.$message.success('登录成功');
        } catch (error) {
          this.$message.error(error);
        }
      } else {
        this.$message.error('请输入邮箱和密码');
      }
    },
  },
  created() {
    this.$store.dispatch('removeuserInfo');
  },
};
</script>

<style lang='less'>
@import url("~@/assets/styles/login.less");
</style>
