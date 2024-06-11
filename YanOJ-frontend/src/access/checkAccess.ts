/**
 * 检查权限（判断当前登录用户是否具有某个权限）
 * @param loginUser 当前登录用户
 * @param needAcess 需要有的权限
 * @return boolean 有误权限
 */
import ACCESS_ENUM from "@/access/accessEnum";

const checkAccess = (loginUser, needAcess = ACCESS_ENUM.NOT_LOGIN) => {
  // 获取当前登录用户具有的权限（如果没有 loginUser. 则表示未登录）
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAcess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  // 如果需要用户登录才能访问
  if (needAcess === ACCESS_ENUM.USER) {
    // 如果用户没登录，那么就表示无权限
    if (loginUserAccess !== ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  if (needAcess === ACCESS_ENUM.ADMIN) {
    if (loginUserAcc)
  }
  // 仅管理员可见，判断当前用户是否有权限
  if (to.meta?.access == "canAdmin") {
    if (store.state.user.loginUser?.role !== "admin") {
      return "/noAuth";
    }
  }
};
