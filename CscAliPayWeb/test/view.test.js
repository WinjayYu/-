import should from 'should';
import config from '../src/taf/config';

describe('View', function() {
  before(function() {
    const self = this;
    return config.load().then(() => {
      console.log('Config loaded.');
      const View = require('../src/service/view').default;
      self.View = View;
      self.view = new View();
    });
  });

  it('#getViewDetails()', function() {
    return this.view
      .getViewDetails({
        userId: 11111927,
        size: 20,
        offset: 0,
        cost: 0,
        type: 0,
      })
      .then(data => {
        const d = data;
        // console.log(JSON.stringify(data, null, 2));
        data.should.have.property('iRet');
      });
  });

  it('#getViewDetail()', function() {
    return this.view
      .getViewDetail({
        userId: 11111927,
        viewId: 3090,
      })
      .then(data => {
        // console.log(JSON.stringify(data, null, 2));
        data.should.have.property('iRet');
      });
  });

  it('#getTgViewDetailsByTgId()', function() {
    return this.view
      .getTgViewDetailsByTgId({
        userId: 11111927,
        offset: 0,
        size: 20,
      })
      .then(data => {
        // console.log(JSON.stringify(data, null, 2));
        data.should.have.property('iRet');
      });
  });

  it('#getTgInfo()', function() {
    const a = '123', b = '1456';
    return this.view.getTgInfo({ userId: 1034 }).then(data => {
      // console.log(JSON.stringify(data, null, 2));
      data.should.have.property('iRet');
    });
  });
});
