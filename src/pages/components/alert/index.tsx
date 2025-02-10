import ComponentStories from "@/components/feat/ComponentStories";
import Alert from "@/components/ui/Alert";

export default function AlertPage() {
  return (
    <div>
      <ComponentStories
        component={Alert}
        variants={[
          {
            type: "info",
            children: "This is an info alert.",
          },
          {
            type: "success",
            children: "This is a success alert.",
          },
          {
            type: "warning",
            children: "This is a warning alert.",
          },
          {
            type: "error",
            children: "This is an error alert.",
          },
        ]}
        title="Alert"
        description="An alert component."
      />
    </div>
  );
}
