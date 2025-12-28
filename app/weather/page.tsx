import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CloudRain, Sun, Wind, Droplets, MapPin } from "lucide-react"

export default function WeatherPage() {
  const forecast = [
    { day: "Today", temp: "32°C", condition: "Sunny", icon: Sun },
    { day: "Mon", temp: "30°C", condition: "Partly Cloudy", icon: Wind },
    { day: "Tue", temp: "28°C", condition: "Light Rain", icon: CloudRain },
    { day: "Wed", temp: "29°C", condition: "Rainy", icon: CloudRain },
    { day: "Thu", temp: "31°C", condition: "Sunny", icon: Sun },
    { day: "Fri", temp: "33°C", condition: "Clear Sky", icon: Sun },
    { day: "Sat", temp: "34°C", condition: "Hot", icon: Sun },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Weather Forecast</h1>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Noida, Uttar Pradesh</span>
          </div>
        </div>
        <div className="text-sm px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium flex items-center">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Alert: Heatwave predicted for Tuesday
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-2 bg-primary text-primary-foreground overflow-hidden">
          <CardContent className="p-8 flex flex-col md:flex-row justify-between items-center h-full">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-xl opacity-90 mb-2">Current Weather</p>
              <h2 className="text-7xl font-bold mb-2">32°C</h2>
              <p className="text-2xl font-medium">Mostly Sunny</p>
            </div>
            <div className="flex flex-col items-center">
              <Sun className="h-32 w-32 mb-4" />
              <div className="flex gap-6">
                <div className="text-center">
                  <Droplets className="h-6 w-6 mx-auto mb-1 opacity-80" />
                  <p className="text-sm">45% Humidity</p>
                </div>
                <div className="text-center">
                  <Wind className="h-6 w-6 mx-auto mb-1 opacity-80" />
                  <p className="text-sm">12 km/h Wind</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 border-none ring-1 ring-border">
          <CardHeader>
            <CardTitle className="text-lg">Weather Advisory</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg bg-background">
              <p className="text-sm font-semibold mb-1">Ideal for Irrigation</p>
              <p className="text-xs text-muted-foreground">
                Current conditions are optimal for watering your Kharif crops.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-background">
              <p className="text-sm font-semibold mb-1">Fertilizer Warning</p>
              <p className="text-xs text-muted-foreground">
                Avoid urea application tomorrow due to predicted heavy winds.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-xl font-bold mb-6">7-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {forecast.map((item) => (
          <Card
            key={item.day}
            className="text-center border-none ring-1 ring-border shadow-none hover:shadow-md transition-shadow"
          >
            <CardContent className="p-4">
              <p className="text-sm font-medium text-muted-foreground mb-3">{item.day}</p>
              <item.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="text-lg font-bold">{item.temp}</p>
              <p className="text-xs text-muted-foreground">{item.condition}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
