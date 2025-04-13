import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FcFullTrash } from 'react-icons/fc';
import { removeBook } from '../redux/articles/articlesSlice';
import './ArticleRecord.css';

function Book() {
  const { books, isLoading, errorMsg } = useSelector(
    (state) => state.books || [],
  );
  const dispatch = useDispatch();

  if (isLoading) {
    return <div style={{ marginTop: '50px' }}>Loading...</div>;
  }

  if (errorMsg) {
    return <div style={{ marginTop: '50px' }}>Failed to fetch</div>;
  }

  return (
    <>
      <section className="section">
        <div className="container-main">
          {Object.entries(books).map(([id, book]) => book.map((bookList) => (
            <div className="content" key={id}>
              <div className="aside">
                <div className="aside-left" style={{ flex: 5 }}>
                  <div className="cat">{bookList.category}</div>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => {
                      dispatch(removeBook(id));
                    }}
                  >
                    <FcFullTrash />
                    Remove
                  </button>
                </div>
                <div className="aside-right" style={{ flex: 3 }}>
                  <button className="appDefaultButton  fontColor" type="button">Update</button>
                </div>
              </div>
            </div>
          )))}
        </div>
      </section>
    </>
  );
}

export default Book;
