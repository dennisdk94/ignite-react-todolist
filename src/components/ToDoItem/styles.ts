import styled from 'styled-components';

interface ICheckBox {
    checked: boolean;
}

export const Container = styled.div`
    margin: 12px 0;
    max-width: 736px;
    height: 72px;
    background: ${(props) => props.theme['gray-500']};
    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .content {
        display: flex;
        width: 90%;
        span {
            width: 90%;
            margin-left: 16px;
            color: ${(props) => props.theme['gray-100']}
        }
    }
    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
`

export const CheckBox = styled.div<ICheckBox>`
    width: 17.4px;
    height: 17.4px;
    border-radius: 50%;
    border: 1px solid ${props => props.checked ? '#5E60CE' : '#4EA8DE'} ;
    cursor: pointer;
    background: ${props => props.checked && '#5E60CE'};
    display: flex;
    align-items: center;
    justify-content: center;
`