import BaseTrend from "@/components/trend";
import db from "@/db.json";

export default async function Trend({ type }) {
  const trend = db.trends?.find((item) => item.id === type);
  const amount = trend?.amount ?? 0;
  const prevAmount = trend?.prevAmount ?? 0;

  return <BaseTrend type={type} amount={amount} prevAmount={prevAmount} />;
}
