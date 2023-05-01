import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Contexts/AuthContext';
import styles from './UserHeaderNav.module.css';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 50rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    logout();
    navigate('/login');
  }
  console.log(mobile);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileBtn} ${
            mobileMenu && styles.mobileBtnActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          Minha Conta
        </NavLink>
        <NavLink to="/conta/dados">Dados</NavLink>
        <NavLink to="/conta/questoes">Questões</NavLink>
        <NavLink to="/conta/simulados">Simulados</NavLink>
        <button onClick={handleLogout}>{mobile ? 'Sair' : <Sair />}</button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
