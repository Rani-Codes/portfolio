"use client";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Contact_Me = () => {
  return (
    <div>
      <button
        onClick={() => scrollToSection("#contacts")}
        className="text-base sm:text-xl text-primary bg-primary p-3 rounded-lg bg-opacity-20 hover:bg-opacity-30"
      >
        Contact me
      </button>
    </div>
  );
};

export default Contact_Me;
