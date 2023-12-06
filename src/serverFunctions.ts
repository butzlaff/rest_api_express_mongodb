import 'express-async-errors';
import express from 'express';
import router from './routes';
import mongoose from 'mongoose';
import { errorMiddleware } from './middlewares/error';

const app = express();
const PORT = process.env.APP_PORT || 3001;
 
app.get('/', (_req, res) => res.json({ ok: true }));

const accessControl: express.RequestHandler = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(express.json());

app.use(accessControl);

app.use(router);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

async function mongooseStart(): Promise<void> {
  mongoose.connect('mongodb://admin:admin@localhost:27017/');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function() {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  });
}

mongooseStart();

app.use(errorMiddleware);
  
export { mongooseStart };

// export const { app } = new App();
