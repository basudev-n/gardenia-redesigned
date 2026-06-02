import React, { useEffect } from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | The Gardenia";
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
