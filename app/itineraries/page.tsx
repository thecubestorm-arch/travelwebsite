import { redirect } from "next/navigation";

export default function ItinerariesRedirect() {
  redirect("/plan-your-trip/preplanned-trips");
}
