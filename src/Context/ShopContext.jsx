import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [userDetails, setUserDetails] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedBoat, setSelectedBoat] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);

    const setDate = (date) => {
        setSelectedDate(date);
    };

    const setBoat = (boat) => {
        setSelectedBoat(boat);
    };

    const setSession = (session) => {
        setSelectedSession(session);
    };

    const setUser = (user) => {
        setUserDetails(user);
    };

    const contextValue = {
        userDetails,
        setUser,
        setSession,
        setBoat,
        setDate,
        selectedDate,
        selectedBoat,
        selectedSession
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

