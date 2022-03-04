const withTM = require('next-transpile-modules')(['ui'])

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true
}

module.exports = withTM(config)
