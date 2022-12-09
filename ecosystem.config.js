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
      repo : 'https://github.com/martin-braun/martin-braun.git',
      ref  : 'origin/master',
      path : '/var/node/martin-braun.net',
      'pre-setup': '',
      'post-setup': '',
      'pre-deploy-local': '',
      'pre-deploy': '',
      'post-deploy': 'npm i && pm2 startOrReload --env production',
    }
  }
};
