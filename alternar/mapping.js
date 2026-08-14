const ALTENAR = 'https://sb2datafeedexport-altenar2.biahosted.com/api/DataFeedExport';
const ALTENAR_QS = 'integration=betinia&langId=8&sportId=66';

// espn_slug, altenar_championship_id, altenar_category_id, name, country, active
//
// Why hand-written and not derived from GetChamps: GetChamps returns 3910
// championships across 228 categories, including "Champions League Specials",
// "Champions League - To qualify" and "Champions League Specials 2022". There
// is no id shared with ESPN, so an automatic mapping would have to go through
// names — and a name match here plausibly attaches every Champions League
// price to a specials market. Built by LISTING EACH CATEGORY in the live feed,
// not by grepping names: three ids in an earlier version were wrongly recorded
// as absent because a name search missed them (the UEFA competitions, the
// World Cup, and the NWSL, whose feed name is "National Womens Soccer League").
const LEAGUES = [
  // --- Italy, category 502 -------------------------------------------------
  ['ita.1',               2942,  502, 'Italian Serie A',              'Italy',       true],
  ['ita.2',               3079,  502, 'Italian Serie B',              'Italy',       true],
  ['ita.coppa_italia',    3102,  502, 'Coppa Italia',                 'Italy',       true],

  // --- England, category 497 ------------------------------------------------
  ['eng.1',               2936,  497, 'English Premier League',       'England',     true],
  ['eng.2',               2937,  497, 'English Championship',         'England',     true],
  ['eng.fa',              2935,  497, 'English FA Cup',               'England',     true],
  ['eng.league_cup',      2972,  497, 'English EFL Cup',              'England',     true],

  // --- Spain, category 501 ---------------------------------------------------
  ['esp.1',               2941,  501, 'Spanish LALIGA',               'Spain',       true],
  ['esp.2',               3111,  501, 'Spanish LALIGA 2',             'Spain',       true],
  ['esp.copa_del_rey',    2973,  501, 'Spanish Copa del Rey',         'Spain',       true],

  // --- Germany, category 506 --------------------------------------------------
  ['ger.1',               2950,  506, 'German Bundesliga',            'Germany',     true],
  ['ger.2',               2954,  506, 'German 2. Bundesliga',         'Germany',     true],
  ['ger.dfb_pokal',       3112,  506, 'German DFB Pokal',             'Germany',     true],

  // --- France, category 503 -----------------------------------------------
  ['fra.1',               2943,  503, 'French Ligue 1',               'France',      true],
  ['fra.coupe_de_france', 3070,  503, 'Coupe de France',              'France',      true],

  // --- other domestic ------------------------------------------------------
  ['ned.1',               3065,  569, 'Dutch Eredivisie',             'Netherlands', true],
  ['por.1',               3152,  582, 'Portuguese Primeira Liga',     'Portugal',    true],
  ['usa.1',               4610,  882, 'MLS',                          'USA',         true],
  ['usa.nwsl',           11305,  882, 'National Womens Soccer League','USA',         true],
  ['mex.1',              10009,  560, 'Mexican Liga BBVA MX',         'Mexico',      true],
  ['jpn.1',               3951,  767, 'Japanese J.League',            'Japan',       true],
  ['chn.1',               8622, 1155, 'Chinese Super League',         'China',       true],
  ['ksa.1',               2934,  496, 'Saudi Pro League',             'Saudi Arabia',true],
  ['arg.1',               3075,  574, 'Argentine Liga Profesional',   'Argentina',   true],

  // 11318, not 8390. Both are named for Brazil's top division and only one is
  // alive: 11318 "Brasileiro Serie A" carried 20 fixtures in a two-week window,
  // 8390 "Brazil Serie A" carried none. Settled by asking GetEvents which id
  // has matches, not by reading the names — they are equally plausible.
  ['bra.1',              11318,  593, 'Brazilian Serie A',            'Brazil',      true],

  // --- continental, outside Europe ------------------------------------------
  ['conmebol.libertadores', 3709, 1178, 'Copa Libertadores',          'Americas',    true],
  ['afc.champions',       3868, 1131, 'AFC Champions League Elite',   'Asia',        true],

  // --- UEFA, category 1133 --------------------------------------------------
  ['uefa.champions',     16808, 1133, 'UEFA Champions League',        'Europe',      true],
  ['uefa.europa',        16809, 1133, 'UEFA Europa League',           'Europe',      true],
  ['uefa.europa.conf',   31608, 1133, 'UEFA Conference League',       'Europe',      true],
  ['uefa.super_cup',     17146, 1133, 'UEFA Super Cup',                'Europe',      false],
  ['uefa.wchampions',    17271, 1133, "UEFA Women's Champions League", 'Europe',      false],

  // --- World, category 1134 --------------------------------------------------
  // 3146 is "World Cup 2026": tournament championship ids are edition-specific,
  // so this one goes stale after the tournament and a successor id appears.
  ['fifa.world',          3146, 1134, 'FIFA World Cup',               'World',       false],
  ['fifa.wwc',           38750, 1134, "FIFA Women's World Cup",       'World',       false],
  ['fifa.cwc',           21083, 1134, 'FIFA Club World Cup',          'World',       false],
  ['fifa.friendly',       3645, 1134, 'International Friendly Games', 'World',       true],
];
