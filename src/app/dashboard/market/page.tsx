import { MarketTicker } from "@/components/market/market-ticker"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MarketPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Market Insights</h1>
      
      <MarketTicker />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Trending Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["NVIDIA Corp (NVDA)", "Tesla Inc (TSLA)", "Apple Inc (AAPL)"].map((stock, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <span className="font-medium">{stock}</span>
                  <span className="text-success">+{(Math.random() * 5).toFixed(2)}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Market News</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
              {[
                "Fed signals potential rate cuts later this year",
                "Bitcoin surges past $65k amid ETF inflows",
                "Tech sector rallies on AI optimism"
              ].map((news, i) => (
                <div key={i} className="flex flex-col gap-1 border-b pb-2 last:border-0">
                  <span className="font-medium hover:underline cursor-pointer">{news}</span>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
