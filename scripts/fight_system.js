const playerName = document.querySelector('.name_hero'),
    playerHealth = document.querySelector('.health_hero'),
    playerDamage = document.querySelector('.damage_hero'),
    playerArmor = document.querySelector('.armor_hero');

const enemyName = document.querySelector('.name_enemy'),
    enemyHealth = document.querySelector('.health_enemy'),
    enemyDamage = document.querySelector('.damage_enemy'),
    enemyArmor = document.querySelector('.armor_enemy');

const button = document.querySelector('.attack');

//hero spell
const heroSpellOne = document.querySelector('.hero_spell_one');
const heroSpellTwo = document.querySelector('.hero_spell_two');
//enemy spell
const enemySpellOne = document.querySelector('.enemy_spell_one')
const enemySpellTwo = document.querySelector('.enemy_spell_two')
//img character
const heroImg = document.querySelector('img.character_icon_hero');
const enemyImg = document.querySelector('img.character_icon_enemy');



//player
const player = {
    name: 'Rodrick',
    health: 100,
    damage: 20,
    armor: 5,
    //специальные способности:
    vampire: "** vamprizim **",
    damageUp: "** Damage UP **",
    // icon low hp
    spriteLowHp: "./graphics/hero_lowHp.png"

};
//enemy
const enemy = {
    name: 'Swordsman',
    health: 100,
    damage: 25,
    armor: 10,
    //специальные способности
    armorUp: "** Armor Up **",
    healthUp: "** Health Up **",
    damageUp: "** Damage UP**",
    //icon low hp
    spriteLowHp: "./graphics/enemy_lowHP.png"
};

//Имя в диве
//player:
playerName.innerHTML = player.name;
//enemy:
enemyName.innerHTML = enemy.name;



//Кнопка контроля:
button.onclick = () => {
    let heroDamageGet = player.health - (enemy.damage / player.armor);
    let enemyDamageGet = enemy.health - (player.damage / enemy.armor);

    playerHealth.innerHTML = "HEALTH: " + player.health;
    playerDamage.innerHTML = "DAMAGE:" + player.damage;
    playerArmor.innerHTML = "ARMOR: " + player.armor;

    enemyHealth.innerHTML = "HEALTH: " + enemy.health;
    enemyDamage.innerHTML = "DAMAGE: " + enemy.damage;
    enemyArmor.innerHTML = "ARMOR: " + enemy.armor;

    player.health = heroDamageGet;
    enemy.health = enemyDamageGet;

    //lowHp system
    if(player.health < 20){
        playerHealth.classList.add('lowHP')
        heroImg.setAttribute('src', player.spriteLowHp)
    }
    else if(enemy.health < 20){
        enemyHealth.classList.add('lowHP');
        enemyImg.setAttribute('src', enemy.spriteLowHp)
    }
    //add special cpell to hero
    if (player.health < 40){
        heroSpellOne.innerHTML = player.vampire;
        heroSpellTwo.innerHTML = player.damageUp

        let damageUp = player.damage = 40;
        player.damage = damageUp;
        let vampire = player.health + 5;
        player.health = vampire;
    }
    //add special spel to enemy
    if(enemy.health < 30){
        enemySpellOne.innerHTML = enemy.armorUp;
        enemySpellTwo.innerHTML = enemy.healthUp;

        let armorUp = enemy.armor = 20;
        enemy.armor = armorUp;
        let healthUp = enemy.health + 1;
        enemy.health = healthUp;
    }
    if(enemy.health < 15){
        enemySpellTwo.innerHTML = enemy.damageUp;
        let damageUp = enemy.damage = 35;
        enemy.damage = damageUp;
    }
    //end fight system
    if(player.health <= 0){
        button.onclick = null;
        alert("Вы проиграли...");
    }
    else if(enemy.health <= 0){
        button.onclick = null;
        alert("Победа!");
    }
}

