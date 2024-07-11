const Book = require("./model");

const addBook = async (req, res) => {
  console.log("req: ", req.awesome);
  try {
    // const book = await Book.create({
    //   title: req.body.title,
    //   author: req.body.author,
    //   genre: req.body.genre,
    // });

    const book = await Book.create(req.body);

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deleted = await Book.destroy({ title: req.body.title });

    if (!deleted) {
      res.status(444).json({ message: "book not found" });
      return;
    }

    res.status(204).json({ message: "succcess" });
  } catch (error) {}
};

const dynamicBookUpdate = async (req, res) => {
  try {
    const updatedBook = await Book.update(
      { [req.body.updateKey]: req.body.updateValue },
      {
        where: {
          title: req.body.title,
        },
      }
    );
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const getBookByTitle = async (req, res) => {
  try {
    console.log("req.params: ", req.params);
    const book = await Book.findOne({ where: { title: req.params.title } });
    res
      .status(200)
      .json({ message: "success", book: book, params: req.params });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  getBookByTitle: getBookByTitle,
};
