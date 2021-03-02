import { createContext, useState } from "react";


interface SidebarContextData {
    isActive: boolean;
    setActive: () => void;

}


export const SidebarContext = createContext({} as SidebarContextData);

export function SidebarProvider() {

    const [isActive, setIsActive] = useState(false);

    function setActive() {
        setIsActive(true);
    }

    return (
        <SidebarContext.Provider value={
            {
                isActive,
                setActive,
            }
        }>


        </SidebarContext.Provider>
    )
}