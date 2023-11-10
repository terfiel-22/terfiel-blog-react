import styled from "styled-components";

export const PageWrapper = styled.main`
  display: grid;
  grid-template-columns: [full-width-start] 100px [content-start] 1fr [content-end] 100px[full-width-end];
  min-height: 100vh;

  & > * {
    grid-column: content;
  }

  & .full-width {
    grid-column: full-width;
  }
`;
