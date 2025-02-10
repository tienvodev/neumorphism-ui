import ComponentStories from "@/components/feat/ComponentStories";
import Button from "@/components/ui/Button";

export default function ButtonPage() {
  return (
    <div>
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
        description="Buttons help people take actions, such as sending an email, sharing a document, or liking a comment."
      />
    </div>
  );
}
