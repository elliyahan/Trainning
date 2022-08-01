import React from 'react';
import styled, { keyframes } from "styled-components";

const Style = () => {
    return (
        <div>
            <Box>{/* 디자인을 하기 위한 컴포넌트 */}
                <Title fontSize="2rem" color="#d39">스타일드 컴포넌트</Title>
                <Title fontSize="1.5rem" color="#39630f">CSS IN JS</Title>
                <Title color="#ee7124">Fun and Easy</Title>
                <Btn borderColor="#03f" active> normal </Btn>
                <Btn borderColor="#ddd"> disabled  </Btn>
                <Btn borderColor="#f30"> active </Btn>
                <Text size="20px" color="#f99129">2022년 6월 20일</Text>
                <Text size="16px" color="#7d7010">월요일</Text>
                <Text size="24px" color="#5363df">오전 10시 13분</Text>
            </Box>
            <Box as="ul">
                <Text size="16px" color="#f59" as="li">menu1</Text>
                <Text size="16px" color="#f59" as="li">menu3</Text>
                <Text size="16px" color="#f59" as="li">menu2</Text>
            </Box>
            <Box>
                <AniBtn>애니메이션 버튼</AniBtn> 
            </Box>
        </div>
    );
};

export default Style;

const Btn = styled.button.attrs(props =>({
    type:'button',
    className:props.active  ? 'btn on' : 'btn' 
}))`
    width:80px;
    height:40px;
    border-radius: 3px;
    margin:10px;
    color:${(props)=>props.borderColor} ;
    border:1px solid ${(props)=>props.borderColor} ; 
`

const Box = styled.div`
    width:500px;
    height:300px;
    border:5px solid red;
    margin: 3rem auto;
    text-align: center;
`
// props 사용 
const Title = styled.h2`
    font-size: ${(props) => props.fontSize};
    color:${(props)=>props.color};
    margin: 1rem 0;
`
const Text = styled.p`
    margin:10px 0;
    font-size:${(props) => props.size};
    color:${(props) => props.color};
`
const colorChange = keyframes`
    0%{background-color: red;}
    100%{ background-color: yellow;}
`

/* 확장시키고 애니메이션 적용  */
const AniBtn = styled(Btn)`
    width:400px;
    animation:${colorChange} 1.5s alternate infinite ;
`
/* 
1.  as사용 
2.  props 사용
3.  attrs 사용
4. 확장 
5. 애니메이션 적용 
6. 글로벌 styled적용 
 scss 
 module.css 
 styled components 
 css in js  
*/