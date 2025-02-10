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
      description="An input component."
    />
  );
}
