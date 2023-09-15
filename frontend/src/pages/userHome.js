import React, { Component, useEffect, useState } from "react";
import UserNavbar from "../components/Navbar/AdminNavbar"

export default function UserHome({userData}) {
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./";
    };
    return(
        <div className="auth-wrapper">
            <div className="auth-inner">
            Name<h1>{userData.fname}</h1>
            Email<h1>{userData.email}</h1>
            <br/>
            <button onClick={logOut} className="btn btn-primary">
                Log Out
            </button>
            </div>
        </div>
    )
}