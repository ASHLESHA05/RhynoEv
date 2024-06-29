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
  maxWidth=300px
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
const Spec=()=>{
    return(
        <div className='App' style={{
            maxWidth:'300px',
            maxHeight:'600px'
        }}>
            <ComparisonTableContainer>
                <ComparisonTable>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Specifications</TableHeader>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        <TableRow>
                            <TableData>Battery</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Battery feature</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Battery Warrenty</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Charging time</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Motar</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Max Speed</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Warrenty on electronics</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Max range (@30 km/h)</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Max range (@45 km/h)</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>Max range (full speed)</TableData>
                        </TableRow>
                    </tbody>
                </ComparisonTable>
            </ComparisonTableContainer>

        </div>
    )
}


const SE03Lite = () => {
    return (
      <div className='App'>
        <ComparisonTableContainer>
          <ComparisonTable>
            <TableHead>
              <TableRow>
                <TableHeader>Rhyno SE03 Lite</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableData>1.8kWh</TableData>
              </TableRow>
              <TableRow>
                <TableData>
                  LFP with 1500 cycles<br />
                  Active Balancing<br />
                  Waterproof (IP67)
                </TableData>
              </TableRow>
              <TableRow>
                <TableData>3 years</TableData>
              </TableRow>
              <TableRow>
                <TableData>3 hours (12A)</TableData>
              </TableRow>
              <TableRow>
                <TableData>1500W</TableData>
              </TableRow>
              <TableRow>
                <TableData>55 km/h</TableData>
              </TableRow>
              <TableRow >
                <TableData>1 year</TableData>
              </TableRow>
              <TableRow>
                <TableData>100 km</TableData>
              </TableRow>
              <TableRow>
                <TableData>90 km</TableData>
              </TableRow>
              <TableRow>
                <TableData>60 km</TableData>
              </TableRow>
            </tbody>
          </ComparisonTable>
        </ComparisonTableContainer>
      </div>
    );
  };
  const SE03 = () => {
    return (
      <div className='App'>
        <ComparisonTableContainer>
          <ComparisonTable>
            <TableHead>
              <TableRow>
                
                <TableHeader>Rhyno SE03</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableData>Battery</TableData>
                <TableData>2.7kWh</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>
                  LFP with 1500 cycles<br />
                  Active Balancing<br />
                  Waterproof (IP67)
                </TableData>
              </TableRow>
              <TableRow>
                
                <TableData>3 years</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>4 hours (12A)</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>1500W</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>55 km/h</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>1 year</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>150 km</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>110 km</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>90 km</TableData>
              </TableRow>
            </tbody>
          </ComparisonTable>
        </ComparisonTableContainer>
      </div>
    );
  };

  const SE03Max = () => {
    return (
      <div className='App'>
        <ComparisonTableContainer>
          <ComparisonTable>
            <TableHead>
              <TableRow>
                
                <TableHeader>Rhyno SE03 Max</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableData>Battery</TableData>
                <TableData>2.7kWh</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>
                  LFP with 1500 cycles<br />
                  Active Balancing<br />
                  Waterproof (IP67)
                </TableData>
              </TableRow>
              <TableRow>
                
                <TableData>3 years</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>4 hours (12A)</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>2000W</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>65 km/h</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>1 year</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>120 km</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>100 km</TableData>
              </TableRow>
              <TableRow>
                
                <TableData>80 km</TableData>
              </TableRow>
            </tbody>
          </ComparisonTable>
        </ComparisonTableContainer>
      </div>
    );
  };
export  {Spec,SE03Lite,SE03,SE03Max}  