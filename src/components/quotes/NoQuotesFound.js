import { Link } from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>불러올 문구가 없습니다!</p>
      <Link className="btn" to="/new-quote">
        문구 추가하기
      </Link>
    </div>
  );
};

export default NoQuotesFound;
