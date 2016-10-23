class CrewMember{
  constructor(position){
  this.position = position
  this.currentShip = "Looking for a Rig"
  // this.ship = new Spaceship(spaceshipName)
  }
  engageWarpDrive(){
    if (this.currentShip == "Looking for a Rig"){
      return "had no effect"
    }
    else if (this.position == "Pilot"){
      this.currentShip.warpDrive = "engaged!"
    }
  }
  setsInvisibility(){
    if (this.currentShip == "Looking for a Rig"){
      return "had no effect"
    }
    else if (this.position == "Defender"){
      this.currentShip.cloaked = true
    }
  }
  chargePhasers(){
    if (this.currentShip == "Looking for a Rig"){
      return "had no effect"
    }
    else if (this.position == "Gunner"){
      this.currentShip.phasersCharge = "charged!"
    }
  }
  currentShip(ship){
    this.currentShip = ship
  }

}
