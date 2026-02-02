export default function BookingTab() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-purple-700">
        Book an Appointment
      </h3>
      <input type="date" className="w-full p-3 border rounded-xl" />
      <button className="w-full py-3 bg-purple-600 text-white rounded-xl">
        Confirm Booking
      </button>
    </div>
  );
}
