// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['canvasjs-react-charts']
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change `Scheduler` to your repo name exactly
export default defineConfig({
  plugins: [react()],
  base: '/Scheduler/',
})
