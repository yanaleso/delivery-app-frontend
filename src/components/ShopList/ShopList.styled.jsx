import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border-color: ${p => p.theme.colors.accent};
  }
`;
