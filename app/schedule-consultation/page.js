import HubSpotMeeting from '@/components/booking/HubSpotMeeting';

export default function ScheduleConsultation() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat min-h-screen overflow-auto" style={{
      backgroundImage: "url('/assets/images/consulting.jpg')",
      backgroundAttachment: "fixed",
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div id="move-down" className="relative z-10 pt-20 flex flex-col items-center justify-center min-h-screen text-white text-center px-6">
        <h1 className="text-5xl font-bold">Schedule a Consultation</h1>

        {/* HubSpot Meeting Integration */}
        <div className="pb-10">
          <HubSpotMeeting />
        </div>
      </div>
    </section>
  );
}
