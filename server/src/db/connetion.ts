import { Sequelize } from "sequelize";


const sequelize = new Sequelize('rrhh', 'root', 'Viper0209*', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;