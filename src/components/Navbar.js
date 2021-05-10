import React from 'react'
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

const Navbar = () => {
    const open=()=>{
        document.querySelector(".sidebar").style.display="flex";
    }
    const clear=()=>{
        document.querySelector(".sidebar").style.display="none";
    }
    return (
        <NAVBAR>
            <div className="Logo">
                <a href="/">NAVIGUS</a>
            </div>
            <div className="Pages">
                <a href="/teacher" >Teachers Blog</a>
                <a href="/students" >Students Blog</a>
            </div>
            <div className="Enter">
                <a href="/signin">Sigin</a>
                <MenuIcon className="Menu" onClick={open}/>
            </div>
            <SideBar className="sidebar">
                <ClearIcon className="Clear" onClick={clear}/>
                <div className="innerSidebar">
                    <a href="/teacher" >Teachers Blog</a>
                    <a href="/students" >Students Blog</a>
                </div>
            </SideBar>
        </NAVBAR>
    )
}

const theme={
    flex: (fd,jc,ai )=>`display :flex;flex-direction :${fd};justify-content :${jc};align-items :${ai};`
}

const NAVBAR=styled.div`
    position:fixed;
    width:100%;
    height:8vh;
    color:white;
    ${theme.flex("row","space-between","center")};
    background-color:transparent;
    a{
            cursor:pointer;
            text-decoration:none;
            color:black;
            font-size:18px;
            font-weight:600;
            letter-spacing:1px;
            transition:color 0.7s ease-in-out;
            &:hover{
                color:#69a2ff;
            }
    }
    .Logo{
        width:20%;
        ${theme.flex("row","center","center")};
        a{
            font-size:30px;
            font-weight:bold;
        }
    }
    .Pages{
        width:50%;
        ${theme.flex("row","space-around","center")};
        text-decoration:capitalize;
       @media only screen and (max-width:1200px){
           display:none;
       }
    }
    .Enter{
        width:20%;
        ${theme.flex("row","space-around","center")};
        a{
            @media only screen and (max-width:1200px){
                display:none;
            }
        }
        .Menu{
            color:black;
            cursor:pointer;
            @media only screen and (min-width:1200px){
                display:none;
            }
        }
    }
    @media only screen and (max-width:750px){
        .Logo{
            margin-left:10%;
        }
     }
    
`;

const SideBar=styled.div`
    position:fixed;
    top:0%;
    right:0%;
    width:30%;
    height:100vh;
    background-color:white;
    border-radius:20px 0 0 20px;
    ${theme.flex("row","space-around","")};
    display:none;
    .Clear{
        color:black;
        position:absolute;
        right:25px;
        top:15px;
        cursor:pointer;
    }
    @media only screen and (max-width:768px){
        width:50%;
    }
    @media only screen and (max-width:475px){
        width:80%;
    }
    .innerSidebar{
        margin-top:50px;
        ${theme.flex("column","","")};
        width:80%;
        a{
            cursor:pointer;
            color:black;
            border-bottom:1px solid rgba(0,0,0,0.4);
            padding:10px;
            padding-top:20px;
            padding-bottom:30px;
            margin-top:20px;
        }
    }
    
`;
export default Navbar
