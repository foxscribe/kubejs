ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:steel_casing' })
  event.shaped(
    Item.of('mekanism:steel_casing', 1),
    [
      'ACA',
      'CBC',
      'ACA'
    ],
    {
      A: '#c:ingots/steel',
      B: '#immersiveengineering:scaffoldings/steel',
      C: 'immersiveengineering:plate_duroplast'
    }
  )

  event.remove({ output: 'mekanism:metallurgic_infuser' })
  event.shaped(
    Item.of('mekanism:metallurgic_infuser', 1),
    [
      'AFA',
      'DBE',
      'ACA'
    ],
    {
      A: '#c:sheetmetals/steel',
      B: 'mekanism:steel_casing',
      C: 'immersiveengineering:furnace_heater',
      D: 'immersiveengineering:light_engineering',
      E: 'immersiveengineering:rs_engineering',
      F: 'immersiveengineering:fluid_pump'
    }
  )

  event.remove({ output: 'mekanism:crusher' })
  event.shaped(
    Item.of('mekanism:crusher', 1),
    [
      'ACA',
      'ABA',
      'DED'
    ],
    {
      A: '#c:fences/steel',
      B: 'mekanism:steel_casing',
      C: 'minecraft:hopper',
      D: 'immersiveengineering:light_engineering',
      E: 'immersiveengineering:rs_engineering'
    }
  )

  event.remove({ output: 'mekanism:energized_smelter' })
  event.shaped(
    Item.of('mekanism:energized_smelter', 1),
    [
      'CDC',
      'FBF',
      'DED'
    ],
    {
      B: 'mekanism:steel_casing',
      C: 'immersiveengineering:furnace_heater',
      D: 'immersiveengineering:light_engineering',
      E: 'immersiveengineering:rs_engineering',
      F: 'minecraft:furnace'
    }
  )

  event.remove({ output: 'mekanism:enrichment_chamber' })
  event.shaped(
    Item.of('mekanism:enrichment_chamber', 1),
    [
      'FEF',
      'ABA',
      'DCD'
    ],
    {
      A: 'immersiveengineering:conveyor_basic',
      B: 'mekanism:steel_casing',
      C: 'immersiveengineering:furnace_heater',
      D: 'immersiveengineering:light_engineering',
      E: 'immersiveengineering:rs_engineering',
      F: '#c:fences/steel'
    }
  )
})
