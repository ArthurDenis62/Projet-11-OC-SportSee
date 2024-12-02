import { Link } from 'react-router-dom';
import L from './Layout.module.scss';
import sportsee from '../../logos/sportsee.svg'
import logo1 from '../../logos/logo1.svg';
import logo2 from '../../logos/logo2.svg';
import logo3 from '../../logos/logo3.svg';
import logo4 from '../../logos/logo4.svg';

const Layout = () => {
  return (<>
    <header className={L.header}>
      <nav>
        <img src={sportsee} alt="Logo SportSee" />
        <Link to="/">Accueil</Link>
        <Link to="/Profil">Profil</Link>
        <Link to="/Reglage">Réglage</Link>
        <Link to="/Communaute">Communauté</Link>
      </nav>
      <aside className={L.sidebar}>
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
      </aside>
    </header>
  </>);
};

export default Layout;
