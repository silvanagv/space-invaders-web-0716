class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.cloaked = false
    this.shields = shields
    this.warpDrive = "disengaged"
    this.docked = true
    this.phasers = phasers
    this.phasersCharge = "uncharged"


    if (this.crew.length > 0)
    {this.docked = false}

    for (var i = 0;i < crew.length; i++){
      crew[i].currentShip = this
    }

  }
}
