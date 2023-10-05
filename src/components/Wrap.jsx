//src/components/Wrap

import styled from "styled-components";
// import "./Wrap.css";
// import styles from "./Wrap.module.css";

const StyledWrap = styled.div`
  padding: 1em;
  border: 2px solid green;
`;

function Wrap({ children }) {
  return <StyledWrap>
    {/* <p>LArge test</p> */}
    {children}
  </StyledWrap>;
}

export default Wrap;
