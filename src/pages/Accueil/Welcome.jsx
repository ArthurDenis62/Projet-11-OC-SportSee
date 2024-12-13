import W from './Accueil.module.scss'

const UserWelcome = ({ userData }) => {
    return (<>
        <h1 className={W.Welcome}>Bonjour <p className={W.red}>{userData.firstName}</p></h1>
        <p className={W.para}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>);
};

export default UserWelcome;
