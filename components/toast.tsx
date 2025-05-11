"use client"
import { X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export function Toasts() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts
        .filter((toast) => toast.visible)
        .map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "bg-background border shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out",
              "transform translate-x-0 opacity-100 max-w-md flex items-start gap-3",
            )}
          >
            <div className="flex-1">
              <h3 className="font-medium">{toast.title}</h3>
              {toast.description && <p className="text-sm text-muted-foreground mt-1">{toast.description}</p>}
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        ))}
    </div>
  )
}
