import ComponentStories from "@/components/feat/ComponentStories";
import Fab from "@/components/ui/Fab";
import { ChatCircle, MagnifyingGlass, Plus } from "@phosphor-icons/react";

export default function FabStories() {
  return (
    <ComponentStories
      component={Fab}
      title="Fab"
      description="FABs help people take primary actions. They’re used to represent the most important action on a screen."
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
