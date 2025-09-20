interface LogoProps {
  type?: 'full' | 'icon-only',
  style?: 'color' | 'white',
  size?: string,
}

export function Logo({ type = 'full', style = 'color', size = '8' }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      {style === 'color' ? (
        <img src="/logo.png" alt="HeapFox Logo" className={`w-${size} h-${size}`} />
      ) : (
        <img src="/logo-white.png" alt="HeapFox Logo" className={`w-${size} h-${size}`} />
      )}
      {type === 'full' && <span className={`text-xl font-bold ${style === 'white' ? 'text-white' : 'text-black'}`}>
        HeapFox
      </span>}
    </div>
  )
}
