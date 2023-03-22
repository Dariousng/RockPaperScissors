export default class gameObj {
  constructor() {
    this.active = false;
    this.p1AllTime = 0;
    this.cpAlltime = 0;
    this.p1Session = 0;
    this.cpSession = 0;
  }

  getActiveStatus() {
    return this.active;
  }
  startGame() {
    this.active = true;
  }

  endGame() {
    this.active = false;
  }

  getP1AllTime() {
    return this.p1AllTime;
  }

  setP1AllTime(number) {
    this.p1AllTime = number;
  }

  getCPAllTime() {
    return this.cpAllTime;
  }

  setCPAllTime(number) {
    this.cpAllTime = number;
  }

  getP1Session() {
    return this.p1Session;
  }

  getCPSession() {
    return this.cpSession;
  }

  p1Wins() {
    this.p1Session += 1;
    this.p1AllTime += 1;
  }

  cpWins() {
    this.cpSession += 1;
    this.cpAllTime += 1;
  }
}
