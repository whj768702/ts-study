// 字面量类型
type Direction14 = 'North' | 'East' | 'South' | 'West';
function move(distance: number, direction: Direction14) {
  console.log(distance);
}
move(1, 'East');