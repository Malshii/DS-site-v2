import ContactUs from "@/components/ContactUs";;

export default function ContactUsPage() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/assets/images/global-bg.jpg')",
        backgroundAttachment: "fixed", // Keeps background fixed
      }}
    >
      <ContactUs />
    </section>
  );
}
