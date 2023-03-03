import React from 'react';
import styled from "styled-components";

const Hero = () => {
  return (
    <>

        <Heroo>

            <Contain>

                <Left>
                    <Better>The Better Way <br />to Save & Invest.</Better>

                    <Piggy>We help over 4 million customers achieve their financial goals by helping them save and invest with ease.</Piggy>

                    <Create>Create free account</Create>

                    <Play>

                        <Get>
                            <GetImg src="/images/home/apple_icon_32ccc572ff.svg" />
                            <GetWord>Get on iPhone</GetWord>
                        </Get>

                        <Get>
                            <GetImg src="/images/home/google_icon_9867fc9be6.svg" />
                            <GetWord>Get on Android</GetWord>
                        </Get>

                    </Play>
                </Left>

                <Right>

                    <Border src="/images/home/rect_ccb22b6667.png" />

                    <Lady>
                        <LadyImg src="/images/home/header_Img_a2a9220bd6.png" />
                    </Lady>

                    <Rent src="/images/home/card1_565f256c81.png" />

                    <Rent2 src="/images/home/card2_7a8c09a44c.png" />

                    <Circle></Circle>
                    <Circle2></Circle2>
                    <Circle3></Circle3>
                    <Circle4></Circle4>
                    <Circle5></Circle5>
                    <Circle6></Circle6>
                    <Circle7></Circle7>
                    <Circle8></Circle8>
                    <Circle9></Circle9>
                    <Circle10></Circle10>

                </Right>

            </Contain>

            <div style={{width:"450px", height:"100%", position:"absolute", right:"0", backgroundColor:"#f4fafdef"}}></div>

        </Heroo>

    </>
  )
}

export default Hero

// const Contain = styled.div``;


const Circle10 = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 300px;
left: -80px;
`;

const Circle9 = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 300px;
left: -50px;
`;

const Circle8 = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 280px;
left: -80px;
`;

const Circle7 = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 280px;
left: -50px;
`;

const Circle6 = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 260px;
left: -80px;
`;

const Circle5 = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 260px;
left: -50px;
`;

const Circle4 = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 240px;
left: -80px;
`;

const Circle3 = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 240px;
left: -50px;
`;

const Circle2 = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 220px;
left: -80px;
`;

const Circle = styled.div`
width: 10px;
height: 10px;
background-color: #9cd0fc;
border-radius: 50%;
position: absolute;
bottom: 220px;
left: -50px;
`;

const LadyImg = styled.img`
width: 97%;
`;

const Rent2 = styled.img`
position: absolute;
width: 200px;
/* height: 50px; */
bottom: 150px;
right: -50px;
`;

const Rent = styled.img`
position: absolute;
width: 200px;
/* height: 50px; */
top: 240px;
left: -150px;
`;

const Lady = styled.div`
position: absolute;
width: 350px;
height: 470px;
background-color: #d6f2fe;
top: 130px;
right: 50px;
border-radius: 20px;
display: flex;
justify-content: flex-end;
`;

const Border = styled.img`
width: 340px;
/* height: 500px; */
`;

const Right = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
z-index: 10;
margin-right: 110px;
`;

const GetWord = styled.div`
font-size: 13px;
font-weight: 400;
`;

const GetImg = styled.img`
width: 18px;
`;

const Get = styled.div`
width: 110px;
/* height: 35px; */
border: 1px solid #e3e3e3;
display: flex;
justify-content: space-between;
align-items: center;
padding: 12px;
margin-right: 20px;
border-radius: 8px;
`;

const Play = styled.div`
display: flex;
`;

const Create = styled.button`
width: 170px;
height: 45px;
border: none;
background: #0c1825;
color: white;
border-radius: 6px;
cursor: pointer;
font-weight: 700;
margin-bottom: 35px;

:hover{
  background: #26b2e0;
}
`;

const Piggy = styled.div`
color: #0c1825;
font-size: 15px;
margin-top: 30px;
margin-bottom: 30px;
font-weight: 450;
width: 77%;
`;

const Better = styled.div`
font-size: 70px;
font-weight: 700;
color: #0c1825;
`;

const Left = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Contain = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Heroo = styled.div`
width: 100%;
height: 105vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;