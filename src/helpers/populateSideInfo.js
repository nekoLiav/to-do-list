import countOverviewTasks from './countOverviewTasks';
import countTodayTasks from './countTodayTasks';

export default function populateSideInfo() {
  countOverviewTasks();
  countTodayTasks();
}
