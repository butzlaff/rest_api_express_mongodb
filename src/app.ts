import express from 'express';
import router from './routes';
import mongoose from 'mongoose';

class App {
  public app: express.Express;
  
  constructor() {
    this.app = express();

    this.config();

    this.routes();
    // Não remover essa rota
    this.app.get('/', (_req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

  public async mongooseStart(): Promise<void> {
    await mongoose.connect('mongodb://admin:admin@localhost:27017');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('Conexão com o banco de dados estabelecida com sucesso!');
    });
  }
}

export { App };

// export const { app } = new App();
