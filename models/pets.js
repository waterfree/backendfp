import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pets extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pet_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'owners',
        key: 'owner_id'
      }
    }
  }, {
    sequelize,
    tableName: 'pets',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pets_pkey",
        unique: true,
        fields: [
          { name: "pet_id" },
        ]
      },
    ]
  });
  }
}
