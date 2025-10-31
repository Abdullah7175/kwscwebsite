"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const pathname = usePathname(); 

 
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);


  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "100vh",
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(linksRef.current, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
      });
    } else {
      gsap.to(menuRef.current, { height: 0, duration: 0.5, ease: "power3.in" });
      gsap.to(linksRef.current, { y: -20, opacity: 0, duration: 0.3 });
    }
  }, [isOpen]);

  // ✅ Track scroll position for background switch
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80); // Change background after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = [
    { href: "/", text: "Home" },
    { href: "/aboutus", text: "About Us" },
    { href: "/ourservices", text: "What We Do" },
    { href: "/portfolio", text: "Our Projects" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-[90%] mx-auto flex justify-between items-center py-4 transition-colors">
          <div>
            <img src="/kwsc logo.png" alt="KW&SC Logo" width={90} height={110} />
          </div>
          <nav>
            <ul className="flex gap-10 font-bold uppercase">
              {NavLinks.map((loop) => (
                <li key={loop.href}>
                  <Link
                    href={loop.href}
                    className={`transition-colors ${
                      isScrolled
                        ? pathname === loop.href
                          ? "text-blue-600"
                          : "text-black hover:text-blue-600"
                        : pathname === loop.href
                        ? "text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {loop.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={`cs_toolbox ${
                      isScrolled
                          ? "text-black hover:text-blue-600"
                          : "text-white hover:text-blue-600"
                    }`}>
            <span className="cs_icon_btn" onClick={() => setIsOpen(!isOpen)}>
              <span className="cs_icon_btn_in">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </span>
          </div>
          <div
            ref={menuRef}
            className={`fixed inset-0 bg-black overflow-hidden flex flex-col items-start justify-start z-50 transition-all ${
              isOpen ? "h-screen" : "h-0"
            }`}
          >
            <div className="p-10 flex flex-row-reverse justify-between w-[90%] mx-auto">
              <div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-black font-bold opacity-100 transform mr-8 hover:-translate-y-1 -mt-2 translate-x-8 transition-all duration-300 rounded-full border-white p-2 border-2"
                >
                  <X color="white" strokeWidth={3}/>
                </button>
              </div>
              <div className="text-white">
                <p>9th Mile Karsaz, Main Shahrah-e-Faisal, Karachi-75350, Pakistan</p>
              </div>
              <nav className="flex flex-col items-start gap-16 mt-10">
                {NavLinks.map((link, index) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    ref={(el) => (linksRef.current[index] = el)}
                    className={`text-5xl font-extrabold uppercase hover:text-blue-600 text-white opacity-0 transform -translate-y-5 transition-all duration-300 relative ${
                      pathname === link.href ? "text-blue-600" : "text-white"
                    }`}
                    data-menu={link.text}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
