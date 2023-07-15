import { useEffect, useState } from 'react';
import '../styles/RandomQuotes.css';

const RandomQuotes = () => {
  const url = 'https://api.api-ninjas.com/v1/quotes?category=business';
  const key = 'bvuPSGiToRh49Pmg7okBJQ==vaRCLzbhx7mll6yh';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState('');

  const getApi = async () => {
    try {
      setLoading(true);

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': key,
        },
      });

      const getQuote = await response.json();
      setQuote(getQuote[0]);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    getApi();
  }, []);

  if (error) return <div>Error fetching Data</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="quotes">
      <p>{quote.quote}</p>
      <p>{`- ${quote.author}`}</p>
    </div>
  );
};

export default RandomQuotes;
