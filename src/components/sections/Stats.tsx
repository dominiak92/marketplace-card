import { ShoppingBag, Star, Users, Calendar } from "lucide-react"
import { seller } from "@/data/mock"

const stats = [
  {
    icon: ShoppingBag,
    value: "OLX",
    label: "Sprzedaję przez OLX",
    iconClass: "text-amber-500 bg-amber-50",
  },
  {
    icon: Star,
    value: `${seller.rating}/5`,
    label: "Średnia ocen",
    iconClass: "text-yellow-500 bg-yellow-50",
  },
  {
    icon: Users,
    value: `${seller.reviewCount}+`,
    label: "Zadowolonych kupujących",
    iconClass: "text-green-500 bg-green-50",
  },
  {
    icon: Calendar,
    value: `${seller.yearsActive} lata`,
    label: "Aktywny na OLX",
    iconClass: "text-blue-500 bg-blue-50",
  },
]

export function Stats() {
  return (
    <section className="bg-white py-14 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, iconClass }) => (
            <div key={label} className="flex flex-col items-center text-center group">
              <div
                className={`w-12 h-12 rounded-2xl ${iconClass} flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
