import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Business Strategy',
    description: 'Recycle Plastics focuses on leveraging technology to provide innovative solutions for plastic waste management. Our strategy emphasizes creating a sustainable ecosystem, enabling businesses to meet their environmental goals effectively.',
  },
  {
    title: 'EPR Services',
    description: 'Our Extended Producer Responsibility (EPR) services are designed to help businesses comply with government regulations. We offer comprehensive solutions, including collection, recycling, and reporting, ensuring your compliance needs are met seamlessly.',
  },
  {
    title: 'Recycled Granules',
    description: 'We produce high-quality recycled plastic granules suitable for various industrial applications. Our granules are crafted to meet stringent quality standards, ensuring reliability and sustainability for your products.'
  },
  {
    title: 'CPCB Services',
    description: 'Recycle Plastics provides assistance in complying with the Central Pollution Control Board (CPCB) guidelines. Our services include documentation, process alignment, and reporting to ensure hassle-free adherence to environmental regulations.',
  },
]

const SustainabilitySection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Commitment to Sustainable Solutions and a Cleaner Planet</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SustainabilitySection

