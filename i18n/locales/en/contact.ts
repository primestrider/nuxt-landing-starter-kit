export default {
  meta: {
    title: "Contact",
    description: "Get in touch for a demo, support, or partnership.",
  },
  hero: {
    title: "Contact us",
    description: "Fill out the form below or use an alternative channel.",
  },
  info: {
    email: { label: "Email", value: "hello@example.com" },
    phone: { label: "Phone", value: "+1 (555) 123-4567" },
    address: { label: "Address", value: "San Francisco, CA" },
  },
  form: {
    title: "Send a message",
    description: "We typically reply within 1–2 business days.",
    name: "Full name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    topic: "Topic",
    topicPlaceholder: "Choose a topic",
    topics: ["Product demo", "Technical support", "Partnership", "Other"],
    message: "Message",
    messagePlaceholder: "Tell us about your needs...",
    consent: "I agree to have my data processed per the privacy policy.",
    submit: "Send message",
    successTitle: "Message sent",
    successDescription: "Thank you. Our team will get back to you shortly.",
    validation: {
      name: "Name must be at least 2 characters",
      email: "Invalid email",
      topic: "Please select a topic",
      message: "Message must be at least 10 characters",
      consent: "You must accept the privacy policy",
    },
  },
};
