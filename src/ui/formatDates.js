import { isValid, formatDistanceToNowStrict, format } from 'date-fns/esm';

export default function formatDates(dueDate, requestedFormat) {
  let formattedDueDate;
  if (isValid(new Date(dueDate))) {
    if (requestedFormat === 'relativeWords') {
      formattedDueDate = formatDistanceToNowStrict(new Date(dueDate), {
        addSuffix: true,
      });
    } else {
      formattedDueDate = format(new Date(dueDate), 'Pp');
    }
  }
  return formattedDueDate;
}
