import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sprout, Menu, Languages } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sprout className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Krishi Mitra</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/crops" className="transition-colors hover:text-primary">
            Crops
          </Link>
          <Link href="/weather" className="transition-colors hover:text-primary">
            Weather
          </Link>
          <Link href="/market" className="transition-colors hover:text-primary">
            Market
          </Link>
          <Link href="/schemes" className="transition-colors hover:text-primary">
            Schemes
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:flex">
            <Languages className="h-5 w-5" />
            <span className="sr-only">Change Language</span>
          </Button>
          <Link href="/login">
            <Button variant="default" className="hidden md:flex">
              Farmer Login
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
