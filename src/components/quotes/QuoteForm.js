import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishedEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFoucusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) =>
          '페이지를 나가시겠습니까? 입력한 정보가 사라집니다.'
        }
      />
      <Card>
        <form
          onFocus={formFoucusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">출처</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">문구</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishedEnteringHandler} className="btn">
              문구 추가하기
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
