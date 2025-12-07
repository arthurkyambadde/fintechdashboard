"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"

type TickerData = {
  product_id: string
  price: string
  time: string
}

export function MarketTicker() {
  const [tickerData, setTickerData] = useState<Record<string, TickerData>>({})
  const [prevPrices, setPrevPrices] = useState<Record<string, string>>({})

  useEffect(() => {
    const ws = new WebSocket("wss://ws-feed.exchange.coinbase.com")

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "subscribe",
          product_ids: ["BTC-USD", "ETH-USD", "SOL-USD", "ADA-USD"],
          channels: ["ticker"],
        })
      )
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.type === "ticker") {
        setTickerData((prev) => {
          const newData = { ...prev, [data.product_id]: data }
          // Update previous prices only if price changed significantly or periodically
          // For simplicity, we just store the current as prev in the next render cycle logic if needed
          return newData
        })
        setPrevPrices((prev) => ({
          ...prev,
          [data.product_id]: tickerData[data.product_id]?.price || data.price
        }))
      }
    }

    return () => {
      ws.close()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const products = ["BTC-USD", "ETH-USD", "SOL-USD", "ADA-USD"]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((productId) => {
        const data = tickerData[productId]
        const price = data ? parseFloat(data.price) : 0
        const prevPrice = prevPrices[productId] ? parseFloat(prevPrices[productId]) : price
        const isUp = price >= prevPrice

        return (
          <Card key={productId}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{productId}</CardTitle>
              {isUp ? (
                <ArrowUp className="h-4 w-4 text-success" />
              ) : (
                <ArrowDown className="h-4 w-4 text-destructive" />
              )}
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${isUp ? "text-success" : "text-destructive"}`}>
                {data ? `$${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}` : "Loading..."}
              </div>
              <p className="text-xs text-muted-foreground">
                Live from Coinbase
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
