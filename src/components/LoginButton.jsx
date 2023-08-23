import { GoogleLogin } from "react-google-login";
import { Navigate } from "react-router-dom";
import { userLogin } from "../constants/cosntants";
import { makeUser } from "../constants/cosntants";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const clientId = "706892910099-hf7fogsfftmeag62r4nhfuifcn8h0nld.apps.googleusercontent.com"


const LoginButton = ({text, mode})=>{
    const navigateTo = useNavigate()
    const onSuccess = async (e)=>{
        console.log("SUCCESS!", e.profileObj);
        // alert(mode)
        if (mode==="register"){
            // alert("making user")
            const status_ = await makeUser(e.profileObj.email, e.profileObj.givenName, e.profileObj.familyName, e.profileObj.googleId)
            console.log(await status_)
            if (status_ == "success"){
                // alert("suces")
                navigateTo("/login")
            }
            else{
            alert("cannot create user!")
        }
        }

        else{
            if (await userLogin(e.profileObj.email, e.profileObj.googleId) === "success"){
                navigateTo("/")
            }
            else{
                alert("No User Found!!")
            }
        }
    }
    const onFailure=(e)=>{
        console.log("Failed!!!!!!")
        console.log(e)
    }
    return (
        <>
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText={text?text:"Login with Google"}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />

        </div>
        </>
    )
}

export default LoginButton