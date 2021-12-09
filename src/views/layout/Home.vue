<template>
  <div class="home">
    <div class="leftMenu">
      <leftMenu />
    </div>
    <div class="topLine" :class="{ collapsed: collapsed }">
      <topLine />
    </div>
    <div class="content" :class="{ collapsed: collapsed }">
      <card />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import leftMenu from '@/components/leftMenu/index.vue';

import topLine from '@/components/topLine/index.vue';

import card from '@/components/card/index.vue';

export default {
  components: {
    leftMenu,
    topLine,
    card,
  },
  computed: {
    ...mapState(['collapsed']),
  },
};
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
  .leftMenu {
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .topLine {
    width: calc(100% - 200px);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    transition: all 0.3s;
    &.collapsed {
      width: calc(100% - 80px);
    }
  }
  .content {
    width: calc(100% - 200px);
    margin-left: 200px;
    transition: all 0.3s;
    padding-top: 50px;
    &.collapsed {
      width: calc(100% - 80px);
      margin-left: 80px;
    }
  }
}
</style>
