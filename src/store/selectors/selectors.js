import { createSelector } from 'reselect';
import { initialState } from '../reducer/globalStore';

/**
 * Direct selector to the dashboard state domain
 */

const selectDashboardDomain = state => state.get('dashboard', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Dashboard
 */

const test = () =>
  createSelector(selectDashboardDomain, substate => substate.get('test'));
//notification system
const selectNotificationMessage = () =>
  createSelector(selectDashboardDomain, substate => substate.getIn(['setNotification','notificationMessage']));

const selectNotificationType = () =>
  createSelector(selectDashboardDomain, substate => substate.getIn(['setNotification','notificationType']));

export {
  selectDashboardDomain,
  test,
  selectNotificationMessage,
 selectNotificationType
};