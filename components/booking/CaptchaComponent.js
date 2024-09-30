// components/CaptchaComponent.js
import ReCAPTCHA from "react-google-recaptcha";

export default function CaptchaComponent({ handleCaptcha, captchaError }) {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      {/* reCAPTCHA */}
      <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY} onChange={handleCaptcha} />
      {captchaError && <p className="text-red-500 text-sm mt-2">{captchaError}</p>}
    </div>
  );
}