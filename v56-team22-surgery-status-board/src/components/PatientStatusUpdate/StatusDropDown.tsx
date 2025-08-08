import {
  DropdownMenu,
  DropdownMenuTrigger as Trigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { statusLabels } from'@/constant/status-info'



function getStatusOptions(current: string) {
  const idx = statusLabels.indexOf(current);
  const options: string[] = [];
  if (idx === 0) options.push(statusLabels[idx+1])
  if (idx > 0) options.push(statusLabels[idx - 1], statusLabels[idx+1]);
  if (idx === statusLabels.length - 1) options.push(statusLabels[idx - 1]);
  return options;
}

const StatusDropDown = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
  }) => {
  const options = getStatusOptions(value);
  return (
    <DropdownMenu>
      <Trigger className="w-full">
        <Button variant="outline" className="w-full">
          {value || 'Select Status'}
        </Button>
      </Trigger>
      <DropdownMenuContent>
        {options.map((status) => (
          <DropdownMenuItem
            key={status}
            onSelect={() => {
              onChange(status);
              console.log(status);
            }}
          >
            {status}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusDropDown;