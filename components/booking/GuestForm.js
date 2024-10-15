// components/GuestForm.js
export default function GuestForm({
  guestInfo,
  handleGuestInfoChange,
  selectedDate,
  selectedService,
  handleGuestFormSubmit,
}) {
  return (
    <form
      onSubmit={handleGuestFormSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-xl text-customYellow font-bold mb-6">Client Information</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={guestInfo.name}
          onChange={handleGuestInfoChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={guestInfo.email}
          onChange={handleGuestInfoChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={guestInfo.phone}
          onChange={handleGuestInfoChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="selectedDate" className="block text-gray-700">
          Selected Date:
        </label>
        <input
          type="text"
          id="selectedDate"
          name="selectedDate"
          value={selectedDate}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="selectedService" className="block text-gray-700">
          Selected Service:
        </label>
        <input
          type="text"
          id="selectedService"
          name="selectedService"
          value={selectedService}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-customYellow text-white font-semibold rounded-full shadow-lg hover:bg-customLightGray"
      >
        Confirm Booking
      </button>
    </form>
  );
}
