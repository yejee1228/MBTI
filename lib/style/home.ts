import styled from "styled-components";

export const Wrap = styled.div`
width: 100%;
padding: 94px 0;
text-align: -webkit-center;
`
export const title = styled.div`
width:342px;
font-size:30px;
color: #ffc848
`
export const Poster = styled.div`
width: 342px;
height: 227px;
background: url('images/title.png') no-repeat;
background-size: contain;
margin-top: 30px;
@media (max-width: 420px) {
    width: calc(342px * 0.9);
    height: calc(227px * 0.9);
}
`
export const Button = styled.div`
width : 80%;
height: 49px;
margin-top: 50px;
padding: 9px;
background: #7dbeea;
border: 2px solid #4f6772;
border-radius: 24.5px;
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 26px;
text-align: center;
letter-spacing: -1.5px;
cursor: pointer;
@media screen and (min-width: 500px){
    width: 350px;
}
`
export const ButtonText = styled.span`
color: ${(props) => props.color};
`