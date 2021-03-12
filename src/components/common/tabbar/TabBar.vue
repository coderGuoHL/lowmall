<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
	export default {
    name:"TabBar"

	}
</script>

<style>

  .tab-bar {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    box-shadow: 0 0 1px 3px rgba(0,0,0,0.08);
    display: flex;
  }
</style>
