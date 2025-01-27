import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const Role = sequelize.define(
  'Role',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
    created_by: {
      type: DataTypes.INTEGER,
    },
    updated_by: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Role', // We need to choose the model name
    tableName: 'role',
    timestamps: false
  },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User);

