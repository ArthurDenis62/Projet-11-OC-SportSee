import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <header>
      <Link to="/">Accueil</Link>
      <Link to="/">Profil</Link>
      <Link to="/">Réglage</Link>
      <Link to="/">Communauté</Link>
    </header>
  );
};

export default Layout;
