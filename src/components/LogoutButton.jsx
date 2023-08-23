import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";




const LogoutButton = ({text="Logout"})=>{
    const navigateTo = useNavigate()
    const success =()=>{
        localStorage.setItem("loggedIn", false)
        navigateTo("/login")
    }
    return (



        <>
        <div id="signOutButton">

            <GoogleLogout
            onLogoutSuccess={success}
            clientId={"706892910099-hf7fogsfftmeag62r4nhfuifcn8h0nld.apps.googleusercontent.com"}
            buttonText={text}
            />

        </div>
        </>
    )
}

export default LogoutButton