import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"
import { HeroMockup } from "@/components/landing/hero-mockup"

export default function LandingPage() {
  return (
    <>
      <section className="container mx-auto flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
          <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Introducing ApexEdge Finance
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Master Your Wealth with <br className="hidden sm:inline" />
            <span className="text-primary">Real-Time Analytics</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Track your portfolio, analyze market trends, and make data-driven decisions with our advanced fintech dashboard.
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Start Trading <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </Link>
          </div>
          
          {/* Hero Mockup */}
          <div className="mt-12 w-full max-w-5xl">
            <HeroMockup />
          </div>
        </section>

        <section id="features" className="container mx-auto py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Real-Time Data</h3>
              <p className="text-muted-foreground">
                Live market updates via WebSockets for stocks, crypto, and forex.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Bank-Grade Security</h3>
              <p className="text-muted-foreground">
                Your data is encrypted and protected with enterprise-level security.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">AI Insights</h3>
              <p className="text-muted-foreground">
                Get personalized investment recommendations powered by AI.
              </p>
            </div>
          </div>
        </section>
    </>
  )
}
