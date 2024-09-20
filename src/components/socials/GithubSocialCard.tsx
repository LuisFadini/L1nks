interface GitHubSocialCardProps {
  user: string;
  class?: string;
}

export default function GitHubSocialCard(props: GitHubSocialCardProps) {
  return (
    <a
      href={`https://github.com/${props.user}`}
      aria-label="GitHub"
      class={`bg-[#23282e] p-1 rounded-full ~w-64/96 ~h-16/24 flex justify-center items-center ${
        props.class || ""
      }`}
    >
      <span class="bg-background-100 h-full w-full rounded-full flex items-center justify-center text-text-950 ~text-2xl/3xl font-bold">
        GitHub
      </span>
    </a>
  );
}
