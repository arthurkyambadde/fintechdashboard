"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, CreditCard, DollarSign, Users } from "lucide-react"

export function HeroMockup() {
  return (
    <div className="rounded-xl border bg-background shadow-2xl overflow-hidden">
      <div className="flex h-[400px] md:h-[500px]">
        {/* Mock Sidebar */}
        <div className="hidden w-16 flex-col border-r bg-muted/40 py-4 md:flex">
          <div className="mx-auto mb-4 h-8 w-8 rounded-lg bg-primary/20" />
          <div className="space-y-4 py-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="mx-auto h-8 w-8 rounded-lg bg-muted" />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-muted/10">
          {/* Mock Header */}
          <div className="flex h-14 items-center gap-4 border-b bg-background px-6">
            <div className="h-8 w-32 rounded-md bg-muted" />
            <div className="ml-auto flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-muted" />
              <div className="h-8 w-8 rounded-full bg-muted" />
            </div>
          </div>

          {/* Mock Content */}
          <div className="flex-1 p-6 space-y-6 overflow-hidden">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {[
                { title: "Total Revenue", icon: DollarSign, value: "$45,231.89", change: "+20.1%" },
                { title: "Subscriptions", icon: Users, value: "+2350", change: "+180.1%" },
                { title: "Sales", icon: CreditCard, value: "+12,234", change: "+19%" },
                { title: "Active Now", icon: Activity, value: "+573", change: "+201" },
              ].map((item, i) => (
                <Card key={i} className="bg-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xs font-medium text-muted-foreground">
                      {item.title}
                    </CardTitle>
                    <item.icon className="h-3 w-3 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-bold">{item.value}</div>
                    <p className="text-[10px] text-muted-foreground">{item.change}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-7 h-full">
              <Card className="col-span-4 bg-card">
                <CardHeader>
                  <CardTitle className="text-sm">Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  {/* CSS/SVG Chart Mockup */}
                  <div className="relative h-[200px] w-full">
                    <svg
                      viewBox="0 0 100 40"
                      className="h-full w-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 35 C 10 32, 15 20, 25 25 S 35 30, 45 15 S 55 10, 65 20 S 75 25, 85 15 S 95 5, 100 10 V 40 H 0 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0 35 C 10 32, 15 20, 25 25 S 35 30, 45 15 S 55 10, 65 20 S 75 25, 85 15 S 95 5, 100 10"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3 bg-card">
                <CardHeader>
                  <CardTitle className="text-sm">Recent Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-muted" />
                        <div className="space-y-1">
                          <div className="h-3 w-24 rounded bg-muted" />
                          <div className="h-2 w-16 rounded bg-muted/50" />
                        </div>
                        <div className="ml-auto h-3 w-12 rounded bg-muted" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
