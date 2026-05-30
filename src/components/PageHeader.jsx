import React from 'react'

export default function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <div className="max-w-5xl mx-auto mb-12">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
          {eyebrow}
        </p>
      ) : null}

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-8 text-gray-300 md:text-lg">{description}</p>
        </div>

        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </div>
  )
}

