import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _attends from  "./attends.js";
import _owners from  "./owners.js";
import _pets from  "./pets.js";
import _users from  "./users.js";
import _veterinarians from  "./veterinarians.js";

export default function initModels(sequelize) {
  const attends = _attends.init(sequelize, DataTypes);
  const owners = _owners.init(sequelize, DataTypes);
  const pets = _pets.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
  const veterinarians = _veterinarians.init(sequelize, DataTypes);

  pets.belongsToMany(veterinarians, { as: 'veterinarian_id_veterinarians', through: attends, foreignKey: "pet_id", otherKey: "veterinarian_id" });
  veterinarians.belongsToMany(pets, { as: 'pet_id_pets', through: attends, foreignKey: "veterinarian_id", otherKey: "pet_id" });
  pets.belongsTo(owners, { as: "owner", foreignKey: "owner_id"});
  owners.hasMany(pets, { as: "pets", foreignKey: "owner_id"});
  attends.belongsTo(pets, { as: "pet", foreignKey: "pet_id"});
  pets.hasMany(attends, { as: "attends", foreignKey: "pet_id"});
  veterinarians.belongsTo(users, { as: "email_user", foreignKey: "email"});
  users.hasOne(veterinarians, { as: "veterinarian", foreignKey: "email"});
  attends.belongsTo(veterinarians, { as: "veterinarian", foreignKey: "veterinarian_id"});
  veterinarians.hasMany(attends, { as: "attends", foreignKey: "veterinarian_id"});

  return {
    attends,
    owners,
    pets,
    users,
    veterinarians,
  };
}
