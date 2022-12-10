## Requirements

- Debian Bullseye remote
- `pm2`, locally

## Setup

- Remotely execute `bash <(wget -qO- https://raw.githubusercontent.com/martin-braun/martin-braun/master/lxc-dependencies)` to install all OS dependencies
- Locally execute `pm2 deploy production setup` to setup file structure

## Deploy / Update

- Locally execute `pm2 deploy production`

