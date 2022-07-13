// The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.

// This function "filters" out anything from the garden aside from "gravel" and "rock" items.

function rakeGarden(garden) {
    return garden
            .split(" ")
            .map(e => e != "rock" ? "gravel" : e)
            .join(" ")
}
