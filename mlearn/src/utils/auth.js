export const authorize = (email, password) => {
  return new Promise((resolve) => {
    resolve({ token: "a-fake-token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve) => {
    resolve({
      data: { name: "Fake User", email: "fake@example.com", id: "fake-id" },
    });
  });
};
