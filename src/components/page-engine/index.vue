<template>
  <view>
    <dynamic-component
      v-for="(config, index) in configs"
      :key="index"
      :type="config.type"
      :content="config.content"
    />
  </view>
</template>
<script type="text/ecmascript-6">
import DynamicComponent from "./components/DynamicComponent.vue";
export default {
  props: {
    configs: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    DynamicComponent,
  },
};
</script>
<style scoped lang="scss"></style>
