import styled from "styled-components";

//question
export const QuestionWrap = styled.div`
width: 100%;
height: fit-content;
`
export const QuestionWindowWrap = styled.div`
width: 90%;
height: 90%;
padding: 30px;
margin: 44px 5%;
position:relative;
display: inline-block;
border: 2px solid #4f6772;
border-radius: 25px;
background: #FFFFFF;
`
export const Count = styled.p`
width: 100%;
text-align: right;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
letter-spacing: -0.7px;
color: #000000;
`
export const ProgressBar = styled.div`
width: 100%;
height: 4px;
padding: 1.4px;
position: relative;
background: linear-gradient(90deg, #4f6772 0%, #4f6772 99.54%);
border: 1.4px solid #4f6772;
border-radius: 4.5px;
`

export const Proceeded = styled.div<{ count: number, page: number }>`
width: calc(100% / ${({ count }) => count} - 1px);
height: 4px;
position:absolute;
left: calc(100% / ${({ count }) => count} * ${({ page }) => page} + ${({ page }) => 0.5 * page}px);
top: 0;
background: #ffcb51;

&: first-child{
    border-radius: 4.5px 0px 0px 4.5px;
}
&: last-child{
    border-radius: 0px 4.5px 4.5px 0px;
}
`

export const BeforeProgress = styled(Proceeded)`
background: #e7e7e7;
`

export const QuestionBox = styled.div`
margin: 28px 0;
`

export const QuestionText = styled.span<{ color: string }>`
color: ${({ color }) => color};
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
letter-spacing: -2.4px;
`

export const QuestionImageWrap = styled.div`
text-align: -webkit-center;
`
export const QuestionImage = styled.img`
width: 350px;
height: auto;
padding-top : 23px; 
@media (max-width:550px){
    width:80%;
}
`

export const ResultBox = styled.div`
text-align: -webkit-center;
`
export const ResultButton = styled.div<{ correct: boolean }>`
width: 100%;
height: 49px;
margin: 16px 0;
position:relative;
border-radius: 24.5px;
font-family: 'NotoSansCJKkr';
font-size: 16px;
line-height: 16px;
text-align: center;
letter-spacing: -0.9px;
color: ${({ correct }) => correct ? `#FFFFFF` : `#494949`};
background-color: ${({ correct }) => correct ? `#4f6772` : `#F1F1F1`};
border: none;
cursor: pointer;
&:hover{
    background-color: #7dbeea;
    color: #ffffff;
}
`
export const ResultButtonSpan = styled.span`
width:100%;
position:absolute;
top: 50%;
left: 50%;
transform: translateX(-50%) translateY(-50%);
`
//result
export const ResultWrap = styled.div`
width: 100%;
height: fit-content;
padding: 15px;
text-align: -webkit-center;
`

export const ResultTypeName = styled.p`
width: 80%;
height: 55px;
padding: 3px;
display: inline-flex;
margin: 13px 0;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 700;
font-size: 76px;
line-height: 22px;
text-align: center;
letter-spacing: 1px;
color: #7dbeea;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #ffcb51;
text-shadow: 1px 1px 0px #ffcb51;
align-items: center;
justify-content: center;
`

export const ResultTypeText = styled.p`
width: 80%;
height: 38px;
padding: 3px;
margin: 13px 0 0 0;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 700;
font-size: 22px;
letter-spacing: 1px;
color: #4f6772;
-webkit-text-stroke-color: #000000;
background: #ffcb51;
border-radius: 25px 25px 0 0;
border-bottom: 2px solid #4f6772;
`

export const ResultCharacter = styled.div`
width: 80%;
height: 49px;
padding: 9px;
background: #7dbeea;
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 26px;
text-align: center;
letter-spacing: -1.5px;
border-radius: 0 0 25px 25px;
`

export const ResultCharacterText = styled.span`
color: ${(props) => props.color};
`

export const ResultWindowWrap = styled.div`
width: calc(100% - 65px);
height: auto;
padding: 20px;
margin: 17.5px;
background: #ffffff;
position: relative;
border-radius: 18px;
&.last-child{
    margin-right: 0px
}
@media(max-width: 420px){
    width: calc(100% - 55px);
    margin: 12.5px;
}
`
export const ResultContentWrap = styled.div`
width: 100%;
height: auto;
`

export const ResultImage = styled.div<{ src: string }>`
width: 290px;
height: 290px;
position:relative;
margin-top: 17px;
background : url(${({ src }) => src});
background-size: contain;
background-repeat: no-repeat;
@media(max-width: 420px){
    width: 225px;
    height: 225px;
}
`
export const TypeTalk = styled.p`
width: 100%;
height: fit-content;
padding: 3px 10px;
margin-bottom: 0;
background: #9ccae9;
color: #ffffff;
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 19px;
text-align: center;
letter-spacing: -1px;
border-radius: 20px 20px 0 0;
border-bottom: 1px solid #4f6772;
`
export const Expression = styled.p`
width: 100%;
height: auto;
margin: 0;
padding: 10px 5px;  
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
text-align: center;
letter-spacing: 0.2px;
color: #000000;
background: #f9da92;
border-radius: 0 0 20px 20px;
`
export const ResultDescription = styled.div`
padding: 13px 14px;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-size: 13px;
line-height: 23px;
letter-spacing: -0.7px;
text-align:left;
color: #000000;
b{
    font-size: 16px;
    color: #4f6772;
}
`
export const Relationship = styled.div`
width: calc(100% - 65px);
margin: 17.5px 32.5px;
display: flex;
justify-content: space-between;
@media(max-width: 420px){
    margin: 27.5px;
}
`
export const ResultChmiWindowWrap = styled(ResultWindowWrap)`
width: calc(50% - 10px);
margin: 0;
cursor: pointer;
&.last-child{
    margin-right: 0px
}
@media(max-width: 420px){
    width: calc(50% - 15px);
}
`
export const TitleSpan = styled.div`
padding-top: 19px;
padding-bottom: 9px;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
letter-spacing: -1px;
color: #000000;
`

export const Chmi = styled.div`
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
letter-spacing: -1px;
color: #000000;
`

export const ChmiImg = styled.div<{ url: string }>`
width: 200px;
height: 200px;
background: url(${({ url }) => url});
background-size: cover;
@media(max-width: 420px){
    width: 98px;
    height: 98px;
}
@media(max-width:767px){
    width: 120px;
    height: 120px;
}
`

export const ChmiName = styled.div`
padding: 15px 35px 29px 35px;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 10px;
text-align: center;
letter-spacing: -0.7px;
color: #000000;
@media(max-width: 420px){
    padding: 15px 0 29px;
}
`
export const ShareBox = styled.div`
width: 100%;
margin: 21px auto;
padding: 17px 74px 0 74px;
@media(max-width: 420px){
    padding: 17px 0 0
}
`
export const ShareImg = styled.img`
width: 46px;
height: 46px;
margin-right:23px;
cursor: pointer;
@media(max-width: 420px){
    margin-right: 15px;
}
&:last-child{
    margin:0
}
`
export const ReturnButton = styled.div`
width: 70%;
height: 49px;
padding: 13px 0;
margin: 40px 0;
border-radius: 24.5px;
font-family: 'NotoSansCJKkr';
font-size: 26px;
line-height: 16px;
text-align: center;
letter-spacing: -0.9px;
color: #FFFFFF;
background: #F56A6A;
border: 2.2px solid #000000;
cursor: pointer;
`