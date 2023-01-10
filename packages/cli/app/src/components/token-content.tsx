import { HTMLPandaProps, panda } from '../../design-system/jsx'

export function TokenContent(props: HTMLPandaProps<'div'>) {
  return <panda.div display="flex" flexDir="column" gap="5" {...props} />
}
