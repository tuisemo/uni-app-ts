<template>
  <view class="row">
    <slot></slot>
  </view>
</template>
<script type="text/ecmascript-6">
export default {
  components: {},
  data() {
    return {};
  },
  options: { styleIsolation: "shared" },
};
</script>
<style lang="scss">
.row {
  display: flex;
  flex-flow: row wrap;
}
</style>
