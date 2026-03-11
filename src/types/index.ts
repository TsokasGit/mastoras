export type Pro = {
  id: string
  name: string
  trade: string
  location: string
  rating: number
  reviewCount: number
  pricePerHour: number
  badge: "Top Pro" | "Verified" | null
  available: boolean
  specialties: string[]
  responseTime: string
  completionRate: string
  avatarInitial: string
  avatarColor: string
}