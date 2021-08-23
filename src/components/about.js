import * as React from "react"

import {
  LogoutIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  CloudIcon,
} from "@heroicons/react/outline"

const features = [
  {
    name: "Front-end development",
    description:
      "Always staying updated, We've been building our last apps using React and Gatsby, and experimenting with Vue.",
    icon: CursorClickIcon,
  },
  {
    name: "Back-end development",
    description:
      "Depending on the app, our choices for the backend are Node + Graphql, Express or Django.",
    icon: CloudIcon,
  },
  {
    name: "Native apps",
    description:
      "Using React Native, we really enjoy developing and designing hybrid native apps. Also currently experimenting with Electron.",
    icon: DeviceMobileIcon,
  },
  {
    name: "Play tennis",
    description: "We like our raquet sport :)",
    icon: LogoutIcon,
  },
]

export default function About() {
  return (
    <div id="about" className="my-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What we do
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We use the latest tech to offer you the best performing, but at the
            same time, easiest to use software for your company
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
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
