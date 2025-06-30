import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/component/main-header/main-header-background";
import NavLink from "@/component/main-header/nav-link";

export default function MainHeader() {

    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link href='/public' className={classes.logo}>
                    <Image src={logoImg.src} alt="A plate with food on it" priority width={100} height={100}/>
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href={'/meals'}>
                                Browse Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={'/community'}>
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}