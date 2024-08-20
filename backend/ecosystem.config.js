module.exports = [{
  script: 'automatizaai/server.js',
  name: 'waticket-backend',
  exec_mode: 'fork',
  cron_restart: '05 00 * * *',
  max_memory_restart: '769M', 
  node_args: '--max-old-space-size=769',
  instances: 1,
  watch: false
}]