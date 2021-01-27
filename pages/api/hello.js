export default function handler(req, res) {
  res.status(200).json({
    data: {
      text: "Hello World!",
    },
    moreData: {
      name: "Joe",
      arrayOfData: [1, 2, 3, 4],
    },
  });
}
