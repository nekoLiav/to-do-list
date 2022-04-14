import { isValid, formatDistanceToNowStrict, format } from 'date-fns/esm';

export default function formatDate(dueDate, requestedFormat) {
  let formattedDueDate;
  if (isValid(new Date(dueDate))) {
    if (requestedFormat === 'relative') {
      formattedDueDate = formatDistanceToNowStrict(new Date(dueDate), {
        addSuffix: true,
      });
    } else {
      formattedDueDate = format(new Date(dueDate), 'Pp');
    }
  }
  return formattedDueDate;
}
