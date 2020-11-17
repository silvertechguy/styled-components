import React from "react";
import styled from "styled-components";

import Button from "./components/button";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <MainWrapper>
      <Button primary bgColor={"palevioletred"}>
        My primary button
      </Button>
      <Button>My button</Button>
    </MainWrapper>
  );
};

export default App;
