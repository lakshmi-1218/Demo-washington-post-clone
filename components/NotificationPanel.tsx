"use client"

import { X, Settings2 } from "lucide-react"

const notifications = [
  {
    title:
      "Researcher skeptical of 'Havana syndrome' tested secret weapon on himself — then suffered neurological symptoms, CIA was told",
    time: "Saturday at 1:05 PM",
    category: "Breaking News",
  },
  {
    title:
      "'Highly likely' that rare poison killed Putin nemesis Navalny, Europeans say",
    time: "Saturday at 10:11 AM",
    category: "Breaking News",
  },
]

export default function NotificationPanel({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  if (!open) return null  // 🔥 Completely hides panel when closed

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="
          fixed
          top-0 sm:top-16
          left-0 sm:left-4
          w-full sm:w-[380px]
          h-full sm:h-auto
          bg-white
          z-50
          shadow-2xl
          border border-gray-200
          sm:rounded-lg
          overflow-y-auto
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg sm:text-xl font-bold tracking-wide">
            NEWS ALERTS
          </h2>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 transition">
              <Settings2 size={20} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 transition"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 p-4 m-4 rounded-md">
          <div className="flex gap-3">
            <div className="text-blue-600 flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="8" />
              </svg>
            </div>

            <div>
              <p className="font-semibold mb-1 text-sm sm:text-base">
                Customize your news alerts with a free Washington Post account.
              </p>
              <a href="#" className="underline text-sm hover:text-blue-700">
                Create a free account
              </a>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="p-4 space-y-6">
          {notifications.map((notification, index) => (
            <div key={index}>
              <h3 className="font-serif text-base leading-snug mb-2 hover:text-gray-600 cursor-pointer transition">
                {notification.title}
              </h3>
              <p className="text-sm text-gray-600">
                {notification.time} • {notification.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


