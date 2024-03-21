import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Pedro",
          email: "henriquepedro1912@gmail.com",
          passwordHash: "$2a$08$VX5b1o.7CAHgV./XlBguruTLIH7YR987OaWaMK1RRkMnNn9VBgmca",
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
