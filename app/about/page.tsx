import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">About Your Company Name</h1>
        <p className="text-xl mb-4">
          Founded in [YEAR], Your Company Name has been at the forefront of [YOUR INDUSTRY] for over [X] years. 
          We pride ourselves on our commitment to innovation, quality, and customer satisfaction.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          Our mission is to [DESCRIBE YOUR MISSION]. We strive to [ADDITIONAL DETAILS ABOUT YOUR GOALS AND OBJECTIVES].
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Innovation", content: "We constantly seek new and better ways to serve our customers and improve our products." },
            { title: "Integrity", content: "We conduct our business with the highest standards of professional behavior and ethics." },
            { title: "Customer Focus", content: "We are committed to understanding and meeting the needs of our customers." },
            { title: "Teamwork", content: "We believe in the power of collaboration and fostering a supportive work environment." },
            { title: "Excellence", content: "We strive for excellence in everything we do, from product quality to customer service." },
            { title: "Sustainability", content: "We are dedicated to environmentally responsible practices in all aspects of our business." }
          ].map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}