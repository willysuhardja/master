import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import AppModel from './appModel';
import {mainSchema} from './appSchemas';

const adapter = new SQLiteAdapter({
  dbName: 'YMStock',
  schema: mainSchema,
});

const database = new Database({
  adapter,
  modelClasses: AppModel,
  actionsEnabled: true,
});

export const doResetDatabase = () => {
  return database.action(async () => {
    return await database.unsafeResetDatabase();
  });
};

export default database;
