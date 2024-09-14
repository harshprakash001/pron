import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StarIcon } from 'lucide-react'

const testimonials = [
  {
    name: "Alice Johnson",
    company: "Tech Innovators Inc.",
    testimonial: "Working with this company has been a game-changer for our business. Their innovative solutions and dedicated support team have helped us streamline our operations and boost our productivity.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Bob Smith",
    company: "Global Enterprises Ltd.",
    testimonial: "I'm impressed by the quality of their products and the level of customer service. They truly go above and beyond to ensure customer satisfaction. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Carol Davis",
    company: "Startup Ventures",
    testimonial: "As a startup, we needed a reliable partner to help us grow. This company provided us with tailored solutions that perfectly fit our needs and budget. We couldn't be happier with the results.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "David Wilson",
    company: "Marketing Wizards",
    testimonial: "The team's expertise in digital marketing has significantly improved our online presence. Our website traffic and conversion rates have soared since we started working with them.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Eva Martinez",
    company: "Creative Solutions Co.",
    testimonial: "Their creative approach to problem-solving is refreshing. They don't just provide a service; they become a valuable partner in your business growth. It's been a pleasure working with them.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Frank Lee",
    company: "E-commerce Experts",
    testimonial: "The e-commerce platform they developed for us has revolutionized our online sales. It's user-friendly, secure, and scalable. Our customers love it, and so do we!",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function Testimonials() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
        <p className="text-xl mb-8">
          Don't just take our word for it. Here's what our clients have to say about their experiences working with us.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <p className="italic">"{testimonial.testimonial}"</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}