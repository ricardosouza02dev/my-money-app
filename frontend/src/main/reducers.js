import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import DashboardRedurcer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/tabReducer";
import BillingCycleReducer from '../billingCycle/billingCycleRedurcer'

const rootReducer = combineReducers({
  dashboard: DashboardRedurcer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer
});

export default rootReducer;
