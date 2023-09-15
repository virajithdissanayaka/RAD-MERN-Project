import React, { Component, useEffect, useState } from "react";

export default function AdminHome({userData}) {
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./";
    };
    return(
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Welcome Admin</h3>
                <button onClick={logOut} className="btn btn-primary">
                    Log Out
                </button>
            </div>
        </div>
    )
}