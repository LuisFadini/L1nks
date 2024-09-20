interface BlueskySocialCardProps {
  handle: string;
  class?: string;
}

export default function BlueskySocialCard(props: BlueskySocialCardProps) {
  return (
    <a
      href={`https://bsky.app/profile/${props.handle}`}
      aria-label="Bluesky"
      class={`bg-[#0a7aff] p-1 rounded-full ~w-64/96 ~h-16/24 flex justify-center items-center ${
        props.class || ""
      }`}
      rel="noreferrer"
      target="_blank"
    >
      <span class="bg-background-100 h-full w-full rounded-full flex items-center justify-center text-text-950 ~text-2xl/3xl font-bold">
        Bluesky Social
      </span>
    </a>
  );
}
