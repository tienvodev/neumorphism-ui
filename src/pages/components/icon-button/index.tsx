import ComponentStories from "@/components/feat/ComponentStories";
import IconButton from "@/components/ui/IconButton";
import { Gear } from "@phosphor-icons/react";

export default function IconButtonPage() {
  return (
    <ComponentStories
      component={IconButton}
      title="IconButton"
      description="Icon buttons help people take supplementary actions with a single tap."
      variants={[
        {
          children: <Gear />,
          size: "large",
        },
        {
          children: <Gear />,
          variant: "filled",
          size: "large",
        },
        {
          children: <Gear />,
          variant: "standard",
          size: "large",
        },

        {
          children: <Gear />,
          size: "medium",
        },
        {
          children: <Gear />,
          variant: "filled",
          size: "medium",
        },
        {
          children: <Gear />,
          variant: "standard",
          size: "medium",
        },

        {
          children: <Gear />,
          size: "small",
        },
        {
          children: <Gear />,
          variant: "filled",
          size: "small",
        },
        {
          children: <Gear />,
          variant: "standard",
          size: "small",
        },
      ]}
    />
  );
}
