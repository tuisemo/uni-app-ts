<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <uni-row>
      <uni-col :col="12">
        <uni-tag></uni-tag>
      </uni-col>
      <uni-col :col="12">
        <uni-tag></uni-tag>
      </uni-col>
    </uni-row>
    <page-engine :configs="configs"></page-engine>
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
    };
  },
  onLoad() {},
  methods: {},
});
</script>

<style>
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
</style>
