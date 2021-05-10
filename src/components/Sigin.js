import React from 'react'
import styled from "styled-components";
import GoogleLogo from "../images/GoogleLogo.png";
import LearnNew from "../images/LearnNew2.png";
import {auth,provider} from "../firebase";

const Login = () => {

    var username;
    var useremail;
    var userphoto;
    var userage;
    var userprofession;
    var UniqueId
    const GoogleAuth = ()=>{
        
        auth.signInWithPopup(provider).then((result)=>{
            username=result.user.displayName;
            useremail=result.user.email;
            userphoto=result.user.photoURL;
            document.querySelector(".moreDetails").style.display="flex";
        }).catch(e=>{console.log(e)})
        
    }
    const submit=(e)=>{
        const ageval=document.querySelector("#age").value;
        const radio1=document.querySelector("#radio1");
        const radio2=document.querySelector("#radio2");
        e.preventDefault();
        if(ageval.trim()===""){
            e.preventDefault();
            alert("age is required");
        }
        if(radio1.checked!==true && radio2.checked!==true){
            e.preventDefault();
            alert("click any  one check box");
        }
        else{
            userage=document.querySelector("#age").value.trim();
            if(radio1.checked===true){
                userprofession=document.querySelector("#radio1").value;
            }
            else{
                userprofession=document.querySelector("#radio2").value;
            }
            document.querySelector(".moreDetails").style.display="none";
        }
        value();
    }
    const value=async()=>{
         UniqueId=Math.random().toString().slice(2,11);
       console.log( username, useremail, userphoto, userage, userprofession,UniqueId );
        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, useremail, userphoto, userage, userprofession,UniqueId
            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert(data.error);
            console.log(data.error);
        } else if(data.status===201){
             window.alert(data.message);
             window.alert("NOTE YOUR UNQ ID");
            console.log(data.message);
            document.querySelector(".UniqueId").innerHTML=`Your UniqueId ${UniqueId}`;
            document.querySelector(".UniqueId").style.display="block";
            }

    }
    return (
        <LOGIN>
                <img src={LearnNew} alt="learnNewImg"/>
                <div className="second"><button onClick={GoogleAuth}><img  src={GoogleLogo} alt="GoogleLogo" />Sign In with Google </button></div>
                <form className="moreDetails" method="post" action="/">
                    <span id="error">asdasd</span>
                    <span id="Yourself">Tell me about yourself</span>
                    <span id="spanage"> Age*:<input type="number" min="8" max="100" minLength="1" maxLength="3" id="age" placeholder="Enter your Age" /></span>
                    <span id="profession"> profession*:
                        <span><input type="radio" value="Teacher" id="radio1" name="radio" />Teacher</span> 
                        <span><input type="radio" value="Student" id="radio2" name="radio" />Student</span>
                    </span>
                    <input type="submit" id="submit" value="submit" onClick={submit}/>
                </form>
                <div className="UniqueId"></div>
        </LOGIN>
    )
}

const theme={
    flex: (fd,jc,ai )=>`display :flex;flex-direction :${fd};justify-content :${jc};align-items :${ai};`
}

const LOGIN = styled.div`
    width:100vw;
    height:100vh;
    img{
        width:50%;
        height:80vh;
        margin-left:50px;
    }
    ${theme.flex("row","space-between","center")};
    background-color:#99ff99;
    .second{
        width:50%;
        height:100vh;
        ${theme.flex("row","center","center")};
        button{
            ${theme.flex("row","center","center")};
            background-color:white;
            border:0px;
            padding:10px;
            cursor:pointer;
            border-radius:1rem;
            font-weight:600;
            letter-spacing:1px;
            font-size:15px;
            transition: all 0.5s ease-in-out;
            &:hover{
                transform:scale(1.2);
            }
            img{
            width:25px;
            height:25px;
            margin-right:10px;
            margin-left:0px;
            }
        }
        
    }

    .moreDetails{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        width:350px;
        height:60vh;
        border-radius:1rem;
        box-shadow:0 0 50px -10px black;
        background-color:white;
        ${theme.flex("column","space-around","center")};
        span{
            font-weight:bold;
            color:black;
        }
        #Yourself,#spanage,#profession{
            width:90%;
            ${theme.flex("row","space-around","center")};
        }
        #Yourself{
            font-size:23px;
        }
        #age{
            padding-left:10px;
            height:30px;
            width:200px;
            &::placeholder{
                font-weight:bold;
                text-transform:capitalize
            }
        }
        #profession{
            span{
                ${theme.flex("row","space-around","center")};
            }
        }
        #submit{
            width:60%;
            height:30px;
            text-transform:uppercase;
            letter-spacing:1px;
            font-weight:bold;
            background-color:black;
            border:0px;
            border-radius:1rem;
            color:white;
            cursor:pointer;
        }
        #error{
            color:red;
            padding:20px;
            padding-left:80px;
            padding-right:80px;
            border:1px solid red;
            display:none;
        }
        display:none;
    }
    .UniqueId{
        background-color:white;
        padding:20px;
        border-radius:.5rem;
        position:absolute;
        top:10vh;
        left:50vw;
        display:none;
        color:black;
        border-color:red;
    }


    @media only screen and (max-width:768px){
        img{
            width:50%;
            height:50%;

        }
    }
    @media only screen and (max-width:475px){
        ${theme.flex("column","center","space-evenly")};
        img{
            width:100%;
            height:50%;
            margin-left:0%;

        }
        .second{
            width:50%;
            height:20%;
        }
    }
`;

export default Login
