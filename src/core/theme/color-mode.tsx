"use client"

import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

/**
 * Chakra 3 no longer owns colour mode -- it delegates to next-themes and does
 * not export `useColorMode`/`useColorModeValue` any more. This module restores
 * that small API on top of next-themes so the 29 components using it did not
 * all have to grow their own `useTheme()` plumbing.
 */

export type ColorMode = "light" | "dark"

export function ColorModeProvider(props: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange {...props} />
  )
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()

  return {
    colorMode: resolvedTheme as ColorMode,
    setColorMode: setTheme,
    toggleColorMode: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
  }
}

/**
 * Picks a value based on the active colour mode.
 *
 * Returns the dark value until the component has mounted. The server has no
 * way to know the visitor's colour mode, so rendering the light value first
 * would make every dark-mode visitor see a flash of the wrong colours, and
 * would additionally produce a hydration mismatch. `dark` is this app's
 * configured default.
 */
export function useColorModeValue<TLight, TDark>(light: TLight, dark: TDark): TLight | TDark {
  const { colorMode } = useColorMode()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return dark
  }

  return colorMode === "light" ? light : dark
}
