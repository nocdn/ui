# Compatibility

> For the complete documentation index, see [llms.txt](/llms.txt)

## COMPATIBILITY

The components are compatible with the following technologies:

- React 19+
- TypeScript 5.3+
- Tailwind CSS 4.x

The code also assumes that you are using the `@ → src` alias for the bundler.

### SSR AND ANIMATIONS

Motion works server-side, but initial mount transitions can flash; if needed, disable initial animations on first paint or gate with hydration checks.

### TROUBLESHOOTING

- `Module not found '@/lib/utils'` → check your bundler alias config and that cn util is resolvable.
- `Types not found` → ensure TypeScript is 5.3+ and skipLibCheck is true or libs are installed.
