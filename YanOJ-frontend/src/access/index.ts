import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to) => {
  console.log("登录用户信息：", store.state.user.loginUser);
  const loginUser = store.state.user.loginUser;

  // 如果之前没登录过，自动登录
  if (!loginUser || !loginUser.userRole) {
    // 加await是为了等用户登录成功之后，再执行后续的代码
    await store.dispatch("user/getLoginUser");
  }

  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  // 要跳转的页面必须登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    // 如果没登录，跳转到登录页面
    // 由于loginUser对象始终不为空，因此一定要加上!loginUser.userRole
    if (!loginUser || !loginUser.userRole) {
      // 如果没登录，跳转到登录页面
      return `/user/login?redirect=${to.fullPath}`;
    }
    if (!checkAccess(loginUser, needAccess)) {
      return "/noAuth";
    }
  }
});
