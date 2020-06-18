export const anyTypes = () => {
  let avenger: any; // let avenger; ---> Default type: any - value: undefined

  avenger = "Dr. Strange";
  console.log(avenger);

  avenger = 150.6666666;
  console.log(avenger.toFixed(2));

  avenger = true;
  console.log(avenger);
};
