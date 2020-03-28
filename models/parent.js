module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define('Parent', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  Parent.associate = function(models) {
    // Associating Parent with Childs
    // When an Parent is deleted, also delete any associated Childs
    Parent.hasMany(models.Child, {
      onDelete: "cascade"
    });
  };

  return Parent;
};