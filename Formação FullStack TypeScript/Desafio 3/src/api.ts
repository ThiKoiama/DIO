const conta = {
  email: "thiago@dio.bank",
  password: "123456",
  name: "Thiago Koiama",
  balance: 2000.0,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
