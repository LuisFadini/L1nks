interface InfoLinkProps {
  href: string,
  text: string,
  class?: string,
  ariaLabel?: string
}

export default function InfoLink(props: InfoLinkProps) {
  return (
  <a
    href={props.href}
    class={`text-accent-600 font-bold ${props.class || ""}`}
    rel="noreferrer"
    target="_blank"
    aria-label={props.ariaLabel || props.text}
  >
    {props.text}
  </a>)
}