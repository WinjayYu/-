import logger from '../taf/logger';
import { ETG, TgAccessProxy } from '../taf/proxy';

class ViewService {
  constructor(options) {
    this.options = options;
  }

  getViewDetails(options) {
    const req = new ETG.GetViewDetailsReq();
    req.readFromObject({
      userInfo: { userId: options.userId },
      size: options.size || 20,
      offset: options.offset || 0,
      type: options.type,
      cost: options.cost,
    });
    return TgAccessProxy.getViewDetails(req)
      .then(res => {
        return res.response.arguments.stRsp.toObject();
      })
      .catch(error => {
        logger.error.error(
          'Get views error:',
          error.response,
          'options:',
          options
        );
      });
  }

  getViewDetail(options) {
    const req = new ETG.GetViewDetailReq();
    req.readFromObject({
      userInfo: { userId: options.userId },
      viewId: options.viewId,
    });
    return TgAccessProxy.getViewDetail(req)
      .then(res => {
        return res.response.arguments.stRsp.toObject();
      })
      .catch(error => {
        logger.error.error(
          'Get view detail error:',
          error.response,
          'options:',
          options
        );
      });
  }

  getTgViewDetailsByTgId(options) {
    const req = new ETG.GetTgViewDetailsReq();
    req.readFromObject({
      userInfo: { userId: options.userId },
      offset: options.offset,
      size: options.size,
    });
    return TgAccessProxy.getTgViewDetailsByTgId(req)
      .then(res => {
        return res.response.arguments.stRsp.toObject();
      })
      .catch(error => {
        logger.error.error(
          'Get view detail by tg id error:',
          error.response,
          'options:',
          options
        );
      });
  }

  getTgInfo(options) {
    const req = new ETG.UserInfoReq();
    req.readFromObject({
      basicInfo: {},
      userId: options.userId,
    });
    return TgAccessProxy.getTgInfo(req)
      .then(res => {
        return res.response.arguments.stRsp.toObject();
      })
      .catch(error => {
        logger.error.error(
          'Get tg info error:',
          error.response,
          'options:',
          options
        );
      });
  }
}

export default ViewService;
