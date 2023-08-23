import axios from 'axios'



export const BASE_URL = "https://roomgptbackend.pythonanywhere.com"
// const BASE_URL = "http://localhost:8000/"

const MAKE_USER = `${BASE_URL}/user/`
const LOGIN = `${BASE_URL}/api/token/`
const GET_CREDITS = `${BASE_URL}/api/credits/`
const REFRESH_TOKEN = `${BASE_URL}/api/token/refresh/`
const GET_PRICE_ID = `${BASE_URL}/api/priceId/`
const GENERATE_IMAGE = `${BASE_URL}/api/generateImage/`


export const PRO_PRICE_ID = 'price_1NebvECZVDbuWjpWWdN9w5lW'
export const ULTRA_PRICE_ID = 'price_1Nf3fuCZVDbuWjpWexxXNi6q'




export const calculateRemainingDays=(startDate)=>{
    let today = new Date().toISOString().slice(0, 10)
    const endDate    = today;
    const diffInMs   = new Date(endDate) - new Date(startDate)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    return (Math.abs(diffInDays))
}


export const refreshToken = async ()=>{
    const response = await axios.post(REFRESH_TOKEN,{
        refresh: localStorage.getItem("refresh")
    })
    return (await response.data.access)
}



export const generateImage = async (fileUrl, theme, room)=>{
    const data = { imageUrl: fileUrl, theme, room }
    const res = await axios.post(GENERATE_IMAGE,data, {
        headers: {
            Authorization: `Bearer ${await refreshToken()}`
        },
      });

    return (await res.data.outputImageUrl)
}


export const getPriceId = async ()=>{
    if (! (localStorage.getItem("loggedIn")=="true")) return;
    const response = await axios.get(GET_PRICE_ID, {
        headers:{
            Authorization: `Bearer ${await refreshToken()}`
        }
    })
    return (await response.data.priceId)
}

export const getExpiryDate = async ()=>{
    if (! (localStorage.getItem("loggedIn")=="true")) return;
    const response = await axios.get(GET_PRICE_ID, {
        headers:{
            Authorization: `Bearer ${await refreshToken()}`
        }
    })
    return (await response.data.expiryDate)
}


export const getCredits = async ()=>{
    const response = await axios.get(GET_CREDITS, {
        headers:{
            Authorization:`Bearer ${await refreshToken()}`
        }
    })
    return (await response.data)
}


export const getPercentage = async ()=>{
    const credits = await getCredits()
    const priceId = await getPriceId()
    var maxCredits;
    if (priceId===PRO_PRICE_ID){
        maxCredits = 50;
    }
    else if (priceId === ULTRA_PRICE_ID){
        maxCredits = 150;
    }
    else{
        maxCredits = 3;
    }
    return (((parseInt(credits)/maxCredits)*100).toFixed(1))
}




export const makeUser = async (email, firstName, lastName, password) => {
    const userInformation = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password
    };

    try {
        const response = await axios.post(MAKE_USER, userInformation);
        return "success";
    } catch (error) {
        console.error('User creation error:', error);
        return error;
    }
};


export const userLogin = async (email, password) => {
    try {
        const userInformation = {
            email: email,
            password: password
        };
        
        const response = await axios.post(LOGIN, userInformation);
        
        if (response.status === 200) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("token", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            localStorage.setItem("email", email);
            // alert("returning success")
            return "success";
        }
    } catch (error) {
        console.error('User login error:', error);
        return error;
    }
};









