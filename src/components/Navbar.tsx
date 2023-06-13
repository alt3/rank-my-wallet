import { NavbarDesktop } from "@/components/Navbar/Desktop"
import { NavbarMobile } from "@/components/Navbar/Mobile"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { useEffect, useState } from "react"
import { isMobile as isMobileDevice } from "react-device-detect"

export function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>()

  const logoColorPrimary = useColorModeValue("#1B202C", "#52E3D1")
  const logoColorSecondary = useColorModeValue("#52E3D1", "#fff")

  useEffect(() => {
    isMobileDevice === true ? setIsMobile(true) : setIsMobile(false)
  }, [])

  return (
    <>
      {isMobile && (
        <NavbarMobile logoColorPrimary={logoColorPrimary} logoColorSecondary={logoColorSecondary} />
      )}

      {!isMobile && (
        <NavbarDesktop
          logoColorPrimary={logoColorPrimary}
          logoColorSecondary={logoColorSecondary}
        />
      )}
    </>
  )
}

export default Navbar
