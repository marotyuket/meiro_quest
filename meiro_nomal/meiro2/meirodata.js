'use strict';

let map = [
  [' ',' ',' ','RX','┬','LX','DX',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','│',' ','│',' ',' ',' ',' ',' '],
  [' ',' ',' ','RX','┼','─','┴','─','┬','┐',' ',' '],
  [' ',' ',' ',' ','└','┐',' ','RX','┴','┼','┐',' '],
  [' ',' ',' ','┌','─','┘',' ',' ',' ','│','├','LX'],
  ['K','┐',' ','└','┐','DX',' ',' ',' ','UX','│','G'],
  ['RX','┴','┐','RX','┼','┤',' ',' ',' ','┌','┘','D'],
  ['┌','─','┼','─','┤','│',' ',' ','RX','┴','┬','┘'],
  ['└','┐','│',' ','└','┤',' ',' ',' ',' ','│',' '],
  [' ','UX','└','┐',' ','S',' ',' ',' ',' ','UX',' '],
  [' ',' ','┌','┼','┐',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ','└','┘','UX',' ',' ',' ',' ',' ',' ',' '],
];



let images = {
  '─': 'left_right',
  '│': 'up_down',
  '┐': 'left_down',
  '└': 'up_right',
  '┘': 'left_up',
  '┌': 'down_right',
  '├': 'up_right_down',
  '┤': 'up_left_down',
  '┬': 'left_down_right',
  '┴': 'left_up_right',
  '┼': 'left_up_right_down',
  'G': 'goal',
  'D': 'down_door',
  'DD': 'door',
  'RX': 'right_stop',
  'K': 'key',
  'K2': 'key2',
  'K3': 'right_key3',
  'LX': 'left_stop',
  'UX': 'up_stop',
  'DX': 'down_stop',
  'S': 'up_start',
  'C': 'congratulations'
}

let x = 5;
let y = 9;
let keyflag = false;