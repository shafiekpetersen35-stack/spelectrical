import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Neil Andrews",
    detail: "Neil Andrews Construction (Pty) Ltd",
    text: "I have always been more than satisfied with his services. His work is neat and of impeccable quality, and he goes the extra mile to get the job done right the first time.",
  },
  {
    name: "Henriette Abrahams",
    text: "Professional, competent and trustworthy. His work is neat, and he is always on call and willing to assist when needed.",
  },
  {
    name: "Derek Roy Davis",
    text: "Meticulously professional and efficient installation. Thank you!",
  },
  {
    name: "Sandy Simanga Mnyanda",
    text: "Best quality service! I would recommend.",
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-block text-sm font-bold tracking-widest text-primary">CLIENT REVIEWS</p>
          <h2 className="text-pretty text-3xl font-bold text-black md:text-4xl">
            Why Cape Town Customers Recommend SP Electrical Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="flex flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
              <Quote aria-hidden="true" className="mb-4 h-7 w-7 fill-primary/10 text-primary" />
              <p className="mb-6 flex-1 text-gray-700 italic">“{testimonial.text}”</p>
              <div className="border-t border-gray-100 pt-5">
                <p className="font-bold text-black">{testimonial.name}</p>
                {testimonial.detail && <p className="mt-1 text-sm text-gray-600">{testimonial.detail}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
