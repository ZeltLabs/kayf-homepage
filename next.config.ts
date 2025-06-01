import withMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMdx = withMDX({
    extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true, // bei Bedarf
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default withMdx(nextConfig);

