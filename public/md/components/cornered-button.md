# Cornered Button

> For the complete documentation index, see [llms.txt](/llms.txt)

## COMPONENTS

A button, inspired by @aliszu, with a border and darker corners. Customiseable with props, adheres to shadcn/ui styling with accessibility in mind, with button semantics and keyboard navigation.

## Installation

```
bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/cornered-button.json
```

## Usage

```tsx
import { CorneredButton } from '@/components/ui/cornered-button'

<CorneredButton
  cornerColor='red'
  cornerSize={7}
  borderWidth={2}
  className='font-mono cursor-pointer'
>
  NEXT
</CorneredButton>
```

## Props

| Prop | Type | Default |
|---|---|---|
| size | `"sm" \| "md" \| "lg"` | `"md"` |
| variant | `"default" \| "outline" \| "ghost" \| "destructive"` | `"default"` |
| corners | `"on" \| "off"` | `"on"` |
| borderWidth | `number` | `1` |
| cornerSize | `number` | `8` |
| cornerColor | `string` | `hsl(var(--border))` |
| type | `"button" \| "submit" \| "reset"` | `"button"` |
| className | `string` | `-` |
| style | `React.CSSProperties` | `-` |
| ref | `React.Ref<HTMLButtonElement>` | `-` |
| children | `React.ReactNode` | `-` |
