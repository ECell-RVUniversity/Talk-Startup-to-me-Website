"use client"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const handleAgree = () => {
    // Redirect to Google Form
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScYUbt1ydo-VdHBMQUy5n_Q-z9GaYZMBUOSm7e4weUKmr2-xQ/viewform?usp=dialog",
      "_blank",
    )
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl mx-4 shadow-2xl">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Terms and Conditions</h2>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <p className="text-white/90 leading-relaxed text-left">
              <strong className="text-yellow-400">Important Notice:</strong> This event falls between a long weekend
              holiday (October 1, 2, 4, and 5). Please plan accordingly. Due to limited seats, only register if you are
              100% sure you can attend. If you register and fail to attend, you will be answerable to the Dean of SoCSE
              and may face consequences, including being unable to participate in future events organized by ECell or
              the School of Computer Science and Engineering.
            </p>
          </div>

          <p className="text-white font-medium mb-8">Have you read and agree to this statement?</p>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleAgree}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Yes
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full font-semibold bg-transparent"
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
