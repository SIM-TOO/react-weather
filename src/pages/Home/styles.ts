import styled from "styled-components";
import { Container } from "../../Container.styles";

// div 요소 스타일 컴포넌트 생성
export const HomeWrapper = styled.div`
padding: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

// 기존 컴포넌트 확장 방식
export const ThisDayBlock = styled(Container)`
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
@media (max-width:980px) {
    flex-direction: column;
    gap: 20px;
}
`
