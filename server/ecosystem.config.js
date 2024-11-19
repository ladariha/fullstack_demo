module.exports = {
  apps: [{
    name: "myServer3",
    error_file: "./pm2.err",
    log_file: "./pm2.log",
    script: "dist/index.js",
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    },
    max_memory_restart: "300M"
  }]
};
