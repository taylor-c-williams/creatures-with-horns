const filteredCreatures = KeywordCreatures.concat(HornCreatures)        

const HornCreatures = Creatures.filter ( creature => !this.state.horns || creature.horns === this.state.horns )

const HornedCreatures = Creatures.filter (creature => !this.state.horns || creature.horns === this.state.horns)
const FilteredCreatures = HornedCreatures.concat(KeywordCreatures)

const HornedCreatures = Creatures.filter (creature => !Number(this.state.horns) || Number(creature.horns) === Number(this.state.horns))