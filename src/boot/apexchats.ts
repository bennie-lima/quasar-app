import { boot } from 'quasar/wrappers'
import VueApexCharts from 'vue3-apexcharts'
import ApexCharts from 'apexcharts'

export default boot(({ app }) => {
  app.use(VueApexCharts)
  app.config.globalProperties.$apexcharts = ApexCharts
})

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $apexcharts: typeof ApexCharts
  }
}
