import Image from 'next/image'
import { Button } from '@/components/ui/button'

const sectionStyle = {
  transform: 'scale(0.9)', // Scale down by 10%
  transformOrigin: 'center', // Ensure scaling is centered
}

const WomenEmpowerment = () => {
  return (
    <section className="py-12" style={sectionStyle}>
      <h2 className="text-3xl font-bold mb-8 text-center">Empowering Women for a Better Tomorrow</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/women-empowerment.jpg"
            alt="Women engaged in recycling activities"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">
            Recycle Plastics empowers women globally by offering training, employment, and leadership opportunities, fostering equality in the recycling industry.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  )
}

const ImpactBox1 = () => {
  return (
    <section className="py-12" style={sectionStyle}>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment to a Greener Future</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/octgf.jpg"
            alt="Plastic recycling process"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">
            <strong>Championing Recycling:</strong> We are on a mission to preserve our environment by diverting plastic waste from landfills and incineration.
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

const ImpactBox2 = () => {
  return (
    <section className="py-12" style={sectionStyle}>
      <h2 className="text-3xl font-bold mb-8 text-center">Innovating for a Sustainable Future</h2>
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/istgf.png"
            alt="Eco-friendly innovations"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">
            <strong>Committed to Minimizing Impact:</strong> We strive to reduce our environmental footprint through responsible waste management and energy-efficient operations.
          </p>
          <p className="text-lg mb-4">
            <strong>Innovating for Sustainability:</strong> Our ongoing research into eco-friendly alternatives helps us stay at the forefront of sustainable practices.
          </p>
          <Button>Discover More</Button>
        </div>
      </div>
    </section>
  )
}

const ImpactBox3 = () => {
  return (
    <section className="py-12" style={sectionStyle}>
      <h2 className="text-3xl font-bold mb-8 text-center">Join the Plastic Neutral Movement</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/pn1m.jpg"
            alt="Plastic neutral partnership"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">
            <strong>Plastic Neutrality:</strong> We partner with brands to eliminate their plastic footprint, promoting a 100% plastic-neutral and sustainable future.
          </p>
          <p className="text-lg mb-4">
            <strong>Join the Movement:</strong> Be part of the solution by partnering with us to make a difference in plastic waste reduction and environmental preservation.
          </p>
          <Button>Get Involved</Button>
        </div>
      </div>
    </section>
  )
}

const CombinedSections = () => {
  return (
    <>
      <WomenEmpowerment />
      <ImpactBox1 />
      <ImpactBox2 />
      <ImpactBox3 />
    </>
  )
}

export default CombinedSections
