import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Product A",
    description: "Our flagship product designed to meet all your needs.",
    price: "$99.99",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Product B",
    description: "An innovative solution for modern businesses.",
    price: "$149.99",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Product C",
    description: "Premium quality for discerning customers.",
    price: "$199.99",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Product D",
    description: "Affordable option without compromising on quality.",
    price: "$79.99",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Product E",
    description: "Cutting-edge technology for advanced users.",
    price: "$249.99",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Product F",
    description: "Versatile solution for various applications.",
    price: "$129.99",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function Products() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-xl mb-8">
          Discover our range of high-quality products designed to meet your needs and exceed your expectations.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>{product.name}</CardTitle>
                <CardDescription className="mt-2">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">{product.price}</span>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}