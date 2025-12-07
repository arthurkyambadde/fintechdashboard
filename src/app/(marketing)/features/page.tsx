import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, BarChart3, Globe, Lock, PieChart, Zap } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      title: "Real-Time Analytics",
      description: "Monitor your portfolio performance with live data updates via WebSockets.",
      icon: Activity,
    },
    {
      title: "Advanced Charting",
      description: "Visualize trends with interactive, professional-grade financial charts.",
      icon: BarChart3,
    },
    {
      title: "Global Market Access",
      description: "Track stocks, crypto, and forex from major exchanges worldwide.",
      icon: Globe,
    },
    {
      title: "Bank-Grade Security",
      description: "Your data is protected with enterprise-level encryption and security standards.",
      icon: Lock,
    },
    {
      title: "Portfolio Management",
      description: "Easily manage multiple assets and track profit/loss in real-time.",
      icon: PieChart,
    },
    {
      title: "AI Insights",
      description: "Get personalized investment recommendations powered by artificial intelligence.",
      icon: Zap,
    },
  ]

  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Powerful Features</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to master your financial future, all in one place.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
