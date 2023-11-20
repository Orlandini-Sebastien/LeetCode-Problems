/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.seats = new Array(n).fill(false);
  };
  
  /**
   * @return {number}
   */
  SeatManager.prototype.reserve = function() {
    let seatNumber = this.seats.indexOf(false);
    this.seats[seatNumber] = true;
  
    return seatNumber + 1;
  };
  
  /** 
   * @param {number} seatNumber
   * @return {void}
   */
  SeatManager.prototype.unreserve = function(seatNumber) {
    this.seats[seatNumber - 1] = false;
  };
  
  /** 
   * Your SeatManager object will be instantiated and called as such:
   * var obj = new SeatManager(n)
   * var param_1 = obj.reserve()
   * obj.unreserve(seatNumber)
   */
  