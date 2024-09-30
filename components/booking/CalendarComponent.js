// components/CalendarComponent.js
export default function CalendarComponent({
  availableDates,
  selectedDate,
  setSelectedDate,
  currentMonth,
  handlePrevMonth,
  handleNextMonth,
}) {
  const today = new Date(); // Get today's date

  return (
    <div className="calendar mb-4">
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={handlePrevMonth}
          className="bg-gray-300 p-2 rounded-lg"
          disabled={
            currentMonth.getMonth() === today.getMonth() &&
            currentMonth.getFullYear() === today.getFullYear()
          }
        >
          Prev
        </button>
        <h2 className="font-bold">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-gray-300 p-2 rounded-lg"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        <div className="font-bold">Sun</div>
        <div className="font-bold">Mon</div>
        <div className="font-bold">Tue</div>
        <div className="font-bold">Wed</div>
        <div className="font-bold">Thu</div>
        <div className="font-bold">Fri</div>
        <div className="font-bold">Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {availableDates.map(({ date, isUnavailable, isPast }) => (
          <button
            key={date}
            className={`py-3 px-4 rounded-lg border transition duration-300 ${
              selectedDate === date
                ? "border-2 border-customYellow text-customYellow"
                : isUnavailable || isPast
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => !isUnavailable && !isPast && setSelectedDate(date)}
            disabled={isUnavailable || isPast}
          >
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
            })}
          </button>
        ))}
      </div>
    </div>
  );
}
