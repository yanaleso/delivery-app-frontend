import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${p => p.theme.sizes.xxl};
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[5]}px;
`;
