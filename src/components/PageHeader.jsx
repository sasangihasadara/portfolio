import React from 'react'

export default function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  eyebrowClassName = 'text-slate-400',
  titleClassName = 'text-white',
  descriptionClassName = 'text-slate-300',
}) {
  return (
    <div className="mx-auto mb-12 max-w-5xl">
      {eyebrow ? (
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.35em] ${eyebrowClassName}`}>
          {eyebrow}
        </p>
      ) : null}

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h1 className={`text-4xl font-semibold tracking-tight md:text-5xl ${titleClassName}`}>{title}</h1>
          <p className={`mt-4 text-base leading-8 md:text-lg ${descriptionClassName}`}>{description}</p>
        </div>

        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </div>
  )
}
