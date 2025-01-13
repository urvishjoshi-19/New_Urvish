import Image from 'next/image';

const EPRProcessFlowchart = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">EPR Process Flowchart</h2>
      <div className="max-w-4xl mx-auto">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/flowchart3.jpg"
            alt="EPR Process Flowchart"
            width={800} // Set an appropriate width
            height={600} // Set an appropriate height
            objectFit="contain" // Ensures the entire image is visible
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default EPRProcessFlowchart;
