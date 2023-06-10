import { welcome } from "./welcome";

describe("welcome function", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um alert com boas vindas", () => {
    welcome();
    expect(mockAlert).toHaveBeenCalledWith("Bem vindo(a) ao DIO BANK!");
  });
});
