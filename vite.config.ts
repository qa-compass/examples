import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { qaCompassCodeJumpViteReact } from "@qa-compass/code-jump-vite-react";
import { execSync } from "child_process";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const isDevelopment = mode === "development";
    return {
        plugins: [
            ...(isDevelopment
                ? [
                    qaCompassCodeJumpViteReact({
                        service: "github",
                        repoUrl: execSync("git remote get-url origin")
                            .toString()
                            .trimEnd(),
                        localRepoPath: process.env.PWD,
                        branch: execSync("git rev-parse --abbrev-ref HEAD")
                            .toString()
                            .trimEnd(),
                        commit: execSync("git rev-parse HEAD").toString().trimEnd(),
                    }),
                ]
                : []),
            react()
        ],
    }
})
