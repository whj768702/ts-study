interface User {
  name: string,
  age?: number, // 可选属性
  readonly isMale: boolean, // 只读属性
  say: (words: string) => string,
  say2: Say
}
interface Say {
  (words: string): string
}
const getUserName = (user: User) => {
  return user.name;
}

// 属性检查
interface Config {
  width?: number
}
function CalculateAreas(config: Config) {
  let square = 100;
  if (config.width) {
    square = config.width * config.width;
  }

  return {area: square};
}
const mySquare = CalculateAreas({widdth: 5});
// 类型断言
const mySquare2 = CalculateAreas({widdth: 5} as Config);
// 添加字符串索引签名
interface Config2 {
  width?: number;
  [propName: string]: any;
}
function CalculateAreas2(config: Config2) {
  let square = 100;
  if (config.width) {
    square = config.width * config.width;
  }

  return {area: square};
}
const mySquare3 = CalculateAreas2({widdth: 5});
// 将字面量赋值给另外一个变量
// const options = {widdth: 5};
// const mySquare4 = CalculateAreas(options);

// 可索引类型
interface Phone {
  [name: string]: string
}
interface User2 {
  name: string;
  age?: number;
  readonly isMale: boolean;
  say: () => string;
  phone: Phone
}
const xiaoMing: User2 = {
  name: 'xiaoMing',
  isMale: false,
  say() { return 'text' },
  phone: {
    qq: '123',
    sina: '456'
  }
}

// 继承接口
interface VIPUser extends User {
  broadcast: () => void
}
