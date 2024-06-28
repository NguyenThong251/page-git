import { Link } from "lucide-react";
import React from "react";

interface NavigationLinkProps {
  text: string;
  href: string;
}

function NavigationLink(props: NavigationLinkProps) {
  return (
    <div>
      <li>
        <Link 
        href={props.href}>{props.text}</Link>
      </li>
    </div>
  );
}

export default NavigationLink;
