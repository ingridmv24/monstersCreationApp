import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { MonsterListPage } from "../pages/MonsterListPage";

test(`TC1 - Create a monster and verify the section contains the monster name`, async({page}) =>{

    const homePage = new HomePage(page);
    const monsterListPage = new MonsterListPage(page);

    await homePage.navigate();

    await homePage.selectMonsterById(1);
    await homePage.setName("Unicorn");
    await homePage.setHp("10");
    await homePage.setAttack("20");
    await homePage.setDefense("30");
    await homePage.setSpeed("40");

    await homePage.clickOnCreateMonster();

    let listcardNames = await monsterListPage.getMonsterList();
    expect(listcardNames).toEqual(["Unicorn"]); 
});

test(`TC2 - Add a monster, delete it and verify there are not monsters`, async({page}) => {
    const homePage = new HomePage(page);
    const monsterListPage = new MonsterListPage(page);
    await homePage.navigate();

    await homePage.selectMonsterById(1);
    await homePage.setName("Unicorn");
    await homePage.setHp("10");
    await homePage.setAttack("20");
    await homePage.setDefense("30");
    await homePage.setSpeed("40");

    await homePage.clickOnCreateMonster();

    await monsterListPage.deleteMonster("Unicorn");

    let list = await monsterListPage.getMonsterList();

    expect(list).toEqual([]);
});

test(`TC3 - Add two monsters, delete one and verify the section has one monster`, async({page}) => {
    const homePage = new HomePage(page);
    const monsterListPage = new MonsterListPage(page);
    await homePage.navigate();

    await homePage.selectMonsterById(1);
    await homePage.setName("Unicorn");
    await homePage.setHp("10");
    await homePage.setAttack("20");
    await homePage.setDefense("30");
    await homePage.setSpeed("40");

    await homePage.clickOnCreateMonster();

    await homePage.selectMonsterById(2);
    await homePage.setName("Shark");
    await homePage.setHp("15");
    await homePage.setAttack("25");
    await homePage.setDefense("35");
    await homePage.setSpeed("45");
    await homePage.clickOnCreateMonster();

    let list1 = await monsterListPage.getMonsterList();
    expect(list1).toEqual(["Unicorn", "Shark"]);

    await monsterListPage.deleteMonster("Shark");

    let list2 = await monsterListPage.getMonsterList();
    expect(list2).toEqual(["Unicorn"]);
});