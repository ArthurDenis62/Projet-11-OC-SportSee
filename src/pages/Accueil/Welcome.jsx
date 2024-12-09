import W from './Accueil.module.scss'

const UserWelcome = ({ userData }) => {
    return (<>
        <h1 className={W.Welcome}>Bonjour <custom className={W.red}>{userData.firstName}</custom></h1>
        <p className={W.para}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>);
};

export default UserWelcome;
