import { Avatar } from "@ark-ui/solid";

interface PhotoProps {
  photoUrl: string; // URL of image src
  name: string; // For screen readers
  shortName: string; // Fallback text in place of image
  imgSize: number; // Image size in pixels, should be a square image
  class?: string; // Additional classes
}

export default function Photo(props: PhotoProps) {
  return (
    <Avatar.Root
      class={`rounded-full bg-accent-500 w-32 h-32 flex items-center justify-center border-4 border-primary-700 ${props.class}`}
    >
      <Avatar.Image src={props.photoUrl} alt={props.name} height={props.imgSize} width={props.imgSize} class="rounded-full" />
      <Avatar.Fallback class="font-bold text-5xl text-text-100 text-center">
        {props.shortName}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
