// components/ServiceSelection.js
export default function ServiceSelection({
  service,
  setService,
  checkAvailability,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 mb-6 items-center">
      <div className="relative w-full md:w-1/3">
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          className="block w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Service</option>
          <option value="Website Development">Website Development</option>
          <option value="SEO Marketing">SEO Marketing</option>
          <option value="Creative Designs">Creative Designs</option>
          <option value="Brand Development">Brand Development</option>
        </select>
      </div>

      <button
        onClick={checkAvailability}
        className="w-full md:w-auto bg-customYellow hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded shadow transition duration-300"
      >
        Check Availability
      </button>
    </div>
  );
}
