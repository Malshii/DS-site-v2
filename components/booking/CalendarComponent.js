// Calendar Component
export default function CalendarComponent({
  availableDates = [], // Default value to prevent undefined issues
  selectedDate,
  setSelectedDate,
  currentMonth,
  handlePrevMonth,
  handleNextMonth,
}) {
  const today = new Date(); // Get today's date

  return (
    <div
      className="calendar-container mb-4 p-4 bg-white rounded-lg shadow-lg"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        maxHeight: "500px",
        overflowY: "auto",
      }} // Max width for better visibility
    >
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
          disabled={
            currentMonth?.getMonth() === today.getMonth() &&
            currentMonth?.getFullYear() === today.getFullYear()
          }
          aria-label="Previous Month"
        >
          Prev
        </button>
        <h2 className="font-bold text-lg text-gray-800">
          {currentMonth?.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
          aria-label="Next Month"
        >
          Next
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700 mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Available Dates */}
      <div className="grid grid-cols-7 gap-3">
        {availableDates.length === 0 ? (
          <div className="col-span-7 text-center text-gray-500">
            No available dates
          </div>
        ) : (
          availableDates.map(({ date, isUnavailable, isPast }) => (
            <button
              key={date}
              className={`py-3 px-4 text-sm rounded-lg border transition duration-300
                ${
                  selectedDate === date
                    ? "border-2 border-yellow-500 bg-yellow-100 text-yellow-700 font-bold" // Clear indication of selected date
                    : isUnavailable || isPast
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed" // Muted text for unavailable or past dates
                    : "bg-white text-gray-800 hover:bg-gray-100" // Default available dates
                }`}
              onClick={() => !isUnavailable && !isPast && setSelectedDate(date)}
              disabled={isUnavailable || isPast}
              aria-disabled={isUnavailable || isPast}
              aria-label={`Select date ${new Date(date).toLocaleDateString(
                "en-US",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}`}
            >
              {new Date(date).toLocaleDateString("en-US", {
                day: "numeric",
              })}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
