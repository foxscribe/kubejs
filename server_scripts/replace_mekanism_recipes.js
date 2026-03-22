ServerEvents.recipes(event => {
  const shaped = (item, shape, dictionary) => {
    event.remove({ output: item })
    event.shaped(Item.of(item, 1), shape, dictionary)
  }

  const inscriber = (output, top, middle, bottom, id) => {
    event.remove(output)
    AE2Recipes.inscriber(
      event,
      "inscribe",
      middle,
      top,
      bottom,
      output,
      id
    )
  }

  shaped(
    "mekanism:steel_casing",
    [
      "ACA",
      "CBC",
      "ACA"
    ],
    {
      A: "#c:ingots/steel",
      B: "#immersiveengineering:scaffoldings/steel",
      C: "immersiveengineering:plate_duroplast"
    }
  )

  shaped(
    "mekanism:metallurgic_infuser",
    [
      "AFA",
      "DBE",
      "ACA"
    ],
    {
      A: "#c:sheetmetals/steel",
      B: "mekanism:steel_casing",
      C: "immersiveengineering:furnace_heater",
      D: "immersiveengineering:light_engineering",
      E: "immersiveengineering:rs_engineering",
      F: "immersiveengineering:fluid_pump"
    }
  )

  shaped(
    "mekanism:crusher",
    [
      "ACA",
      "ABA",
      "DED"
    ],
    {
      A: "#c:fences/steel",
      B: "mekanism:steel_casing",
      C: "minecraft:hopper",
      D: "immersiveengineering:light_engineering",
      E: "immersiveengineering:rs_engineering"
    }
  )

  shaped(
    "mekanism:energized_smelter",
    [
      "CDC",
      "FBF",
      "DED"
    ],
    {
      B: "mekanism:steel_casing",
      C: "immersiveengineering:furnace_heater",
      D: "immersiveengineering:light_engineering",
      E: "immersiveengineering:rs_engineering",
      F: "minecraft:furnace"
    }
  )

  shaped(
    "mekanism:enrichment_chamber",
    [
      "FEF",
      "ABA",
      "DCD"
    ],
    {
      A: "immersiveengineering:conveyor_basic",
      B: "mekanism:steel_casing",
      C: "immersiveengineering:furnace_heater",
      D: "immersiveengineering:light_engineering",
      E: "immersiveengineering:rs_engineering",
      F: "#c:fences/steel"
    }
  )

  shaped(
    "mekanism:osmium_compressor",
    [
      "CFC",
      "ABA",
      "EED"
    ],
    {
      A: "immersiveengineering:conveyor_basic",
      B: "mekanism:steel_casing",
      C: "immersiveengineering:light_engineering",
      D: "immersiveengineering:rs_engineering",
      E: "immersiveengineering:furnace_heater",
      F: "immersiveengineering:fluid_pump"
    }
  )

  shaped(
    "mekanism:combiner",
    [
      "CFC",
      "ABA",
      "GED"
    ],
    {
      A: "immersiveengineering:conveyor_basic",
      B: "mekanism:steel_casing",
      C: "immersiveengineering:light_engineering",
      D: "immersiveengineering:rs_engineering",
      E: "minecraft:obsidian",
      F: "minecraft:piston",
      G: "immersiveengineering:heavy_engineering"
    }
  )

  shaped(
    "mekanism:purification_chamber",
    [
      "FEF",
      "ABA",
      "DCD"
    ],
    {
      A: "immersiveengineering:conveyor_basic",
      B: "mekanism:enrichment_chamber",
      C: "immersiveengineering:furnace_heater",
      D: "immersiveengineering:heavy_engineering",
      E: "immersiveengineering:fluid_pump",
      F: "immersiveengineering:light_engineering"
    }
  )

  shaped(
    "mekanism:chemical_injection_chamber",
    [
      "FEF",
      "ABA",
      "DCD"
    ],
    {
      A: "immersiveengineering:conveyor_basic",
      B: "mekanism:purification_chamber",
      C: "immersiveengineering:fluid_placer",
      D: "immersiveengineering:resonanz_engineering",
      E: "immersiveengineering:fluid_pump",
      F: "immersiveengineering:heavy_engineering"
    }
  )

  shaped(
    "mekanism:precision_sawmill",
    [
      "CFC",
      "ABA",
      "GED"
    ],
    {
      A: "immersiveengineering:conveyor_basic",
      B: "mekanism:steel_casing",
      C: "immersiveengineering:light_engineering",
      D: "immersiveengineering:rs_engineering",
      E: "immersiveengineering:sawblade",
      F: "#c:sheetmetals/steel",
      G: "immersiveengineering:heavy_engineering"
    }
  )

  inscriber(
    "mekanism:basic_control_circuit",
    "#c:ingots/osmium",
    "minecraft:redstone",
    "immersiveengineering:circuit_board",
    "kubejs:ae2/inscriber/basic_control_circuit"
  )

  inscriber(
    "mekanism:advanced_control_circuit",
    "ae2:calculation_processor",
    "minecraft:redstone",
    "mekanism:basic_control_circuit",
    "kubejs:ae2/inscriber/advanced_control_circuit"
  )

  inscriber(
    "mekanism:elite_control_circuit",
    "ae2:logic_processor",
    "minecraft:redstone",
    "mekanism:advanced_control_circuit",
    "kubejs:ae2/inscriber/elite_control_circuit"
  )

  inscriber(
    "mekanism:ultimate_control_circuit",
    "ae2:engineering_processor",
    "minecraft:redstone",
    "mekanism:elite_control_circuit",
    "kubejs:ae2/inscriber/ultimate_control_circuit"
  )

  var factories = [
    { base: "mekanism:energized_smelter", factory: "mekanism:TIER_smelting_factory" },
    { base: "mekanism:enrichment_chamber", factory: "mekanism:TIER_enriching_factory" },
    { base: "mekanism:crusher", factory: "mekanism:TIER_crushing_factory" },
    { base: "mekanism:osmium_compressor", factory: "mekanism:TIER_compressing_factory" },
    { base: "mekanism:combiner", factory: "mekanism:TIER_combining_factory" },
    { base: "mekanism:purification_chamber", factory: "mekanism:TIER_purifying_factory" },
    { base: "mekanism:chemical_injection_chamber", factory: "mekanism:TIER_injecting_factory" },
    { base: "mekanism:metallurgic_infuser", factory: "mekanism:TIER_infusing_factory" },
    { base: "mekanism:precision_sawmill", factory: "mekanism:TIER_sawing_factory" }
  ]

  factories.forEach(entry => {
    shaped(
      entry.factory.replace("TIER", "basic"),
      [
        "ADA",
        "EEE",
        "CBC"
      ],
      {
        A: "immersiveengineering:component_electronic",
        B: "mekanism:steel_casing",
        C: "immersiveengineering:plate_duroplast",
        D: "mekanism:basic_control_circuit",
        E: entry.base
      }
    )
  })

  factories.forEach(entry => {
    shaped(
      entry.factory.replace("TIER", "advanced"),
      [
        "ADA",
        "FEF",
        "CBC"
      ],
      {
        A: "immersiveengineering:component_electronic",
        B: "mekanism:steel_casing",
        C: "immersiveengineering:plate_duroplast",
        D: "mekanism:advanced_control_circuit",
        E: entry.factory.replace("TIER", "basic"),
        F: entry.base
      }
    )
  })

  factories.forEach(entry => {
    shaped(
      entry.factory.replace("TIER", "elite"),
      [
        "ADA",
        "FEF",
        "CBC"
      ],
      {
        A: "immersiveengineering:component_electronic_adv",
        B: "mekanism:steel_casing",
        C: "immersiveengineering:plate_duroplast",
        D: "mekanism:elite_control_circuit",
        E: entry.factory.replace("TIER", "advanced"),
        F: entry.base
      }
    )
  })

  factories.forEach(entry => {
    shaped(
      entry.factory.replace("TIER", "ultimate"),
      [
        "ADA",
        "FEF",
        "CBC"
      ],
      {
        A: "immersiveengineering:component_electronic_adv",
        B: "mekanism:steel_casing",
        C: "immersiveengineering:plate_duroplast",
        D: "mekanism:ultimate_control_circuit",
        E: entry.factory.replace("TIER", "elite"),
        F: entry.base
      }
    )
  })
})
