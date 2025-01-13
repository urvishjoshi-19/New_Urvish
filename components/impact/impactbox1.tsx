import Image from 'next/image'
import { Button } from '@/components/ui/button'

const impactbox1 = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment to a Greener Future</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/recycling-mission.jpg"
            alt="Plastic recycling process"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">
            <strong>Championing Recycling:</strong> We&apos;re on a mission to preserve our environment by diverting plastic waste from landfills and incineration.
          </p>
          <p className="text-lg mb-4">
            <strong>Reducing Pollution:</strong> By doing so, we actively reduce pollution and conserve natural resources, contributing to a cleaner planet.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  )
}

export default impactbox1
