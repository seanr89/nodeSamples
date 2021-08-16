import { Express, Request, Response } from 'express';

export default function (app: Express): void {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

    app.get('/', (req, res) => res.send('My first REST API!'));

    app.post('/api/users/', (req, res) => res.send('My first REST POST!'));
}
