<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh" :wrap="false">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="" target="_blank"> by 洛言 </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  /*background: red;*/
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  /* 渐变背景色 */
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  background: #efefef; /* 浅灰色 */
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0; /*left 和 right 都设为0，让它占满*/
  text-align: center;
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader";

export default {
  components: { GlobalHeader },
};
</script>
