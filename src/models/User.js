export default class User {
  constructor(data) {
    const userInfos = data?.userInfos || {};
    this.firstName = userInfos.firstName || "";
    this.lastName = userInfos.lastName || "";
    this.age = userInfos.age || null;
    this.todayScore = data.todayScore ?? data.score ?? 0;
    this.keyData = data.keyData || {
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    };
  }
}