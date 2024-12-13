import FondSvg from "../../container/FondSvg";
import C from '../../container/container.module.scss';
import GlucidesSvg from "../../lib/svg/Glucides";
import CaloriesSvg from "../../lib/svg/Calories";
import LipidesSvg from "../../lib/svg/Lipides";
import ProteinesSvg from "../../lib/svg/Proteines";

const UserMain = ({ userData }) => {
    return (<>
        <div className={C.svgGrid}>
            <FondSvg children={
                <div className={C.containerSvg}>
                    <div className={C.fondSvg} style={{ backgroundColor: "rgb(255 0 0 / 20%)" }}>
                        <CaloriesSvg />
                    </div>
                    <div className={C.fontSvg}>
                        <p>{userData.keyData.calorieCount} kcal</p>
                        <p>Calories</p>
                    </div>
                </div>
            } width="200px" height="200px" padding="0" color="#FF0000" />
            <FondSvg children={
                <div className={C.containerSvg}>
                    <div className={C.fondSvg} style={{ backgroundColor: "rgb(74 184 255 / 20%)" }}>
                        <ProteinesSvg />
                    </div>
                    <div className={C.fontSvg}>
                        <p>{userData.keyData.proteinCount} g</p>
                        <p>Protéines</p>
                    </div>
                </div>
            } width="200px" height="200px" padding="0" color="#FF0000" />
            <FondSvg children={
                <div className={C.containerSvg}>
                    <div className={C.fondSvg} style={{ backgroundColor: "rgb(253 204 12 / 20%)" }}>
                        <GlucidesSvg />
                    </div>
                    <div className={C.fontSvg}>
                        <p>{userData.keyData.carbohydrateCount}g</p>
                        <p>Glucides</p>
                    </div>
                </div>
            } width="200px" height="200px" padding="0" color="#FF0000" />
            <FondSvg children={
                <div className={C.containerSvg}>
                    <div className={C.fondSvg} style={{ backgroundColor: "rgb(253 81 129 / 20%)" }}>
                        <LipidesSvg />
                    </div>
                    <div className={C.fontSvg}>
                        <p>{userData.keyData.lipidCount} g</p>
                        <p>Lipides</p>
                    </div>
                </div>
            } width="200px" height="200px" padding="0" color="#FF0000" />    
        </div>
    </>);
};

export default UserMain;


//<p>Score du jour : {(userData.todayScore * 100).toFixed(2)}%</p>