export const portalConfig = {
  productName: "MyCollege",
  institutionName: "วิทยาลัยเทคนิคสุรินทร์",
  institutionShortName: "วิทยาลัยเทคนิคสุรินทร์",
  logo: "/landing_page_asset/favicon.ico",
  mascot: "/landing_page_asset/vec-avatar.webp",
  academicYear: "2569",
  description:
    "ระบบบริการสถานศึกษาออนไลน์ รวมบริการสำหรับนักเรียน ครู บุคลากร และสถานประกอบการไว้ในที่เดียว",
  endpoints: {
    student:
      "https://surintechdigital.net/login-formX/index.php?action=0&alert=0",
    teacher: "https://surintechdigital.net/mycollege-new/",
    workplace:
      "https://surintechdigital.net/login-formX/index.php?action=0&alert=0",
    discipline: "https://surintechdigital.net/rule/index.php",
    activity: "https://surintechdigital.net/datetime_new/index.php",
    attendance: "https://surintechdigital.net/attendence/login/index.php",
    facility: "https://surintechdigital.net/use_building",
    qrGuidance: "https://www.surintechdigital.net/activity/genqrcode/index.php",
    admission: "https://surintechdigital.net/admidonline/",
    stcLink: "https://lin.ee/68v25bIR",
  },
}

export type PortalConfig = typeof portalConfig
