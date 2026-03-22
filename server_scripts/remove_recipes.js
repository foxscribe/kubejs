
var tools = ['mekanismtools:steel_axe', 'mekanismtools:steel_sword', 'mekanismtools:steel_shovel', 'mekanismtools:steel_hoe', 'railcraft:steel_axe', 'railcraft:steel_sword', 'railcraft:steel_hoe', 'railcraft:steel_shovel', 'mekanismtools:steel_pickaxe', 'railcraft:steel_pickaxe', 'mekanism:flamethrower', 'mekanism:atomic_disassembler', 'mekanism:meka_tool']

var armour = ['mekanismtools:steel_helmet', 'mekanismtools:steel_chestplate', 'mekanismtools:steel_leggings', 'mekanismtools:steel_boots', 'railcraft:steel_helmet', 'railcraft:steel_chestplate', 'railcraft:steel_leggings', 'railcraft:steel_boots', 'mekanism:hazmat_boots', 'mekanismtools:bronze_helmet', 'mekanismtools:bronze_chestplate', 'mekanismtools:bronze_leggings', 'mekanismtools:bronze_boots', 'minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots', 'mekanism:hazmat_mask', 'mekanismtools:refined_obsidian_helmet', 'mekanismtools:refined_obsidian_chestplate', 'mekanismtools:refined_obsidian_leggings', 'mekanismtools:refined_obsidian_boots', 'mekanismtools:refined_glowstone_helmet', 'mekanismtools:refined_glowstone_chestplate', 'mekanismtools:refined_glowstone_leggings', 'mekanismtools:refined_glowstone_boots', 'mekanism:hazmat_gown', 'mekanismtools:lapis_lazuli_helmet', 'mekanismtools:lapis_lazuli_chestplate', 'mekanismtools:lapis_lazuli_leggings', 'mekanismtools:lapis_lazuli_boots', 'mekanismtools:osmium_helmet', 'mekanismtools:osmium_chestplate', 'mekanismtools:osmium_leggings', 'mekanismtools:osmium_boots', 'mekanism:hazmat_pants', 'minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots', 'mekanism:hdpe_elytra', 'mekanism:mekasuit_helmet', 'mekanism:mekasuit_bodyarmor', 'mekanism:mekasuit_pants', 'mekanism:mekasuit_boots', 'mekanism:scuba_mask', 'mekanism:scuba_tank', 'mekanism:free_runners', 'mekanism:jetpack', 'mekanism:free_runners_armored', 'mekanism:jetpack_armored']

var machines = ['mekanismgenerators:heat_generator', 'mekanismgenerators:solar_generator', 'mekanismgenerators:advanced_solar_generator', 'mekanismgenerators:wind_generator', 'mekanismgenerators:bio_generator', 'mekanismgenerators:gas_burning_generator', 'mekanism:digital_miner']

var by_recipe_id = ['mekanism:control_circuit/basic', 'mekanism:control_circuit/advanced', 'mekanism:control_circuit/elite', 'mekanism:control_circuit/ultimate', 'mekanism:control_circuit/infused_advanced', 'mekanism:control_circuit/infused_elite', 'mekanism:control_circuit/infused_ultimate']

ServerEvents.recipes(event => {
  tools.forEach(tool => {
    event.remove({ output: tool })
  })

  armour.forEach(piece => {
    event.remove({ output: piece })
  })

  machines.forEach(machine => {
    event.remove({ output: machine })
  })

  by_recipe_id.forEach(machine => {
    event.remove({ id: machine })
  })
})




