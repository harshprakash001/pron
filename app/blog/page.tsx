import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, UserIcon } from 'lucide-react'

const blogPosts = [
  {
    title: "10 Tips for Improving Your Company's Productivity",
    excerpt: "Discover practical strategies to boost your team's efficiency and output. From time management techniques to leveraging technology, these tips will help transform your workplace.",
    author: "John Doe",
    date: "2023-06-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "10-tips-for-improving-productivity"
  },
  {
    title: "The Future of AI in Business: What You Need to Know",
    excerpt: "Artificial Intelligence is reshaping the business landscape. Learn about the latest AI trends and how they can be applied to enhance your company's operations and decision-making processes.",
    author: "Jane Smith",
    date: "2023-06-10",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "future-of-ai-in-business"
  },
  {
    title: "Building a Strong Company Culture in a Remote Work Environment",
    excerpt: "With remote work becoming the new norm, maintaining a strong company culture can be challenging. Explore effective strategies to foster connection, collaboration, and shared values in a distributed team.",
    author: "Mike Johnson",
    date: "2023-06-05",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "building-strong-company-culture-remote-work"
  },
  {
    title: "Sustainable Business Practices: Why They Matter and How to Implement Them",
    excerpt: "Sustainability is more than just a buzzword. Discover why adopting eco-friendly practices is crucial for your business and learn practical steps to implement sustainable strategies in your operations.",
    author: "Sarah Brown",
    date: "2023-05-30",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "sustainable-business-practices"
  },
  {
    title: "Cybersecurity Essentials for Small Businesses",
    excerpt: "In an increasingly digital world, protecting your business from cyber threats is crucial. Learn about essential cybersecurity measures that every small business should implement to safeguard their data and reputation.",
    author: "David Lee",
    date: "2023-05-25",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "cybersecurity-essentials-small-businesses"
  },
  {
    title: "Mastering Customer Retention: Strategies for Long-Term Success",
    excerpt: "Acquiring new customers is important, but retaining existing ones is crucial for sustainable growth. Explore effective strategies to improve customer loyalty and increase lifetime value.",
    author: "Emily Chen",
    date: "2023-05-20",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "mastering-customer-retention"
  }
]

export default function Blog() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl mb-8">
          Stay up-to-date with the latest industry trends, company news, and expert insights. Our blog is your source for valuable information to help your business thrive.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="rounded-md object-cover w-full"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <span className="flex items-center">
                    <UserIcon className="mr-1 h-4 w-4" /> {post.author}
                  </span>
                  <span className="flex items-center">
                    <CalendarIcon className="mr-1 h-4 w-4" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="mr-1 h-4 w-4" /> {post.readTime}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}