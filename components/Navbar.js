import Logo from "./Logo";
import Button from "./Button";
import NavItem from "./NavItem";
import { useState } from "react";

export default function Navbar() {

    const [offCanvas, setOfCanvas] = useState(false);

    return (
        <>
            <div className="flex items-center py-8 md:px-8">
                <div className="w-3/12">
                    <Logo />
                </div>

                <nav className="w-6/12 hidden md:block">
                    <NavItem dir="horizontal" scheme="light" />
                </nav>

                <div className="w-3/12 hidden md:block text-right">
                    <Button pill variant="outline" href="#contact">Kontak</Button>
                </div>

                <div className="w-9/12 md:hidden text-right">
                    <img src="/menu.svg" alt="menu" className="inline-block cursor-pointer" onClick={() => setOfCanvas(true)} />
                </div>
            </div>

            <div className={`transition-all ease-in-out fixed bg-white z-10 top-0 h-screen w-full p-10 md:hidden ${offCanvas === true ? "right-0" : "-right-full"}`}>
                <img src="/close.svg" alt="close" className="absolute top-8 right-8 w-8 cursor-pointer" onClick={() => setOfCanvas(false)} />
                <NavItem dir="vertical" scheme="dark" />
            </div>
        </>
    );
}