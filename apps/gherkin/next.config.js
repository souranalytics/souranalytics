const withTM = require('next-transpile-modules')(['shared'])

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true
}

module.exports = withTM(config)
