import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Pedro",
          email: "henriquepedro1912@gmail.com",
          passwordHash: "$2a$08$LSQAkixvKJRnQppB3P/HIOd8svSrxiVP5Y6pOILwSS2RyVVX0YoOi",
          profile: "admin",
          tokenVersion: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Users", {});
  }
};
