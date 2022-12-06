module.exports = {
  apps : [
    {
      name: 'martin-braun.net',
      cwd: '.',
      script: 'npm',
      args: 'start',
      watch: 'public'
    }
  ],

  deploy : {
    production : {
      user : 'root',
      host : 'mb',
      ref  : 'origin/master',
      repo : 'git+https://github.com/martin-braun/martin-braun.git',
      path : '/var/node/martin-braun.net',
      'pre-deploy-local': '',
      'post-deploy' : './lxc-dependencies && npm i && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
