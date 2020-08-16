const CellTypes = {
    empty: 0,
    food: 1,
    wall: 2,
    mouth: 3,
    producer: 4,
    mover: 5,
    killer: 6,
    armor: 7,
    eye: 8,
    colors: ['#121D29', 'green', 'gray', 'orange', 'white', '#3493EB', 'red', 'purple', '#d4bb3f'],
    names: ['Empty', 'Food', 'Wall', 'Mouth', 'Producer', 'Mover', 'Killer', 'Armor', 'Eye'],
    getRandomLivingType: function() {
        return Math.floor(Math.random() * 6) + 3;
    }
}

module.exports = CellTypes;
