import React from "react";
import { useLoader } from "../context/LoaderContext";
import LoaderFlow_Wave from '../assets/icons/flow_wave_spinner.svg'

const Loader = () => {
    const { loading } = useLoader();

    if (!loading) return null;

    return (
        <div className="fixed h-screen w-screen inset-0 flex justify-center items-center bg-white z-9999">
            <div className="flex flex-col gap-16 justify-center items-center">
                <img className="w-56 h-56" src={LoaderFlow_Wave} /> 
                <div class="loader"></div>
            </div>
        </div>
    );
};

export default Loader;
