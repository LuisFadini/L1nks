import { Dialog } from "@ark-ui/solid";
import Photo from "./components/Photo";
import BlueskySocialCard from "./components/socials/BlueskySocialCard";
import GitHubSocialCard from "./components/socials/GithubSocialCard";
import InstagramSocialCard from "./components/socials/InstagramSocialCard";
import MastodonSocialCard from "./components/socials/MastodonSocialCard";
import PhXBold from "~icons/ph/x-bold";
import { Portal } from "solid-js/web";
import { createSignal } from "solid-js";
import InfoLink from "./components/info/InfoLink";

function App() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <div class="flex flex-col min-h-screen max-w-[100vw]">
        <main class="flex flex-col items-center w-full h-full p-5 flex-grow">
          <Photo
            photoUrl="/photo.jpg"
            name="Luís Otávio"
            shortName="LO"
            imgSize={150}
            class="mb-2"
          />
          <h3 class="text-xl text-center">Olá, eu sou o</h3>
          <h1 class="text-4xl font-bold text-center">Luís Otávio</h1>
          <section class="flex flex-col w-full items-center gap-5 mt-4">
            <InstagramSocialCard
              handle={import.meta.env.VITE_INSTAGRAM_HANDLER}
            />
            <MastodonSocialCard
              server="www.mastodon.social"
              handle={import.meta.env.VITE_MASTODON_HANDLER}
            />
            <BlueskySocialCard handle={import.meta.env.VITE_BLUESKY_HANDLER} />
            <GitHubSocialCard user={import.meta.env.VITE_GITHUB_HANDLER} />
          </section>
        </main>
        <footer class="flex flex-col items-center w-full h-full p-4">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            class="p-3 bg-primary-600 text-lg font-bold rounded-xl shadow-md shadow-black hover:bg-primary-800 hover:shadow-none"
            aria-label="Sobre esse site"
          >
            Sobre esse site
          </button>
        </footer>
      </div>
      <Dialog.Root
        lazyMount
        unmountOnExit
        open={isOpen()}
        onOpenChange={() => setIsOpen(false)}
      >
        <Portal>
          <Dialog.Backdrop class="fixed animat inset-0 bg-black bg-opacity-80" />
          <Dialog.Positioner class="h-screen w-screen fixed inset-0 flex items-center justify-center">
            <Dialog.Content class="bg-background-100 rounded-lg shadow-lg w-full max-w-lg p-4 relative text-text-900">
              <div class="flex flex-row justify-between items-center">
                <Dialog.Title class="text-2xl font-bold">Sobre esse site</Dialog.Title>
                <Dialog.CloseTrigger
                  aria-label="Fechar"
                  class="hover:bg-background-200 flex justify-center items-center p-2 rounded-md hover:text-red-600"
                >
                  <PhXBold />
                </Dialog.CloseTrigger>
              </div>
              <Dialog.Description class="flex flex-col gap-2">
                <p class="text-base">
                  Um site simples que criei para funcionar como um Linktr.ee,
                  aproveitando a oportunidade para aprender tecnologias de
                  desenvolvimento web, como{" "}
                  <InfoLink href="https://solidjs.com/" text="SolidJS" /> e{" "}
                  <InfoLink
                    href="https://tailwindcss.com/"
                    text="TailwindCSS"
                  />
                  .
                </p>
                <div class="text-base flex flex-row justify-between">
                  <p>Desenvolvido por Luís Otávio</p>
                  <InfoLink
                    href="https://github.com/LuisFadini/L1nks"
                    text="Código fonte"
                  />
                </div>
              </Dialog.Description>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}

export default App;

