"use client"

import { useState, Suspense } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, MapPin, TrendingUp, TrendingDown, Minus } from "lucide-react"

const marketData = [
  { id: 1, crop: "Wheat", state: "Punjab", city: "Ludhiana", price: "2275", unit: "per Quintal", trend: "up" },
  { id: 2, crop: "Rice", state: "Haryana", city: "Karnal", price: "3500", unit: "per Quintal", trend: "down" },
  { id: 3, crop: "Maize", state: "Bihar", city: "Begusarai", price: "2100", unit: "per Quintal", trend: "stable" },
  { id: 4, crop: "Cotton", state: "Gujarat", city: "Rajkot", price: "7200", unit: "per Quintal", trend: "up" },
  {
    id: 5,
    crop: "Soybean",
    state: "Madhya Pradesh",
    city: "Indore",
    price: "4600",
    unit: "per Quintal",
    trend: "down",
  },
]

function MarketContent() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = marketData.filter(
    (item) =>
      item.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.state.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Market Prices (Mandi Bhav)</h1>
          <p className="text-muted-foreground flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            Live data from APMC markets across India
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search crop, state, or city..."
            className="pl-10 h-12 bg-muted/30 border-none ring-1 ring-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-none ring-1 ring-border shadow-none">
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle className="text-lg">Daily Price Table</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Crop</TableHead>
                    <TableHead>Market</TableHead>
                    <TableHead>Price (₹)</TableHead>
                    <TableHead>Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.crop}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {item.city}, {item.state}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="font-bold">{item.price}</span>
                          <span className="text-xs text-muted-foreground ml-1">/{item.unit.split(" ")[1]}</span>
                        </TableCell>
                        <TableCell>
                          {item.trend === "up" && <TrendingUp className="h-4 w-4 text-green-600" />}
                          {item.trend === "down" && <TrendingDown className="h-4 w-4 text-red-600" />}
                          {item.trend === "stable" && <Minus className="h-4 w-4 text-gray-400" />}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
                        No results found for "{searchTerm}"
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-primary/5 border-none ring-1 ring-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Market Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-background">
                <p className="text-sm font-semibold text-green-600 mb-1">Price Spike Alert</p>
                <p className="text-xs text-muted-foreground">
                  Wheat prices in Punjab mandis have increased by 5% this week due to high demand.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background">
                <p className="text-sm font-semibold text-primary mb-1">Export Policy</p>
                <p className="text-xs text-muted-foreground">
                  New government policy on onion exports may stabilize prices in coming weeks.
                </p>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                View Detailed Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function MarketPage() {
  return (
    <Suspense fallback={null}>
      <MarketContent />
    </Suspense>
  )
}
