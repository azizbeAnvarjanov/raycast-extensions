import { List, ActionPanel, Action } from "@raycast/api";

export default function CommandList() {
  const commands = [
    { title: "Next js latest version", value: "npx create-next-app@latest" },
    { title: "Next js latest 15 version", value: "npx create-next-app@15.3.0" },
    {
      title: "Shadcn ui new init project s",
      value:
        'npx shadcn@latest create --preset "https://ui.shadcn.com/init?base=base&style=vega&baseColor=zinc&theme=blue&iconLibrary=hugeicons&font=inter&menuAccent=subtle&menuColor=default&radius=default&template=next" --template next',
    },
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
