export default function formatTimeRange(startsAt: string, workhour: number) {
  const startsTime = new Date(startsAt);
  const endsTime = new Date(startsAt);

  endsTime.setHours(endsTime.getHours() + workhour);

  const formattedStartsAt = startsTime.toLocaleString("ko-KR", {
    timeZone: "UTC",
  });
  const formattedEndsAt = endsTime.toLocaleString("ko-KR", { timeZone: "UTC" });

  return `(${formattedStartsAt} ~ ${formattedEndsAt})`;
}