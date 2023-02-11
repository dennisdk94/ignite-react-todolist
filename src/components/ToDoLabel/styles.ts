import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    span {
        color: ${(props) => props.theme['purple']};
        font-size: 1rem;
        font-weight: 700;
    }
    div {
        background: ${(props) => props.theme['gray-400']};
        min-width: 25px;
        max-width: 70px ;
        height: 19px;
        padding: 0 8px;
        margin-left: 8px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme['gray-200']};
    }
`