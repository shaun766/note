import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
export default function Home() {
  return (
    <div className="w-full h-screen pr-8 flex flex-col overflow-hidden">
      {/* Header (auto height) */}
      <div className="flex w-full p-1 justify-between">
        <div></div>
        <p className="text-3xl">Title</p>
        <Button className="bg-background text-foreground hover:bg-background border-1">
          update
        </Button>
      </div>

      {/* Remaining space */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Card className="flex-1 p-0 overflow-hidden">
          <Textarea className="h-full w-full resize-none overflow-y-auto" placeholder="start typing..."/>
        </Card>
      </div>
    </div>
  );
}
