export const numberTypes = () => {
  let avengers: number = 5;
  let villains: number = 2; // let villains: number; ---> villains = undefined;

  if (avengers > villains) console.log("We are save!");
  else console.log("We are death!");
};
