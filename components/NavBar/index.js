import React from "react";
import style from "./style.scss";
import Link from "next/link";

class Navbar extends React.Component {
  render() {
    return (
      <div className={style.navigation}>
        <li>
          <Link href="/beneficios">Beneficios</Link>
        </li>
        <li>
          <Link href="/voluntarias">¿Querés ser voluntaria?</Link>
        </li>
        <li>
          <Link href="/nosotras">Nosotras</Link>
        </li>
        <li>
          <Link href="/sponsors">Sponsors</Link>
        </li>
        <li>
          <Link href="/mentorias">Mentorias</Link>
        </li>
        <li>
          <Link href="/eventos">Próximos eventos</Link>
        </li>
      </div>
    );
  }
}

export default Navbar;
