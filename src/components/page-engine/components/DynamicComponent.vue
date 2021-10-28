<template>
  <view>
    <uni-box v-if="type == 'box'" />
    <uni-tag v-else-if="type == 'tag'" />
    <uni-row v-else-if="type == 'row'" class="row">
      <uni-col
        class="col col-12"
        v-for="(item, index) in content"
        :key="index"
        :col="item.col"
      >
        <dynamic-component
          :type="item.type"
          :content="item.content"
        ></dynamic-component>
      </uni-col>
    </uni-row>
  </view>
</template>
<script type="text/ecmascript-6">
import UniRow from "@/components/row/index.vue";
import UniCol from "@/components/col/index.vue";
import UniBox from "@/components/box/index.vue";
import UniTag from "@/components/tag/index.vue";
export default {
  name: "dynamic-component",
  props: {
    type: {
      type: String,
      default: "",
    },
    col: {
      type: Number,
      default: 24,
    },
    content: {
      default: "",
    },
  },
  components: {
    UniRow,
    UniCol,
    UniBox,
    UniTag,
  },
  created() {},
  data() {
    return {
      componentId: "",
    };
  },
};
</script>
<style scoped lang="scss"></style>
