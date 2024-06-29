import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SpecificationsContainer = styled.div`
  max-width: 1000px;
  
  background-color: #252525; /* Grayish black background */
  color: #FAFAFA; /* Default text color to white */
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ComparisonTableContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  overflow-x: auto;
  background-color: #333; /* Slightly lighter background for table */
  border-radius: 8px;
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #555; /* Darker background for table head */
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: left;
  background-color: #F9ED32; /* Yellow background for headers */
  color: #333; /* Grayish black text for headers */
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #4D4D4D; /* Alternating row color */
  }
`;

const TableData = styled.td`
  padding: 12px 15px;
  text-align: left;
  color: #FAFAFA; /* White text for data cells */
`;

const RhynoSpecs = () => {
    const tableRef = useRef();

    useEffect(() => {
      if (tableRef.current) {
        window.scrollTo({ top: tableRef.current.offsetTop-20, behavior: 'smooth' });
      }
    }, []);
  
  return (
    <div className='App' ref={tableRef}>
    <SpecificationsContainer >
      <ComparisonTableContainer>
        <ComparisonTable>
          <TableHead>
            <TableRow>
              <TableHeader>Specification</TableHeader>
              <TableHeader>Rhyno SE03 Lite</TableHeader>
              <TableHeader>Rhyno SE03</TableHeader>
              <TableHeader>Rhyno SE03 Max</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableData>Battery</TableData>
              <TableData>1.8kWh</TableData>
              <TableData>2.7kWh</TableData>
              <TableData>2.7kWh</TableData>
            </TableRow>
            <TableRow>
              <TableData>Battery features</TableData>
              <TableData>
                LFP with 1500 cycles<br />
                Active Balancing<br />
                Waterproof (IP67)
              </TableData>
              <TableData>
                LFP with 1500 cycles<br />
                Active Balancing<br />
                Waterproof (IP67)
              </TableData>
              <TableData>
                LFP with 1500 cycles<br />
                Active Balancing<br />
                Waterproof (IP67)
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>Battery warranty</TableData>
              <TableData>3 years</TableData>
              <TableData>3 years</TableData>
              <TableData>3 years</TableData>
            </TableRow>
            <TableRow>
              <TableData>Charging time</TableData>
              <TableData>3 hours (12A)</TableData>
              <TableData>4 hours (12A)</TableData>
              <TableData>4 hours (12A)</TableData>
            </TableRow>
            <TableRow>
              <TableData>Motor</TableData>
              <TableData>1500W</TableData>
              <TableData>1500W</TableData>
              <TableData>2000W</TableData>
            </TableRow>
            <TableRow>
              <TableData>Max speed</TableData>
              <TableData>55 km/h</TableData>
              <TableData>55 km/h</TableData>
              <TableData>65 km/h</TableData>
            </TableRow>
            <TableRow>
              <TableData>Warranty on electronics</TableData>
              <TableData>1 year</TableData>
              <TableData>1 year</TableData>
              <TableData>1 year</TableData>
            </TableRow>
            <TableRow>
              <TableData>Max range (@30 km/h)</TableData>
              <TableData>100 km</TableData>
              <TableData>150 km</TableData>
              <TableData>120 km</TableData>
            </TableRow>
            <TableRow>
              <TableData>Max range (@45 km/h)</TableData>
              <TableData>90 km</TableData>
              <TableData>110 km</TableData>
              <TableData>100 km</TableData>
            </TableRow>
            <TableRow>
              <TableData>Max range (@full speed)</TableData>
              <TableData>60 km</TableData>
              <TableData>90 km</TableData>
              <TableData>80 km</TableData>
            </TableRow>
          </tbody>
        </ComparisonTable>
      </ComparisonTableContainer>
    </SpecificationsContainer>
    </div>  
  );
};

export default RhynoSpecs;
