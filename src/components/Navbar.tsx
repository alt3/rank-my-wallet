import { NavbarDesktop } from "@/components/Navbar/Desktop"
import { NavbarMobile } from "@/components/Navbar/Mobile"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { useBreakpointValue } from "@chakra-ui/media-query"

export function Navbar() {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const logoColorPrimary = useColorModeValue("#1B202C", "#52E3D1")
  const logoColorSecondary = useColorModeValue("#52E3D1", "#fff")

  if (isMobile) {
    return (
      <NavbarMobile logoColorPrimary={logoColorPrimary} logoColorSecondary={logoColorSecondary} />
    )
  }

  return (
    <NavbarDesktop logoColorPrimary={logoColorPrimary} logoColorSecondary={logoColorSecondary} />
  )
}

export default Navbar
