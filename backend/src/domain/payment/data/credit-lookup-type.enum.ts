/**
 * Credit lookup type
 * @property CurrentAvailable: Current available credit
 * @property TotalCumulative: Cumulative used credit
 * @property TotalAccumulated: Cumulative accumulated credit
 */
export enum CreditLookupType {
  current_available = 'current_available',
  total_cumulative = 'total_cumulative',
  total_accumulated = 'total_accumulated',
}
