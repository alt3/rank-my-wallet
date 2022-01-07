import { NavbarDesktop } from "./navbar-desktop"
// import { NavbarMobile } from "./navbar-mobile"
import { useBreakpointValue } from "@chakra-ui/react"

export const Navbar: React.FC = () => {
  // const isMobile = useBreakpointValue({ base: true, md: false })

  // if (isMobile) {
  //   return <NavbarMobile />
  // }

  return <NavbarDesktop />
}
