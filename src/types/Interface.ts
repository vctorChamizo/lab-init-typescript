export const interfaceTypes = () => {
  interface Xmen {
    name: string;
    power: string;
  }

  const sendToMision = (xmen: Xmen) => {
    console.log(xmen.name, "has been sent to a mision");
  };

  const sendToSecretLiar = (xmen: Xmen) => {
    console.log(xmen.name, "has been sent to a secret liar");
  };

  let wolverine: Xmen = {
    name: "Wolverine",
    power: "Regenertion",
  };

  sendToMision(wolverine);
  sendToSecretLiar(wolverine);
};
