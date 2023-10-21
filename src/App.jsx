import style from "./style.module.css";
import logo from "./assets/images/logo.svg";
import footer_logo from './assets/images/footer-logo.svg';
import hamburger from "./assets/images/icon-hamburger.svg";
import arrow_down from "./assets/images/icon-arrow-down.svg";
import emily from "./assets/images/image-emily.jpg";
import thomas from "./assets/images/image-thomas.jpg";
import jennie from "./assets/images/image-jennie.jpg";


function App() {
  return (
    <div className={style.app_container}>
      <header className={style.header_container}>
        <div className={style.navbar_container}>
          <div className={style.logo_container}>
            <img src={logo} alt="sunnyside logo" />
          </div>
          <div className={style.navbar_items}>
            <img className={style.hamburger_icon} src={hamburger} alt="menu hamburger" />
            <ul className={style.navbar_list}>
              <li className={style.navbar_item}>About</li>
              <li className={style.navbar_item}>Services</li>
              <li className={style.navbar_item}>Projects</li>
              <li className={style.navbar_item_contact}>Contact</li>
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
            <span>Learn more</span> 
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
            <span>Learn more</span>
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
          <img src={footer_logo} alt="logo" />
        </div>
      
        About
        Services
        Projects
      </footer>
  
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </div>
  
    </div>
  )
}

export default App
