import { useState, useEffect } from "react";
import PerformanceRadar from "../../components/Chart/PerformenceRadar";
import SimpleBar from "../../components/Chart/SimpleBar";
import UserMain from "../User/User";
import ApiRequest from "../../services/apiRequest";

const Accueil = () => {
  const userId = 18;
  const [userData, setUserData] = useState(null);
  const [radarData, setRadarData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const [userResponse, activityResponse, performanceResponse] = await Promise.all([
          ApiRequest(userId),
          ApiRequest(userId),
          ApiRequest(userId),
        ]);

        const user = userResponse[0]?.data?.data || {};
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

        const activityData = activityResponse[1]?.data?.data?.sessions || [];
        setChartData(
          activityData.map((session) => ({
            day: new Date(session.day).toLocaleDateString("fr-FR", { weekday: "short" }),
            kilogram: session.kilogram,
            calories: session.calories,
          }))
        );

        const performanceData = performanceResponse[3]?.data?.data?.data || [];
        setRadarData(
          performanceData.map((item) => ({
            subject: performanceResponse[3]?.data?.data?.kind[item.kind] || "Inconnu",
            value: item.value,
          }))
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
      <h1>Bonjour</h1>
      <UserMain userData={userData} />
      <PerformanceRadar radarData={radarData} />
      <SimpleBar chartData={chartData} />
    </main>
  );
};

export default Accueil;
