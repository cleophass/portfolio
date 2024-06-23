"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const Menu = () => {
    const [usMenuOpen, setUsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setUsMenuOpen(!usMenuOpen);
    };

    useEffect(() => {
        gsap.fromTo(
            ".box",
            {
                x: 0,
            },
            {
                x: 250,
                repeat:-1,
                yoyo:true,
                borderRadius: "100%",
                rotation: 360,
                duration: 2,
                ease: "bounce.out",
            }
        );
    }, []);

    return (
        <div>
            <div className="menu">
                <div className="box bg-green-800 h-16 w-16"></div>
            </div>
        </div>
    );
};

export default Menu;
