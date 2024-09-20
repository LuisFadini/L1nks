import Photo from "./components/Photo";
import BlueskySocialCard from "./components/socials/BlueskySocialCard";
import GitHubSocialCard from "./components/socials/GithubSocialCard";
import InstagramSocialCard from "./components/socials/InstagramSocialCard";
import MastodonSocialCard from "./components/socials/MastodonSocialCard";

function App() {
  return (
    <div class="flex flex-col items-center w-full h-full p-5">
      <Photo
        photoUrl="/foto.png"
        name="Luís Otávio"
        shortName="LO"
        class="mb-2"
      />
      <h3 class="text-xl text-center">Olá, eu sou o</h3>
      <h1 class="text-4xl font-bold text-center">Luís Otávio</h1>
      <div class="flex flex-col w-full items-center gap-5 mt-4">
        <InstagramSocialCard handle={import.meta.env.VITE_INSTAGRAM_HANDLER} />
        <MastodonSocialCard
          server="www.mastodon.social"
          handle={import.meta.env.VITE_MASTODON_HANDLER}
        />
        <BlueskySocialCard handle={import.meta.env.VITE_BLUESKY_HANDLER} />
        <GitHubSocialCard user={import.meta.env.VITE_GITHUB_HANDLER} />
      </div>
    </div>
  );
}

export default App;

