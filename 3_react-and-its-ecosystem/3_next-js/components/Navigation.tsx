"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ( {navLinks} : Props) => {
  const pathName = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathName === link.href;

        return (
          <Link
            key={link.label}
            href={link.href} 
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        )
      })}
    </>
  )
};c:\Users\mulwo\Desktop\miro-code\public c:\Users\mulwo\Desktop\miro-code\src c:\Users\mulwo\Desktop\miro-code\.gitignore c:\Users\mulwo\Desktop\miro-code\eslint.config.js c:\Users\mulwo\Desktop\miro-code\index.html c:\Users\mulwo\Desktop\miro-code\package.json c:\Users\mulwo\Desktop\miro-code\package-lock.json c:\Users\mulwo\Desktop\miro-code\README.md c:\Users\mulwo\Desktop\miro-code\tsconfig.app.json c:\Users\mulwo\Desktop\miro-code\tsconfig.json c:\Users\mulwo\Desktop\miro-code\tsconfig.node.json c:\Users\mulwo\Desktop\miro-code\vite.config.ts
export { Navigation }