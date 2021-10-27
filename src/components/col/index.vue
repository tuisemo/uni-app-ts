<template>
  <view class="col" :class="'col-' + col">
    <!---->
    <slot></slot>
  </view>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    col: {
      type: Number,
      default: 24,
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}
.col-24{
	display: block;
	flex:0 0 100%;
	max-width: 100%;
}
.col-12{
	display: block;
	flex:0 0 50%;
	max-width: 50%;
}
.col-8{
	display: block;
	flex:0 0 33.3333%;
	max-width: 33.3333%;
}
.col-6{
	display: block;
	flex:0 0 25%;
	max-width: 25%;
}
</style>
