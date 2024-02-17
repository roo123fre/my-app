import backgroundImageUrl from "@/static/hero-image.jpg"
import css from "./style.module.css"

const Hero = ({ }) => {
    return (
        <>
            <section className={css.hero}>
                <div className={css.container}>
                </div>
            </section>

            <section className={css.collections}>
                <div className={css.container}>
                    <h1 className={css.collections__title}>
                        Знайдіть ваш улюблений стиль наших в'язаних іграшок
                    </h1>
                    <p className={css.collections__subtitle}>
                        "Ми раді представити нашу різноманітність нових плюшевих іграшок!
                        Відкрийте для себе колекцію, яку готові полюбити, подарувати або стати вашим найкращим другом"
                    </p>
                </div>
            </section>
        </>
    )
}

export default Hero