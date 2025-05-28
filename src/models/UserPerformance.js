export default class UserPerformance {
  constructor(data) {
    const kindFrench = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };
    this.data = (data?.data || []).map((item) => ({
      subject: kindFrench[item.kind] || "Inconnu",
      value: item.value,
    })).reverse();
  }
}