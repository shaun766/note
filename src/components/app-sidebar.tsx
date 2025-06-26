import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const notes = [
  { note1: "this is note one" },
  { note2: "this is note two" },
  { note3: "this is note three" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex gap-1 p-2 pb-0">
          <Input placeholder="Search" />
          <Button className="bg-background text-foreground hover:bg-background cursor-pointer border-1">
            +
          </Button>
        </div>
        {/* <div className="flex flex-col gap-1 p-2">
            <Button className="bg-background text-foreground hover:bg-background cursor-pointer">Note 1</Button>
            <Button className="bg-background text-foreground hover:bg-background cursor-pointer">Note 2</Button>
            <Button className="bg-background text-foreground hover:bg-background cursor-pointer">Note 2</Button>

        </div> */}
        <div className="flex flex-col gap-1 p-2 pt-0">
            <p className="text-sm font-semibold pb-1">Your notes:</p>
          {notes.map((noteObj, index) => {
            const [key, value] = Object.entries(noteObj)[0];
            return (
              <Button
                key={index} 
                className="bg-background text-foreground hover:bg-background cursor-pointer border-1"
              >
                {key}
              </Button>
            );
          })}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
