import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for beginners tracking a small portfolio.",
      features: ["Real-time market data", "Track up to 5 assets", "Basic charts", "Community support"],
      cta: "Get Started",
      href: "/dashboard",
    },
    {
      name: "Pro",
      price: "$29",
      description: "For serious investors who need advanced tools.",
      features: [
        "Everything in Starter",
        "Unlimited assets",
        "Advanced technical analysis",
        "AI-powered insights",
        "Priority support",
      ],
      cta: "Start Free Trial",
      href: "/dashboard",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for institutions and funds.",
      features: [
        "Everything in Pro",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      href: "#contact",
    },
  ]

  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your investment journey. No hidden fees.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {tiers.map((tier, index) => (
          <Card key={index} className={`flex flex-col ${tier.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
            <CardHeader>
              {tier.popular && (
                <div className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full w-fit mb-2">
                  Most Popular
                </div>
              )}
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-4xl font-bold mb-6">
                {tier.price}
                {tier.price !== "Custom" && <span className="text-lg font-normal text-muted-foreground">/mo</span>}
              </div>
              <ul className="space-y-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={tier.href} className="w-full">
                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                  {tier.cta}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
