import React from 'react';
import styled from "styled-components";

const Access = () => {


  return (
      <>

        <Acces>

            <Contain>

                <Left>

                    <LeftImg src="/images/home/invest_c3fcc60df0.png" />

                    <Big>
                        <div style={{width:"250px", height:"250px", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#f7f0ff"}}>
                            <div style={{width:"90px", height:"90px", borderRadius:"50%",backgroundColor:"white"}}></div>
                        </div>
                    </Big>

                    <Rounds>
                        <Round>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                        </Round>

                        <Round>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                        </Round>

                        <Round>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                        </Round>

                        <Round>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                        </Round>

                        <Round>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                            <div style={{width:"10px", height:"10px", borderRadius:"50%",backgroundColor:"#9cd0fc"}}></div>
                        </Round>

                    </Rounds>

                </Left>

                <Right>

                    <Return>Up to 25% Returns</Return>

                    <Invest>Access investment oppourtunities</Invest>

                    <Secure>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</Secure>

                    <Learn>Learn more about Investments</Learn>

                </Right>

            </Contain>


        </Acces>


      </>
    
  )
}

export default Access

// const Left = styled.div``;

// const Left = styled.div``;

const Round = styled.div`
display: flex;
justify-content: space-between;
`;

const Rounds = styled.div`
width: 30px;
height: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
position: absolute;
right: 115px;
top: 25px;
`;

const Big = styled.div`
position: absolute;
top: 140px;
left: 90px
`;

const Learn = styled.a`
cursor: pointer;
font-size:15px;
font-weight: 600;
color: #3535fa;
cursor: pointer;

`;

const Secure = styled.div`
font-size: 16px;
/* font-weight: 400; */
width: 65%;
color: #0c1825;
margin-top: 25px;
margin-bottom: 25px;
line-height: 25px;
`;

const Invest = styled.div`
font-size: 45px;
font-weight: 700;
width: 80%;
color: #0c1825;
`;

const Return = styled.div`
background-color: #f7f0ff;
padding: 7px;
border-radius: 15px;
width: 140px;
color: blue;
text-align: center;
font-weight: 500;
margin-bottom: 25px;
`;

const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const LeftImg = styled.img`
width: 230px;
margin-left: 60px;
z-index: 10;
`;

const Left = styled.div`
width: 800px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;

const Contain = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: space-between;
/* align-items: center; */
`;

const Acces = styled.div`
width: 100%;
padding-top: 40px;
padding-bottom: 40px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;