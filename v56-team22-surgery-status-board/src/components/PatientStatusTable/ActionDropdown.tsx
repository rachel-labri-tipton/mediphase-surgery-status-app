import { FiMoreHorizontal } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type ActionDropdownProps = {
  onUpdateInfo?: () => void;
  onUpdateStatus?: () => void;
  onViewDetails?: () => void;
};

const ActionDropdown = ({
  onUpdateInfo,
  onUpdateStatus,
  onViewDetails,
}: ActionDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Actions">
          <FiMoreHorizontal size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 p-0">
        <DropdownMenuLabel className="bg-green-200 px-4 py-2 w-full rounded-t-md">Actions</DropdownMenuLabel>
        <DropdownMenuSeparator className="mt-0 mb-0"/>
        {onViewDetails && (
          <DropdownMenuItem onClick={onViewDetails} className="cursor-pointer">
            View Patient Details
          </DropdownMenuItem>
        )}
        {onUpdateInfo && (<DropdownMenuItem onClick={onUpdateInfo} className="cursor-pointer">
          Update Info
        </DropdownMenuItem>)}
        <DropdownMenuItem onClick={onUpdateStatus} className="cursor-pointer">
          Update Status
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionDropdown;