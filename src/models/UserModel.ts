import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {}

User.init({
  full_name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  underscored: true,
});

export default User;
