import countOverviewTasks from './countOverviewTasks';
import countTodayTasks from './countTodayTasks';

export default function renderSideNavInfo() {
  countOverviewTasks();
  countTodayTasks();
}
