import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' // 导入 path 模块，帮助我们解析路径
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 这里配置需要注意：Vite新版本resolve配置改为对象形式，如下：
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },

    ]
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import 'src/views/SocialMedia/style.scss';"
      }
    }
  }
})
