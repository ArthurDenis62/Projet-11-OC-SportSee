import User from "../models/User";
import UserActivity from "../models/UserActivity";
import UserPerformance from "../models/UserPerformance";
import UserAverageSessions from "../models/UserAverageSessions";

export default function formatData(data, dev) {
  const user = dev ? data[0] : data[0]?.data?.data;
  const activity = dev ? data[1] : data[1]?.data?.data;
  const average = dev ? data[2] : data[2]?.data?.data;
  const performance = dev ? data[3] : data[3]?.data?.data;

  return {
    user: new User(user),
    activityData: new UserActivity(activity).sessions,
    averageSessions: new UserAverageSessions(average).sessions,
    performanceData: new UserPerformance(performance).data,
  };
}