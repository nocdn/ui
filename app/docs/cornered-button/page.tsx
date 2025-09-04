import ShadcnCommand from "@/components/shadcnCommand"
import { CorneredButton } from "@/registry/default/ui/cornered-button/cornered-button"
import { IconGlobeSend } from "@/components/icons/globe"
import { Check } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="flex flex-col h-dvh items-center w-screen py-32 px-8 overflow-y-scroll">
      <div className="flex flex-col gap-2.5 max-w-3xl">
        <p className="text-lg font-medium">Cornered Button</p>
        <p className="mb-3">
          This is a button, inspired by @aliszu, with a border and darker
          corners. Customiseable with props, and adheres to shadcn/ui styling.
        </p>
        <div
          id="frame"
          className="rounded-lg w-full h-96 border border-gray-200 p-1 bg-gray-50/50 mb-3"
        >
          <div className="rounded-[7px] w-full h-full border border-gray-200 bg-white grid place-items-center">
            <div className="flex items-center gap-10 scale-150">
              <CorneredButton
                cornerColor="red"
                cornerSize={7}
                borderWidth={2}
                className="font-mono cursor-pointer"
              >
                NEXT
              </CorneredButton>
              <CorneredButton
                cornerColor="gray"
                cornerSize={7}
                borderWidth={2}
                className="font-mono cursor-pointer"
              >
                <Check strokeWidth={2.5} className="text-gray-500" size={18} />
              </CorneredButton>
            </div>
          </div>
        </div>
        <p className="text-[17px] font-medium">Installation:</p>
        <ShadcnCommand link="https://ui.bartoszbak.org/r/cornered-button.json" />
      </div>
    </div>
  )
}
