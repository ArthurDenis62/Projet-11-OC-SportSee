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
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../data/data";
import formatData from "../../services/formatData";

const Accueil = () => {
  const userId = 18;
  const [userData, setUserData] = useState(null);
  const [radarData, setRadarData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [tinyData, setTinyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dev = false;

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const dataResponse = dev
          ? [
              USER_MAIN_DATA.find((elt) => elt.id === userId),
              USER_ACTIVITY.find((elt) => elt.userId === userId),
              USER_AVERAGE_SESSIONS.find((elt) => elt.userId === userId),
              USER_PERFORMANCE.find((elt) => elt.userId === userId),
            ]
          : await ApiRequest(userId);

        const data = formatData(dataResponse, dev);

        setUserData(data.user);
        setChartData(data.activityData);
        setRadarData(data.performanceData);
        setTinyData(data.averageSessions);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
        setError("Une erreur est survenue lors de la récupération des données.");
        setLoading(false);
      }
    };

    fetchAllData();
  }, [dev, userId]);

  if (loading) return <p>Chargement des données...</p>;

  return (
    <main>
      <div className={A.main}>
        {error ? <p>{error}</p> : (
        <>
          <UserWelcome userData={userData} />
          <div className={A.parent}>
            <div className={A.grid1}>
              <FondChart children={<SimpleBar chartData={chartData} />} width="98%" height="auto" padding="1em" backgroundColor="#FBFBFB" />
            </div>
            <div className={A.grid2}>
              <FondChart children={<UserMain userData={userData} />} width="300px" height="auto" padding="0 1em 1em 1em" />
            </div>
            <div className={A.grid3}>
              <FondChart children={<UserScoreChart todayScore={userData.todayScore} />} width="250px" height="255px" padding="0em" backgroundColor="#FBFBFB" borderRadius="0.4em" />
            </div>
            <div className={A.grid4}>
              <FondChart children={<TinyLine userId={userId} tinyData={tinyData} />} width="250px" height="255px" padding="0em" backgroundColor="#FF0000" borderRadius="0.4em" />
            </div>
            <div className={A.grid5}>
              <FondChart children={<PerformanceRadar radarData={radarData} />} width="250px" height="255px" padding="0em" backgroundColor="#282D30" borderRadius="0.4em" />
            </div>
          </div>
        </>)}
      </div>
    </main>
  );
};

export default Accueil;