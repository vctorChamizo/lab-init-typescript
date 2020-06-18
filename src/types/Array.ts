export const arrayTypes = () => {
  let avengers: string[] = ["Spiderman", "Iroman", "Hulk"];
  let powers: number[] = [8, 6, 10];

  const showPower = (avengers: string[], powers: number[]) => {
    avengers.forEach((e, i) => {
      console.log(`${e}: ${powers[i]}`);
    });
  };

  showPower(avengers, powers);
};
