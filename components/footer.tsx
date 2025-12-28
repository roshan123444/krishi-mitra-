import Link from "next/link"
import { Sprout } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">Krishi Mitra</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering Indian farmers with real-time data and agricultural guidance.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/crops" className="hover:text-primary">
                  Crop Advisory
                </Link>
              </li>
              <li>
                <Link href="/weather" className="hover:text-primary">
                  Weather Forecast
                </Link>
              </li>
              <li>
                <Link href="/market" className="hover:text-primary">
                  Market Prices
                </Link>
              </li>
              <li>
                <Link href="/schemes" className="hover:text-primary">
                  Govt Schemes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4">
              {/* Social icons would go here */}
              <span className="text-sm text-muted-foreground">Social media links</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Krishi Mitra. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
