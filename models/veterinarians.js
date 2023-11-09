import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class veterinarians extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    veterinarian_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      references: {
        model: 'users',
        key: 'email'
      },
      unique: "veterinarians_email_key"
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    licence: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: "veterinarians_licence_key"
    },
    years_experiance: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'veterinarians',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "veterinarians_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "veterinarians_licence_key",
        unique: true,
        fields: [
          { name: "licence" },
        ]
      },
      {
        name: "veterinarians_pkey",
        unique: true,
        fields: [
          { name: "veterinarian_id" },
        ]
      },
    ]
  });
  }
}
