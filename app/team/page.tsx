import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon, TwitterIcon } from 'lucide-react'

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    bio: "John has over 20 years of experience in the industry and is passionate about innovation.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe"
  },
  {
    name: "Jane Smith",
    position: "CTO",
    bio: "Jane leads our technology team and ensures we stay at the cutting edge of innovation.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith"
  },
  {
    name: "Mike Johnson",
    position: "Head of Marketing",
    bio: "Mike brings creative strategies to expand our market presence and engage with customers.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/mikejohnson",
    twitter: "https://twitter.com/mikejohnson"
  },
  {
    name: "Sarah Brown",
    position: "Lead Designer",
    bio: "Sarah's innovative designs have won multiple awards and delighted countless clients.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/sarahbrown",
    twitter: "https://twitter.com/sarahbrown"
  },
  {
    name: "David Lee",
    position: "Customer Success Manager",
    bio: "David ensures our clients receive top-notch support and achieve their goals with our products.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/davidlee",
    twitter: "https://twitter.com/davidlee"
  },
  {
    name: "Emily Chen",
    position: "Head of Product",
    bio: "Emily oversees product development, ensuring we meet and exceed market demands.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/emilychen",
    twitter: "https://twitter.com/emilychen"
  }
]

export default function Team() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-xl mb-8">
          Meet the dedicated professionals behind our success. Our team brings together a wealth of experience and expertise to deliver exceptional results for our clients.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="mt-2">{member.position}</CardDescription>
                <p className="mt-4">{member.bio}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-foreground">
                    <LinkedinIcon className="h-6 w-6" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-foreground">
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}