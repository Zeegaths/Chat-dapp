// import React from 'react'
import UserProfile from '../components/UserProfile';
import Header from '../components/Header';
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {

    const { isConnected } = useWeb3ModalAccount();
    const navigate = useNavigate();

    const change = useCallback(() => {
        if (!isConnected) {

            navigate("/");
        }
       
    }, [isConnected, navigate]);

    useEffect(() => {
        change();
    }, [change, isConnected]);
    return (
        <div>
            <Header />
            <UserProfile />

        </div>
    )
}
export default UserRegistration;
