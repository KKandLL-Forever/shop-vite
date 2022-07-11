import ElementPlus from 'element-plus'
// import locale from 'element-plus/lib/locale/lang/zh-cn'
import { App } from 'vue'

export default {
  install (app: App) {
    app.use(ElementPlus, { size: 'small' })
  }
}
