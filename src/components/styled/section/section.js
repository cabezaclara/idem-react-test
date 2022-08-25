import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 48px;
  padding-left: 15px;
  padding-right: 15px;

  @media ${(props) => props.theme.media.tablet} {
      margin-bottom: 72px;
      padding-left: 39px;
      padding-right: 39px;
  }

  @media ${(props) => props.theme.media.desktop} {
      padding-left: 165px;
      padding-right: 165px;
  }
`;

export default Section;