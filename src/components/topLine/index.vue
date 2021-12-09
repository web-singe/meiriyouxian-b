<template>
  <div class="topline-box">
    <a-button type="primary" @click="setcollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="user-info">
      <span>{{user.username}}</span>
      <i><a-icon type="down" /></i>
      <router-link class="exit" :to="{name:'Login'}">退出</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['collapsed', 'user']),
  },
  methods: {
    ...mapActions(['setcollapsed']),
  },
};
</script>

<style lang="less">
.topline-box {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  border-bottom: 1px solid #eee;
  background-color: white;

  .breadcrumb {
    display: inline-block;
    margin-left: 20px;
  }

  .user-info {
    position: relative;
    float: right;
    padding: 0 20px;
    .exit {
      display: none;
      width: 100%;
      height: 50px;
      text-align: center;
      position: absolute;
      bottom: -50px;
      left: 0;
      background-color: white;
    }
    &:hover {
      .exit {
        display: block;
      }
    }
  }
}
</style>
