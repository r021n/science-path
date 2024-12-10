import { createContext, useContext, useState } from "react";

const AnswerContext = createContext()

export const AnswerProvider = ({ children }) => {
    const [userData, setUserData] = useState()

    return (
        <AnswerContext.Provider value={{ userData, setUserData }}>
            {children}
        </AnswerContext.Provider>
    )
}

export const useForm = () => useContext(AnswerContext)