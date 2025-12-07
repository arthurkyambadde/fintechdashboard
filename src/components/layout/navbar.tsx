"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Sun, Moon } from "lucide-react"
import { signInAction } from "@/server/actions/auth"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Navbar() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="flex h-16 items-center justify-between border-b px-6 lg:px-12 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center gap-2 font-bold text-xl text-primary">
        <Link href="/" className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6" />
          <span>ApexEdge</span>
        </Link>
      </div>
      <nav className="hidden gap-6 md:flex">
        <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
          Features
        </Link>
        <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
          Pricing
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
          About
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <span className="sr-only">Toggle theme</span>
          {mounted && (
            <>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </>
          )}
        </Button>
        
        <Link href="/dashboard">
          <Button variant="ghost">Open Dashboard</Button>
        </Link>
        <form action={signInAction}>
          <Button type="submit">Get Started</Button>
        </form>
      </div>
    </header>
  )
}
