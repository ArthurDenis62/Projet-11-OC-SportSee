import { useState, useEffect } from "react";
import PerformanceRadar from "../../components/Chart/PerformenceRadar";
import SimpleBar from "../../components/Chart/SimpleBar";
import TinyLine from "../../components/Chart/TinyLine";
import UserScoreChart from "../../components/Chart/PieChart";
import UserMain from "../User/User";
import ApiRequest from "../../services/apiRequest";
import UserWelcome from "./Welcome";
import A from "./Accueil.module.scss";
import FondChart from "../../container/FondChart";

const Accueil = () => {
  const userId = 18;
  const [userData, setUserData] = useState(null);
  const [radarData, setRadarData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [tinyData, setTinyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const data = await Promise.all([
          ApiRequest(userId),
          ApiRequest(userId),
          ApiRequest(userId),
          ApiRequest(userId),
        ]);
        const dataResponse = data[0]
        const user = dataResponse[0]?.data?.data || {};
        setUserData({
          firstName: user.userInfos?.firstName,
          lastName: user.userInfos?.lastName,
          age: user.userInfos?.age,
          todayScore: user.todayScore || user.score,
          keyData: user.keyData || {
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0,
          },
        });

        const activityData = dataResponse[1]?.data?.data?.sessions || [];
        setChartData(
          activityData.map((session) => ({
            day: new Date(session.day).toLocaleDateString("fr-FR", { weekday: "short" }),
            kilogram: session.kilogram,
            calories: session.calories,
          }))
        );

        const performanceData = dataResponse[3]?.data?.data?.data || [];
        const kindFrench = {
            1: 'Cardio', // 6
            2: 'Energie', // 5
            3: 'Endurance', // 4
            4: 'Force', // 3
            5: 'Vitesse', // 2
            6: 'Intensité' // 1
        }
        const formatedData = performanceData.map((item) => ({
          subject: kindFrench[item.kind] || "Inconnu",
          value: item.value,
        }))
        setRadarData(
          formatedData.reverse()
        );

        const averageSessions = dataResponse[2]?.data?.data?.sessions || [];
        setTinyData(
          averageSessions.map((session) => {
            const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
            return {
              day: daysOfWeek[session.day - 1],
              minutes: session.sessionLength,
            };
          })
        );

        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
        setError("Une erreur est survenue lors de la récupération des données.");
        setLoading(false);
      }
    };

    fetchAllData();
  }, [userId]);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <div className={A.main}>
        <UserWelcome userData={userData} />
        <div className={A.parent}>
          <div className={A.grid1}>
            <FondChart children={
              <SimpleBar chartData={chartData} />
            } width="98%" height="auto" padding="1em" backgroundColor="#FBFBFB" />
          </div>
          <div className={A.grid2}>
            <FondChart children={
              <UserMain userData={userData} />
            } width="300px" height="auto" padding="0 1em 1em 1em" />
          </div>
          <div className={A.grid3}>
            <FondChart children={
                <UserScoreChart todayScore={userData.todayScore} />
              } width="250px" height="255px" padding="0em" backgroundColor="#FBFBFB" borderRadius="0.4em" />
          </div>
          <div className={A.grid4}>
            <FondChart children={
              <TinyLine userId={userId} tinyData={tinyData} />
            } width="250px" height="255px" padding="0em" backgroundColor="#FF0000" borderRadius="0.4em"/>
          </div>
          <div className={A.grid5}>
            <FondChart children={
              <PerformanceRadar radarData={radarData} />
            } width="250px" height="255px" padding="0em" backgroundColor="#282D30" borderRadius="0.4em" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Accueil;

// Faire le rechart Average session