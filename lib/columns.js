'use strict';

module.exports = [
  'jis_code',                   //全国地方公共団体コード（JIS X0401、X0402）
  'legacy_zip_code',            //（旧）郵便番号（5桁）
  'zip_code',                   //郵便番号（7桁）
  'prefecture_kana',            //都道府県名
  'city_kana',                  //市区町村名
  'area_kana',                  //町域名
  'prefecture',                 //都道府県名
  'city',                       //市区町村名
  'area',                       //町域名
  'tow_zip_code_display',       //一町域が二以上の郵便番号で表される場合の表示
  'number_of_address_display',  //小字毎に番地が起番されている町域の表示　（注4）　（「1」は該当、「0」は該当せず）
  'city_block_display',         //丁目を有する町域の場合の表示　（「1」は該当、「0」は該当せず）
  'one_zip_code_display',       //一つの郵便番号で二以上の町域を表す場合の表示　（注5）　（「1」は該当、「0」は該当せず）
  'changed_status',             //更新の表示（注6）（「0」は変更なし、「1」は変更あり、「2」廃止（廃止データのみ使用））
  'changed_reason'              //変更理由　（「0」は変更なし、「1」市政・区政・町政・分区・政令指定都市施行、「2」住居表示の実施、「3」区画整理、「4」郵便区調整等、「5」訂正、「6」廃止（廃止データのみ使用））
];
