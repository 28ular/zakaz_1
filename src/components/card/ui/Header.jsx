import cls from './card.module.css'

export const Header = () => {
    return (
        <>
            <div className={cls.header}>
                <ul className={cls.list}>
                    <li className={cls.logo}></li>
                    <li>menu</li>
                </ul>
            </div>


        </>
    )
}