export const stringTypes = () => {
  let batman: string = "Batman";
  let greenLatern: string = "Green Latern";

  const deploySupers = (supers: string[]) => {
    supers.forEach((e) => {
      console.log(e);
    });
  };

  deploySupers([batman, greenLatern]);
};
