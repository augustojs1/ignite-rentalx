import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Conexão com o banco sucesso!'));
