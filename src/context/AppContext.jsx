import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const currency = "₹";

    const calculateAge = (dob)=>{
       const today = new Date()
       const birthDate = new Date(dob)

       let age = today.getFullYear() - birthDate.getFullYear()

       return age
    }

    function formatSlotDate(slotDate) {
      const [day, month, year] = slotDate.split("_").map(Number);

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      return `${day} ${monthNames[month - 1]} ${String(year)}`;
    }

    const value = {
      calculateAge,
      formatSlotDate,
      currency,
    };


    return (
        <AppContext.Provider value={value}>
           {props.children} 
        </AppContext.Provider>
    )
}

export default AppContextProvider