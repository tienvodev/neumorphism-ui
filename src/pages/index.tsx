import ComponentStories from "@/components/feat/ComponentStories";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <ComponentStories
      component={Button}
      variants={[
        {
          children: "Label",
        },
        {
          children: "Label",
          glow: true,
        },
      ]}
      title="Button"
      description="A button component."
    />
  );
}
