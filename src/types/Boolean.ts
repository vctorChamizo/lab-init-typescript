export const booleanTypes = () => {
  let isSuperman: boolean = true;
  let isBatman: boolean = true;

  const convertToClarKent = () => false;

  const areSave = (superHeroe: boolean) => {
    if (superHeroe) console.log("We are save!");
    else console.log("Ooops!");
  };

  areSave(isSuperman);
  areSave(isBatman);

  isSuperman = convertToClarKent();

  areSave(isSuperman);
};
