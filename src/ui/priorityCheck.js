export default function priorityCheck(low, med, high) {
  let checkedPriority;
  if (low.checked) {
    checkedPriority = 'Low';
  }
  if (med.checked) {
    checkedPriority = 'Medium';
  }
  if (high.checked) {
    checkedPriority = 'High';
  }
  return checkedPriority;
}
