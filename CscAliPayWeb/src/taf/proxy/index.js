import TafRPC from '@taf/taf-rpc';
import TgAccess from './TgAccessProxy';
import config from '../config';

const Taf = TafRPC.Communicator.New();
const ETG = TgAccess.ETG;
const TgAccessProxy = Taf.stringToProxy(
  ETG.TgAccessProxy,
  config.content.ETG_Servant
);

export { ETG, TgAccessProxy };
