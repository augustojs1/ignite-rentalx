import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test'
          ? 'rentx_test'
          : defaultOptions.database,
    })
  );
};

// FILE BEFORE REMOVING 'database_ignite' as host
// import { Connection, createConnection, getConnectionOptions } from 'typeorm';

// export default async (host = 'database_ignite'): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();

//   return createConnection(
//     Object.assign(defaultOptions, {
//       host: process.env.NODE_ENV === 'test' ? 'localhost' : host,
//       database:
//         process.env.NODE_ENV === 'test'
//           ? 'rentx_test'
//           : defaultOptions.database,
//     })
//   );
// };

// ORIGINAL INDEX FILE
// import { Connection, createConnection, getConnectionOptions } from 'typeorm';

// export default async(host = 'database_ignite'): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();

//   return createConnection(
//     Object.assign(defaultOptions, {
//       host,
//     })
//   )
// };
