module.exports = {
  title: '管理系统', // 系统名称
  showSettings: true, // 是否显示右侧配置
  tagsView: true, // 是否需要标签视图
  fixedHeader: false, // 是否固定头部
  sidebarLogo: false, // 是否显示侧边栏图标

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production' // 错误日志
}
