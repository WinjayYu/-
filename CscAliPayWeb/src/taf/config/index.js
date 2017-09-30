import TafConfigHelper from '@taf/taf-config';
import logger from '../logger';

const pkg = require('../../../package.json');
const localConfig = require('./config.json');
const fileName = `${pkg.name}.conf`;

const config = {};

config.load = async function() {
  if (process.env.TAF_CONFIG) {
    try {
      const helper = new TafConfigHelper({ fileName });
      const tafConfig = await helper.getAllConfigData();
      config.content = JSON.parse(tafConfig[fileName]);
      logger.data.info(`Loding config file ${fileName} from taf...`, config.content);
    } catch (error) {
      logger.error.error('Load taf config error', error);
    }
  } else {
    config.content = localConfig;
    logger.data.info('Loading config file from local...', config.content);
  }
};

// import config.content to read config
export default config;
