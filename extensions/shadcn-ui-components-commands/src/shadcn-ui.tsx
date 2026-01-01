import { List, ActionPanel, Action } from "@raycast/api";

export default function CommandList() {
  const commands = [
    { title: "Accordion", value: "npx shadcn@latest add accordion" },
    { title: "Alert", value: "npx shadcn@latest add alert" },
    { title: "Alert Dialog", value: "npx shadcn@latest add alert-dialog" },
    { title: "Aspect Ratio", value: "npx shadcn@latest add aspect-ratio" },
    { title: "Avatar", value: "npx shadcn@latest add avatar" },
    { title: "Badge", value: "npx shadcn@latest add badge" },
    { title: "Breadcrumb", value: "npx shadcn@latest add breadcrumb" },
    { title: "Button", value: "npx shadcn@latest add button" },
    { title: "Calendar", value: "npx shadcn@latest add calendar" },
    { title: "Card", value: "npx shadcn@latest add card" },
    { title: "Carousel", value: "npx shadcn@latest add carousel" },
    { title: "Chart", value: "npx shadcn@latest add chart" },
    { title: "Checkbox", value: "npx shadcn@latest add checkbox" },
    { title: "Collapsible", value: "npx shadcn@latest add collapsible" },
    { title: "Command", value: "npx shadcn@latest add command" },
    { title: "Context Menu", value: "npx shadcn@latest add context-menu" },
    { title: "Data Table", value: "npx shadcn@latest add data-table" },
    { title: "Date Picker", value: "npx shadcn@latest add date-picker" },
    { title: "Dialog", value: "npx shadcn@latest add dialog" },
    { title: "Drawer", value: "npx shadcn@latest add drawer" },
    { title: "Dropdown Menu", value: "npx shadcn@latest add dropdown-menu" },
    { title: "Form", value: "npx shadcn@latest add form" },
    { title: "Hover Card", value: "npx shadcn@latest add hover-card" },
    { title: "Input", value: "npx shadcn@latest add input" },
    { title: "Input OTP", value: "npx shadcn@latest add input-otp" },
    { title: "Label", value: "npx shadcn@latest add label" },
    { title: "Menubar", value: "npx shadcn@latest add menubar" },
    { title: "Navigation Menu", value: "npx shadcn@latest add navigation-menu" },
    { title: "Pagination", value: "npx shadcn@latest add pagination" },
    { title: "Popover", value: "npx shadcn@latest add popover" },
    { title: "Progress", value: "npx shadcn@latest add progress" },
    { title: "Radio Group", value: "npx shadcn@latest add radio-group" },
    { title: "Resizable", value: "npx shadcn@latest add resizable" },
    { title: "Scroll Area", value: "npx shadcn@latest add scroll-area" },
    { title: "Select", value: "npx shadcn@latest add select" },
    { title: "Separator", value: "npx shadcn@latest add separator" },
    { title: "Sheet", value: "npx shadcn@latest add sheet" },
    { title: "Skeleton", value: "npx shadcn@latest add skeleton" },
    { title: "Slider", value: "npx shadcn@latest add slider" },
    { title: "Sonner (Toast)", value: "npx shadcn@latest add sonner" },
    { title: "Switch", value: "npx shadcn@latest add switch" },
    { title: "Table", value: "npx shadcn@latest add table" },
    { title: "Tabs", value: "npx shadcn@latest add tabs" },
    { title: "Textarea", value: "npx shadcn@latest add textarea" },
    { title: "Toast", value: "npx shadcn@latest add toast" },
    { title: "Toggle", value: "npx shadcn@latest add toggle" },
    { title: "Toggle Group", value: "npx shadcn@latest add toggle-group" },
    { title: "Tooltip", value: "npx shadcn@latest add tooltip" },
  ];

  return (
    <List>
      {commands.map((cmd) => (
        <List.Item
          key={cmd.value}
          title={cmd.title}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={cmd.value} shortcut={{ modifiers: ["cmd"], key: "c" }} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
