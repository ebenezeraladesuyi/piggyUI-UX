import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineHome, AiFillRocket, AiOutlineLogout, AiOutlineUser, AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import SideBar from '../dashboard/SideBar';
import { FiTarget } from "react-icons/fi";
import { Link } from 'react-router-dom';



const Safelock = () => {

    const [show, setShow] = React.useState(false);
    const [quick, setQuick] = React.useState(false)
    const [safe, setSafe] = React.useState(false)

    const toggle = () => {
        setShow(!show)
    }

    const toggle2 = () => {
        setQuick(!quick)
    }

    const toggle3 = () => {
        setSafe(!safe)
    }


  return (
    <div  style={{position:"relative"}}>

{ quick ?

<> 
    <div style={{zIndex:"500", fontSize:"30px", color:"#0d60d8", position:"absolute", top:"20px", right:"20px", cursor:"pointer"}} onClick={toggle2}>

        <AiOutlineClose />
    </div>
    
    {/* <QuickSave /> */}

    <Bodyy>

    <div></div>

    <Quickk>

        <How>How long do you want to lock funds?</How>

        <Lock>Select a duration that you want to lock your funds and earn interests</Lock>

        <Days>
            <Option onClick={toggle3}>10 -30 days</Option>

            <Fund>at 6% per annum</Fund>
        </Days>

        <Days>
            <Option onClick={toggle3}>31 -60 days</Option>

            <Fund>at 7% per annum</Fund>
        </Days>

        <Days>
            <Option onClick={toggle3}>61 -90 days</Option>

            <Fund>at 9% per annum</Fund>
        </Days>

        <Days>
            <Option onClick={toggle3}>91 -365 days</Option>

            <Fund>at 10% per annum</Fund>
        </Days>

    </Quickk>

</Bodyy>

</>

: null }



{ quick ?

<> 
    <div style={{zIndex:"500", fontSize:"30px", color:"#0d60d8", position:"absolute", top:"20px", right:"20px", cursor:"pointer"}} onClick={toggle2}>

        <AiOutlineClose />
    </div>
    
    {/* <QuickSave /> */}

    <Bodyy>

    <div></div>

    <Quickk>

        <How>Lock for 31 - 60 days</How>

        <Lock>Create a Safelock for just 31 - 60 days</Lock>
                <Tap>
                    <Label>Amount to Lock</Label>

                    <Here type="" placeholder='20,000'/>
                </Tap>

                <Tap>
                    <Label>Title of Safelock</Label>

                    <Here type="" placeholder='My New Lock'/>
                </Tap>

                <Tap>
                    <Label>Set Payback Date</Label>

                    <Here type="date" placeholder=''/>
                </Tap>

                <Label>Source of Funds</Label>

                <Select name="" id="">
                        <option value="">Click To Select</option>
                        <option value="">Piggybank</option>
                        <option value="">Safelock</option>
                        <option value="">Target</option>
                        <option value="">Flex Naira</option>
                </Select>

                <Proceed>Proceed</Proceed>

    </Quickk>

</Bodyy>

</>

: null }

    <Body>

            <Side style={{position:"relative"}}>

                { show ? 
                ( <Icons>

                    <Up>
                        <Togg style={{color:"white",fontSize:"25px", top:"30px", left:"12px", cursor:"pointer"}}  onClick={toggle}>
                            <AiOutlineMenu />
                        </Togg>

                <Icon style={{marginTop:"100px", fontSize:"25px", cursor:"pointer", marginLeft:"10px"}}>
                    <AiOutlineHome />
                </Icon>

                <Icon style={{color:"white",fontSize:"25px", cursor:"pointer", marginTop:"25px",  marginLeft:"10px"}}>
                    <FiTarget />
                </Icon>

                <Icon style={{color:"white",fontSize:"25px", cursor:"pointer", marginTop:"25px",  marginLeft:"10px"}}>
                    <AiFillRocket />
                </Icon>

                <Icon style={{color:"white",fontSize:"25px", cursor:"pointer", marginTop:"25px",  marginLeft:"10px", zIndex:"100"}}>
                    <AiOutlineUser />
                </Icon>
                </Up>


                <Icon style={{rotate:"calc(-90deg)", marginBottom:"30px", fontSize:"25px", marginLeft:"10px"}}>
                    <AiOutlineLogout />
                </Icon>


                </Icons> )


                : 

                <>
                <Togg style={{color:"white",fontSize:"25px", top:"30px", left:"25px", cursor:"pointer", zIndex:"100"}} onClick={toggle} > 

                    <AiOutlineMenu />

                </Togg>


                    <SideBar /> 

                </>


                }


        </Side>

    <Contain wd={ show ? "260%" : "calc(100% - 300px)" }>

        <Eben>
            
            <Even>
                <Good>Safelock</Good>
            </Even>

            <User>
                <AiOutlineUser />
            </User>
        </Eben>

        <Head>

            

        <Link to="/saving/piggybank">
                <Pig>
                    <Pigg></Pigg>
                    <PigButton>Piggybank</PigButton>
                </Pig>
            </Link>

            <Link to="/saving/safelock">
                <Pig>
                    <Pigg></Pigg>
                    <PigButton>Safelock</PigButton>
                </Pig>
            </Link>
            
            <Link to="/saving/target">
                <Pig>
                    <Pigg></Pigg>
                    <PigButton>Targets</PigButton>
                </Pig>
            </Link>

            <Pig>

                <Pigg></Pigg>
                <PigButton>Flex Naira</PigButton>

            </Pig>

            <Pig>

                <Pigg></Pigg>
                <PigButton>Flex Dollar</PigButton>

            </Pig>

        </Head>

        <Holder>

            

        <Left>

<Balance>

<Top>
<Num>
    <My>SAFELOCK BALANCE</My>
    <Four>10,000.00</Four>
</Num>
</Top>

<Bottom>

<Interest style={{borderRight:"1px solid #d4d1d1"}}>
    <Icoon>
        <AiOutlinePlus />
    </Icoon>

    <IntText onClick={toggle2}>Create Safelock</IntText>

</Interest>

<Interest>
    <Icoon>
        <AiFillRocket />
    </Icoon>

    <IntText>What is Safelock</IntText>

</Interest>

</Bottom>

</Balance>

<Balance></Balance>

        <Trans>

        <TransBox>MY SAFELOCK</TransBox>

        <Type>
        <Debit>Ongoing</Debit>
        <Debit>Completed</Debit>
        </Type>

        <Savings>

        </Savings>

        </Trans>

</Left> 

    <Right>

        <Rate>
            <Per>INTEREST RATE</Per>

            <Perc>6% - 13%</Perc>

            <Annum>Per Annum</Annum>
        </Rate>

        </Right> 

        </Holder>  

    </Contain>

</Body>

    </div>
  )
}

export default Safelock;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

const Select = styled.select`
width: 100%;
height: 47px;
border-radius: 7px 7px 7px 0;
padding-left: 10px;
`;

const Proceed = styled.button`
margin-top: 50px;
width: 100%;
height: 40px;
color: white;
background-color: #0d60d8;
margin-bottom: 30px;
border: none;
border-radius: 7px 7px 7px 0;
font-weight: 700;
cursor: pointer;
`;

const Here = styled.input`
width: 96%;
height: 42px;
border-radius: 7px 7px 7px 0;
padding-left: 10px;
`;

const Label = styled.div`
margin-top: 30px;
margin-bottom: 7px;
font-size: 12px;
font-weight: 700;
color: gray;
`;

const Tap = styled.div`
/* display: flex;
flex-direction: column; */
`;

const Fund = styled.div`
font-size: 12px;
`;

const Option = styled.div`
font-size: 16px;
font-weight: 700;
`;

const Days = styled.div`
width: 94%;
height: 45px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 10px;
padding-right: 10px;
box-shadow: 0 0 2px gray;
cursor: pointer;
margin-top: 25px;
`;

const Lock = styled.div`
font-size: 12px;
color: gray;
`;

const How = styled.div`
margin-top: 60px;
font-size: 25px;
color: #0d60d8;
font-weight: 700;
margin-bottom: 5px;
`;

const Quickk = styled.div`
width: 320px;
height: 100vh;
padding-left: 20px;
padding-right: 20px;
background-color: white;
z-index: 100;
display: flex;
flex-direction: column;
/* justify-content: space-between; */
`;

const Bodyy = styled.div`
width: 100%;
height: 100vh;
position: fixed;
display: flex;
justify-content: space-between;
background-color: #00000095;
z-index: 300;
`;

const Savings = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 35px;
`;

const Debit = styled.div`
width: 100px;
height: 20px;
box-shadow: 0 0 2px gray;
border-radius: 5px 5px 5px 0;
margin-right: 10px;
font-size: 13px;
color: #b6b2b2;
display: flex;
justify-content: center;
align-items: center;
`;

const Type = styled.div`
display: flex;
margin-bottom: 20px;
cursor: pointer;
`;

const TransBox = styled.div`
font-size: 12px;
color: #b6b2b2;
margin-bottom: 15px;
`;

const Holder = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`;

const Hold = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`;

const Annum = styled.div`
font-size: 11px;
color: #b6b6b6
`;

const Perc = styled.div`
color: #0d60d8;
font-size: 25px;
margin-top: 7px;
margin-bottom: 4px;
`;

const Per = styled.div`
font-size: 12px;
font-weight: 700;
color: #b6b2b2;
`;

const Rate = styled.div`
width: 100%;
height: 100px;
box-shadow: 0 0 3px gray;
border-radius: 7px 7px 7px 0;
padding-left: 15px;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Right = styled.div`
width: 330px;
width: 28%;
`;

const Trans = styled.div`
width: 100%;
height: 100%;
padding-bottom: 20px;
padding-left: 20px;
padding-right: 20px;
padding-top: 20px;
margin-bottom: 40px;
box-shadow: 0 0 3px #b6b2b2;
border-radius: 7px 7px 7px 0;
`;

// const Head = styled.div``;

const IntText = styled.div`
font-size: 15px;
margin-left: 5px;
margin-bottom: 5px;
cursor: pointer;
`;

const Icoon = styled.div`
font-size: 18px;
color: #0d60d8;
font-weight: 700;
`;

const Interest = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Bottom = styled.div`
width: 100%;
height: 35%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Save = styled.div`
font-size: 12px;
font-weight: 700;
margin-left: 2px;
`;

const Qcon = styled.div`
font-size: 13px;
margin-left: 6px;
`;

const Quick = styled.button`
width: 120px;
height: 35px;
background-color: #0d60d8;
border-radius: 7px 7px 7px 0;
border: none;
color: white;
display: flex;
align-items: center;
cursor: pointer;
`;

const Four = styled.div`
font-size: 29px;
color: #0d60d8;
font-weight: 700;
/* margin-top: 5px; */
`;

const My = styled.div`
font-size: 10px;
color: #b6b2b2;
`;

const Num = styled.div``;

const Top = styled.div`
width: 100%;
height: 65%;
border-bottom: 2px solid #d4d1d1;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Balance = styled.div`
width: 100%;
height: 150px;
/* border: 1px solid gray; */
box-shadow: 0 0 3px #b6b2b2;
border-radius: 7px 7px 7px 0;
margin-bottom: 30px;
padding-right: 20px;
padding-left: 20px;
`;

const Left = styled.div`
width: 67%;
`;

const PigButton = styled.div`
font-size: 17px;
color: #b6b2b2;
margin-left: 10px;
`;

const Pigg = styled.div`
width: 20px;
height: 20px;
border-radius: 20px 20px 20px 0;
background-color: #cfcccc;
`;

const Pig = styled.div`
display: flex;
align-items: center;
cursor: pointer;
margin-right: 35px;
`;

const Head = styled.div`
width: 100%;
height: 40px;
border-bottom: 1px solid #b6b2b2;
display: flex;
align-items: center;
margin-bottom: 30px;
margin-top: 20px;
`;

const User = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background-color: #0d60d8;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 20px;
`;

const Wash = styled.div`
font-size: 13px;
color: #a5a4a4;
`;

const Good = styled.div`
font-size: 32px;
font-weight: 700;
color: #0d60d8;
margin-bottom: 20px;
`;

const Even = styled.div``;

const Eben = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* margin-top: 50px; */
`;

const Contain = styled.div<{wd:string}>`
/* width: 95%; */
/* width: calc(100vw - 320px); */
/* width: 100%; */
width: ${(props) => props.wd};
display: flex;
flex-direction: column;
justify-content: flex-end;
/* align-items: flex-start; */
margin-right:20px;
margin-left: 20px;
/* height: 100%; */
margin-top: 40px;
`;

const Icon = styled.div`
font-size: 25px;
font-weight: 700;
margin-right: 15px;
`;

const Side = styled.div`
width: 250px;
position: fixed;
height: 100vh;
/* margin-top: -90px; */
`;

const Togg = styled.div`
position: absolute;
`;

const Icons = styled.div`
width: 60px;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #062863;
color: white;
`;

const Up = styled.div``;

const Body = styled.div`
width: 100%;
min-height: 100vh;
overflow: hidden;
display: flex;
/* flex-direction: column; */
/* justify-content: flex-end; */
/* align-items: center; */
`;