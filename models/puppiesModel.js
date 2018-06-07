module.exports = function(sequelize, DataTypes) {
    let Puppies = sequelize.define("puppies", { 
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      breed: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      info: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: false
      }, 
      image: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      timestamps: false
    });
    return Puppies;
};