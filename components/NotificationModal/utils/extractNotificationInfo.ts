import getElapsedTime from "@/lib/utils/getElapsedTime";
import { NotificationItem } from "../types/types";
import formatTimeRange from "@/lib/utils/formatTimeRange";

export default function extractNotificationInfo(
  notificationList: NotificationItem[],
) {
  const notifications = notificationList.map(({ item }) => {
    const { id, createdAt, result, shop, notice } = item;
    const { name } = shop.item;
    const { startsAt, workhour } = notice.item;

    const elapsedTime = getElapsedTime(createdAt);
    const formattedTime = formatTimeRange(startsAt, workhour);

    const alertId = id;

    return { alertId, name, result, elapsedTime, formattedTime };
  });

  return notifications;
}
