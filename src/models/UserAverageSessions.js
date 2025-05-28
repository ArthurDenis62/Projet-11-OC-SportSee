export default class UserAverageSessions {
  constructor(data) {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    this.sessions = (data?.sessions || []).map((session) => ({
      day: days[session.day - 1],
      minutes: session.sessionLength,
    }));
  }
}