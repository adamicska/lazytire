import * as React from "react"

import {
  TableIcon,
  DatabaseIcon,
  BeakerIcon,
  EmojiHappyIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline"

const features = [
  {
    name: "Know your business",
    description:
      "We get to know your company through an immersive process during which we learn how you do business, get to know the processes and actors as well as your business needs. We put together a data flow and process diagram of your company.",
    icon: AcademicCapIcon,
  },
  {
    name: "User friendly",
    description:
      "Our systems are user centric but we also strive to make balanced applications that guarantee data integrity as well as user needs.",
    icon: EmojiHappyIcon,
  },
  {
    name: "Tailored to your needs",
    description:
      "We develop systems from small companies to enterprise level, for specific needs to company wide.",
    icon: BeakerIcon,
  },
  {
    name: "Integration",
    description:
      "We can integrate with existing software being used by customer. Import and export data.",
    icon: TableIcon,
  },
  {
    name: "Native or cloud",
    description:
      "Our systems can be based on the cloud, on your premise server, on your desktop PC or mobile phone.",
    icon: DatabaseIcon,
  },
  {
    name: "Cost effective",
    description: "Our services are affordable, our systems pays for itself.",
    icon: CurrencyDollarIcon,
  },
]

export default function About() {
  return (
    <div id="about" className="my-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What we do
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We develop custom software solutions that are tailored to your
            business needs and processes. Our systems are affordable, user
            friendly, intuitive and flexible so they can adapt as your business
            needs change.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
