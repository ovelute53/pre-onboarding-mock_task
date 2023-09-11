import React, { useState } from 'react';
import TimeSeriesChart from '@/pages/TimeSeriesChart';
import mockData from '../public/mock_data.json';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';

const dataArray = Object.entries(mockData.response).map(([key, value]) => ({ key, ...value }));

function App() {
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const filteredData = dataArray.map(d => ({
    key: d.key,
    id: d.id,
    value_area: selectedID === null || selectedID === d.id ? d.value_area : 0,
    value_bar: selectedID === null || selectedID === d.id ? d.value_bar : 0,
  }));

  const uniqueIDs = Array.from(new Set(dataArray.map(d => d.id)));

  return (
    <Container>
      <GlobalStyle />
      <FilterContainer>
        {uniqueIDs.map(id => (
          <FilterButton key={id} onClick={() => setSelectedID(id)}>
            {id}
          </FilterButton>
        ))}
      </FilterContainer>
      <TimeSeriesChart data={filteredData} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003d80;
  }
`;
