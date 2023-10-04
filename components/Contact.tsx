"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitting, setIsSubmitting] = React.useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showSuccessPopup) {
      timeout = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000); // Menghilangkan popup setelah 5 detik
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showSuccessPopup]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    let data = {
      subject,
      email,
      message,
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        if (showSuccessPopup) {
          setTimeout(() => {
            setShowSuccessPopup(false);
          }, 5000); // Menghilangkan popup setelah 5 detik
        }
        setSubject("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/syihabudin081"
            target="_blank"
            passHref={true}
          >
            <Image
              src="/github-icon.svg"
              alt="Github Icon"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/syihabudin-rahmat-ramadhan-1b29651b5/"
            target="_blank"
            passHref={true}
          >
            <Image
              src="/linkedin-icon.svg"
              alt="Linkedin Icon"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className=" border text-white font-medium py-2.5 px-5 rounded-lg w-full"
            onClick={handleSubmit}
          >
            Send Message
          </button>
          {showSuccessPopup && (
            <div className="bg-green-500 text-white p-4 rounded-lg mt-4">
              Sukses mengirim email!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
