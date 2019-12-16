interface User {
    name: string;
    age?: number;
    readonly isMale: boolean;
    say: (words: string) => string;
    say2: Say;
}
interface Say {
    (words: string): string;
}
declare const getUserName: (user: User) => string;
interface Config {
    width?: number;
}
declare function CalculateAreas(config: Config): {
    area: number;
};
declare const mySquare: {
    area: number;
};
declare const mySquare2: {
    area: number;
};
interface Config2 {
    width?: number;
    [propName: string]: any;
}
declare function CalculateAreas2(config: Config2): {
    area: number;
};
declare const mySquare3: {
    area: number;
};
interface Phone {
    [name: string]: string;
}
interface User2 {
    name: string;
    age?: number;
    readonly isMale: boolean;
    say: () => string;
    phone: Phone;
}
declare const xiaoMing: User2;
interface VIPUser extends User {
    broadcast: () => void;
}
