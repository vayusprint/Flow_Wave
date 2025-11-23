import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const showLoader = () => setLoading(true);
    const hideLoader = () => setLoading(false);

    return (
        <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLoader = () => useContext(LoaderContext);
