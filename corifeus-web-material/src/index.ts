export * from './component';

export * from './module';

import {log} from 'corifeus-web';

export * from './services';

const logMaterial = log.factory('material');

export {logMaterial as log};

export * from './boot';

export * from './services';
