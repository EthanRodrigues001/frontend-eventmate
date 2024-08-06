import { House } from "lucide-react";
import { Info } from "lucide-react";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavDrop } from "@/components/NavDrop";

export function NavSm() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center flex-row space-x-2">
              <Avatar>
                <AvatarImage src="logo.svg" alt="Blingo" />
                <AvatarFallback>BL</AvatarFallback>
              </Avatar>
              <p className="font-bold">Blingo</p>
            </div>
          </SheetTitle>
          <SheetDescription>
            Mobile menu for the navigation bar.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-2 py-4">
          <Separator className="my-4" />
          <Button variant="link">
            <Info className="mr-2 h-4 w-4" />
            Page1
          </Button>
          <Button variant="link">
            <Info className="mr-2 h-4 w-4" />
            Page 2
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
