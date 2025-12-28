import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sprout, CloudSun, TrendingUp, Bell, Settings, User } from "lucide-react"

export default function DashboardPage() {
  const farmStats = [
    { label: "Active Crops", value: "3", icon: Sprout, color: "text-green-600" },
    { label: "Soil Health", value: "Optimal", icon: Settings, color: "text-blue-600" },
    { label: "Market Alerts", value: "2 New", icon: Bell, color: "text-orange-600" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome, Rajesh Kumar</h1>
            <p className="text-sm text-muted-foreground">Location: Ludhiana, Punjab</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" /> Settings
          </Button>
          <Button size="sm">Add New Crop</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {farmStats.map((stat) => (
          <Card key={stat.label} className="border-none ring-1 ring-border shadow-none">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none ring-1 ring-border shadow-none">
            <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
              <CardTitle className="text-lg">My Crops</CardTitle>
              <Badge variant="outline">Kharif Season</Badge>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  { name: "Rice (Basmati)", stage: "Heading Stage", health: "Healthy" },
                  { name: "Maize", stage: "Flowering Stage", health: "Needs Water" },
                ].map((crop) => (
                  <div key={crop.name} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{crop.name}</p>
                      <p className="text-sm text-muted-foreground">{crop.stage}</p>
                    </div>
                    <Badge variant={crop.health === "Healthy" ? "default" : "destructive"} className="bg-green-600!">
                      {crop.health}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none ring-1 ring-border shadow-none">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="text-lg">Market Price Watchlist</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  { crop: "Wheat", market: "Ludhiana Mandi", price: "₹2,275", trend: "up" },
                  { crop: "Rice", market: "Karnal Mandi", price: "₹3,500", trend: "down" },
                ].map((item) => (
                  <div key={item.crop} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-semibold">{item.crop}</p>
                        <p className="text-xs text-muted-foreground">{item.market}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{item.price}</p>
                      <p className={`text-xs ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {item.trend === "up" ? "+₹25 today" : "-₹10 today"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="border-none ring-1 ring-border shadow-none bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CloudSun className="h-5 w-5 text-blue-600" />
                Local Weather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <p className="text-4xl font-bold text-blue-700">32°C</p>
                <p className="text-sm text-blue-600">Mostly Sunny in Ludhiana</p>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-100">
                <p className="text-xs font-semibold uppercase text-blue-800 mb-2">Advisory</p>
                <p className="text-xs text-blue-700">
                  Expect clear skies for the next 48 hours. Good time for spraying.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none ring-1 ring-border shadow-none">
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 shrink-0" />
                <p className="text-sm">Apply fertilizer to Rice field (South Plot)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 shrink-0" />
                <p className="text-sm">Check irrigation pipes for Maize</p>
              </div>
              <Button variant="ghost" className="w-full text-xs text-primary" size="sm">
                View All Tasks
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
