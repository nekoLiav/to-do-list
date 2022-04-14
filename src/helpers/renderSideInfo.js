import countOverviewTasks from './countOverviewTasks';
import countTodayTasks from './countTodayTasks';

export default function renderSideInfo() {
  countOverviewTasks();
  countTodayTasks();
}
