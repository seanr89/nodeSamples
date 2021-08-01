import log from '../logger';
import mongoose, { Mongoose } from 'mongoose';
import config from '../../config/default';

function connect(): Promise<Mongoose> | Promise<void> {
    log.info('Attempt to connect!');
    const dbUri = config.dbUri as string;

    return mongoose
        .connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            log.info('Database connected');
        })
        .catch((error) => {
            log.error('db error', error);
            process.exit(1);
        });
}

export default connect;
