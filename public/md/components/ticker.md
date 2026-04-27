# Animated Ticker

> For the complete documentation index, see [llms.txt](/llms.txt)

## COMPONENTS

A status ticker that animates nicely when the text prop changes.

## Installation

```
bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/ticker.json
```

## Usage

```tsx
import { Ticker } from '@/components/ui/ticker'

<Ticker text="Shawshank Redemption (1994)" />
```

## Props

| Prop | Type | Default |
|---|---|---|
| className | `string` | `-` |
| text | `string` | `-` |
