import { container } from 'tsyringe';

import { IDateProvider } from './IDateProvider';
import { DayjsDateProvider } from './implementarions/DayjsDateProvider';

container.registerSingleton<IDateProvider>(
  'DayjsDateProvider',
  DayjsDateProvider
);
