import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const Permission = sequelize.define(
  'Permission',
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
    modelName: 'Permission', // We need to choose the model name
    tableName: 'permission',
    timestamps: false
  },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User);

