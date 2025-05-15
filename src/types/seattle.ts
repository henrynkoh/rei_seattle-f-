/**
 * Seattle area type definitions
 */

// Seattle neighborhoods
export type SeattleNeighborhood = 
  | 'Ballard'
  | 'Capitol Hill'
  | 'Queen Anne'
  | 'Fremont'
  | 'Green Lake'
  | 'Wallingford'
  | 'University District'
  | 'Belltown'
  | 'South Lake Union'
  | 'Central District'
  | 'Beacon Hill'
  | 'West Seattle'
  | 'Columbia City'
  | 'Rainier Valley'
  | 'Greenwood'
  | 'Magnolia'
  | 'Northgate'
  | 'Mount Baker'
  | 'Leschi'
  | 'Madison Park'
  | 'Madrona'
  | 'Ravenna'
  | 'Phinney Ridge'
  | 'Wedgwood'
  | 'View Ridge'
  | 'Bryant'
  | 'Laurelhurst'
  | 'Georgetown'
  | 'SODO'
  | 'Other';

// East side neighborhoods
export type EastsideNeighborhood =
  | 'Bellevue'
  | 'Redmond'
  | 'Kirkland'
  | 'Sammamish'
  | 'Issaquah'
  | 'Woodinville'
  | 'Bothell'
  | 'Mercer Island'
  | 'Newcastle'
  | 'Renton'
  | 'Factoria'
  | 'Other';

// North Seattle neighborhoods
export type NorthSeattleNeighborhood =
  | 'Shoreline'
  | 'Edmonds'
  | 'Mountlake Terrace'
  | 'Lynnwood'
  | 'Everett'
  | 'Mill Creek'
  | 'Mukilteo'
  | 'Other';

// South Seattle/King County neighborhoods
export type SouthKingNeighborhood =
  | 'Burien'
  | 'SeaTac'
  | 'Des Moines'
  | 'Federal Way'
  | 'Kent'
  | 'Auburn'
  | 'Tukwila'
  | 'Normandy Park'
  | 'White Center'
  | 'Other';

// Pierce County 
export type PierceCountyArea =
  | 'Tacoma'
  | 'Puyallup'
  | 'Lakewood'
  | 'Bonney Lake'
  | 'Sumner'
  | 'Gig Harbor'
  | 'University Place'
  | 'Fircrest'
  | 'Other';

// County
export type GreaterSeattleCounty =
  | 'King'
  | 'Snohomish'
  | 'Pierce';

// Area statistics type
export interface NeighborhoodStats {
  name: SeattleNeighborhood | EastsideNeighborhood | NorthSeattleNeighborhood | SouthKingNeighborhood | PierceCountyArea;
  county: GreaterSeattleCounty;
  medianHomePrice: number;
  avgPricePerSqFt: number;
  avgDaysOnMarket: number;
  avgRentalRate: number;
  avgCapRate: number;
  walkScore: number;
  transitScore: number;
  bikeScore: number;
  schoolRating: number;
  yearOverYearAppreciation: number;
  inventory: number;
} 