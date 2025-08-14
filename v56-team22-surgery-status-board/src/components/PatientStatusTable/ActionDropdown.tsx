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
import { useNavigate } from "react-router";

type ActionDropdownProps = {
  onUpdateInfo?: () => void;
  onUpdateStatus?: () => void;
  onViewDetails?: () => void;
  patientId?:string;
};

const ActionDropdown = ({
  onUpdateInfo,
  onUpdateStatus,
  onViewDetails,
  patientId,
}: ActionDropdownProps) => {

  const navigate = useNavigate();

  const handleUpdateInfo = () => {
    navigate(`/update-info/${patientId}`);
    if (onUpdateInfo) onUpdateInfo();
  };

  const handleViewDetails = () => {
    navigate(`/view-details/${patientId}`);
    if (onViewDetails) onViewDetails();
  };

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
          <DropdownMenuItem onClick={handleViewDetails} className="cursor-pointer">
            View Patient Details
          </DropdownMenuItem>
        )}
        {onUpdateInfo && (<DropdownMenuItem onClick={handleUpdateInfo} className="cursor-pointer">
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