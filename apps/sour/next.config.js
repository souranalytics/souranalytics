const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['shared'])

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true
}

module.exports = withPlugins([withTM], config)
