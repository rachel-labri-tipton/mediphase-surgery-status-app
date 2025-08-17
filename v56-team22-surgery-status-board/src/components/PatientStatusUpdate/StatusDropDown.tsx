import {
  DropdownMenu,
  DropdownMenuTrigger as Trigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { getStatusOptions, getStatusColor, getContrastTextColor } from '@/utility/patientHelpers';




const StatusDropDown = ({
  value,
  onChange,
  originalStatus,
  disabled = false,
}: {
  value: string;
    onChange: (value: string) => void;
    originalStatus: string;
    disabled?: boolean;
  }) => {
    const options =
    value !== originalStatus ? [value] : getStatusOptions(originalStatus);
  
  return (
    <DropdownMenu>
      <Trigger className="w-full">
        <Button variant="outline" className={`w-full ${getContrastTextColor(getStatusColor(value))}`} disabled={disabled} style={{ backgroundColor: getStatusColor(value) }}>
          {value || 'Select Status'}
        </Button>
      </Trigger>
      {!disabled && (<DropdownMenuContent>
        {options.map((status) => (
          <DropdownMenuItem
            key={status}
            onSelect={() => {
              onChange(status)
            }}
            className={`flex justify-center items-center text-center my-2 cursor-pointer  w-full ${getContrastTextColor(getStatusColor(value))}`}
            style={{ backgroundColor: getStatusColor(status) }}
          >
              {status}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>)}
      
    </DropdownMenu>
  );
};

export default StatusDropDown;