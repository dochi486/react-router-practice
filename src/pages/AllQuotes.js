import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: '붱키',
    text: '리액트는 재미없엉',
  },
  {
    id: 'q2',
    author: '준키',
    text: '코딩은 재미없엉',
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
