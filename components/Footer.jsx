import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CopyRight } from "@/components/SocialLinks";
import { Mail, MapPin, Phone } from "lucide-react";

const footer_data = {
  email: "info@kwsc.gos.pk",
  phone: "(+92) 021 111 597 200",
  location: "9th Mile Karsaz, Main Shahrah-e-Faisal, Karachi-75350, Pakistan",
  footer_info:
    "Karachi Water and Sewerage Corporation (KW&SC) is committed to providing reliable water and sewerage services to Karachi, ensuring clean water and efficient sewerage management for all residents.",
};

const Footer = () => {
  return (
    <>
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white mt-20 pt-14 font-bold relative">
      <div className="h-36 md:h-16"></div>
      <div className=" max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-10">
              <Image
                src={"/kwsc logo.png"}
                width={150}
                height={150}
                alt="KW&SC Logo"
                className="mb-6"
              />
              <p className="mb-6 text-lg leading-relaxed">{footer_data.footer_info}</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-sm">{footer_data.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-400" size={20} />
                  <span className="text-sm">{footer_data.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={20} />
                  <span className="text-sm">{footer_data.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/aboutus" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/ourservices" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                What We Do
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Our Projects
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Additional Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Services & Information</h3>
            <div className="space-y-3">
              <Link href="/achievements" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Achievements
              </Link>
              <Link href="/careers" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Careers
              </Link>
              <Link href="/right-to-information" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Right to Information
              </Link>
              <Link href="/news" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                News & Updates
              </Link>
              <Link href="/faqs" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* External Resources */}
        <div className="bg-blue-800/50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">External Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://www.sindh.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-center text-sm"
            >
              Sindh Government Portal
            </a>
            <a
              href="https://web.kwsb.crdc.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-center text-sm"
            >
              KWSB CRDC Portal
            </a>
            <a
              href="https://complain.kwsc.gos.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-center text-sm"
            >
              Online Complaint System
            </a>
            <a
              href="https://campaign.kwsc.gos.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-center text-sm"
            >
              Tanker Booking System
              </a>
            </div>
          </div>
            </div>
      <div className="border-t border-blue-700 py-8 text-center text-md">
        <div className="mx-auto">
          <CopyRight />
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
