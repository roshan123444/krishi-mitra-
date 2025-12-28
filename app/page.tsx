import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Sprout, CloudSun, TrendingUp, Landmark, ArrowRight } from "lucide-react"

export default function Home() {
  const features = [
    {
      title: "Crop Guide",
      description: "Expert advice on soil, fertilizer, and pest control.",
      icon: Sprout,
      href: "/crops",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Weather",
      description: "Real-time updates and 7-day forecast for your region.",
      icon: CloudSun,
      href: "/weather",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Market Prices",
      description: "Daily Mandi Bhav for crops across all states.",
      icon: TrendingUp,
      href: "/market",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Govt Schemes",
      description: "Information on PM-Kisan and other subsidies.",
      icon: Landmark,
      href: "/schemes",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 text-balance">
            Krishi Mitra – Your <span className="text-primary">Farming Companion</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Get personalized guidance, real-time weather updates, and current market prices to help your farm thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/crops">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/schemes">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 bg-transparent">
                View Schemes
              </Button>
            </Link>
          </div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How can we help you today?</h2>
            <p className="text-muted-foreground">Select a service to get detailed information and support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <Card className="h-full hover:shadow-lg transition-shadow border-none ring-1 ring-border">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-2`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm font-medium text-primary hover:underline">
                      View details <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join thousands of successful farmers</h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Create an account to save your farm details and get personalized advice directly on your dashboard.
          </p>
          <Link href="/login">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
