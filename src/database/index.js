import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
    this.mongodb();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }

  mongodb() {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/tools', {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
