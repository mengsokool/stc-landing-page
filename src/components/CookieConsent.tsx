import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // ซ่อนแบนเนอร์ถ้าอยู่ในหน้านโยบายความเป็นส่วนตัว
    if (
      typeof window !== "undefined" &&
      window.location.pathname.includes("/privacy-policy")
    ) {
      return
    }

    // ตรวจสอบว่าเคยยอมรับ Cookie ไปแล้วหรือยัง
    const consent = localStorage.getItem("pdpa-cookie-consent")
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("pdpa-cookie-consent", "accepted-all")
    setShow(false)
    // ตรงนี้สามารถใส่ logic การเปิดใช้งาน Google Analytics หรือ Facebook Pixel ได้
  }

  const handleDecline = () => {
    localStorage.setItem("pdpa-cookie-consent", "essential-only")
    setShow(false)
    // ปิดการใช้งาน tracking cookies
  }

  if (!show) return null

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 animate-fade-in-up p-4 sm:p-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border/50 bg-background p-6 shadow-2xl backdrop-blur-xl sm:flex sm:items-center sm:justify-between">
        <div className="mb-4 sm:mb-0 sm:pr-8">
          <h3 className="text-lg font-bold text-foreground">
            การคุ้มครองข้อมูลส่วนบุคคล
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            วิทยาลัยเทคนิคสุรินทร์ ใช้คุกกี้ (Cookies)
            เพื่อพัฒนาประสบการณ์การใช้งานเว็บไซต์และนำเสนอเนื้อหาที่ตรงกับความต้องการของคุณ
            คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่
            <a
              href="/privacy-policy"
              className="ml-1 font-medium text-primary hover:underline"
            >
              นโยบายความเป็นส่วนตัว (Privacy Policy)
            </a>
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="w-full sm:w-auto"
          >
            ปฏิเสธ
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
          >
            ยอมรับทั้งหมด
          </Button>
        </div>
      </div>
    </div>
  )
}
