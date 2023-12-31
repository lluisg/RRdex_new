function appendAbilitiesToTable(abilitiesName){

    if(!abilities[abilitiesName]["description"] || !/[1-9aA-zZ]/.test(abilities[abilitiesName]["ingameName"])){
        return
    }
    
    let tBody = abilitiesTableTbody

    let row = document.createElement("tr")

    row.setAttribute("id", `${abilitiesName}`)

    let ability = document.createElement("td")
    const abilityName = document.createElement("span")
    ability.className = "ability"
    ability.innerText = abilities[abilitiesName]["ingameName"]
    abilityName.className = "key hide"
    abilityName.innerText = abilities[abilitiesName]["name"]
    ability.append(abilityName)

    if(isHardcoreRestricted(abilities[abilitiesName]["name"])){
                ability.style.color = "#FF8F8F"
    }

    row.append(ability)

    let description = document.createElement("td")
    description.className = "description"
    description.innerText = abilities[abilitiesName]["description"]
    row.append(description)

    row.addEventListener("click", async() => {
        if(!speciesButton.classList.contains("activeButton")){
            tracker = speciesTracker
            await tableButtonClick("species")
        }
        window.scrollTo({ top: 0})
        deleteFiltersFromTable()
        createFilter(abilities[abilitiesName]["ingameName"], "Ability")
    })

    tBody.append(row)
}
