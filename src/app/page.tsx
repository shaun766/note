import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/mycomponents/Header";
export default function Home() {
  return (
    <div  className="w-full h-screen pr-8 flex flex-col gap-2 overflow-hidden">
    <Header />

      {/* Remaining space */}
      <div className="fw-full h-full pr-8 flex flex-col overflow-hidden">
        <Card className="flex-1 p-0 overflow-hidden h-full">
          <Textarea className="h-full w-full resize-none overflow-y-auto" placeholder="start typing..."/>
        </Card>
      </div>
    </div>
  );
}
