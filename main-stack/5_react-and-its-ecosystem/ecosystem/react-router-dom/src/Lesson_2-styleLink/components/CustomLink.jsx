import { Link, useMatch } from "react-router-dom";

export const CustomLink = ( {children, to, ...props} ) => {
  // Хук возвращает true (некий объект либо null), если полученная url в качество параметра совпадает 
  // с сылкой, которая сейчас активно
  const match = useMatch(to);
  console.log(match)
    
  return (
    <Link 
      to={to}
      style={{color: match ? "var(--color-active)" : "white" }}  
      {...props}
    >{children}
    </Link>
    )
}