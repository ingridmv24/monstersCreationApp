import {Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly nameInput : Locator;
    readonly hpInput : Locator;
    readonly attackInput : Locator;
    readonly defenseInput : Locator;
    readonly speedInput : Locator;
    readonly createMonsterButton : Locator;

    constructor(page: Page){
        this.page = page;
        this.nameInput = page.getByTestId("monster-name").getByRole("textbox");
        this.hpInput = page.getByTestId("hp-value").getByRole("textbox");
        this.attackInput = page.getByTestId("attack-value").getByRole("textbox");
        this.defenseInput = page.getByTestId("defense-value").getByRole("textbox");
        this.speedInput = page.getByTestId("speed-value").getByRole("textbox");
        this.createMonsterButton = page.getByTestId("btn-create-monster");
    }

    async navigate(){
        await this.page.goto("http://localhost:3000/");

        await this.page.evaluate(() => {
            document.body.style.zoom = '0.6'
        });
    }

    async selectMonsterById(id){
        await this.page.getByTestId(`monster-${id}`).click();
    }

    async setName(name){
        await this.nameInput.fill(name);
    }

    async setHp(hp){
        await this.hpInput.fill(hp);
    }

    async setAttack(attack){
        await this.attackInput.fill(attack);
    }

    async setDefense(defese){
        await this.defenseInput.fill(defese);
    }

    async setSpeed(speed){
        await this.speedInput.fill(speed);
    }

    async clickOnCreateMonster(){
        await this.createMonsterButton.click();
    }
}