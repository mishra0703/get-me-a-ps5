"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/creators?search=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSearchTerm("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    function handleDocMouseDown(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleDocMouseDown);
    return () => document.removeEventListener("mousedown", handleDocMouseDown);
  }, [setSearchActive]);

  return (
    <nav
      className={`bg-[#1e1e1e] h-[8vh] w-full flex justify-between ${
        searchActive ? "max-sm:justify-center" : ""
      } items-center px-5 max-sm:pl-2 max-sm:pr-0 fixed top-0 z-10`}
    >
      <Link
        href="/"
        className={`logo text-2xl max-sm:text-xl font-bold ${
          searchActive ? "max-sm:hidden" : ""
        }`}
      >
        Get me a PS5
      </Link>
      <div className="flex gap-8 items-center">
        {session ? (
          <>
            <div className="flex justify-center items-center">
              <div className="search-wrapper" ref={wrapperRef}>
                <button
                  className="search-icon"
                  onClick={() => {
                    handleSearch();
                    setSearchActive(true);
                    inputRef.current?.focus();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="25px"
                    width="25px"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      stroke="#fff"
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    ></path>
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      stroke="#fff"
                      d="M22 22L20 20"
                    ></path>
                  </svg>
                </button>
                <input
                  placeholder="Search.."
                  className="search-input"
                  name="text"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyPress}
                  onFocus={() => setSearchActive(true)}
                  onBlur={(e) => {
                    const related = e.relatedTarget || document.activeElement;
                    if (!wrapperRef.current?.contains(related)) {
                      setSearchActive(false);
                    }
                  }}
                />
              </div>
              <div className="menu">
                <div className="item">
                  <div
                    className="link"
                    onClick={() => setSubmenuOpen((prev) => !prev)} // toggle
                  >
                    <div className="profile flex justify-center items-center gap-2 border-white border-2 rounded-full px-2.5 py-1.5 hover:cursor-pointer hover:bg-[#8e51eab4] transition-all duration-400 ease-in-out">
                      <HugeiconsIcon icon={Menu01Icon} size={22} />
                      <img
                        src={session.user.image || "/default-avatar.png"}
                        alt="Profile Image"
                        className="w-7 h-7 rounded-full border-white border-2"
                      />
                    </div>
                  </div>
                  <div
                    className={`submenu ${submenuOpen ? "open" : ""}`}
                    onClick={() => setSubmenuOpen(false)}
                  >
                    <div className="submenu-item">
                      <Link href="/" className="submenu-link">
                        Home
                      </Link>
                    </div>
                    <div className="submenu-item">
                      <Link href="/about" className="submenu-link">
                        About
                      </Link>
                    </div>
                    <div className="submenu-item">
                      <Link
                        href={`/${session.user.name}`}
                        className="submenu-link"
                      >
                        Profile
                      </Link>
                    </div>
                    <div className="submenu-item">
                      <Link href="/dashboard" className="submenu-link">
                        Dashboard
                      </Link>
                    </div>
                    <div className="submenu-item">
                      <Link
                        href="/"
                        className="submenu-link"
                        onClick={async () => {
                          await signOut({ redirect: false });
                          setSubmenuOpen(false);
                          router.push("/");
                        }}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Link href="/login">
            <button className="btn">
              <strong>Login</strong>
              <div id="container-stars">
                <div id="stars" />
              </div>
              <div id="glow">
                <div className="circle" />
                <div className="circle" />
              </div>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
