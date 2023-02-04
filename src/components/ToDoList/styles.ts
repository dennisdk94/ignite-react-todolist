import styled from 'styled-components';

export const Container = styled.body`
    max-width: 736px;
    height: auto;
    /* background: red; */
    margin: 0 auto;

    .input-content {
        position: relative;
        top: -25px;
        input {
            width: 638px;
            height: 54px;
            background: ${(props) => props.theme['gray-500']};
            padding: 16px;
            gap: 8px;
            border: 1px solid '#0D0D0D';
            border-radius: 8px;
            transition: 0.2s;
            color: ${(props) => props.theme['gray-100']};

            &::placeholder {
                color: ${(props) => props.theme['gray-300']};
            }
            &:focus {
                border: 1px solid #5E60CE;
                transition: 0.2s;
            }
        }
        button {
            width: 5.625rem;
            height: 3.25rem;
            background: ${(props) => props.theme['blue-dark']};
            border-radius: 8px;
            color: ${(props) => props.theme['gray-100']};
            margin-left: 8px;
            border: none;
            cursor: pointer;
            transition: 0.2s;
            &:hover{
                background: ${(props) => props.theme['blue']};
                transition: 0.2s;
            }
            img {
              margin-left: 8px ;
            }
        }
    }
`

export const ToDoContainer = styled.div`
    margin-top: 4rem;
    .to-do-header {
        display: flex;
        justify-content: space-between;
    }
    .to-do-list {
        margin-top: 12px;
    }
`

