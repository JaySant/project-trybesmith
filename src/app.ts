import express from 'express';
import routesProduct from './routers/router';
import routesOrder from './routers/routerOrder';

const app = express();

app.use(express.json());
app.use('/products', routesProduct);
app.use('/orders', routesOrder);

export default app;
