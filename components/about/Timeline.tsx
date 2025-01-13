'use client'

import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const timelineEvents = [
  { year: 2025, event: 'Global Sustainability Award: Recognized as Leaders in Green Recycling' },
  { year: 2024, event: 'Onwards & Upwards: Winning National & International Accolades' },
  { year: 2023, event: 'Google Case Study Ft. Recykal, Highlighting Cutting-Edge Recycling Innovations' },
  { year: 2022, event: 'Digital India Award: Recognized as Technology Pioneers by WEF' },
  { year: 2021, event: 'World Economic Forum Recognition: Named as a Leading Green Tech Company' },
  { year: 2020, event: 'Launch of AI-powered Recycling Plant: Revolutionizing Waste Sorting with Machine Learning' },
  { year: 2019, event: 'Sustainable Packaging Initiative: Partnered with Top Brands for Circular Economy Solutions' },
  { year: 2018, event: 'Achieved 100 Million Kilos of Plastic Recycled Annually' },
  { year: 2017, event: 'Expansion into European Markets: Introducing Our Innovative Solutions Globally' },
  { year: 2016, event: 'Won the National Green Innovation Award for Excellence in Waste Management' },
  { year: 2015, event: 'Collaborated with UNDP to Implement Sustainable Development Goals in Recycling' },
  { year: 2014, event: 'Launched First Solar-Powered Recycling Plant, Reducing Carbon Footprint by 30%' },
  { year: 2013, event: 'First Investment in IoT Technology for Real-Time Waste Tracking and Management' },
  { year: 2012, event: 'Recycling Revenue Surpassed $100 Million, Expanding Workforce and Facilities' },
  { year: 2011, event: 'Recykal Certified as the Largest Plastic Recycling Network in Asia' },
  { year: 2010, event: 'Introduction of E-Waste Recycling Program: Expanding the Scope of Our Efforts' },
  { year: 2009, event: 'Launched Green Packaging Solutions for Major Brands Across the Country' },
  { year: 2008, event: 'Achieved 50% Increase in Recycled Plastic Materials Used in Manufacturing' },
  { year: 2007, event: 'Opened Second Recycling Facility to Handle Increased Demand' },
  { year: 2006, event: 'Became a Certified Recycler for Electronic Waste, Focusing on Reducing E-Waste in Landfills' },
  { year: 2005, event: 'Launched Nationwide Awareness Campaign on Recycling Benefits for Environment' },
  { year: 2004, event: 'Expanded Operations to Over 10 Major Cities, Serving 200+ Industries' },
  { year: 2003, event: 'Became ISO Certified for Sustainable Waste Management Practices' },
  { year: 2002, event: 'Introduced First Biodegradable Packaging Solution, Gaining Recognition in the Industry' },
  { year: 2001, event: 'Signed Strategic Partnerships with Local Government Bodies to Promote Recycling' },
  { year: 2000, event: 'Upgraded Technology to Implement Closed-Loop Recycling, Creating a Circular Economy Model' },
  { year: 1999, event: 'Launched the First-Ever Mobile Recycling Collection Units in Urban Areas' },
  { year: 1998, event: 'Partnership with Major Manufacturers to Recycle Industrial Waste Materials' },
  { year: 1997, event: 'Pioneered the First Smart Recycling Bin, Leveraging Early RFID Technology for Waste Sorting' },
  { year: 1996, event: 'Expanded into Paper and Cardboard Recycling, Creating a New Revenue Stream' },
  { year: 1995, event: 'Achieved 50% Plastic Waste Recycling in Urban Areas, Reducing Landfill Overflow' },
  { year: 1994, event: 'Opened Our First Large-Scale Recycling Facility in the Heart of the City' },
  { year: 1993, event: 'Signed Key Contracts with Municipalities for Urban Waste Management' },
  { year: 1992, event: 'Started Collecting and Recycling Household Plastic and Glass Waste' },
  { year: 1991, event: 'Developed First-Ever Automated Sorting System for Waste Materials' },
  { year: 1990, event: 'First Investment in a Large-Scale Industrial Waste Recycling Plant' },
  { year: 1989, event: 'Achieved First Milestone: Recycled 10 Million Kilos of Plastic Waste' },
  { year: 1988, event: 'Introduced the First Recycling Program in Local Communities to Encourage Waste Sorting' },
  { year: 1987, event: 'Started Collaborating with Government Bodies for Waste Management Initiatives' },
  { year: 1986, event: 'Launched First Collection Center for Bottles, Cans, and Paper Materials' },
  { year: 1985, event: 'Company Founded: A Vision to Transform Waste into Resources and Create a Greener Planet' },
]

const Timeline = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-emerald-800">Our Sustainability Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-300 to-teal-500"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className="relative mb-12 flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                  {index % 2 === 0 ? (
                    <ChevronRight className="text-white w-5 h-5" />
                  ) : (
                    <ChevronLeft className="text-white w-5 h-5" />
                  )}
                </div>
              </div>
              <div
                className={`w-5/12 ${
                  index % 2 === 0
                    ? 'mr-auto pr-8 text-right'
                    : 'ml-auto pl-8 text-left'
                }`}
              >
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-2">{event.year}</h3>
                  <p className="text-gray-600">{event.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

