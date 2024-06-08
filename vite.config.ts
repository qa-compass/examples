import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { qaCompassCodeJumpViteVue } from '@qa-compass/code-jump-vite-vue';
import { execSync } from "child_process";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qaCompassCodeJumpViteVue({
      service: "github",
      repoUrl: execSync("git remote get-url origin").toString().trimEnd(),
      localRepoPath: process.env.PWD!,
      branch: execSync("git rev-parse --abbrev-ref HEAD")
          .toString()
          .trimEnd(),
      commit: execSync("git rev-parse HEAD").toString().trimEnd(),
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
