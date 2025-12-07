"use client"

import {
  Funnel,
  FunnelChart,
  LabelList,
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  Treemap,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const treemapData = [
  {
    name: "Crypto",
    children: [
      { name: "Bitcoin", size: 4500 },
      { name: "Ethereum", size: 3200 },
      { name: "Solana", size: 1200 },
    ],
  },
  {
    name: "Stocks",
    children: [
      { name: "Tech", size: 6000 },
      { name: "Energy", size: 2000 },
      { name: "Finance", size: 1500 },
    ],
  },
  {
    name: "Cash",
    children: [
      { name: "USD", size: 2000 },
      { name: "EUR", size: 1000 },
    ],
  },
]

const radialData = [
  { name: "Retirement", uv: 31.47, fill: "#8884d8" },
  { name: "New Car", uv: 26.69, fill: "#83a6ed" },
  { name: "House Downpayment", uv: 15.69, fill: "#8dd1e1" },
  { name: "Vacation", uv: 8.22, fill: "#82ca9d" },
  { name: "Emergency Fund", uv: 8.63, fill: "#a4de6c" },
]

const funnelData = [
  {
    "value": 100,
    "name": "Income",
    "fill": "#8884d8"
  },
  {
    "value": 80,
    "name": "Taxed",
    "fill": "#83a6ed"
  },
  {
    "value": 50,
    "name": "Expenses",
    "fill": "#8dd1e1"
  },
  {
    "value": 40,
    "name": "Savings",
    "fill": "#82ca9d"
  },
  {
    "value": 26,
    "name": "Invested",
    "fill": "#a4de6c"
  }
]

export function ProCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Portfolio Allocation (Treemap)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <Treemap
                data={treemapData}
                dataKey="size"
                aspectRatio={4 / 3}
                stroke="#fff"
                fill="#8884d8"
              >
                <Tooltip />
              </Treemap>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial Goals (Radial Bar)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="10%" 
                outerRadius="80%" 
                barSize={10} 
                data={radialData}
              >
                <RadialBar
                  label={{ position: 'insideStart', fill: '#fff' }}
                  background
                  dataKey="uv"
                />
                <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: '50%', right: 0, transform: 'translate(0, -50%)', lineHeight: '24px' }} />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 lg:col-span-3">
        <CardHeader>
          <CardTitle>Cash Flow Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <FunnelChart>
                <Tooltip />
                <Funnel
                  dataKey="value"
                  data={funnelData}
                  isAnimationActive
                >
                  <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
