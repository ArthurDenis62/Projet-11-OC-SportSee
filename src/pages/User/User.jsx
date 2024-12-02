const UserMain = ({ userData }) => {
    return (
        <div>
            <h1>Informations de l'utilisateur</h1>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                <h2>
                    {userData.firstName} {userData.lastName} (Âge : {userData.age})
                </h2>
                <p>Score du jour : {(userData.todayScore * 100).toFixed(2)}%</p>
                <h3>Données clés :</h3>
                <ul>
                    <li>Calories : {userData.keyData.calorieCount} kcal</li>
                    <li>Protéines : {userData.keyData.proteinCount} g</li>
                    <li>Glucides : {userData.keyData.carbohydrateCount} g</li>
                    <li>Lipides : {userData.keyData.lipidCount} g</li>
                </ul>
            </div>
        </div>
    );
};

export default UserMain;
