"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
          <div className="flex w-full items-center justify-between">
            <span className="font-medium text-sm">Bitcoin Alert</span>
            <span className="text-xs text-muted-foreground">2m ago</span>
          </div>
          <p className="text-xs text-muted-foreground">
            BTC just crossed $65,000! Time to buy?
          </p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
          <div className="flex w-full items-center justify-between">
            <span className="font-medium text-sm">Portfolio Update</span>
            <span className="text-xs text-muted-foreground">1h ago</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Your portfolio is up 2.5% today. Good job!
          </p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
          <div className="flex w-full items-center justify-between">
            <span className="font-medium text-sm">New Feature</span>
            <span className="text-xs text-muted-foreground">1d ago</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Dark mode is now available. Check your settings.
          </p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
