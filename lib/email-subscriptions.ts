import emailjs from "emailjs-com"

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycby2VhfThD_0SMKAAgCSivyByKrqpv2Yglp5JPTYX1JaxdetiYswxlqPRkF7-zcXTDU1/exec"

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const EMAILJS_TEMPLATE_NEWSLETTER = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NEWSLETTER
const EMAILJS_TEMPLATE_CONTACT = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT

let emailJsInitialized = false

function ensureEmailJsReady() {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_TEMPLATE_NEWSLETTER) {
    throw new Error("EmailJS is not configured. Check NEXT_PUBLIC_EMAILJS_* env variables.")
  }

  if (!emailJsInitialized) {
    emailjs.init(EMAILJS_PUBLIC_KEY)
    emailJsInitialized = true
  }
}

export async function saveEmailToSheets(email: string, source = "general") {
  await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({ email, source }),
  })
}

async function sendNewsletterEmail(email: string, message: string, source: string) {
  ensureEmailJsReady()

  await emailjs.send(
    EMAILJS_SERVICE_ID!,
    EMAILJS_TEMPLATE_NEWSLETTER!,
    {
      email,
      user_email: email,
      to_email: email,
      reply_to: email,
      message,
      source,
    },
    EMAILJS_PUBLIC_KEY!
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
  if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_TEMPLATE_CONTACT) {
    throw new Error("EmailJS contact template is not configured.")
  }

  if (!emailJsInitialized) {
    emailjs.init(EMAILJS_PUBLIC_KEY)
    emailJsInitialized = true
  }

  await emailjs.sendForm(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_CONTACT,
    form,
    EMAILJS_PUBLIC_KEY
  )
}