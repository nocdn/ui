# Animated Button

> For the complete documentation index, see [llms.txt](/llms.txt)

## COMPONENTS

A button that smoothly transitions between it's two child states.

## Installation

```
bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/animated-button.json
```

## Usage

```tsx
import { AnimatedButton } from '@/components/ui/animated-button'
import { Copy, Check } from 'lucide-react'

<AnimatedButton
  className='size-4.5'
  secondaryChildren={<Check />}
  ariaLabel='Copy'
>
  <Copy className='size-4' />
</AnimatedButton>
```

## Props

| Prop | Type | Default |
|---|---|---|
| className | `string` | `-` |
| children | `React.ReactNode` | `-` |
| secondaryChildren | `React.ReactNode` | `-` |
| onClick | `() => void` | `-` |
| ariaLabel | `string` | `-` |
| showingSecondary | `boolean` | `-` |
| timeout | `number` | `1000` |
