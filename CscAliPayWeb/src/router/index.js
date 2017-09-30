import Router from 'koa-router';
import home from '../controller/home';
import about from '../controller/about';

const appRoutes = () => {
  const router = new Router();

  router
    .get('/', home)
    .get('/about', about);

  router.get('/perCenter', async (ctx) => {
    await ctx.render('/perCenter', {
      title: '投顾简介',
    });
  });

  router.get('/freePoint', async (ctx) => {
    await ctx.render('/freePoint', {
      title: '免费观点详情',
    });
  });

  router.get('/investDetail', async (ctx) => {
    await ctx.render('/investDetail', {
      title: '投顾详情',
    });
  });

  router.get('/point', async (ctx) => {
    await ctx.render('/point', {
      title: '观点',
    });
  });
  return router;
};

export default appRoutes;

