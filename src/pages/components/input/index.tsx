import ComponentStories from "@/components/feat/ComponentStories";
import Input from "@/components/ui/Input";

export default function InputPage() {
  return (
    <ComponentStories
      component={Input}
      variants={[
        {
          type: "text",
          placeholder: "Text",
        },
        {
          type: "email",
          placeholder: "Email",
        },
        {
          type: "password",
          placeholder: "Password",
        },
        {
          type: "number",
          placeholder: "Number",
        },
        {
          type: "tel",
          placeholder: "Tel",
        },
        {
          type: "url",
          placeholder: "URL",
        },
      ]}
      title="Input"
      description="Inputs allow users to enter text into a UI. They typically appear in forms and dialogs."
    />
  );
}
