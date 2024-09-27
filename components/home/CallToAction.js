// components/CallToAction.js
export default function CallToAction() {
  return (
    <section className="py-10 px-6 md:px-16">
      <div className="py-10 bg-gradient-to-r from-customYellow to-customLightYellow text-white rounded-lg relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          {/* Main Content */}
          <h2 className="text-lg md:text-xl font-semibold mb-6">
            FREE one-on-one advice for how you can use online marketing to grow
            your business
          </h2>
          {/* Action Button */}
          <button className="border-2 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
