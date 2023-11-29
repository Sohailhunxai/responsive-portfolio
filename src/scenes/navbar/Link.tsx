import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
  page:string;
  selectedPage:string;
  setSelectedPage:(value: SelectedPage) => void;
}

const Link = ({page,selectedPage,setSelectedPage, }: Props) => {
const lowerCasePage = page.toLowerCase().replace(/ /g, "")as SelectedPage;


return (
<AnchorLink  
className={`${selectedPage === lowerCasePage ? "text-black" : ""} 
transition duration-500 hover:text-white font-bold`}
 
 href={`#${lowerCasePage}`}
 
 onClick={()=> setSelectedPage(lowerCasePage)}
  >
 {page}
</AnchorLink>
  ) 
}

export default Link




