import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Landmark, CheckCircle2, ArrowRight } from "lucide-react"

const schemes = [
  {
    title: "PM-Kisan Samman Nidhi",
    description: "Income support of ₹6,000 per year in three installments.",
    eligibility: "Small and marginal farmers across India.",
    benefits: "Direct bank transfer for agricultural inputs and domestic needs.",
    category: "Income Support",
  },
  {
    title: "PM Fasal Bima Yojana",
    description: "Crop insurance scheme to protect against natural calamities.",
    eligibility: "All farmers growing notified crops in notified areas.",
    benefits: "Low premium rates and comprehensive risk coverage.",
    category: "Insurance",
  },
  {
    title: "Kisan Credit Card (KCC)",
    description: "Timely credit support to farmers for their cultivation needs.",
    eligibility: "All farmers, including tenant farmers and sharecroppers.",
    benefits: "Flexible credit line with low interest rates.",
    category: "Credit",
  },
]

export default function SchemesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl font-bold mb-4">Government Schemes & Subsidies</h1>
        <p className="text-lg text-muted-foreground">
          Find the latest information on central and state government initiatives designed to support the agricultural
          community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemes.map((scheme) => (
          <Card
            key={scheme.title}
            className="flex flex-col border-none ring-1 ring-border shadow-none hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                  <Landmark className="h-5 w-5" />
                </div>
                <Badge variant="secondary" className="bg-muted">
                  {scheme.category}
                </Badge>
              </div>
              <CardTitle className="text-xl">{scheme.title}</CardTitle>
              <CardDescription className="line-clamp-2">{scheme.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-1 flex items-center">
                  <CheckCircle2 className="h-3 w-3 mr-1 text-primary" />
                  Eligibility
                </h4>
                <p className="text-xs text-muted-foreground">{scheme.eligibility}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1 flex items-center">
                  <CheckCircle2 className="h-3 w-3 mr-1 text-primary" />
                  Benefits
                </h4>
                <p className="text-xs text-muted-foreground">{scheme.benefits}</p>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button className="w-full gap-2">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
