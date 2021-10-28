<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    console.log("App Launch");
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
});
</script>

<style>
/*每个页面公共css */

.row {
  display: flex;
  flex-flow: row wrap;
}
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}
.col-24 {
  flex: 0 0 100%;
  max-width: 100%;
}
.col-12 {
  flex: 0 0 50%;
  max-width: 50%;
}
.col-8 {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
}
.col-6 {
  flex: 0 0 25%;
  max-width: 25%;
}
</style>
