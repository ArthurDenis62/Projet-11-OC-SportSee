import FondSvg from "../../container/FondSvg";
import C from '../../container/container.module.scss';
import GlucidesSvg from "../../lib/svg/Glucides";

const UserMain = ({ userData }) => {
    return (<>
        <div className={C.svgGrid}>
            <FondSvg children={
                <p>Calories : {userData.keyData.calorieCount} kcal</p>
            } width="200px" height="200px" padding="0" color="#FF0000" />
            <FondSvg children={
                <p>Protéines : {userData.keyData.proteinCount} g</p>
            } width="200px" height="200px" padding="0" color="#FF0000" />
            <FondSvg children={
                <div>
                    <div>
                        <GlucidesSvg />
                    </div>
                    <div>
                        <p>{userData.keyData.carbohydrateCount}g</p>
                        <p>Glucides</p>
                    </div>
                </div>
                //Faire un composant
            } width="200px" height="200px" padding="0" color="#FF0000" />
            <FondSvg children={
                <p>Lipides : {userData.keyData.lipidCount} g</p>
            } width="200px" height="200px" padding="0" color="#FF0000" />    
        </div>
    </>);
};

export default UserMain;


//<p>Score du jour : {(userData.todayScore * 100).toFixed(2)}%</p>