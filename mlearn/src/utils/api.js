const fakeDatabase = [
  {
    id: "65f7368dfb74bd6a92114c85",
    title: "Some news post",
    post: "<h2>Start here...</h2>",
    savedBy: ["fake-id"], // List of users who saved it
    createdBy: ["kyjuthrgefsed"],
    date: "2025-03-11",
  },
  {
    id: "65f7368dfkjb74bd6a92114c85",
    title: "Another news post",
    post: "<p>This is some content...</p>",
    savedBy: [],
    createdBy: ["csdvfwd"],
    date: "2025-03-10",
  },
];

export function getPosts() {
  return new Promise((resolve) => {
    resolve(fakeDatabase);
  });
}
