import { HeaderContainer } from './styles';

import LogoSVG from '../../assets/Logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <span>
                <img src={LogoSVG} alt="" />
            </span>
        </HeaderContainer>
    )
}