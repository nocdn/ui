export function ComponentLayout({
  componentName,
  description,
  statusLabel = "COMPONENTS",
  statusClassName = "text-gray-600 dark:text-neutral-500",
  children,
}: any) {
  return (
    <div className="max-w-3xl pb-12">
      <p className={`font-jetbrains-mono text-[12px] leading-6 tracking-widest font-semibold ${statusClassName}`}>
        {statusLabel}
      </p>
      <p className="mt-3 font-sans text-3xl leading-6 font-medium">{componentName}</p>
      <p className="mt-6 font-sans leading-7 font-[420] text-[#737373] dark:text-neutral-400">{description}</p>
      {children}
    </div>
  )
}
