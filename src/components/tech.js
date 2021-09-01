import * as React from "react"

import {
  SupportIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  DatabaseIcon,
} from "@heroicons/react/outline"

const features = [
  {
    name: "Front-end development",
    description:
      "We develop the user interface with state of the art tech such as React.js, or database front-ends with Microsoft Access.",
    icon: CursorClickIcon,
  },
  {
    name: "Back-end development",
    description:
      "We develop database back-ends in SQL, Oracle MySql and PostgreSQL",
    icon: DatabaseIcon,
  },
  {
    name: "Native apps",
    description:
      "Using React Native, we deliver hybrid native apps both for Androind and iOS.",
    icon: DeviceMobileIcon,
  },
  {
    name: "Top tier support",
    description:
      "We offer unparalleled customer support, remote support and maintenance plans; as well as online guides and how to instructions.",
    icon: SupportIcon,
  },
]

export default function Tech() {
  return (
    <div id="about" className="my-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Tech
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What we use
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our systems can be based on the cloud, on your premise server, on
            your desktop PC on via mobile apps.
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
