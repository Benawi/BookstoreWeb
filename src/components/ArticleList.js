import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookItem from './ArticleList';
import { getBooks } from '../redux/articles/articles';
import store from '../redux/configureStore';

const BookList = () => {
  const books = useSelector((state) => state.books.data);

  useEffect(() => {
    store.dispatch(getBooks());
  }, []);

  return (
    <div className="booksContainer">
      {
        books.map((obj) => (
          <BookItem
            key={uuidv4()}
            item_id={obj.item_id}
            category={obj.category}
            title={obj.title}
          />
        ))
      }
    </div>
  );
};

export default BookList;
