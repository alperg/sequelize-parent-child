module.exports = (sequelize, DataTypes) => {
  const Child = sequelize.define('Child', {
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

  Child.associate = function(models) {
    // We're saying that a Child should belong to a Parent
    // A Child can't be created without a Parnt due to the foreign key constraint
    Child.belongsTo(models.Parent, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Child;
};
