import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@inertiajs/react"
import { AlignLeft, ChevronDown, ChevronRight, Laptop, LucideGamepad2, LucideMonitor, MonitorSpeaker, Mouse, Network, PcCase, PcCaseIcon, Router } from "lucide-react"

export function MyCategoriesNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none outline-none">
        <span className="hover:text-primary group relative hover:text-primary gap-1 flex items-center rounded p-2">
          <p className="relative">
            Categories
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
          </p> <ChevronDown size={18} className="translate-y-[1px]" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuSub>
            <div className="flex">
              <Link href='#' className="group p-0.5 flex-1 ">
                <p className="w-full relative gap-1 hover:text-primary flex">
                  <Laptop />
                  Laptop
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                </p>
              </Link>
              <DropdownMenuSubTrigger className="inline-block hover:bg-primary hover:text-white">
              </DropdownMenuSubTrigger>
            </div>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Notebook
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Design and Gamming
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <div className="flex">
              <Link href='#' className="group p-0.5 flex-1 ">
                <p className="w-full relative gap-1 hover:text-primary flex">
                  <MonitorSpeaker />
                  Desktop
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                </p>
              </Link>
              <DropdownMenuSubTrigger className="inline-block hover:bg-primary hover:text-white">
              </DropdownMenuSubTrigger>
            </div>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    All In One PC
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Custom PC
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Used Desktop
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <div className="flex">
              <Link href='#' className="group p-0.5 flex-1 ">
                <p className="w-full relative gap-1 hover:text-primary flex">
                  <Router />
                  Network Device
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                </p>
              </Link>
              <DropdownMenuSubTrigger className="inline-block hover:bg-primary hover:text-white">
              </DropdownMenuSubTrigger>
            </div>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Router
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Switch
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Network Cable
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Network Connector
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <div className="flex">
              <Link href='#' className="group p-0.5 flex-1 ">
                <p className="w-full relative gap-1 hover:text-primary flex">
                  <LucideGamepad2 />
                  Gamming Gear
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                </p>
              </Link> 
            </div> 
          </DropdownMenuSub>
          <DropdownMenuSub>
            <div className="flex">
              <Link href='#' className="group p-0.5 flex-1 ">
                <p className="w-full relative gap-1 hover:text-primary flex">
                  <Mouse />
                  Accessories
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                </p>
              </Link> 
            </div> 
          </DropdownMenuSub>

          <DropdownMenuSub>
            <div className="flex">
              <Link href='#' className="group p-0.5 flex-1 ">
                <p className="w-full relative gap-1 hover:text-primary flex">
                  <Router />
                  Network Device
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                </p>
              </Link>
              <DropdownMenuSubTrigger className="inline-block hover:bg-primary hover:text-white">
              </DropdownMenuSubTrigger>
            </div>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Router
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Switch
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Network Cable
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='#' className="p-2 cursor-pointer ">
                    Network Connector
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
