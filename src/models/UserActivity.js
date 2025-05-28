export default class UserActivity {
  constructor(data) {
    this.sessions = (data?.sessions || []).map((session) => ({
      day: new Date(session.day).toLocaleDateString("fr-FR", { weekday: "short" }),
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}