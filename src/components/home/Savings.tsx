import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from "react-icons/ai";

const Savings = () => {
  return (
    <>

        <Save>

            <Contain>

                <Left>

                    <Way>4 ways to build your savings</Way>

                    <Earn>Earn 5%-15% when you save with any of these our plans.</Earn>

                    <Start>Start Saving</Start>

                </Left>

                <Right>

                    <Box>

                        <Top>
                            <BoxImg src="/images/home/piggybank.png" />

                            <Auto>Automated Savings</Auto>

                            <BoxText>Build a dedicated saving system on your term automatically and manually.</BoxText>
                        </Top>

                        <Bank>
                            <Icon>
                                <AiOutlineArrowRight />
                            </Icon>
                            <BankText>Piggybank</BankText>
                        </Bank>

                    </Box>

                    <Box>

                        <Top>
                            <BoxImg src="images/home/safelock.png" />

                            <Auto>Fixed Savings</Auto>

                            <BoxText>Lock money away for a fixed duration with no access to it until maturity. It's like having a custom fixed deposit.</BoxText>
                        </Top>

                        <Bank>
                            <Icon>
                                <AiOutlineArrowRight />
                            </Icon>
                            <BankText>Safelock</BankText>
                        </Bank>

                    </Box>

                    <Box>

                        <Top>
                            <BoxImg src="/images/home/target.png" />

                            <Auto>Goal-oriented Savings</Auto>

                            <BoxText>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</BoxText>
                        </Top>

                        <Bank>
                            <Icon>
                                <AiOutlineArrowRight />
                            </Icon>
                            <BankText>Target Savings</BankText>
                        </Bank>

                    </Box>

                    <Box>

                        <Top>
                            <BoxImg src="/images/home/flexible.png" />

                            <Auto>Flexible Savings</Auto>

                            <BoxText>Save, transfer, withdraw, manage and organise your money for free at any time.</BoxText>
                        </Top>

                        <Bank>
                            <Icon>
                                <AiOutlineArrowRight />
                            </Icon>
                            <BankText>Flex Naira</BankText>
                        </Bank>

                    </Box>

                </Right>

            </Contain>


        </Save>
    
    </>
  )
}

export default Savings;

// const Left = styled.div``;

const BankText = styled.div`
color: #0c1825;
font-size: 16px;
font-weight: 400;
`;

const Icon = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: #e0efff;
margin-right: 10px;
font-size: 17px;
display: flex;
justify-content: center;
align-items: center;
color: #6161f7;
`;

const Bank = styled.div`
display: flex;
align-items: center;
`;

const BoxText = styled.div`
color: #0c1825;
font-size: 15px;
font-weight: 400;
line-height: 25px;
`;

const Auto = styled.div`
font-size: 20px;
font-weight: 700;
color: #0c1825;
margin-bottom: 20px;
`;

const BoxImg = styled.img`
width: 50px;
margin-bottom: 20px;
`;

const Top = styled.div``;

const Box = styled.div`
background-color: #f9f9f9;
width: 300px;
height: 300px;
padding: 25px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Right = styled.div`
width: 800px;
gap: 4rem;
/* background-color: blue; */
display: flex;
flex-wrap: wrap;
display: flex;
justify-content: space-around;

`;

const Start = styled.button`
cursor: pointer;
width: 110px;
height: 40px;
color: white;
background-color: #0c1825;
border-radius: 6px;
font-weight: 600;
`;

const Earn = styled.div`
font-size: 14px;
font-weight: 400;
width: 70%;
color: #0c1825;
margin-top: 25px;
margin-bottom: 25px;
`;

const Way = styled.div`
font-size: 35px;
font-weight: 700;
width: 80%;
color: #0c1825;
`;

const Left = styled.div`
width: 400px;
margin-right: 50px;
margin-top: 50px;
`;

const Contain = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: space-between;
/* align-items: center; */
`;

const Save = styled.div`
width: 100%;
padding-top: 40px;
padding-bottom: 40px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;