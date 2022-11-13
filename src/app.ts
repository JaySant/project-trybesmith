import express from 'express';
import routerProduct from './routers/router';
import routerOrder from './routers/routerOrder';
import routerUsers from './routers/routerUsers';

const app = express();

app.use(express.json());
app.use('/products', routerProduct);
app.use('/orders', routerOrder);
app.use('/users', routerUsers);

export default app;
