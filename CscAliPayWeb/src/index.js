import config from './taf/config';

config.load().then(() => {
  require('./app');
});
