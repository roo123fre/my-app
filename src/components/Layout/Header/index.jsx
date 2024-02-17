import Image from "next/image"
import logo from "/public/next.svg"
import css from "./style.module.css"
import Link from "next/link"



const Index = ({ }) => {
    return (
        <>
            <header className={css.menu}>
                <div className={css.container}>
                    <div className={css.menu__board}>
                        <Link href="#">
                            <Image className={css.logo} src={logo} alt="Logotype" />
                        </Link>
                        <ul className={css.menu__list}>

                            <li className={css.menu__item}>
                                <Link className={css.menu__link} href="#"> Головна</Link>
                            </li>

                            <li className={css.menu__item}>
                                <Link className={css.menu__link} href="#"> Категорії</Link>
                            </li>

                            <li className={css.menu__item}>
                                <Link className={css.menu__link} href="#">Новинки</Link>
                            </li>
                            
                            <li className={css.menu__item}>
                                <Link className={css.menu__link} href="#"> Про нас</Link>
                            </li>
                        </ul>
                        <button className={css.menu__button}>
                            <Link className={css.menu__button__text} href="#">Купити зараз</Link>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Index