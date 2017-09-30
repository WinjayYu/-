const tafLogs = require('@taf/taf-logs');

const logger = {};

logger.error = new tafLogs('TafDate', 'error');

logger.exception = new tafLogs('TafDate', 'exception');

logger.timer = new tafLogs('TafDate', 'timer');

logger.data = new tafLogs('TafDate', 'data', { logTo: tafLogs.LogTo.Local });

logger.access_log = new tafLogs('TafDate', 'access');

logger.pre_access = new tafLogs('TafDate', 'pre_access');

logger.no_data = new tafLogs('TafDate', 'nodata');

logger.notify = new tafLogs('TafDate', 'notify');

module.exports = logger;
