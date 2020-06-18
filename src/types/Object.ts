export const objectTypes = () => {
  let flash = {
    name: "Barry Allen",
    age: 24,
    powers: ["Fast", "Time travel"],
  };

  // It is correct because it satisfies the types
  flash = {
    name: "Clark Kent",
    age: 100,
    powers: ["Fly", "Strong", "Ultravision"],
  };

  // It is incorrect because not satisfies the types
  // flash = {
  //   name: 123,
  //   age: "100",
  //   powers: ["Stronger"],
  // };

  // It is incorrect because changes the keys
  // flash = {
  //   nameHeroe: "Clark Kent",
  //   age: 100,
  //   powers: ["Fly", "Strong", "Ultravision"],
  // };

  console.log("It's an object:", flash);
};
