import React from "react";
import { getPercentage, getPriceId, getCredits, getExpiryDate } from "../constants/cosntants";
import { calculateRemainingDays } from "../constants/cosntants";
import { PRO_PRICE_ID, ULTRA_PRICE_ID } from "../constants/cosntants";
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';
import { useState, useEffect } from "react";


const SubscriptionMeter = () => {

    if ((localStorage.getItem("loggedIn") != 'true')){
        return ''
    }
    const [percentage, setPercentage] = useState();
    const [expiryDate, setExpiryDate] = useState();
    const [remainingDays, setRemainingDays] = useState();
    const [credits, setCredits] = useState();


    const getColor = () => {
        if (0 <= percentage && percentage < 20) {
            return "red"
        }
        else if (20 < percentage && percentage < 50) {
            return "yellow"
        }
        else if (50 < percentage && percentage < 70) {
            return "blue"
        }
        else if (70 < percentage && percentage < 110) {
            return "green"
        }
    }

    const [priceId, setPriceId] = useState()


    useEffect(() => {
        const setPriceId_ = async () => {
            console.log("started")
            setPriceId(await getPriceId())
            setPercentage(await getPercentage())
            setCredits(await getCredits())
            setExpiryDate(await getExpiryDate())
        }
        setPriceId_()
    }, [])

    const getSubscription=()=>{
      if (priceId===ULTRA_PRICE_ID){
        return("Monthly Ultra")
      }
      else if (priceId===PRO_PRICE_ID){
        return ("Monthly Pro")
      }
      else{
        return("Free")
      }
    }

    useEffect(() => {
        setRemainingDays(calculateRemainingDays(expiryDate))
    }, [expiryDate])


    return (
            <>
            <div>
        <CircularProgressbarWithChildren value={percentage}  styles={buildStyles({
          pathColor: getColor(),
          textColor: getColor(),
          textSize: "60%",
        })} >
          <br />
            
            <p style={{ marginTop: -5, color: getColor(), fontSize:"200%" }}>
            {percentage}%
            </p>
            <br />
            
            <p style={{ marginTop: -5, color: getColor(), fontSize:"130%" }}>
              Credits: {credits}
            </p>
            
          
          </CircularProgressbarWithChildren>
          <div className="font-link" style={{margin:"auto", color:getColor(), fontSize:"130%", display:"block", width: "fit-content", marginTop:"5%"}}>
          <p>Subscription:{getSubscription()}</p>
          {(getSubscription() !== "Free") && 
          <>
          <p>Expires on: {expiryDate}</p>
          <p>Days Remaining: {remainingDays}</p>
          </>
          }
          
          </div>
          </div>
          <hr
        style={{
          background: 'gray',
          color: 'gray',
          borderColor: 'gray',
          height: '3px',
          marginTop: "10%",
          marginBottom: "10%"
        }}
      />
            </>
    )
}


export default SubscriptionMeter