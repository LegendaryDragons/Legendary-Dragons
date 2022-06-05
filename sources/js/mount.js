const mount2_0 = [
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-0/ahriman.png",
        "nom": "Ahriman",
        "obtention": "6 jeton de hauts faits"
    },
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-0/armure_magitek.png",
        "nom": "Armure Magitek",
        "obtention": "Finir l'épopée"
    },
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-0/chocobo_destrier.png",
        "nom": "Chocobo destrier",
        "obtention": "Avoir rejoint une Grande compagnie (Débloquable a partir des quêtes de Lv20 d'épopée) et acheter une licence de chocobo  contre 200 sceaux de compagnie."
    },
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-0/coeurl.png",
        "nom": "Cœurl",
        "obtention": "Fournis à l'achat de l'édition collector de A Realm Reborn"
    },
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-0/licorne.png",
        "nom": "Licorne",
        "obtention": "Récompense de la quête d'Elémentaliste."
    }
]
const mount2_1 = [
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-1/alicorne_de_jais.png",
        "nom": "Alicorne de jais",
        "obtention": "Récompense rare du coffre du défi \"Hurlœil (extrême)\", \"Le Nombril (extrême)\" et \"Le Cratère des tisons (extrême)\"."
    },
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-1/armure_magitek_type_c.png",
        "nom": "Armure magitek type C",
        "obtention": "Récompense du haut fait \"La grande coqueluche\"; recevoir les honneurs de ses équipiers 500 fois."
    },
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-1/behemoth.png",
        "nom": "Béhémoth",
        "obtention": " 6 jeton de hauts faits"
    },
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-1/draconide_de_cavalerie.png",
        "nom": "Draconide de cavalerie",
        "obtention": "Achetable au vendeur Amalj'aa de la Ligue des cendres pour 120 000 gils une fois le rang 4 (Fiable) atteint."
    },
    {
        "image": "https://buscarron.com/assets/images/montures/grand/a-realm-reborn/patch-2-1/goobbue_couronne.png",
        "nom": "Goobbue couronné",
        "obtention": "Achetable au vendeur Sylphe du Refuge pour 120 000 gils une fois le rang 4 (Fiable) atteint."
    }
]

function mountTemplate(mount){
    return `
        <div class="animal">
            <img class="pet-photo" src="${mount.image}">
            <h3 class="pet-name">${mount.nom}</h3>
            <p>${mount.obtention}</p>
        </div>
    `
}

document.getElementById("ARR2.0").innerHTML = `${mount2_0.map(mountTemplate).join("")}`
document.getElementById("ARR2.1").innerHTML = `${mount2_1.map(mountTemplate).join("")}`