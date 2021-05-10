import React from 'react'
import styled from "styled-components";
import LearnNew3 from "../images/LearnNew3.png";
const Home = () => {
    return (
        <HOME >
            <img src={LearnNew3} alt={LearnNew3} />
            <div className="About">
                <span>This Website Help Teachers To create New Quizs for students.</span> 
                <span>This Website Help Students Development in Their academics.</span>
                <span>And All the data is Secured so dont be ambiguous.</span>
                </div>
        </HOME>
    )
}
const theme={
    flex: (fd,jc,ai )=>`display :flex;flex-direction :${fd};justify-content :${jc};align-items :${ai};`
}

const HOME=styled.div`
    width:100%;
    min-height:100vh;
    background-color:#99ff99;
    ${theme.flex("row","space-around","center")};
    img{
        width:40%;
        height:40%;
    }
    .About{
        width:35%;
        height:50%;
        text-transform:capitalize;
        font-weight:bold;
        ${theme.flex("column","center","center")};
        
    }
`;


export default Home
