<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh" :wrap="false">
      <a-layout-header class="header">
        <!-- a-space：间距组件 -->
        <a-space>
          <img src="../assets/oj-logo.svg" class="logo" />
          <div>言 OJ</div>
        </a-space>
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
#userLayout {
  text-align: center;
  background: url(https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png)
    0% 0% / 100% 100%;
}

#userLayout .logo {
  width: 64px;
  height: 64px;
}

#userLayout .header {
  margin-top: 16px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0; /*left 和 right 都设为0，让它占满*/
  text-align: center;
}
</style>
<script></script>
