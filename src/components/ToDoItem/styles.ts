import styled from 'styled-components';

export const Container = styled.div`
    max-width: 736px;
    height: 72px;
    background: ${(props) => props.theme['gray-500']};
    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 16px;
`