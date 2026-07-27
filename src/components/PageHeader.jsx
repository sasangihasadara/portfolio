import React from 'react'

export default function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  eyebrowClassName = 'text-violet-300',
  titleClassName = 'font-display bg-[linear-gradient(90deg,#ffffff_0%,#e879f9_34%,#a78bfa_65%,#38bdf8_100%)] bg-clip-text text-transparent',
  descriptionClassName = 'text-slate-300',
}) {
  return (
    <div className="ui-card mx-auto mb-12 max-w-5xl rounded-[2rem] p-6 md:p-8">
      <div className="mb-5 h-px w-full bg-gradient-to-r from-fuchsia-400/70 via-violet-400/45 to-sky-400/10" />

      {eyebrow ? (
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.35em] ${eyebrowClassName}`}>
          {eyebrow}
        </p>
      ) : null}

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h1 className={`text-4xl font-semibold tracking-tight md:text-5xl ${titleClassName}`}>{title}</h1>
          <p className={`mt-4 text-base leading-8 text-slate-300 md:text-lg ${descriptionClassName}`}>
            {description}
          </p>
        </div>

        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </div>
  )
}
