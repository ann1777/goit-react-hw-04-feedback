import styled from 'styled-components';

// export const OptionsList = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: center;
//   margin: 0;
//   padding: 0;
// `

export const BtnFeedback = styled.li`
  padding-inline: 10px;
  list-style: none;
`;

export const BtnWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[4]}px;
`;

