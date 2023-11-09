import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class attends extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pets',
        key: 'pet_id'
      }
    },
    veterinarian_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'veterinarians',
        key: 'veterinarian_id'
      }
    },
    query_history: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'attends',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "attends_pkey",
        unique: true,
        fields: [
          { name: "pet_id" },
          { name: "veterinarian_id" },
        ]
      },
    ]
  });
  }
}
