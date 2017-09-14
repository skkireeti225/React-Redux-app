import store from './store';
import { fetchPosts, budgetStake  } from './actions/index';

export function onProjectList() {
  store.dispatch(fetchPosts());
};

export function budgetGraphData() {
  store.dispatch(budgetStake())
}
