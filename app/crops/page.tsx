"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Sprout, Droplets, Thermometer, ShieldAlert } from "lucide-react"

const crops = [
  {
    id: "rice",
    name: "Rice (Paddy)",
    soil: "Alluvial, Clayey",
    season: "Kharif (June - Nov)",
    fertilizer: "Urea, DAP, MOP",
    irrigation: "High (Frequent flooding)",
    pests: "Stem borer, Leaf folder",
  },
  {
    id: "wheat",
    name: "Wheat",
    soil: "Loamy, Clayey",
    season: "Rabi (Oct - March)",
    fertilizer: "NPK 120:60:40",
    irrigation: "Moderate (Critical stages)",
    pests: "Rust, Aphids",
  },
  {
    id: "maize",
    name: "Maize (Corn)",
    soil: "Well-drained Loam",
    season: "Kharif/Rabi",
    fertilizer: "Ammonium Nitrate, Potash",
    irrigation: "Low to Moderate",
    pests: "Fall Armyworm",
  },
]

export default function CropsPage() {
  const [selectedCrop, setSelectedCrop] = useState(crops[0])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Crop Advisory Guide</h1>
        <p className="text-muted-foreground">Select a crop to get expert guidance on cultivation and protection.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <h3 className="font-semibold px-2">Popular Crops</h3>
          <div className="flex flex-col gap-2">
            {crops.map((crop) => (
              <button
                key={crop.id}
                onClick={() => setSelectedCrop(crop)}
                className={`text-left px-4 py-3 rounded-lg transition-all ${
                  selectedCrop.id === crop.id ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted"
                }`}
              >
                {crop.name}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card className="border-none ring-1 ring-border">
            <CardHeader className="border-b bg-muted/30">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{selectedCrop.name}</CardTitle>
                <Badge variant="secondary" className="px-3 py-1">
                  {selectedCrop.season}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs defaultValue="cultivation">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="cultivation">Cultivation</TabsTrigger>
                  <TabsTrigger value="protection">Protection</TabsTrigger>
                  <TabsTrigger value="harvest">Harvesting</TabsTrigger>
                </TabsList>

                <TabsContent value="cultivation" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-green-100 text-green-700">
                        <Sprout className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Soil Type</h4>
                        <p className="text-sm text-muted-foreground">{selectedCrop.soil}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-blue-100 text-blue-700">
                        <Droplets className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Irrigation</h4>
                        <p className="text-sm text-muted-foreground">{selectedCrop.irrigation}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-orange-100 text-orange-700">
                        <Thermometer className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Fertilizer</h4>
                        <p className="text-sm text-muted-foreground">{selectedCrop.fertilizer}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="protection" className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50 border border-red-100">
                    <ShieldAlert className="h-6 w-6 text-red-600 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-900">Common Pests & Diseases</h4>
                      <p className="text-sm text-red-800 mb-2">{selectedCrop.pests}</p>
                      <p className="text-sm text-red-700">
                        Recommendation: Use recommended bio-pesticides and maintain proper field drainage to minimize
                        infestation.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="harvest" className="text-center py-12">
                  <p className="text-muted-foreground italic">
                    Harvesting guidelines coming soon for {selectedCrop.name}.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
