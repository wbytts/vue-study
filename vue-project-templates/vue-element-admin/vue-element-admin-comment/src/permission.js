import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import { getToken } from '@/utils/auth' // 从cookie获取token
import getPageTitle from '@/utils/get-page-title' // 获取页面title

NProgress.configure({ showSpinner: false }) // NProgress 配置

const whiteList = ['/login', '/auth-redirect'] // 不需要重定向的白名单

router.beforeEach(async(to, from, next) => {
  // 开启进度条
  NProgress.start()
  // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  // 获取token，用来判断用户是否登录
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // !如果登陆了，则重定向到首页
      next({ path: '/' })
      NProgress.done() // 关闭进度条 hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      // 通过getInfo判断用户是否获得了权限角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // 获取用户信息
          // !注: 角色列表必须是一个数组! 例如: ['admin'] or ,['developer','editor']
          const { roles } = await store.dispatch('user/getInfo')
          // 根据角色生成可访问 router map
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // 动态添加可访问的路由
          router.addRoutes(accessRoutes)
          // hack方法来确保addRoutes是完整的
          // !设置replace: true，这样导航就不会留下历史记录
          next({ ...to, replace: true })
        } catch (error) {
          // 删除令牌，进入登录页面重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 没有 token
    if (whiteList.indexOf(to.path) !== -1) {
      next() // !如果在白名单中，则直接放行
    } else {
      // !没有访问权限的其他页面被重定向到登录页面。
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 结束进度条
  NProgress.done()
})
