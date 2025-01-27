import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const RolePermission = sequelize.define(
  'RolePermission',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permission_id: {
      type: DataTypes.INTEGER,
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
    modelName: 'RolePermission', // We need to choose the model name
    tableName: 'role_permission',
    timestamps: false
  },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User);

