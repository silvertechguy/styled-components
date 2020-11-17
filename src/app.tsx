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

const PaginationWrapper = styled("div")<{ page?: string }>`
  width: 100%;
  display: flex;
  justify-content: ${({ page }) => {
    if (page === "first") return "flex-end";
    else if (page === "middle") return "center";
    else return "flex-start";
  }};
`;

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <MainWrapper>
      <Button primary bgColor={"palevioletred"}>
        My primary button
      </Button>
      <Button>My button</Button>
      <PaginationWrapper page={"middle"}>
        <Button>Page 2</Button>
        <Button>Page 4</Button>
      </PaginationWrapper>
    </MainWrapper>
  );
};

export default App;
