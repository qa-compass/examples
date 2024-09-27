import {execSync} from "child_process";

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        config.module.rules.push(        {
                test: /\.(js|ts|jsx|tsx)$/,
                use: [
                    {
                        loader: '@qa-compass/code-jump-webpack-react',
                        options: {
                            service: "github",
                            repoUrl: 'https://github.com/qa-compass/examples.git',
                            localRepoPath: process.env.PWD,
                            branch: process.env.VERCEL_GIT_COMMIT_REF || execSync("git rev-parse --abbrev-ref HEAD").toString().trimEnd(),
                            commit: execSync("git rev-parse HEAD").toString().trimEnd(),
                        }
                    }
                ],
                exclude: /node_modules/,
            }
        )
        // When you start your app with "npm run dev" on localhost, the Code Jump feature gets the branch once from this line:
        // "process.env.VERCEL_GIT_COMMIT_REF || execSync("git rev-parse --abbrev-ref HEAD").toString().trimEnd()".
        // If you run "npm run dev" and then switch branches, it will still jump to the initial branch.
        // To fix this you have two options:
        // 1) manually run "rm -rf node_modules/.cache" after every branch change. For Turbopack: "rm -rf node_modules/.next/cache"
        // 2) Set "config.cache = false"
        // Then you can restart "npm run dev" to jump to the current branch.
        return config
    },
};

export default nextConfig;