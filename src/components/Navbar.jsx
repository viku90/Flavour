import React, { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const navRef = useRef(null)
  const linkRefs = useRef([])

  const [pos, setPos] = useState(0)
  const [open, setOpen] = useState(false)

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/recipes", label: "Recipes" },
    { path: "/create", label: "Create" }
  ]

  // 👨‍🍳 move chef on route change
  useEffect(() => {
    const index = links.findIndex(l => l.path === location.pathname)
    const el = linkRefs.current[index]
    const nav = navRef.current

    if (el && nav) {
      const elRect = el.getBoundingClientRect()
      const navRect = nav.getBoundingClientRect()

      setPos(elRect.left - navRect.left + elRect.width / 2)
    }
  }, [location])

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "rgba(15,10,0,0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,184,48,0.15)",
        color: "white"
      }}
    >

      {/* LOGO */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.6rem",
        color: "#FFB830"
      }}>
        Fla<em>vour</em>
      </div>

      {/* DESKTOP NAV */}
      <div
        className="desktop-nav"
        style={{
          position: "relative",
          display: "flex",
          gap: "2rem"
        }}
      >
        {links.map((link, i) => (
          <NavLink
            key={link.path}
            to={link.path}
            ref={(el) => (linkRefs.current[i] = el)}
            style={({ isActive }) => ({
              textDecoration: "none",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'Lato', sans-serif",
              color: isActive ? "#FFB830" : "rgba(255,255,255,0.7)",
              transition: "0.3s"
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* 🍔 HAMBURGER */}
      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          fontSize: "1.8rem",
          cursor: "pointer",
          color: "#FFB830"
        }}
      >
        ☰
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            right: "20px",
            background: "rgba(15,10,0,0.95)",
            backdropFilter: "blur(20px)",
            padding: "1rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#FFB830" : "white",
                textDecoration: "none",
                fontSize: "0.9rem"
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }
            .hamburger {
              display: block !important;
            }
          }
        `}
      </style>
    </nav>
  )
}

export default Navbar