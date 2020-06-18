export const customTypes = () => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName: () => string;
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 50,
    powers: ["Strong", "Supervision"],
    getName() {
      return this.name;
    },
  };

  console.log("It's an object of a custom type:", superman);

  // IT`S THE SAME

  /*
  let superman: {
    name: string;
    age: number;
    powers: string[];
    getName: () => string;
  } = {
    name: "Clark Kent",
    age: 50,
    powers: ["Strong", "Supervision"],
    getName() {
      return this.name;
    },
  };
  */
};
