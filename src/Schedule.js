import Clock from "./Modules/Clock"

export const schedule = [{
    startR: 1,
    endR: 2,
    startC: 1,
    endC: 3,
    startH: 1,
    startM: 1,
    endH: 11,
    endM: 0,
    component: < Clock / >
}, {
    startR: 2,
    endR: 3,
    startC: 1,
    endC: 3,
    startH: 1,
    startM: 1,
    endH: 11,
    endM: 0,
    component: "Hello World"
}]