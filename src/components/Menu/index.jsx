import style from './style.module.css'


const Menu = (props) => {

    const { isOpen } = props

    return (
        <div className={`${style.menu_container} ${isOpen ? style.menu_open : ''}`} hidden={!isOpen} >
            <div className={style.triangle}></div>
            <ul className={style.menu_navbar_list}>
              <li><a className={`${style.menu_navbar_item}`} href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank">About</a></li>
              <li><a className={`${style.menu_navbar_item}`} href="https://www.instagram.com/felipestefani/" target="_blank">Services</a></li>
              <li><a className={`${style.menu_navbar_item}`} href="https://www.frontendmentor.io/profile/felipestefani" target="_blank">Projects</a></li>
              <li><a className={`${style.menu_contact_link} ${style.navbar_item_contact}`} href="https://www.instagram.com/felipestefani/" target="_blank">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu