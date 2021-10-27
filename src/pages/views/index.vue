<template>
  <view>
    <page-engine :configs="configs"></page-engine>
  </view>
</template>
<script type="text/ecmascript-6">
import pageEngine from "@/components/page-engine";
export default {
  components: {
    pageEngine
  },
  data() {
    return {
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
};
</script>
<style scoped lang="scss"></style>
