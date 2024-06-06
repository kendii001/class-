class Dog{
    label="brownie"
    legs="4";
    eyes="2";
    color="white";
    eat()
    {console.log(`  ${this.label} has ${this.legs} legs,${this.eyes}eyes and is ${this.color} in colour`)}
}
class Puppy extends Dog {
   name=Puppy;
  }
const puppy=new Puppy()

puppy.eat();