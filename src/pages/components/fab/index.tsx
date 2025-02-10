import ComponentStories from "@/components/feat/ComponentStories";
import Fab from "@/components/ui/Fab";
import { ChatCircle, MagnifyingGlass, Plus } from "@phosphor-icons/react";

export default function FabStories() {
  return (
    <ComponentStories
      component={Fab}
      title="Fab"
      variants={[
        {
          children: <MagnifyingGlass />,
        },
        {
          children: <Plus />,
        },
        {
          children: <ChatCircle />,
        },
      ]}
    />
  );
}
