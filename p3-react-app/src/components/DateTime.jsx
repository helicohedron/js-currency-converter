import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import dayjs from 'dayjs';

function DateTime() {
  return (  
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimeField
        label="Log Date & Time"
        defaultValue={dayjs(new Date())}
        format="L HH:mm" />
    </LocalizationProvider>
  );
}

export default DateTime;