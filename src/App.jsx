import style from "./style.module.css";
import logo from "./assets/images/logo.svg";
import footer_logo from './assets/images/footer-logo.svg';
import hamburger from "./assets/images/icon-hamburger.svg";
import arrow_down from "./assets/images/icon-arrow-down.svg";
import emily from "./assets/images/image-emily.jpg";
import thomas from "./assets/images/image-thomas.jpg";
import jennie from "./assets/images/image-jennie.jpg";
import facebook from "./assets/images/icon-facebook.svg";
import instagram from "./assets/images/icon-instagram.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import { Link} from "react-scroll";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={style.app_container}>
      <header className={style.header_container}>
        <div className={style.navbar_container}>
          <div className={style.logo_container}>
            <img id="logo_header" title="logo_header" src={logo} alt="sunnyside logo" />
          </div>
          <div className={style.navbar_items}>
            <img className={style.hamburger_icon} src={hamburger} alt="menu hamburger" onClick={() => setIsOpen(!isOpen) }/>
            <Menu isOpen={isOpen} />
            <ul className={style.navbar_list}>
              <li><a className={`${style.navbar_item}`} href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank">About</a></li>
              <li><a className={`${style.navbar_item}`} href="https://www.instagram.com/felipestefani/" target="_blank">Services</a></li>
              <li><a className={`${style.navbar_item}`} href="https://www.frontendmentor.io/profile/felipestefani" target="_blank">Projects</a></li>
              <li><a className={`${style.contact_link} ${style.navbar_item_contact}`} href="https://www.instagram.com/felipestefani/" target="_blank">Contact</a></li>
            </ul>
          </div>
        </div>
        <h1>We are creatives</h1>
        <img className={style.arrow_down} src={arrow_down} alt="arrow down" />
      </header>
      <main className={style.main_container}>
        <div className={style.brand}>
          <div className={style.brand_content}>
            <h2>Transform your brand</h2>
            <p>We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <div className={style.learn_more_container_egg}>
              <div className={style.learn_more_line_egg}></div>
              <span className={style.learn_more}>Learn more</span>
            </div>
          </div>   
        </div>
        <div className={style.egg_container}>
        </div>
        <div className={style.cup_container}>
        </div>
        <div className={style.audience}>
          <div className={style.audience_content}>
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
            </p>
            <div className={style.learn_more_container_cup}>
              <div className={style.learn_more_line_cup}></div>
              <span className={style.learn_more}>Learn more</span>
            </div>
          </div>
        </div>
        <div className={style.berry_container}>
          <div className={style.text_content}>
            <h3 className={style.green}>Graphic design</h3>
            <p className={`${style.photoInfo_text} ${style.green}`}>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div>
        </div>
        <div className={`${style.orange_container} ${style.blue}`}>
          <div className={style.text_content}>
            <h3 className={style.blue}>Photography</h3>
            <p className={`${style.photoInfo_text} ${style.blue}`}>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>     
        </div>
      </main>
      <section className={style.testimonials}>
        <h2 className={style.testimonials}>Client testimonials</h2>
        <ul className={style.testimonials_list}>
          <li>
            <img className={style.photo} src={emily} alt="Emily" />
            <p className={style.client_testimonial}>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <p className={style.client_name}>Emily R.</p>
            <p className={style.client_profession}>Marketing Director</p>
          </li>
         <li>
          <img className={style.photo} src={thomas} alt="Thomas" />
          <p className={style.client_testimonial}>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <p className={style.client_name}>Thomas S.</p>
          <p className={style.client_profession}>Chief Operating Officer</p>
         </li>
         <li>
          <img className={style.photo} src={jennie} alt="Jennie" />
          <p className={style.client_testimonial}>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <p className={style.client_name}>Jennie F.</p>
          <p className={style.client_profession}>Business Owner</p>
         </li>  
        </ul>
      </section>
      <section>
        <div className={style.images}>
          <div className={style.milk}></div>
          <div className={style.orange}></div>
          <div className={style.cone}></div>
          <div className={style.sugarcubes}></div>
        </div>
      </section>
      <footer className={style.footer_container}>
        <div className={style.footer_logo_container}>
          <Link 
            activeClass="active"
            to="logo_header"
            spy={true}
            smooth={true}
            offset={-700}
            duration={800}
          >
            <img src={footer_logo} alt="logo" />
          </Link>
        </div>
        <div className={style.footer_nav_list_container}>
          <ul className={style.footer_nav_list}>
            <li className={style.footer_nav_item}><a className={style.link}>About</a></li>
            <li className={style.footer_nav_item}><a className={style.link}>Services</a></li>
            <li className={style.footer_nav_item}><a className={style.link}>Projects</a></li>
          </ul>
        </div>
        <div className={style.footer_icons_container}>
          <ul className={style.footer_icons_list}>
            <li className={style.footer_icon}><a className={style.link} href="https://github.com/felipestefani" target="_blank"><img src={facebook} alt="facebook icon" /></a></li>
            <li className={style.footer_icon}><a className={style.link} href="https://www.instagram.com/felipestefani/" target="_blank"><img src={instagram} alt="instagram icon" /></a></li>
            <li className={style.footer_icon}><a className={style.link} href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank"><img src={twitter} alt="twitter icon" /></a></li>
            <li className={style.footer_icon}><a className={style.link} href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank"><img src={pinterest} alt="pinterest icon" /></a></li>
          </ul>  
        </div>   
        <div className={style.attribution}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </div> 
      </footer>
  

  
    </div>
  )
}

export default App
