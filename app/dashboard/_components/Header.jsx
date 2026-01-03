"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const path = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(path);
  }, [path]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { href: "/dashboard/questions", label: "Questions", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { href: "/dashboard/upgrade", label: "Upgrade", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { href: "/dashboard/how", label: "How it Works?", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <div className="flex items-center justify-between p-4 bg-secondary shadow-sm">
      <Link href="/" className="flex items-center">
        <img 
          src="/AD-logo.png" 
          width={120} 
          height={120} 
          alt="AD-INTRVW Logo" 
          className="h-14 w-14 object-contain -mr-2 ml-10"
        />
        <span className="text-xl font-bold text-gray-900">AD-INTRVW</span>
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6">
        <li>
          <Link
            href="/dashboard"
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard" ? "text-primary font-bold" : ""
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/questions"
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/questions" ? "text-primary font-bold" : ""
            }`}
          >
            Questions
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/upgrade"
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/upgrade" ? "text-primary font-bold" : ""
            }`}
          >
            Upgrade
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/how"
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/how" ? "text-primary font-bold" : ""
            }`}
          >
            How it Works?
          </Link>
        </li>
      </ul>

      {/* User Button */}
      <UserButton />

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-secondary p-6 md:hidden shadow-md">
          <li>
            <Link
              href="/dashboard"
              className={`block py-2 px-4 hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard" ? "text-primary font-bold" : ""
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/questions"
              className={`block py-2 px-4 hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/questions" ? "text-primary font-bold" : ""
              }`}
            >
              Questions
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/upgrade"
              className={`block py-2 px-4 hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/upgrade" ? "text-primary font-bold" : ""
              }`}
            >
              Upgrade
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/how"
              className={`block py-2 px-4 hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/how" ? "text-primary font-bold" : ""
              }`}
            >
              How it Works?
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
