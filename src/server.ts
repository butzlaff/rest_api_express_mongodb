import { App } from './app';

const PORT = process.env.APP_PORT || 3001;

const app = new App;

app.start(PORT);

app.mongooseStart();
