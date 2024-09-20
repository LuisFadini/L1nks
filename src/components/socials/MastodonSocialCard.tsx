interface MastodonSocialCardProps {
  server: string;
  handle: string;
  class?: string;
}

export default function MastodonSocialCard(props: MastodonSocialCardProps) {
  return (
    <a
      href={`https://${props.server}/@${props.handle}`}
      aria-label="Mastodon"
      class={`bg-gradient-to-r from-[#6364FF] to-[#563ACC] p-1 rounded-full ~w-64/96 ~h-16/24 flex justify-center items-center ${
        props.class || ""
      }`}
    >
      <span class="bg-background-100 h-full w-full rounded-full flex items-center justify-center text-text-950 ~text-2xl/3xl font-bold">
        Mastodon
      </span>
    </a>
  );
}
