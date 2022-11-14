const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer');

/** @type {import('next').NextConfig} */
const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(withPreact(
  {
    reactStrictMode: true,
    swcMinify: true,
  }));

module.exports = config;
