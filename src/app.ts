import express from 'express';
import routesProduct from './routers/index';

const app = express();

app.use(express.json());
app.use('/products', routesProduct);

export default app;
