import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class owners extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    owner_id: {
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
      unique: "owners_email_key"
    },
    phone: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'owners',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "owners_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "owners_pkey",
        unique: true,
        fields: [
          { name: "owner_id" },
        ]
      },
    ]
  });
  }
}
