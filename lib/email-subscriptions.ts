import emailjs from "emailjs-com"

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycby2VhfThD_0SMKAAgCSivyByKrqpv2Yglp5JPTYX1JaxdetiYswxlqPRkF7-zcXTDU1/exec"

export async function saveEmailToSheets(email: string, source = "general") {
  await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({ email, source }),
  })
}

async function sendNewsletterEmail(email: string, message: string, source: string) {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NEWSLETTER!,
    { email, message },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  )

  await saveEmailToSheets(email, source)
}

export async function subscribeToGuide(email: string) {
  await sendNewsletterEmail(
    email,
    "New subscriber to Logic Guide waitlist",
    "guia-logica"
  )
}

export async function subscribeToNewsletter(email: string) {
  await sendNewsletterEmail(
    email,
    "New subscriber to Dev Log newsletter",
    "dev-log"
  )
}

export async function sendContactForm(form: HTMLFormElement) {
  await emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!,
    form,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  )
}