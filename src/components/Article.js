import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FcViewDetails, FcFullTrash, FcEditImage } from 'react-icons/fc';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/articles/articlesSlice';
import './ArticleRecord.css';
import ChapterProgress from './ChapterProgress';
import ChapterUpdateProgress from './ChapterUpdateProgress';

const bookGenres = [
  'የገጽ ምድብ ምረጥ',
  'ታሪክ',
  'የባህል እሴቶች',
  'የጉራጌ ባህላዊ ሸንጎ',
  'ኧሰት',
  'የማህበረሰቡ የማይዳሰሱ እሴቶች',
  'የባህላዊ አምልኮ ስርዓቶች',
  'ባህላዊ ምግቦች',
  'የቃቄ ወርድወት',
];
function Book() {
  const { books, isLoading, errorMsg } = useSelector(
    (state) => state.books || [],
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setcategory] = useState('የገጽ ምድብ ምረጥ');

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="loading">
        <h1>Failed to fetch ...</h1>
      </div>
    );
  }

  const handleAddBook = async () => {
    if (author !== '' && title !== '') {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title,
          author,
          category,
        }),
      )
        .unwrap()
        .then(() => {
          setTitle('');
          setAuthor('');
        });
    }
  };

  return (
    <>
      <section className="section">
        <div className="container-main">
          {Object.entries(books).map(([id, book]) => book.map((bookList) => (
            <div className="content" key={id}>
              <div className="aside">
                <div className="aside-left" style={{ flex: 5 }}>
                  <div className="cat">{bookList.category}</div>
                  <div className="title">{bookList.title}</div>
                  <div className="author">{bookList.author}</div>
                  <button type="button">
                    <FcViewDetails />
                    ዝርዝር
                  </button>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => {
                      dispatch(removeBook(id));
                    }}
                  >
                    <FcFullTrash />
                    አጥፋ
                  </button>
                  <button type="button">
                    <FcEditImage />
                    እርማት
                  </button>
                </div>
                <div className="aside-center" style={{ flex: 2 }}>

                  <ChapterProgress />

                </div>
                <div className="aside-right" style={{ flex: 3 }}>
                  <ChapterUpdateProgress />
                </div>
              </div>
            </div>
          )))}
        </div>
      </section>
      <hr />
      <div className="container">
        <h2 className="addhead">አዲስ ገጽ ጨምር</h2>
        <div>
          <form id="addBook" action="">
            <div className="formcontrol">
              <input
                type="text"
                className="input-text"
                placeholder="ርዕስ ጨምር"
                style={{ flex: 4 }}
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                type="text"
                className="input-text"
                placeholder="ማብራርያ ጨምር"
                style={{ flex: 3 }}
                name="author"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
              <select
                className="input-select"
                value={category}
                style={{ flex: 2 }}
                onChange={(e) => setcategory(e.target.value)}
              >
                {
          bookGenres.map((genre) => (
            <option key={uuidv4()} value={genre}>{genre}</option>
          ))
        }
              </select>
              <button style={{ flex: 1 }} type="button" onClick={handleAddBook}>
                ጨምር
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Book;
