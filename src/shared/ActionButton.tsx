import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
  children: React.ReactNode;
  setSelectedPage : (value: SelectedPage)=>void;
}



const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-md px-10 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white "
    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
    {children}
    </AnchorLink>
  )
}

export default ActionButton