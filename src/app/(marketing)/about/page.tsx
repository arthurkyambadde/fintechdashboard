import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About ApexEdge</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We are on a mission to democratize professional-grade financial tools. 
          ApexEdge was built by traders, for traders, to provide the clarity and speed needed in today's markets.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center mb-24">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2024, ApexEdge started with a simple idea: why should institutional investors have all the fun? 
            We believe that with the right data and tools, anyone can make smarter investment decisions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team combines decades of experience in high-frequency trading, software engineering, and user experience design 
            to bring you a platform that is powerful, intuitive, and reliable.
          </p>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/team.png" 
            alt="ApexEdge Team" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to join us?</h2>
        <Link href="/dashboard">
          <Button size="lg">Start Your Journey</Button>
        </Link>
      </div>
    </div>
  )
}
