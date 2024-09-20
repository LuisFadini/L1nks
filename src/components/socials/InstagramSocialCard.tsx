interface InstagramSocialCardProps {
  handle: string;
  class?: string;
}

export default function InstagramSocialCard(props: InstagramSocialCardProps) {
  return (
    <a
      href={`https://www.instagram.com/${props.handle}`}
      aria-label="Instagram"
      class={`bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-1 rounded-full ~w-64/96 ~h-16/24 flex justify-center items-center ${
        props.class || ""
      }`}
      rel="noreferrer"
      target="_blank"
    >
      <span class="bg-background-100 h-full w-full rounded-full flex items-center justify-center text-text-950 ~text-2xl/3xl font-bold">
        Instagram
      </span>
    </a>
  );
}
