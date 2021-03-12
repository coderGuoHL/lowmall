<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="icon-img"></slot>
    <slot v-else name="icon-img-active"></slot>
    <div :style="activeStyle"><slot name="icon-text"></slot></div>

  </div>
</template>

<script>
  export default {
    name:"TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive?{color: this.activeColor} : {};
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      }
    }

  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;

  }
  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 1px;
    margin-bottom: 1px;
  }

</style>
