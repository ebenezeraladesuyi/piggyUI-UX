import React from 'react';
import styled from "styled-components";

const Security = () => {
  return (
    <>

        <Prior>

            <Contain>

                <Badge src="/images/home/security_369a26d96e.png" />

                <Right>

                    <Your>Your security is our priority</Your>

                    <Uses>We use the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.</Uses>

                    <Learn>Learn More</Learn>


                </Right>


            </Contain>

        </Prior>
    
    </>
  )
}

export default Security

// const Left = styled.div``;

// const Left = styled.div``;

const Learn = styled.a`
font-size:15px;
font-weight: 600;
color: #3535fa;
cursor: pointer;
`;

const Uses = styled.h5`
font-size: 14px;
font-weight: 400;
width: 600px;
color: #0c1825;
line-height: 25px;
`;

const Your = styled.div`
font-size:32px;
font-weight: 700;
color: #0c1825;
`;

const Right = styled.div``;

const Badge = styled.img`
width: 100px;
margin-right: 30px;
`;

const Contain = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Prior = styled.div`
width: 100%;
height: 50vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;