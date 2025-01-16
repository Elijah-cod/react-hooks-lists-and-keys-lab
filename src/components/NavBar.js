import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLinks = links.map((link, i)=>{
    return <a key={i+1} href={'#'+link}>{link}</a>
  })
  return <nav>
    <ul>
      {navLinks}
    </ul>
  </nav>;
}

export default NavBar;
