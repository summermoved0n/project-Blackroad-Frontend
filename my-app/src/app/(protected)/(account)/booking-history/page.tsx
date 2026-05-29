import { dbFindAllUserBookings } from "@/lib/repositories/booking.repo";
import { getCurrentUser } from "@/lib/utility/getCurrentUser";

export default async function page() {
  const userId = await getCurrentUser();

  if (!userId) {
    return <main className="text-white">Unauthorized</main>;
  }

  const userBookingHistory = await dbFindAllUserBookings({ userId });
  console.log(userBookingHistory);

  return <main className="text-white">Booking history</main>;
}
