require('dotenv').config({
    path: './.env.local',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
