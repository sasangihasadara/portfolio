import React from 'react'

export default function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  eyebrowClassName = 'text-slate-400',
  titleClassName = 'font-display bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent',
  descriptionClassName = 'text-slate-300',
}) {
  return (
    <div className="mx-auto mb-12 max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-8">
      <div className="mb-5 h-px w-full bg-gradient-to-r from-sky-400/70 via-violet-400/30 to-transparent" />

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
