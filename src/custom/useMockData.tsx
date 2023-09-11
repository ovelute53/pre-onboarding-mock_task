import { useState, useEffect } from 'react';

export function useMockData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/mock_data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
}
