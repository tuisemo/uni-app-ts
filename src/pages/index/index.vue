<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <!-- <page-engine :configs="configs"></page-engine> -->
    <view class="row">
      <view class="col" v-for="(item, index) in list" :key="index">
        <view class="app-item">9090</view>
      </view>
      <!-- 占位符优化布局 -->
      <!-- <view class="col"></view>
      <view class="col"></view>
      <view class="col"></view> -->
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import UniTag from "@/components/tag/index.vue";
import UniRow from "@/components/row/index.vue";
import UniCol from "@/components/col/index.vue";
import pageEngine from "@/components/page-engine/index.vue";
export default Vue.extend({
  components: {
    pageEngine,
    UniTag,
    UniCol,
    UniRow,
  },
  data() {
    return {
      title: "Hello",

      configs: [
        {
          type: "box",
          content: "xxxxxx",
        },
        {
          type: "row",
          content: [
            {
              type: "tag",
              col: 12,
              content: "xxxxxx",
            },
            {
              type: "tag",
              col: 12,
              content: "hhhhhh",
            },
          ],
        },
      ],
      list: new Array(3).fill(1),
    };
  },
  onLoad() {},
  methods: {},
});
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 15px;
  background: darkcyan;
  .col {
    flex: 0 0 31%;
    box-sizing: border-box;
  }
  &:before,
  &:after {
    content: "";
    display: block;
  }
}
.app-item {
  display: flex;
  justify-content: center;
  width: 100%;

  background: cornflowerblue;
}
</style>
