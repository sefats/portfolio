import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setStatus("captcha-error");
      return;
    }

    setIsLoading(true);
    const serviceId = "service_x31tfla";
    const templateId = "template_0757cfr";
    const publicKey = "SIyVGEP6bioA49P_V";

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      subject: formData.subject,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          subject: "",
          email: "",
          message: "",
        });
        setCaptchaValue(null);
        setIsLoading(false);
      })
      .catch(() => {
        setStatus("error");
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-white py-32 px-[5%] text-center">
      <div className="max-w-2xl mx-auto">
        {/* Titre */}
        <h2 className="text-5xl font-bold text-[#3B80C3] mb-10 border-b-4 border-[#3B80C3] inline-block pb-2">
          Contact
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#f5f7f9] p-10 rounded-3xl shadow-md text-left text-lg"
        >
          <h3 className="text-3xl font-semibold text-[#3B80C3] mb-6">
            Contactez-moi
          </h3>

          {/* Ligne prénom/nom */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 px-5 py-4 rounded-lg bg-gray-100 text-[#3B80C3] placeholder-[#7ca9d6] focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 px-5 py-4 rounded-lg bg-gray-100 text-[#3B80C3] placeholder-[#7ca9d6] focus:outline-none"
            />
          </div>

          {/* Objet */}
          <input
            type="text"
            name="subject"
            placeholder="Objet"
            value={formData.subject}
            onChange={handleChange}
            className="w-full mb-4 px-5 py-4 rounded-lg bg-gray-100 text-[#3B80C3] placeholder-[#7ca9d6] focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Adresse Mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-5 py-4 rounded-lg bg-gray-100 text-[#3B80C3] placeholder-[#7ca9d6] focus:outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Entrez votre message ici !"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-6 px-5 py-4 rounded-lg bg-gray-100 text-[#3B80C3] placeholder-[#7ca9d6] resize-none focus:outline-none"
          ></textarea>

          {/* CAPTCHA */}
          <ReCAPTCHA
            sitekey="6Leldk4rAAAAANYRT-wTu4IFsazFOY8dlsTHk7l9"
            onChange={(value) => setCaptchaValue(value)}
            className="mb-6 mx-auto w-fit"
          />

          {/* Messages d'état */}
          {status === "success" && (
            <p className="text-green-600 text-base mb-4">
              Message envoyé avec succès !
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-base mb-4">
              Erreur lors de l'envoi. Veuillez réessayer.
            </p>
          )}
          {status === "captcha-error" && (
            <p className="text-red-600 text-base mb-4">
              Merci de valider le reCAPTCHA avant d'envoyer.
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#f57c00] text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Envoi...
              </>
            ) : (
              "Envoyer"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-12 text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Sefa TAS
        </p>
      </div>
    </section>
  );
};

export default Contact;
