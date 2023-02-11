import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 12.5rem;
    background: ${(props) => props.theme['gray-700']};

    display: flex;
    align-items: center;
    justify-content: center;
`;